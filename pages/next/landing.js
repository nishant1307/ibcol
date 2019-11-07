import React from 'react';
import styled from 'styled-components';
import configs from 'configs';
import _ from 'lodash';
import { translate } from 'helpers/translate.js';
import translations from 'translations';
import PageContainerComponent from 'components/PageContainerComponent';
import Head from 'next/head';
import jQuery from 'jquery';
import { Link } from '/routes';

const $ = jQuery;

// const getLocaleObject = (requestedLocale) => {
//     const requestedLocaleObject = _.find(translations, {
//         _locale: {
//             id: requestedLocale
//         }
//     });

//     if (requestedLocaleObject !== undefined) {
//         if (process.env.ENV === 'production') {
//             // check to see if requestedLocaleObject has been disabled
//             if (requestedLocaleObject._locale.disabled === true) {
//                 return undefined
//             }
//         }
//     }

//     return requestedLocaleObject;
// }

const ThisPageContainerComponent = styled(PageContainerComponent)`

`;

export default class extends React.Component {
    static async getInitialProps({ req, res, query }) {
        return { query }
    }

    // translate = (t) => translate(t, 'home', this.props.query.locale);

    componentDidMount = () => {
        /*!
        * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
        * @copyright 2016 PixelCog, Inc.
        * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
        */

        !function (t, i, e, s) { function o(i, e) { var h = this; "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src")); var r = (this.position + "").toLowerCase().match(/\S+/g) || []; if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [r[1], r[0]]), this.positionX != s && (r[0] = this.positionX.toLowerCase()), this.positionY != s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this; if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this; this.$mirror = t("<div />").prependTo("body"); var a = this.$element.find(">.parallax-slider"), n = !1; 0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({ visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden" }), this.$slider.addClass("parallax-slider").one("load", function () { h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender() }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load") } function h(s) { return this.each(function () { var h = t(this), r = "object" == typeof s && s; this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == typeof s && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]()) }) } !function () { for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s)i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"]; i.requestAnimationFrame || (i.requestAnimationFrame = function (e) { var s = (new Date).getTime(), o = Math.max(0, 16 - (s - t)), h = i.setTimeout(function () { e(s + o) }, o); return t = s + o, h }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) { clearTimeout(t) }) }(), t.extend(o.prototype, { speed: .2, bleed: 0, zIndex: -100, iosFix: !0, androidFix: !0, position: "center", overScrollFix: !1, refresh: function () { this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight; var t = o.winHeight, i = o.docHeight, e = Math.min(this.boxOffsetTop, i - t), s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0), h = this.boxHeight + (e - s) * (1 - this.speed) | 0, r = (this.boxOffsetTop - e) * (1 - this.speed) | 0; if (h * this.aspectRatio >= this.boxWidth) { this.imageWidth = h * this.aspectRatio | 0, this.imageHeight = h, this.offsetBaseTop = r; var a = this.imageWidth - this.boxWidth; this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a) } else { this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0; var a = this.imageHeight - h; this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - a : isNaN(this.positionY) ? r - a / 2 | 0 : r + Math.max(this.positionY, -a) } }, render: function () { var t = o.scrollTop, i = o.scrollLeft, e = this.overScrollFix ? o.overScroll : 0, s = t + o.winHeight; this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({ transform: "translate3d(0px, 0px, 0px)", visibility: this.visibility, top: this.mirrorTop - e, left: this.mirrorLeft, height: this.boxHeight, width: this.boxWidth }), this.$slider.css({ transform: "translate3d(0px, 0px, 0px)", position: "absolute", top: this.offsetTop, left: this.offsetLeft, height: this.imageHeight, width: this.imageWidth, maxWidth: "none" }) } }), t.extend(o, { scrollTop: 0, scrollLeft: 0, winHeight: 0, winWidth: 0, docHeight: 1 << 30, docWidth: 1 << 30, sliders: [], isReady: !1, isFresh: !1, isBusy: !1, setup: function () { if (!this.isReady) { var s = t(e), h = t(i), r = function () { o.winHeight = h.height(), o.winWidth = h.width(), o.docHeight = s.height(), o.docWidth = s.width() }, a = function () { var t = h.scrollTop(), i = o.docHeight - o.winHeight, e = o.docWidth - o.winWidth; o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0)) }; h.on("resize.px.parallax load.px.parallax", function () { r(), o.isFresh = !1, o.requestRender() }).on("scroll.px.parallax load.px.parallax", function () { a(), o.requestRender() }), r(), a(), this.isReady = !0 } }, configure: function (i) { "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i)) }, refresh: function () { t.each(this.sliders, function () { this.refresh() }), this.isFresh = !0 }, render: function () { this.isFresh || this.refresh(), t.each(this.sliders, function () { this.render() }) }, requestRender: function () { var t = this; this.isBusy || (this.isBusy = !0, i.requestAnimationFrame(function () { t.render(), t.isBusy = !1 })) }, destroy: function (e) { var s, h = t(e).data("px.parallax"); for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)this.sliders[s] == h && this.sliders.splice(s, 1); t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1) } }); var r = t.fn.parallax; t.fn.parallax = h, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function () { return t.fn.parallax = r, this }, t(function () { t('[data-parallax="scroll"]').parallax() }) }(jQuery, window, document);
    }

    componentWillUnmount = () => {
        $('.parallax-mirror').remove();
    }

    render() {
        // const locale = this.props.query.locale;

        return (
            <ThisPageContainerComponent>
                <Head>
                    <title>International Blockchain Olympiad</title>
                    <meta name="description" content="International Blockchain Olympiad is a multidisciplinary design and building competition. IBCOL 2019 invites students from around the world to solve real-world challenges through decentralised applications." />
                    {/* <meta name="keywords" content={this.translate('keywords')} /> */}
                    {/* <meta property="og:image" content={`${configs.url}${this.translate('ogImage')}`} /> */}
                    <meta property="og:type" content="website" />
                    {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script> */}
                </Head>

                <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="/static/images/bg-international-blockchain-olympiad-(ibcol).jpg" data-natural-width="3000" data-natural-height="2000" data-position-y="center">
                    <div className="grid-overlay">
                        <div></div>
                    </div>
                    <div className="home-content">
                        <div className="row home-content__main">
                            <h1>
                                The world's largest gathering of student talent in blockchain
                            </h1>
                            <br />
                            <br />
                            <h3 style={{ "fontSize": "2.6rem" }}>
                                International Blockchain Olympiad is a multidisciplinary design competition that invites students from around the world to apply blockchain and cryptography for solving real-world challenges.
                            </h3>
                            <div className="home-content__button">
                                <a href="/en-hk/join-us" className="btn btn--primary btn--large">
                                    JOIN THE TEAM
                                </a>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfztPAhKyzk8Qyb4_xOvTHhRZ9uWr128bdSpNZjPcpSdCfrMw/viewform" target="_blank" className="btn btn--large">
                                    JOIN MAILING LIST
                                </a>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Start of Vision & Mission Section */}
                <section className="s-section target-section" id="about">
                    <div className="row section-header">
                        <div className="bootstrap-iso col-block">
                            <h1>Vision & Mission</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-block">
                            <p>
                                Since 2014, there has been a fight for the public narrative of blockchain. During the euphoria of
                                the initial coin offering boom, cryptocurrencies hijacked the definition of blockchain. Since the
                                bubble burst, talk of legitimate blockchain projects is slowly but steadily gaining traction in the
                                public consciousness. The IBCOL is building a sustainable blockchain talent ecosystem and
                                take back what it means to work in blockchain. To this end, we have two missions:
                            </p>
                            <ul>
                                <li>
                                    <b>Promoting Awareness on Blockchain Technology & Applications</b>: students from
                                    around the world will benefit from the experience of participating in the IBCOL program
                                    of activities, which includes seminar series, specialised training and workshops,
                                    mentoring, and networking events besides the actual competitions. This will cultivate a
                                    genuine interest in the area of innovation, originality, creativity and cutting-edge
                                    technology and instill the right ethical values in the younger generation for paving way
                                    for their further exploring blockchain in the future.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <b>Enhancing Employability by Equipping Participants with helpful Skills</b>: the
                                    prospective and actual participants will benefit tremendously from the IBCOL
                                    programme, as they learn practical skills and knowledge outside their disciplines and
                                    push the boundaries of their comfort zones. Students get a taste of the real world, and
                                    learn how to identify and overcome challenges in actually making something happen.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* End of Vision & Mission Section */}


                {/* Start of Objective Section */}
                <section className="s-section target-section">
                    <div className="row section-header">
                        <div className="bootstrap-iso col-block">
                            <h1>Objective</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-block">
                            <p>
                                The IBCOL 2020 Programme
                           </p>
                            <ul>
                                <li>
                                    Provides a world-class competition that highlights the challenges of applying
                                    blockchain and distributed ledger technologies to real-world applications
                                </li>
                                <li>
                                    Promotes disciplined, multidisciplinary approach to building enterprise blockchain and
                                    distributed ledger applications, from technical, business, and legal perspectives
                                </li>
                                <li>
                                    Provides a forum for cross-cultural exchange of ideas and sharing of experience
                                    among students, advisors, and overall between academia, industry, and government.
                                </li>
                                <li>
                                    Encourages students from around the world to learn and know more about blockchain.
                                </li>

                            </ul>
                        </div>
                    </div>
                </section>
                {/* End of Objective Section */}

                {/* Start of History Section */}
                <section className="s-section target-section" id="history">
                    <div className="row section-header">
                        <div className="col-block">
                            <h1>History of IBCOL</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                {/* <div className="historyBtn">
                                    <Link prefetch route="2019" params="en-hk">
                                        <a className="btn btn--primary"> International Blockchain Olympiad 2019 </a>
                                    </Link>
                                </div>
                                <div className="historyBtn">
                                    <Link prefetch route="2018" params="en-hk">
                                        <a className="btn btn--primary"> International Blockchain Olympiad 2018 </a>
                                    </Link>
                                </div> */}
                                <div className="historyBtn">
                                    {/* <Link prefetch route="2019" params="en-hk"> */}
                                        <a className="btn btn--primary" href="/en-hk/ibcol/2019"> International Blockchain Olympiad 2019 </a>
                                    {/* </Link> */}
                                </div>
                                <div className="historyBtn">
                                    {/* <Link prefetch route="2018" params="en-hk"> */}
                                        <a className="btn btn--primary" href="/en-hk/ibcol/2018"> International Blockchain Olympiad 2018 </a>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of History Section */}

                {/* Start of Countries Section */}
                <section className="s-section target-section" id="countries">
                    <div className="row section-header">
                        <div className="col-block">
                            <h1>Blockchain Olympiad Committees</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="block-1-6">
                        <div className="col-block">
                                <div className="countries">
                                    <a href="/en-gb/home">
                                        <div className="flag">
                                            <img className="flagImg" src="../../static/images/flags/4x3/gb.svg" />
                                        </div>
                                        <div className="countriesName">
                                            BRITANNIAN
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                    <a href="/en-ca/home">
                                        <div className="flag">
                                            <img className="flagImg" src="../../static/images/flags/4x3/ca.svg" />
                                        </div>
                                        <div className="countriesName">
                                            CANADA
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                    <a href="/en-hk/home">
                                        <div className="flag">
                                            <img className="flagImg" src="../../static/images/flags/4x3/hk.svg" />
                                        </div>
                                        <div className="countriesName">
                                            HONG KONG
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                    <a href="/en-ph/home">
                                        <div className="flag">
                                            <img className="flagImg" src="../../static/images/flags/4x3/ph.svg" />
                                        </div>
                                        <div className="countriesName">
                                            PHILIPPINES
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                    <a href="/en-sg/home">
                                        <div className="flag">
                                            <img className="flagImg" src="../../static/images/flags/4x3/sg.svg" />
                                        </div>
                                        <div className="countriesName">
                                            SINGAPORE
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                    <a href="/en-tw/home">
                                        <div className="flag">
                                            <img className="flagImg" src="../../static/images/flags/4x3/tw.svg" />
                                        </div>
                                        <div className="countriesName">
                                            TAIWAN
                                    </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                    <a href="/en-us/home">
                                        <div className="flag">
                                            <img className="flagImg" src="../../static/images/flags/4x3/us.svg" />
                                        </div>
                                        <div className="countriesName">
                                            UNITED STATES
                                    </div>
                                    </a>
                                </div>
                            </div>
                            
                        
                        </div>
                    </div>
                </section>
                {/* End of Countries Section */}

                {/* Start of Download Section */}
                <section className="s-section target-section" id="download">
                    <div className="row section-header">
                        <div className="col-block">
                            <h1>Download</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-block">
                            <p>PR Kit</p>
                        </div>
                        <div className="col-block">
                            <a className="download">Download</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-block">
                            <p>Sponsorship Kit</p>
                        </div>
                        <div className="col-block">
                            <a className="download">Download</a>
                        </div>
                    </div>
                </section>
                {/* End of Download Section */}

                {/* Start of Contact Section */}
                <section className="s-section target-section" id="contact">
                    <div className="row section-header">
                        <div className="col-block">
                            <h1>Contact</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                <div className="item-process__text">
                                    <h3>Mailing Address</h3>
                                    <p>IBCOL Organising Committee<br />International Blockchain Olympiad<br />333A, 3/F, Core Building 2,<br />1W Science Park Avenue,<br />Hong Kong</p>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="item-process__text">
                                    <h3>E-mail Address</h3>
                                    <div className="mailing-address">
                                        <div >
                                            <p>
                                                General Enquiries
                                    <br />
                                                <a href={`mailto:info@ibcol.org`}>info@ibcol.org</a>
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                Sponsors
                                    <br />
                                                <a href={`mailto:support@ibcol.org`}>support@ibcol.org</a>
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                Media
                                    <br />
                                                <a href={`mailto:media@ibcol.org`}>media@ibcol.org</a>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of Contact Section */}

                <section className="s-section target-section">

                </section>
            </ThisPageContainerComponent>

        )
    }
}