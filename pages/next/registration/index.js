import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import _ from 'lodash-checkit';
import update from 'immutability-helper';
import fetch from 'node-fetch';
import configs from 'configs';
import cookies from 'browser-cookies';



import {translate} from 'helpers/translate.js';
// import { transparentize } from 'polished'

import { Link } from '/routes';

import PageContainerComponent from 'components/PageContainerComponent';
import RegistrationFormComponent from 'components/RegistrationFormComponent';


import Head from 'next/head';

import { Query } from "react-apollo";
import gql from 'graphql-tag'


import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { graphqlURL } from 'configs';

import Countdown from 'react-countdown-now';


// const pagePadding = {
//   xSmall: style.dimension.normal.pagePadding.xSmall,
//   small: style.dimension.normal.pagePadding.small,
//   medium: style.dimension.normal.pagePadding.medium,
//   large: style.dimension.normal.pagePadding.large,
//   xLarge: style.dimension.normal.pagePadding.xLarge,
//   xxLarge: style.dimension.normal.pagePadding.xxLarge
// }






const IS_TOKEN_VALID = gql`
  query IsTokenValid($accessToken: TokenInput!) {
    isTokenValid(accessToken: $accessToken)
  }
`;


const GET_APPLICATIONS = gql`
  query GetApplications($accessToken: TokenInput!) {
    getApplications(accessToken: $accessToken) {
      teamName
      ref
      studentRecords {
        firstName
        lastName
        phoneNumber
        email
        educationRecords {
          institutionName
          state
          city
          countryCode
          degree
          programme
          yearOfGraduation
          studentNumber
          studentCardFrontFileId
          studentCardBackFileId
          transcriptFileId
          isVerified
        }
      }
      advisorRecords {
        firstName
        lastName
        phoneNumber
        email
        associationRecords {
          organisationName
          title
          sectorCode
          state
          city
          countryCode
          yearCommencement
          yearCessation
        }
      }
      projectRecords {
        ref
        name
        projectCategoryKey
        description
        whitepaperFileIds {
          fileId,
          receivedAt
        }
        presentationFileIds {
          fileId,
          receivedAt
        }
      }
    }
  }
`;

const graphqlClient = new ApolloClient({
  link: createHttpLink({ uri: graphqlURL, fetch }),
  cache: new InMemoryCache()
});


const ThisPageContainerComponent = styled(PageContainerComponent)`

.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

// active, #collapsible:hover {
//   background-color: #555;
// }

// #content {
//   padding: 0 18px;
//   display: none;
//   overflow: hidden;
//   background-color: #f1f1f1;
// }

  #extraRegistration {
    h1, h3, a, span {
      width: 100%;
      float: none;
      height: unset;
      line-height: 3rem;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }

    a {
      display: inline;
    }

    #trainingBox {
      background: #eee;
      padding: 3rem 3rem 2.95rem;
      /* margin-left: 2rem;
      margin-right: 2rem; */
      margin-bottom: 5rem;
    }
    
    

  }


  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 20px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #bfbfbf;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }


  button {
    margin-top: 6rem;
    border: 0.2rem solid #F6C215;
    background: #FFF;

    width: 100%;

    &:hover {
      background: #F6C215;
      color: #FFF;
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  
`;



const renderer = ({ days, hours, minutes, seconds }) => {
  // Render a countdown
  return <span>{days} Days, {hours} Hrs, {minutes} Mins, {seconds} Secs left to submit</span>;
};

export default class extends React.PureComponent {
  static async getInitialProps({ query }) {
    return { query };
  }

  constructor(props) {
    super(props);
    this.state = {
      tokenCookie: undefined,
      hasValidToken: false,
    };
  }

  onShowConfirmation = ({teamName, ref}) => {
    this.setState({
      showConfirmation: true,
      confirmation: {teamName, ref}
    })
  }

  

