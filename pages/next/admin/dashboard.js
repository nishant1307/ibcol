import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import _ from 'lodash-checkit';
// import update from 'immutability-helper';
import Link from "next/link";
import jsoncsv from 'json-csv';
import CryptoJS from "crypto-js";
import moment from 'moment';
import configs from 'configs';

import { media, style } from 'helpers/styledComponents.js';
import randomWords from 'random-words';
import cookies from 'browser-cookies';
import { Router } from '/routes';

import {translate} from 'helpers/translate.js';
// import { transparentize } from 'polished'

// import { Link } from '/routes';

import PageContainerComponent from 'components/PageContainerComponent';

import Head from 'next/head';

import { Mutation, Query } from "react-apollo";
import gql from 'graphql-tag'


import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

import { graphqlURL } from 'configs';

// const REQUEST_ADMIN_ACCESS_TOKEN = gql`
//   mutation RequestAdminAccessToken($email: String!, $seed: String!, $locale: String!) {

//     requestAdminAccessToken(email: $email, seed: $seed, locale: $locale)

//   }
// `;

const SALT = process.env.SALT ? process.env.SALT : ")6Dc1UP*S9Night-Age-Doll-Famous-8as81*@()#@";

const getFilenameFromFileId = (fileId) => {
  // console.log('getFilenameFromFileId', fileId, SALT);
  try {
    const filename = _.last(CryptoJS.AES.decrypt(fileId, SALT).toString(CryptoJS.enc.Utf8).split('/'));
    // console.log('fileId', fileId);
    // console.log('SALT', SALT);
    // console.log('filename', filename);
    return filename;
  } catch (e) {
    return "";
  }
}


const IS_TOKEN_VALID = gql`
  query IsTokenValid($accessToken: TokenInput!) {
    isTokenValid(accessToken: $accessToken, requireAdminAccess: true)
  }
`;


const GET_APPLICATIONS_AS_ADMIN_FOR_CONTACTS = gql`
  query getApplicationsAsAdmin {
    getApplicationsAsAdmin {
      teamName
      ref
      studentRecords {
        firstName
        lastName
        phoneNumber
        email
      }
    }
  }
`;

const GET_APPLICATIONS_AS_ADMIN = gql`
  query getApplicationsAsAdmin {
    getApplicationsAsAdmin {
      teamName
      ref
      studentRecords {
        firstName
        lastName
        phoneNumber
        email
      }
      projectRecords {
        ref
        name
        description
        whitepaperFileIds {
          receivedAt
          fileId
        }
        presentationFileIds {
          receivedAt
          fileId
        }
      }
      meta {
        updatedAt
      }
    }
  }
`;

const graphqlClient = new ApolloClient({
  link: createHttpLink({ uri: graphqlURL }),
  cache: new InMemoryCache()
});


const ThisPageContainerComponent = styled(PageContainerComponent)`
  .tableContainer {
    width: 100%;
    overflow: scroll;
    table {
      margin-top: 2rem;
      font-size: 1rem;
      min-width: 800px;

      tr {
        &:hover {
          background-color: #ECECEC;

          td {
            &.viewApplicationLink {
              img {
                display: block;
              }
            }
          }
        }
        th {
          font-size: 1.2rem;
          text-align: left;
        }

        th, td {
          padding: 0.5rem 0.2rem;
          vertical-align: top;

          &.viewApplicationLink {
            width: 20px;
            img {
              width: 15px;
              display: none;
            }
          }

          a {
            color: #000;
            /* text-decoration: underline; */
          }
        }

        td {
          .whitepaperContainer {
            padding-left: 0.8rem;

          }
          ul {
            margin-bottom: 0;
            li {
              padding-left: 0rem;
            }
          }
        }
      }
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
    margin-top: 0rem;
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

  .filepond--root { font-size: 1.5rem !important; }



  ul.adminTools {
    display: flex;
    margin: 0;

    font-size: 1.2rem;
    text-transform: uppercase;

    justify-content: flex-end;
    
    > li {
      display: block;
      margin-right: 2.5rem;
      padding: 0;

      &:last-child {
        margin-right: 0;
      }
      
    }
  }
`;


