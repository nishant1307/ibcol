import App, { Container } from 'next/app';
import React from 'react';
import Error from 'next/error';
// import PropTypes from 'prop-types';
import classNames from 'classnames';

import { translate, localeSupported } from 'helpers/translate.js';

import ReactGA from 'react-ga';
import { StickyContainer, Sticky } from 'react-sticky';


import dynamic from 'next/dynamic';

import routes from '/routes';
// import Router from 'next/router';
// import { Router } from '/routes';

// import Router from 'next/router';
// import css from 'styled-jsx/css';

import MenuComponent from 'components/MenuComponent';
import IndexMenuComponent from 'components/IndexMenuComponent';
import LanguageSelectorComponent from 'components/LanguageSelectorComponent';
// import LocaleSwitcherComponent from 'components/LocaleSwitcherComponent';


import { createGlobalStyle } from 'styled-components';



// import theme from 'styled-theming';

// import { media, style } from 'helpers/styledComponents.js';
// import { transparentize } from 'polished';

import { ApolloProvider } from 'react-apollo';
// import { AccountsGraphQLClient } from '@accounts/graphql-client';
import withApollo from 'helpers/withApollo';

import translations from 'translations';


// CSS
import "styles/base.css";
import "styles/vendor.css";
import "styles/main.css";
import "styles/flag-icon.min.css";

// import "styles/bootstrap-iso.css";


const GlobalStyle = createGlobalStyle`

  html {
    /* override [class*="col-"] configs when site is deployed under ibcol-dev- scope <html> ended up with col in classname, e.g. gr__ibcol-dev-7ubigywmr_now_sh */
    padding: 0 !important;
    width: 100% !important;
  }
  body.noScroll { /* ...or body.dialogShowing */
    height: 100%;
    overflow: hidden;
    width: 100%;
    position: fixed;
  }

  footer {
    .languageMenuFooterTrigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      ${'' /* width: 200px; */}
      padding: 0.2rem 3rem 0.15rem;

      margin: 1rem auto 0;

      border: 1px solid #CCC;
      border-radius: 1rem;

      cursor: pointer;

      .languageMenuFooterTriggerIcon {
        display: inline-block;

        cursor: pointer;

        width: 2rem;
        height: 2rem;

        margin-right: 1.5rem;

        background-color: #EEE;
        background-size: cover;
        background-position: center center;

        border: solid 1px #CCC;

        border-radius: 10rem;
      }
    }
  }


`;