  logout = () => {
    this.clearCookie();
    // this.resetForm();
    this.setState({
      // currentSelectedRecordIndex: undefined,
      // existingApplications: []
    })
  }

  clearCookie = () => {
    // console.log('clearCookie...');
    cookies.erase('seed');
    cookies.erase('loginAttemptEmail');
    cookies.erase('token');
    cookies.erase('email');

    this.setState({
      tokenCookie: undefined,
      hasValidToken: false
    })
  }

  getTokenFromCookie = () => {

    return (cookies.get('email') !== null && cookies.get('token') !== null) ? {
      email: cookies.get('email'),
      token: cookies.get('token')
    }: undefined;
  }

  componentDidMount = () => {
    const tokenCookie = this.getTokenFromCookie();

    console.log('tokenCookie', tokenCookie);

    this.setState({
      tokenCookie,
      hasValidToken: false
    })


    if (tokenCookie) {
      this.validateToken(tokenCookie);
    }

    
  }

  validateToken  = async (accessToken) => {
    
    try {
      const {isTokenValid} = (await graphqlClient.query({
        query: IS_TOKEN_VALID,
        variables: {
          accessToken
        }
        // context: {
        //   headers: {
        //     token: this.state.tokenCookie.token,
        //     email: this.state.tokenCookie.email
        //   }
        // }
      })).data;

      // console.log('isTokenValid', isTokenValid);

      this.setState({
        hasValidToken: isTokenValid
      })

      return;
    
      
      

    } catch (err) {
      console.error('error', err);

    }

    this.clearCookie();


  }

  translate = (t) => translate(t, 'registration', this.props.query.locale, {
    // "countries": true,
    // "sectors": true,
    // "project-categories": true
  });


  