// const FormSection = styled.section`
//   width: 100%;

//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   padding-top: 3rem;
  

//   > .FormSection {
//     padding-left: 2.5rem;
//     padding-bottom: 0rem;
//     padding-top: 0rem;
    


//     border-left: 1rem solid #dedede52;
//   }

//   h3 {
//     display: flex;
//     width: 100%;
//     justify-content: space-between;
//     letter-spacing: 0;

//     .remove {
//       font-size: 1.45rem;
//       cursor: pointer;
//       text-transform: none;
//       font-weight: bold;
//       font-family: "Nunito Sans", sans-serif;

//       &:hover {
//         text-decoration: underline;
//       }
//     }
//   }
  
// `;

// const FormRow = styled.div`
//   display: flex;
//   width: 100%;
//   box-sizing: border-box;

//   ${media.smallDown`
//     display: block;
//   `}
// `;


// const FormTools = styled.div`
//   display: flex;
//   width: 100%;
//   box-sizing: border-box;
//   justify-content: flex-end;

//   div {
//     color: #0286ca;
//     cursor: pointer;
//     font-weight: bold;
//     font-size: 1.45rem;
    
//     &:hover {
//       text-decoration: underline;
//     }

//     &.full-width {
//       width: 100%;
//     }


    
//   }
// `;

// const FormField = styled.label`
//   flex: 1;
//   width: 100%;
//   box-sizing: border-box;
  
//   input, select, textarea {
//     width: 100%;
    
//   }

//   textarea {
//     min-height: 300px;
//   }


//   &:nth-child(even){
//     ${'' /* background: green; */}
    

//     ${media.mediumUp`
//       margin-left: 1rem;
//     `}
//   }


  
// `;