class MyApp extends App {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      isLoading: false,
      showLanguageSelector: false,
      isIndex: true
      // width: 0, height: 0
    }


    // client side locale check
    if (typeof (window) === "object") {
      // console.log('constructor props', props)
      if (props.pageProps.query !== undefined && props.pageProps.query.locale !== undefined) {
        // console.log(props);
        // console.log('requested locale:', pageProps.query.locale);
        //   // console.log('localeSupported?', localeSupported(pageProps.query.locale));
        //   console.log('constructor pageProps', props.pageProps)
        //   // console.log('router', router);
        // console.log(props.router.route);
        // if(props.router.route == "/next" || props.router.route == "/next/history"){
        //   this.state.isIndex = true;
        // }else{
        //   this.state.isIndex = false;
        // }

        if (!localeSupported(props.pageProps.query.locale)) {

          // const requestedRoute = routes.findAndGetUrls(props.router.route.replace('/',''), {locale: props.pageProps.query.locale}).route;

          // console.log("----->>>>>", requestedRoute);

          // if (requestedRoute !== undefined && requestedRoute.name !== undefined) {
          document.location = props.router.route;
          // }


        }
      }
    }


  }


  toggleLanguageSelector = (show) => {

    if (typeof (show) === 'object') {

      this.setState({
        showLanguageSelector: !this.state.showLanguageSelector
      });
    } else {
      this.setState({
        showLanguageSelector: show
      });
    }

  }

  translate = (t, locale = this.props.router.query.locale) => translate(t, '_global', locale);



  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      // router.asPath = "/?locale=en-tw";
      // router.query.locale = "en-tw";
      // console.debug('router', router);
      // console.debug('pageProps', pageProps);

      if (typeof window === 'undefined') {



        // correct invalid locale
        if (pageProps.query !== undefined && pageProps.query.locale !== undefined) {
          if (!localeSupported(pageProps.query.locale)) {
            // console.debug('incoming pageProps >>>', pageProps);
            // console.debug('router', router);
            // console.debug('ctx.req.url', ctx.req.url);

            ctx.res.writeHead((process.env.ENV === 'production') ? 301 : 302, { "Location": `/_${router.route === '/next/home' ? `/${router.query.locale}` : router.route.replace('/next', '')}` });
            ctx.res.end();


          }




        }

        // console.debug('> router', router);
        // console.debug('> pageProps', pageProps);

        // const requestedRoute = routes.findAndGetUrls(router.asPath);
        // console.log('req.url', ctx.req.url);
        // console.log('> requestedRoute', requestedRoute);

        if (router.query['catch-all'] !== undefined)
          ctx.res.statusCode = 404;





        pageProps.statusCode = ctx.res.statusCode;

      }



    }

    // client-side only, run on page changes, do not run on server (SSR)
    if (typeof (window) === "object") {
      ReactGA.pageview(ctx.asPath);
    }






    return { pageProps }
  }

  componentWillMount() {

  }

  componentDidMount() {
    // client-side only, run once on mount
    ReactGA.initialize('UA-113535301-3');
    ReactGA.pageview(window.location.pathname + window.location.search);


    // console.log('router', this.props.router);

    // if ()
    // Router.replaceRoute(this.props.router.route, {
    //   locale: 'en-au'
    // });


  }

  render() {
    const { Component, pageProps, router, apollo } = this.props;
    const query = router.query;
    const locale = query !== undefined ? query.locale !== undefined ? query.locale : translations["_default"]._locale.id : translations["_default"]._locale.id;

    // console.log('props', this.props);
    // console.log('pageProps', pageProps);




    return <Container>
      <ApolloProvider client={apollo}>
        <GlobalStyle />


        {
          this.state.showLanguageSelector === true &&
          <LanguageSelectorComponent locale={locale} onToggleLanguageSelector={this.toggleLanguageSelector} />
        }


        <StickyContainer>
          {

            (this.props.router.route == "/next/landing") ?
              <Sticky topOffset={500}>
                {({
                  style,

                  // the following are also available but unused in this example
                  isSticky,
                  wasSticky,
                  distanceFromTop,
                  distanceFromBottom,
                  calculatedHeight
                }) => (
                    <IndexMenuComponent onToggleLanguageSelector={this.toggleLanguageSelector} distanceFromTop={distanceFromTop} calculatedHeight={calculatedHeight} isSticky={isSticky} locale={locale} className={classNames({
                      isSticky,
                      atTop: distanceFromTop * -1 < calculatedHeight
                    })} />

                  )}
              </Sticky>

              :

              <Sticky topOffset={500}>
                {({
                  style,

                  // the following are also available but unused in this example
                  isSticky,
                  wasSticky,
                  distanceFromTop,
                  distanceFromBottom,
                  calculatedHeight
                }) => (
                    <MenuComponent onToggleLanguageSelector={this.toggleLanguageSelector} distanceFromTop={distanceFromTop} calculatedHeight={calculatedHeight} isSticky={isSticky} locale={locale} className={classNames({
                      isSticky,
                      atTop: distanceFromTop * -1 < calculatedHeight
                    })} />

                  )}
              </Sticky>
          }


          {
            (pageProps.statusCode && pageProps.statusCode >= 400) ?
              <Error statusCode={pageProps.statusCode} /> :
              <Component {...pageProps} locale={locale} />
          }

        </StickyContainer>


        <footer>
          <div className="ss-go-top">
            {/* <Link prefetch route="registration" params={{ locale }}>
              <a className="register btn btn--primary btn--large">
                  {this.translate('footerMenu.registrationInfo')}
              </a>
            </Link>*/}
            {/* <Link prefetch route="competition" params={{ locale }}>
              <a className="more-info btn btn--large">
                  {this.translate('footerMenu.aboutCompetition')}
              </a>
            </Link> */}
            {/* <a className="smoothscroll btn btn--large" title={this.translate('footerMenu.backToTop')} href="#top">
                {this.translate('footerMenu.backToTop')}
            </a>*/}
          </div>

          <div className="row">
            <div className="col-full ss-copyright">
              <span dangerouslySetInnerHTML={{ __html: this.translate('copyright') }} />
            </div>
            <br />
            <div>
              <div>
                <br />
                <a href="https://twitter.com/zubi_io" target="_blank">
                  <img src="/static/sm/tt.png" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.facebook.com/zubi.io/" target="_blank">
                  <img src="/static/sm/fb.png" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com/zubi.io/" target="_blank">
                  <img src="/static/sm/ig.png" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/showcase/zubi-community/" target="_blank">
                  <img src="/static/sm/li.png" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.youtube.com/channel/UCxN1ZN_bSlWlVWncT9QcTkg" target="_blank">
                  <img src="/static/sm/yt.png" />
                </a>
                <br />
              </div>
              {/* <div className="languageMenuFooterTrigger" onClick={this.toggleLanguageSelector}>
                <div className="languageMenuFooterTriggerIcon" alt={this.translate('_locale.name')} title={this.translate('_locale.name')} style={{
                  backgroundImage: `url("/static/images/flags/1x1/${this.translate('_locale.flag')}")`
                }}></div>
                {this.translate('_locale.name')}
              </div> */}

            </div>
            <div></div>
          </div>

        </footer>


      </ApolloProvider>
    </Container>
  }
}



MyApp.propTypes = {

}

MyApp.defaultProps = {
  // activeClassName: "active"
}

export default withApollo(MyApp);
