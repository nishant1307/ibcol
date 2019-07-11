import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { media, style } from 'helpers/styledComponents.js';

import configs from 'configs';

import { translate } from 'helpers/translate.js';
import { transparentize } from 'polished'

import { Link } from '/routes';

import PageContainerComponent from 'components/PageContainerComponent';

import Head from 'next/head';

const ThisPageContainerComponent = styled(PageContainerComponent)`

  

`;


export default class extends React.Component {
    static async getInitialProps({ query }) {

        return { query }
    }

    translate = (t) => translate(t, 'schedule', this.props.query.locale);

    render() {

        // console.log(">>> query", this.props.query);


        const locale = this.props.query.locale;

        return (
            <ThisPageContainerComponent>
                <Head>
                    <title>{this.translate('siteTitle')} {this.translate('titleSeparator')} {this.translate('pageTitle')}</title>
                    <meta name="description" content={this.translate('seoDescription')} />
                    <meta name="keywords" content={this.translate('keywords')} />
                    <meta property="og:image" content={`${configs.url}${this.translate('ogImage')}`} />
                    <meta property="og:type" content="website" />
                </Head>

                <section className="s-section first target-section">

                    <div className="row section-header">

                        <div className="col-block">
                            <h4 className="subhead">{this.translate('subhead')}</h4>
                        </div>
                    </div>
                </section>
                <div className="row section-header center" style={{ textAlign: "center" }}>
                    <div className="col-block">
                        {/* <a href="#schedule"><h4 className="subhead">Schedule</h4></a> */}
                        <a href="#schedule"><h4 className="subhead">Schedule</h4></a>
                        <a href="#locations"><h4 className="subhead">Locations</h4></a>
                        <a href="#tips"><h4 className="subhead">Local Tips</h4></a>

                    </div>
                </div>

            </ThisPageContainerComponent>
        )
    }
}