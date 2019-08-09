import React from 'react';
import styled from 'styled-components';
import configs from 'configs';
import _ from 'lodash';
import { translate } from 'helpers/translate.js';
import translations from 'translations';
import PageContainerComponent from 'components/PageContainerComponent';
import Head from 'next/head';
import jQuery from 'jquery';
import classNames from 'classnames';
const $ = jQuery;

const getLocaleObject = (requestedLocale) => {
    const requestedLocaleObject = _.find(translations, {
        _locale: {
            id: requestedLocale
        }
    });

    if (requestedLocaleObject !== undefined) {
        if (process.env.ENV === 'production') {
            // check to see if requestedLocaleObject has been disabled
            if (requestedLocaleObject._locale.disabled === true) {
                return undefined
            }
        }
    }

    return requestedLocaleObject;
}

const ThisPageContainerComponent = styled(PageContainerComponent)`

`;

export default class extends React.Component {
    static async getInitialProps({ req, res, query }) {
        return { query }
    }

    translate = (t) => translate(t, 'ibcol', this.props.query.locale);

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
        const locale = this.props.query.locale;

        return (
            <ThisPageContainerComponent>
                <Head>
                    <title>{this.translate('siteTitle')} {this.translate('titleSeparator')} {this.translate('2018.pageTitle')}</title>
                    <meta name="description" content={this.translate('seoDescription')} />
                    <meta name="keywords" content={this.translate('keywords')} />
                    <meta property="og:image" content={`${configs.url}${this.translate('ogImage')}`} />
                    <meta property="og:type" content="website" />
                </Head>

                <section className="s-section target-section first">
                    <div className="row section-header">
                        <div className="col-block">
                            <h3 className="subhead">{this.translate('2018.subHeading')}</h3>
                            {/* <h3 className="subhead">{this.translate('subHeading')}</h3> */}
                        </div>
                    </div>

                    <div className="row section-header">
                        <div className="col-block">
                            <a href="#eligibility"><h4 className="subhead">Eligibility</h4></a>
                            <a href="#process"><h4 className="subhead">Process</h4></a>
                            <a href="#programme"><h4 className="subhead">Programme</h4></a>
                            <a href="#partners"><h4 className="subhead">partners</h4></a>
                            <a href="#people"><h4 className="subhead">People</h4></a>
                            <a href="#contestant"><h4 className="subhead">Contestant</h4></a>
                            <a href="#photo"><h4 className="subhead">Photo</h4></a>
                        </div>
                    </div>
                </section>

                {/* Start of Eligibility section */}
                <section className="s-section target-section" id="eligibility">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2018.eligibilitySection.title')}</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-block">
                            <font size="4"><b>{this.translate('2018.eligibilitySection.eligibilityGeneral')}</b></font>
                            <ul>
                                <li><font size="4">{this.translate('2018.eligibilitySection.eligibilityCategory')}</font></li>
                                <li><font size="4">{this.translate('2018.eligibilitySection.eligibilityTeam')}</font></li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* End of Eligibility section */}

                {/* Start of process section */}
                <section className="s-section target-section" id="process">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2018.processSection.title')}</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-block">
                            <h3>{this.translate('2018.processSection.categories.title')}</h3>
                        </div>

                        <div className="about-process icon">
                            <div className="block-1-3 block-tab-full">
                                {
                                    this.translate('2018.processSection.categories.projectCategories').map((projectCategoryKey, index) => {
                                        return <div className="col-block" key={index}>
                                            <div className="item-process__text">
                                                <i className={classNames("material-icons", projectCategoryKey.color)}>{projectCategoryKey.icon}</i>
                                                <h4 className="item-title">{projectCategoryKey.name}</h4>
                                                <p dangerouslySetInnerHTML={{ __html: projectCategoryKey.description }} />
                                            </div>
                                        </div>

                                    })
                                }

                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-block">
                            <h3>{this.translate('2019.processSection.whitepaper.title')}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-block">
                            <p>The most important is the whitepaper. The purpose of this competition is to solve a problem, for which you propose a solution, with which you write a proposal, which explains in complete detail how the problem shall be solved: a complete solution. The format of the paper is not the most important, but you may follow the 	&nbsp;
                                <a className="whitepaper" href="https://medium.com/international-blockchain-olympiad/whitepaper-format-hkbcs-model-e1872b852b4e" target="_blank"> HKBCS Model</a>
                                or the 	&nbsp;
                                <a className="whitepaper" href="https://medium.com/international-blockchain-olympiad/whitepaper-format-r3-format-51b36998f11d" target="_blank"> R3 Model</a>
                                as inspiration, and have a look at the general 	&nbsp;
                                <a className="whitepaper" href="https://medium.com/international-blockchain-olympiad/writing-a-blockchain-whitepaper-1aa8b6f74a92" target="_blank">evaluation criteria</a>.
                            </p>
                        </div>
                    </div>
                </section>
                {/* End of process section */}