  render() {

    // console.log(">>> query", this.props.query);
    // console.log("===> FILEPOND_API_ENDPOINT ", process.env.FILEPOND_API_ENDPOINT);
    // console.log("===> FILEPOND_API_URL", process.env.FILEPOND_API_URL);
    // console.log("===>", process.env.ENV);

    


    const locale = this.props.query.locale;
    

    const loader = <section className="target-section">
      <div className="row">
        <div className="col-full">
          <div className="full-width" style={{textAlign: 'center'}}>
            <><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></>
          </div>
        </div>
      </div>
    </section>


    // still validating token
    const isValidatingToken = this.state.tokenCookie !== undefined && !this.state.hasValidToken;
    const isLoggedIn = !isValidatingToken && this.state.hasValidToken;

    

    return (
      <ThisPageContainerComponent>
        <Head>
          <title>{this.translate('siteTitle')} {this.translate('titleSeparator')} {this.translate('pageTitle')}</title>
          <meta name="description" content={this.translate('seoDescription')} />
          <meta name="keywords" content={this.translate('keywords')} />
          <meta property="og:image" content={`${configs.url}${this.translate('ogImage')}`} />
          <meta property="og:type" content="website" />
        </Head>

        

        <section className="s-section target-section first">
          <div className="row">
            <div className="col-full">
              <h1>{this.translate('subhead')}</h1>
            </div>
          </div>
        </section>
        <section className="target-section">
          <div id="extraRegistration" className="row">
            <div className="col-full">
              <div id="trainingBox">              
                <h3>{this.translate('rollingDateToSubmit')}:</h3>
                <Countdown date={new Date(2019, 6, 4, 23, 59, 59, 59)}
                  renderer={renderer}
                />
                <font size="2">{this.translate('teamNotice')}</font> 
                <div>   
                  {this.translate('pmoReminder')}
                  <a href={`mailto:${this.translate('pmoEmailAddress')}`}>{this.translate('pmoEmailAddress')}</a>
                </div>
                <div>
                  <a href="https://medium.com/international-blockchain-olympiad/blockchain-backed-bubble-tea-58934348c4f3" target="_blank">
                    {this.translate('seeSampleHere')}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {
          isValidatingToken &&
          loader
        }

        {
          !isValidatingToken &&
          <>
            <section className="target-section">
              <div className="row">
                <div className="col-full">
                  {
                    !isLoggedIn &&
                    <Link route="registrationLogin" params={{ locale }}>
                        <a className="btn btn--stroke btn--primary full-width btn--large" style={{"margin": "1rem auto 6rem"}}>
                            {this.translate('teamLogin')}
                        </a>
                    </Link>
                  }
                  {
                    isLoggedIn &&
                    
                    <a className="btn btn--stroke btn--primary full-width btn--large" style={{"margin": "1rem auto 6rem"}} onClick={()=>{
                      this.logout();
                    }}>
                        {this.translate('teamLogout')}
                    </a>
                  }

                  

                </div>
              </div>
                
            </section>


            { this.state.showConfirmation &&
              <section className="target-section last">

                <div className="row section-header">
                  <div className="col-full">
                    <h3 className="subhead">{isLoggedIn ? this.translate('confirmation.updateTitle') : this.translate('confirmation.title')}</h3>
                  </div>
                  
                </div>
                
                
                <div className="row">

                  <div className="block-tab-full">
                    <div className="col-block" style={{ width: "100%" }}>
                      <div className="item-process__text">
                        <p dangerouslySetInnerHTML={{ __html: isLoggedIn ? this.translate('confirmation.updateMessage') : this.translate('confirmation.message') }} />
                        <p>
                          <b>{this.translate('confirmation.refTitle')}</b><br />#{this.state.confirmation.ref}
                        </p>
                        <p>
                          <b>{this.translate('confirmation.teamNameTitle')}</b><br />{this.state.confirmation.teamName}
                        </p>
                      </div>
                      <div className="full-width" style={{marginBottom: "4rem"}}>
                        <button onClick={()=>{
                          // if (isLoggedIn) {
                          //   location.reload();
                          // } else {
                          //   // this.resetForm();
                          // }
                          location.reload();
                        }}>{isLoggedIn ? this.translate('updateAnother') : this.translate('registerAnother')}</button>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

            }




            {!this.state.showConfirmation &&
              <section className="target-section last">
                  
                <div className="row section-header">
                  <div className="col-full">

                    { isLoggedIn ?
                        <Query query={GET_APPLICATIONS} variables={{ accessToken: {email: this.state.tokenCookie.email, token: this.state.tokenCookie.token }}}>
                          {({ loading, error, data, refetch, networkStatus }) => {
                            console.log('querying graphql...');
                            {/*console.log('loading:', loading);
                            console.log('networkStatus:', networkStatus); */}
                            {/* console.log('error', error);
                            console.log('data', data); */}
                            {/* if ((networkStatus === 4) || loading) return <div className="full-width" style={{textAlign: 'center'}}>
                                <><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></>
                              </div>; */}
                            
                            if (error) return `Error! ${error.message}`;

                            if (!_.isEmpty(data)) {
                              
                              const existingApplications = data.getApplications;

                              {/* console.log('existingApplications', existingApplications); */}

                              if (this.state.currentSelectedRecordIndex === undefined) {
                                //console.log('data', data);
                                //this.setState({
                                //  existingApplications,
                                //  currentSelectedRecordIndex: 0,
                                //  record: existingApplications[0]
                                //})
                              }
                              

                              return <RegistrationFormComponent tokenCookie={this.state.tokenCookie} onShowConfirmation={this.onShowConfirmation} isLoggedIn={isLoggedIn} locale={locale} existingApplications={existingApplications}/>
                            
                            }


                            return loader
                            
                          }}
                        </Query> :
                        <RegistrationFormComponent onShowConfirmation={this.onShowConfirmation} locale={locale}/>
                    }

                    
                    
                  </div>
                </div>
              </section>
            }


          </>
        }


        
              
              



        





        
      </ThisPageContainerComponent>
    )
  }
}
