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

                <section className="s-section target-section first">
                    <div className="row section-header">
                        <div className="col-block">
                            <h3 className="subhead">IBCOL 2019 RESULTS</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                <h1>First Place</h1>
                                <img src="/static/images/winner/vivica.jpg" alt="vivica" />
                                <h5>Vivica</h5>
                                <p>
                                    Yunsoo Kim (left)<br />
                                    Nisreen Bahrainwala (right)<br />
                                    <b>University of Michigan<br />
                                        USA</b>
                                </p>
                            </div>
                            <div className="col-block">
                                <h1>Second Place</h1>
                                <img src="/static/images/winner/medisure.jpg" alt="medisure" />
                                <h5>Medisure</h5>
                                <p>
                                    Louise Lumapas,
                                    Jeremiah Valero,
                                    Rannzel Tongco,
                                    Cris Militante,
                                    (left to right)<br />
                                    <b>
                                        University of San Carlos<br />
                                        Philippines
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                <h1>Third Place (Tied)</h1>
                                <img src="/static/images/winner/vaccineplus.jpg" alt="vaccineplus" />
                                <h5>VaccinePlus</h5>
                                <p>
                                    Danielle Cadoret<br />
                                    <b>
                                        University of Waterloo<br />
                                        Canada
                                    </b>
                                </p>
                            </div>
                            <div className="col-block">
                                <h1>Third Place (Tied)</h1>
                                <img src="/static/images/winner/Aero-Knowledge_Proof1.jpg" alt="Aero-Knowledge Proof" />
                                <h5>Aero-Knowledge Proof</h5>
                                <p>
                                    Huang Yupeng “Paul” (Guangzhou Civil Aviation College)<br />
                                    Lee Gong Kuen “Jeremiah” (Hong Kong Baptist University)<br />
                                    (left to right)<br />
                                    <b>China</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="row section-header">
                    <div className="col-block">
                        <h3 className="subhead">CATEGORIC WINNERS</h3>
                    </div>
                </div>

                <div className="row">

                    <div className="block-1-3 block-tab-full">
                        <div className="col-block">
                            <h2>Top Fintech Award</h2>
                            <img src="/static/images/winner/veritas.jpg" alt="Veritas" />
                            <h5>Veritas</h5>
                            <p>
                                Joshua Yang (Certificate accepted by IBCOL 2019 Organization Committee on behalf of winner)<br />
                                <b>Chinese International School</b>
                            </p>
                        </div>
                        <div className="col-block">
                            <h2>Top IoT Chain Award</h2>
                            <img src="/static/images/winner/Aero-Knowledge_Proof2.jpg" alt="Aero-Knowledge Proof" />
                            <h5>Aero-Knowledge Proof</h5>
                            <p>
                                Lee Gong Kuen “Jeremiah” <br />(Hong Kong Baptist University)<br />
                                Huang Yupeng “Paul” <br />(Guangzhou Civil Aviation College)<br />
                                <b>
                                    China
                        </b>
                            </p>
                        </div>
                        <div className="col-block">
                            <h2>Top GovTech Award</h2>
                            <img src="/static/images/winner/beyondme.jpg" alt="BeyondMe" />
                            <h5>BeyondMe</h5>
                            <p>
                                Anthony Leung<br />
                                Winnie Yeung (missing from photo)<br />
                                <b>
                                    University of Toronto<br />
                                    Canada
                        </b>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="row">

                    <div className="block-1-3 block-tab-full">
                        <div className="col-block">
                            <h2>Top MedTech Award</h2>
                            <img src="/static/images/winner/vivica2.jpg" alt="Vivica" />
                            <h5>Vivica</h5>
                            <p>
                                Nisreen Bahrainwala<br />
                                Yunsoo Kim<br />
                                <b>
                                    University of Michigan<br />
                                    USA
                        </b>
                            </p>
                        </div>
                        <div className="col-block">
                            <h2>Top MediaTech Award</h2>
                            <img src="/static/images/winner/blockbox_insights.jpg" alt="Blockbox Insights" />
                            <h5>Blockbox Insights</h5>
                            <p>
                                Jayant Shrivastava<br />
                                Twinkle Mehta<br />
                                <b>
                                    University of Waterloo<br />
                                    Canada
                        </b>
                            </p>
                        </div>
                        <div className="col-block">
                            <h2>People’s Choice</h2>
                            <img src="/static/images/winner/ProofMedic.jpg" alt="ProofMedic" />
                            <h5>ProofMedic</h5>
                            <p>
                                Stephen Shang Yi Liu<br />
                                <b>
                                    Case Western Reserve University<br />
                                    USA
                        </b>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="row">

                    <div className="block-1-2 block-tab-full">
                        <div className="col-block">
                            <h2>People’s Choice Runner-up (Tied)</h2>
                            <h5>Ogriot</h5>
                            <p>
                                Chen BoYu (National Chiao Tung University)<br />
                                Bill Hsu (National Taiwan University)<br />
                                Lynsey Lin (National Tsing Hua University)<br />
                                Huang Qi-Xian (National Tsing Hua University)<br />
                                Tsao Yu-Han “Elaine” (National Taiwan University)<br />
                                Jack Tseng (National Cheng-Chi University)<br />
                                <b>
                                    Taiwan<br />
                                </b>
                                
                    </p>
                        </div>
                        <div className="col-block">
                            <h2>People’s Choice Runner-up (Tied)</h2>
                            <h5>Aero-Knowledge Proof</h5>
                            <p>
                                Huang Yupeng “Paul” (Guangzhou Civil Aviation College)<br />
                                Lee Gong Kuen “Jeremiah” (Hong Kong Baptist University)<br />
                                <b>
                                    China<br />
                                </b>
                                
                    </p>
                        </div>
                    </div>

                </div>




            </ThisPageContainerComponent>
        )
    }
}