export default class extends React.PureComponent {
  static async getInitialProps({ query }) {
    // console.log('getInitialProps', query);
    return { query };
  }

  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
    
  }

  getTokenFromCookie = () => {

    return (cookies.get('email') !== null && cookies.get('token') !== null) ? {
      email: cookies.get('email'),
      token: cookies.get('token')
    }: undefined;
  }

  getDefaultState = () => {
    return {
      tokenCookie: undefined,
      hasValidToken: false,
      isLoading: false,
      
      cookie: {
        loginAttemptEmail: "",
        seed: ""
      }
    };
  }

  
  

  
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.tokenCookie !== this.state.tokenCookie && this.state.tokenCookie === undefined) {
      Router.pushRoute('adminLogin', {
        locale: this.props.query.locale
      });
    }
  }


  componentDidMount = () => {
    const tokenCookie = this.getTokenFromCookie();

    if (tokenCookie) {
      this.setState({
        tokenCookie
      })
    } else {
      Router.pushRoute('adminLogin', {
        locale: this.props.query.locale
      });
    }
    
  }



  translate = (t) => translate(t, 'dashboard', this.props.query.locale, {
    // "countries": true,
    "sectors": true,
    "project-categories": true
  });

  getLabel = (field, required = false) => {
    return (
      <span>
        {this.translate(field)} {
          (_.get(this.requiredFields, field) === true || required) &&
          <>*</>
        }
      </span>
    );
  }




  
  clearCookie = () => {
    cookies.erase('seed');
    cookies.erase('loginAttemptEmail');
    cookies.erase('token');
    cookies.erase('email');

    this.setState({
      tokenCookie: undefined,
      // hasValidToken: false
    })
  }

  logout = () => {
    this.clearCookie();
    // Router.pushRoute('adminLogin', {
    //   locale: this.props.query.locale
    // });

  }

  doDownloadContactList = async () => {

    this.setState({
      isLoading: true
    })

    
    try {
      const results = await graphqlClient.query({
        query: GET_APPLICATIONS_AS_ADMIN_FOR_CONTACTS,
        context: {
          headers: {
            token: this.state.tokenCookie.token,
            email: this.state.tokenCookie.email
          }
        }
      });
    
      const applications = results.data.getApplicationsAsAdmin;

      // console.log('applications', applications);

      const studentRecords = [];

      applications.map((application)=>{
        application.studentRecords.map((studentRecord)=>{
          studentRecords.push({
            firstName: studentRecord.firstName,
            lastName: studentRecord.lastName,
            phoneNumber: studentRecord.phoneNumber,
            email: studentRecord.email,
            teamName: application.teamName,
            ref: application.ref
          })
        })
      })

      // console.log('studentRecords', studentRecords);

      jsoncsv.csvBuffered(studentRecords, {
        fields: [
          {name: "firstName", label: "First Name"},
          {name: "lastName", label: "Last Name"},
          {name: "phoneNumber", label: "Phone Number"},
          {name: "email", label: "Email"},
          {name: "teamName", label: "Team Name"},
          {name: "ref", label: "Reference"},
        ]
      }, (err, csv)=>{

        if (err)
          console.error('error', err);

        this.setState({
          isLoading: false
        })

        // console.log('csv', csv);
        // const uri = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
        // window.location.href = uri;

        const exportedFilenmae = 'StudentContacts.csv';

        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, exportedFilenmae);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportedFilenmae);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }

      })

      

    } catch (err) {
      console.error('error', err);
    }



    
  }

  
  


  onMutationError = (error) => {
    console.error(error);
    this.setState({
      isEditorMutating: false,
      mutationError: _.isEmpty(error) ? undefined : error.message.replace('GraphQL error: ', '')
    })
  }


  

  render() {

    // console.log(">>> query", this.props.query);
    // console.log("===>", process.env.FILEPOND_API);
    // console.log("===>", process.env.ENV);

    const locale = this.props.query.locale;
    moment.locale(locale);
    
    

    return (
      <ThisPageContainerComponent>
        <Head>
          <title>{this.translate('siteTitle')} {this.translate('titleSeparator')} {this.translate('pageTitle')}</title>
          <meta name="description" content={this.translate('seoDescription')} />
          <meta name="keywords" content={this.translate('keywords')} />
          <meta property="og:image" content={`${configs.url}${this.translate('ogImage')}`} />
          <meta property="og:type" content="website" />
        </Head>

        <section className="s-section target-section first last">
          <div className="row">
            <div className="col-full">
              <h1>{this.translate('subhead')}</h1>
            </div>
          </div>

          { this.state.tokenCookie !== undefined &&
            <div className="row section-header">
              <div className="col-full">
                <Query query={IS_TOKEN_VALID} variables={{ accessToken: {email: this.state.tokenCookie.email, token: this.state.tokenCookie.token} }}>
                  {({ loading, error, data, refetch, networkStatus }) => {
                    {/* console.log('querying graphql...');
                    console.log('loading:', loading);
                    console.log('networkStatus:', networkStatus); */}
                    {/* console.log('error', error);
                    console.log('data', data); */}
                    if ((networkStatus === 4) || loading) return <div className="full-width" style={{textAlign: 'center'}}>
                        <><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></>
                      </div>;
                    
                    if (error) return `Error! ${error.message}`;

                    if (!_.isEmpty(data)) {
                      {/* console.log('data', data.isTokenValid); */}

                      

                      if (!data.isTokenValid) {
                        this.clearCookie()
                        Router.replaceRoute('adminLogin', {
                          locale: this.props.query.locale
                        });
                        return null
                      } else {
                        return <>
                          {/* <div className="row section">
                            <div className="col-full">

                              <a className="btn btn--stroke btn--primary full-width btn--large" style={{"margin": "1rem auto 6rem"}} onClick={()=>{
                                this.logout();
                              }}>
                                  {this.translate('adminLogout')}
                              </a>


                              
                            </div>
                          </div> */}



                          <div className="row section">
                            <div className="col-full">

                              <ul className="adminTools">
                                <li><a onClick={()=>{this.doDownloadContactList();}}>{this.translate('downloadContactList')}</a></li>
                                <li><a onClick={()=>{this.logout();}}>{this.translate('adminLogout')}</a></li>
                              </ul>

                              

                              {
                                this.state.isLoading &&
                                <div className="full-width" style={{textAlign: 'center'}}>
                                  <><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></>
                                </div>
                              }


                              <Query query={GET_APPLICATIONS_AS_ADMIN}>
                                {({ loading, error, data, refetch, networkStatus }) => {
                                  {/* console.log('querying graphql...');
                                  console.log('loading:', loading);
                                  console.log('networkStatus:', networkStatus); */}
                                  {/* console.log('error', error);
                                  console.log('data', data); */}
                                  if ((networkStatus === 4) || loading) return <div className="full-width" style={{textAlign: 'center'}}>
                                      <><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></>
                                    </div>;
                                  
                                  if (error) return `Error! ${error.message}`;

                                  if (!_.isEmpty(data)) {
                                    console.log('data', data.getApplicationsAsAdmin);

                                    const applications = data.getApplicationsAsAdmin;


                                    return <div className="tableContainer">
                                      <table>
                                        <thead>
                                          <tr>
                                            <th></th>
                                            <th>Reference</th>
                                            <th>Team Name</th>
                                            <th>Students</th>
                                            <th>Projects</th>
                                            <th>Updated</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                        {
                                          applications.map((application, index)=>{
                                            return <tr key={index}>
                                              <td className="viewApplicationLink">
                                                <Link>
                                                  <a><img src="/static/images/application_icon.png"/></a>
                                                </Link>
                                              </td>
                                              <td><a>{application.ref}</a></td>
                                              <td>{application.teamName}</td>
                                              <td>
                                                {
                                                  application.studentRecords.map((studentRecord, index)=>{
                                                    return <div key={index}>
                                                      <a href={`mailto:${studentRecord.email}`}>{studentRecord.firstName} {studentRecord.lastName}</a>
                                                    </div>
                                                  })
                                                }
                                              </td>
                                              <td>
                                                {
                                                  application.projectRecords.slice().reverse().map((projectRecord, index)=>{
                                                    return <div key={index}>
                                                      {projectRecord.name}
                                                      {
                                                        projectRecord.whitepaperFileIds.length > 0 &&

                                                        
                                                        <div className="whitepaperContainer">
                                                          {this.translate('whitepaperFile')}
                                                          <ul className="files">
                                                            {projectRecord.whitepaperFileIds.map((dropfile, index)=>{
                                                              return <li key={index}><a target="_blank" href={`${process.env.FILEPOND_API_URL}${process.env.FILEPOND_API_ENDPOINT}${process.env.FILEPOND_API_URL}${process.env.FILEPOND_API_ENDPOINT}${dropfile.fileId}`}>{getFilenameFromFileId(dropfile.fileId)}</a> {dropfile.receivedAt && <span>- {moment(dropfile.receivedAt).fromNow()}</span>}</li>
                                                            })}
                                                          </ul>
                                                        </div>
                                                      }
                                                    </div>
                                                  })
                                                }
                                              </td>
                                              <td>
                                                {moment(application.meta.updatedAt).fromNow()}
                                              </td>
                                            </tr>
                                          })
                                        }

                                      </tbody></table>
                                    </div>
                                  
                                  }

                                  return null;
                                }}
                              </Query>
                              


                              
                            </div>
                          </div>
                        
                        </>
                      }
                    }

                    
                  }}
                </Query>
                
              </div>
            </div>
          }
        


          


        </section>

        


      </ThisPageContainerComponent>
    )
  }
}
