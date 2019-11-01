import React from 'react';
import styled from 'styled-components';

import configs from 'configs';

import { media, style } from 'helpers/styledComponents.js';

import { translate } from 'helpers/translate.js';
import { transparentize } from 'polished'

import { Link } from '/routes';

import PageContainerComponent from 'components/PageContainerComponent';

import Head from 'next/head';

import classNames from 'classnames';

// const pagePadding = {
//   xSmall: style.dimension.normal.pagePadding.xSmall,
//   small: style.dimension.normal.pagePadding.small,
//   medium: style.dimension.normal.pagePadding.medium,
//   large: style.dimension.normal.pagePadding.large,
//   xLarge: style.dimension.normal.pagePadding.xLarge,
//   xxLarge: style.dimension.normal.pagePadding.xxLarge
// }





const ThisPageContainerComponent = styled(PageContainerComponent)`


  

`;

function getHeadInfo(info) {
  if (info !== undefined) {
    return (
      <div>
        <h4 className="item-title"><a href={info.linkedInUrl} target="_blank">{info.name}</a></h4>
      </div>
    );
  }
}
function getSchoolInfo(info) {
  if (info !== undefined) {
    return (
      <div>
        <div className="col-block">
          <h4>{info.fName}:</h4>
        </div>
        <div className="col-block"> {info.head1} {info.head2.length > 0 && (<span> , {info.head2}</span>)}

          <a href={info.facebookUrl} target="_blank">
            <img className="png-fb-icon" src="/static/sm/fb-blue.png" />
          </a>
          <a href={info.telegramUrl} target="_blank">
            <img className="png-tg-icon" src="/static/sm/tg-blue.png" />
          </a>
        </div>
      </div>
    );
  }
}


export default class extends React.Component {
  state = { communitiesInfo: [], XBCOLContactInfo: [], schoolChapContactInfo: [] }
  static async getInitialProps({ query }) {
    return { query }
  }

  translate = (t) => translate(t, 'contact', this.props.query.locale);


  componentWillMount() {
    let communitiesInfo = [];
    this.translate('officialCommunitiesInfo').forEach((info, index) => {
      if (index % 2 === 0) {
        communitiesInfo.push([this.translate('officialCommunitiesInfo')[index], this.translate('officialCommunitiesInfo')[index + 1]]);
      }
    });
    this.setState({ communitiesInfo: communitiesInfo });

    let XBCOLContactInfo = [];
    this.translate('XBCOL.headInfo').forEach((info, index) => {
      if (index % 2 === 0) {
        XBCOLContactInfo.push([this.translate('XBCOL.headInfo')[index], this.translate('XBCOL.headInfo')[index + 1]]);
      }
    });
    this.setState({ XBCOLContactInfo: XBCOLContactInfo });

    // let schoolChapContactInfo = [];
    // this.translate('schoolChapter.schoolInfo').forEach((info, index) => {
    //   // if (index % 2 === 0) {
    //     schoolChapContactInfo.push([this.translate('schoolChapter.schoolInfo')[index], this.translate('schoolChapter.schoolInfo')[index + 1]]);
    //   // }

    // });
    this.setState({ schoolChapContactInfo: this.translate('schoolChapter.schoolInfo') });

  }


  render() {
    const getXBCOLContactInfo = this.state.XBCOLContactInfo.map(
      function (info, index) {
        console.log(info, index);
        return (
          <div className="block-1-2" key={info[0] + index}>
            <li className="col-block" key={index}>{getHeadInfo(info[0])}</li>
            {info[1] != null && (<li className="col-block" key={index + 1}>{getHeadInfo(info[1])}</li>)}
          </div>
        )
      }
    );
    const getSchoolChapContactInfo = this.state.schoolChapContactInfo.map(
      function (info, index) {
        console.log(info, index);
        return (
          <li className="col-block sm" key={index}>
            <h4 className="list-title">{info.fName}:</h4>
            {info.facebookUrl.length > 0 && (
              <a href={info.facebookUrl} target="_blank" className="sm-icon">
                <img className="png-fb-icon" src="/static/sm/fb-blue.png" />
              </a>)}
            {info.facebookUrl.length > 0 && (
              <a href={info.telegramUrl} target="_blank" className="sm-icon">
                <img className="png-tg-icon" src="/static/sm/tg-blue.png" />
              </a>)}
            <br />
            <h4><a href={info.head1.linkedInUrl} target="_blank" className="list-item">{info.head1.name}</a>
              {info.head2.name.length > 0 && (<a href={info.head2.linkedInUrl} target="_blank">, {info.head2.name}</a>)}</h4>
          </li>
        )
      }
    );

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
          <div className="row section-header">
            <div className="col-full">
              <h3 className="subhead">{this.translate('subhead')}</h3>
            </div>
          </div>
        </section>

        <section className="s-section target-section">
          <div className="row">
            <div className="block-1-2 block-tab-full">
              <div className="col-block">
                <div className="item-process__text">
                  <h3>{this.translate('mailingAddressTitle')}</h3>
                  <p dangerouslySetInnerHTML={{ __html: this.translate('mailingAddressHTML') }} />
                </div>
              </div>
              <div className="col-block">
                <div className="item-process__text">
                  <h3>{this.translate('emailAddressTitle')}</h3>
                  <p>
                    {this.translate('generalEnquiriesLabel')}<br />
                    <a href={`mailto:${this.translate('generalEnquiriesEmail')}`}>{this.translate('generalEnquiriesEmail')}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="target-section list-last">
          <div className="row col">
            <div className="sm">
              <span className={classNames("flag-icon", this.translate('XBCOL.flag'))}></span>
              <h3 className="sm-title flag">{this.translate('XBCOL.title')}</h3>
              {this.translate('XBCOL.facebookUrl').length > 0 && (
                <a href={this.translate('XBCOL.facebookUrl')} target="_blank">
                  <img className="png-fb-icon" src={this.translate('facebookIcon')} />
                </a>)}
              {this.translate('XBCOL.telegramUrl').length > 0 && (
                <a href={this.translate('XBCOL.telegramUrl')} target="_blank">
                  <img className="png-tg-icon" src={this.translate('telegramIcon')} />
                </a>)}
            </div>
            <a href="/join-us" className="btn btn--primary btn-sm-joinus">Join Us</a>

            <h4 className="head-title">{this.translate('XBCOL.headTitle')}</h4>
            <ul>{getXBCOLContactInfo}</ul>

            {this.translate('schoolChapter.schoolInfo')[0].fName.length > 0 && (
              <div>
                <h4 className="sm-title  head-title">{this.translate('schoolChapter.headTitle')}</h4>
                <a href="/join-us" className="btn btn--primary btn-sm-joinus">Join Us</a>
                <ul><div className="block-1-2">{getSchoolChapContactInfo}</div></ul>
              </div>
            )}

          </div>
        </section>
      </ThisPageContainerComponent>
    )
  }
}