                {/* Start of programme section */}
                <section className="s-section target-section" id="programme">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2018.programmeSection.title')}</h1>
                        </div>
                    </div>
                </section>
                {/* End of programme section */}

                {/* Start of partner section */}
                <section className="s-section target-section" id="partners">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2018.partnerSection.title')}</h1>
                        </div>
                    </div>

                    <div className="row corporate-logo">
                        <div className="col-block">
                            <h3>{this.translate('2018.partnerSection.keyPartnerTitle')}</h3>
                        </div>

                        <div className="block-1-3">
                            {
                                this.translate('2018.partnerSection.keyPartner').map((sponsor, index) => {
                                    return <div className="col-block" key={index}>
                                        <a href={sponsor.url} target="_blank">
                                            <img src={sponsor.logo} alt={sponsor.name} />
                                        </a>
                                        {/* <p dangerouslySetInnerHTML={{__html: sponsor.description}}/> */}
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className="row corporate-logo">
                        <div className="col-block">
                            <h3>{this.translate('2018.partnerSection.supportingOrganisationTitle')}</h3>
                        </div>

                        <div className="block-1-6">
                            {
                                this.translate('2018.partnerSection.supportingOrganisation').map((sponsor, index) => {
                                    return <div className="col-block" key={index}>
                                        <a href={sponsor.url} target="_blank">
                                            <img src={sponsor.logo} alt={sponsor.name} />
                                        </a>
                                        {/* <p dangerouslySetInnerHTML={{__html: sponsor.description}}/> */}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </section>
                {/* End of partner section */}

                {/* Start of people section */}
                <section className="s-section target-section" id="people">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2018.peopleSection.title')}</h1>
                        </div>
                    </div>

                    {/* VIPs */}
                    <div className="row">
                        <div className="col-block">
                            <h3>{this.translate('2018.peopleSection.vipsTitle')}</h3>
                        </div>
                    </div>
                    <div className="row corporate-logo">
                        <div className="judge block-1-2 block-tab-full">
                            {
                                this.translate('2018.peopleSection.vips').map((sponsor, index) => {
                                    return <div className="col-block" key={index}>
                                        <div className="judgesImage">
                                            <img src={sponsor.icon} alt={sponsor.name} />
                                        </div>
                                        <div className="judgesContent">
                                            <h5>{sponsor.name}</h5>
                                            <p className="judgepost"><b>{sponsor.post}</b></p>
                                            <p>{sponsor.company}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* Judges */}
                    <div className="row">
                        <div className="col-block">
                            <h3>{this.translate('2018.peopleSection.judgesTitle')}</h3>
                        </div>
                    </div>
                    <div className="row corporate-logo">
                        <div className="judge block-1-2 block-tab-full">
                            {
                                this.translate('2018.peopleSection.judges').map((sponsor, index) => {
                                    return <div className="col-block" key={index}>
                                        <div className="judgesImage">
                                            <img src={sponsor.icon} alt={sponsor.name} />
                                        </div>
                                        <div className="judgesContent">
                                            <h5>{sponsor.name}</h5>
                                            <p className="judgepost"><b>{sponsor.post}</b></p>
                                            <p>{sponsor.company}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </section>
                {/* End of people section */}

                {/* Start of contestant section */}
                <section className="s-section target-section" id="contestant">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2018.contestantSection.title')}</h1>
                        </div>
                    </div>
                </section>
                {/* End of contestant section */}

                {/* Start of photo section */}
                <section className="s-section target-section" id="photo">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2018.photoSection.title')}</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-block">
                            <a href="https://www.facebook.com/pg/hkblockchainsociety/photos/?tab=album&album_id=2131634553723272&ref=page_internal" target="_blank"><h3>Facebook</h3></a>
                        </div>
                    </div>
                </section>
                {/* End of photo section */}
            </ThisPageContainerComponent >
        )
    }
}