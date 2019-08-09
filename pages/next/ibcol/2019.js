import React from 'react';
import styled from 'styled-components';
import configs from 'configs';
import _ from 'lodash';
import { translate } from 'helpers/translate.js';
import translations from 'translations';
import PageContainerComponent from 'components/PageContainerComponent';
import Head from 'next/head';
import jQuery from 'jquery';

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
                    <title>{this.translate('siteTitle')} {this.translate('titleSeparator')} {this.translate('2019.pageTitle')}</title>
                    <meta name="description" content={this.translate('seoDescription')} />
                    <meta name="keywords" content={this.translate('keywords')} />
                    <meta property="og:image" content={`${configs.url}${this.translate('ogImage')}`} />
                    <meta property="og:type" content="website" />
                </Head>

                <section className="s-section target-section first">
                    <div className="row section-header">
                        <div className="col-block">
                            <h3 className="subhead">{this.translate('2019.subHeading')}</h3>
                            {/* <h3 className="subhead">{this.translate('subHeading')}</h3> */}
                        </div>
                    </div>
                </section>

                {/* Start of Eligibility section */}
                <section className="s-section target-section">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2019.eligibilitySection.title')}</h1>
                        </div>
                    </div>
                </section>
                {/* End of Eligibility section */}

                {/* Start of process section */}
                <section className="s-section target-section">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2019.processSection.title')}</h1>
                        </div>
                    </div>
                </section>
                {/* End of process section */}

                {/* Start of programme section */}
                <section className="s-section target-section">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2019.programmeSection.title')}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-block">
                            <h3>Schedule</h3>
                        </div>
                    </div>
                    <div className="home-schedule schedule block-1-3 block-tab-full">
                        <div className="col-block">
                            <h3 className="item-title">Friday 5 July</h3   >
                            <h5>Workshops Day</h5>
                            <table className="day1">
                                <tbody>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p className="time">9:30 AM - 10:00 AM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Registration opens</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time red">
                                            <p className="time">10:00 AM - 5:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Workshop AND Lunch </h5>
                                            <p className="location">City University of Hong Kong</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time green">
                                            <p className="time">5:00 PM - 6:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Dinner</h5>
                                            <p className="location">HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time orange">
                                            <p className="time">6:30 PM - 8:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Opening Ceremony</h5>
                                            <p className="location">HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-block">
                            <h3 className="item-title">Saturday 6 July</h3 >
                            <h5>Expo Day</h5>
                            <table className="day2">
                                <tbody>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p className="time">9:30 AM - 12:30 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5> Academic Symposium</h5>
                                            <p className="location">City University of Hong Kong</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time red">
                                            <p className="time">2:00 PM - 5:30 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Enterprise Exhibition</h5>
                                            <p className="location">HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time green">
                                            <p className="time">5:30 PM - 6:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Announcements & Housekeeping</h5>
                                            <p className="location">HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-block">
                            <h3 className="item-title">Sunday 7 July</h3>
                            <h5>Pitch Day</h5>
                            <table className="day3">
                                <tbody>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p className="time">9:00 AM - 4:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Pitching incl. Lunch</h5>
                                            <p className="location">HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time red">
                                            <p className="time">4:00 PM - 4:30 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Closing Speech</h5>
                                            <p className="location">HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time green">
                                            <p className="time">4:30 PM - 5:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Awards & Photos</h5>
                                            <p className="location">HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time orange">
                                            <p className="time">5:00 PM - 6:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Network</h5>
                                            <p className="location">HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                {/* End of programme section */}

                {/* Start of partner section */}
                <section className="s-section target-section">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2019.partnerSection.title')}</h1>
                        </div>
                    </div>

                    {/* Partners Title Sponsors */}
                    <div className="row corporate-logo">
                        <div className="col-block">
                            <h3>{this.translate('2019.partnerSection.titleSponsorTitle')}</h3>
                        </div>

                        <div className="block-1-3 block-tab-full">
                            {
                                this.translate('2019.partnerSection.titleSponsor').map((sponsor, index) => {
                                    return <div className="col-block" key={index}>
                                        <a href={sponsor.url} target="_blank">
                                            <img src={sponsor.logo} alt={sponsor.name} />
                                        </a>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* Partners General Sponsors */}
                    <div className="row corporate-logo">
                        <div className="col-block">
                            <h3>{this.translate('2019.partnerSection.generalSponsorTitle')}</h3>
                        </div>

                        <div className="block-1-3 block-tab-full">
                            {
                                this.translate('2019.partnerSection.generalSponsor').map((sponsor, index) => {
                                    return <div className="col-block" key={index}>
                                        <a href={sponsor.url} target="_blank">
                                            <img src={sponsor.logo} alt={sponsor.name} />
                                        </a>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* Partners Co-Host */}
                    <div className="row corporate-logo">
                        <div className="col-block">
                            <h3>{this.translate('2019.partnerSection.coHostTitle')}</h3>
                        </div>

                        <div className="block-1-3 block-tab-full">
                            {
                                this.translate('2019.partnerSection.coHost').map((sponsor, index) => {
                                    return <div className="col-block" key={index}>
                                        <a href={sponsor.url} target="_blank">
                                            <img src={sponsor.logo} alt={sponsor.name} />
                                        </a>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* Partners travel Partners */}
                    <div className="row corporate-logo">
                        <div className="col-block">
                            <h3>{this.translate('2019.partnerSection.travelPartnersTitle')}</h3>
                        </div>

                        <div className="block-1-3 block-tab-full">
                            {
                                this.translate('2019.partnerSection.travelPartners').map((sponsor, index) => {
                                    return <div className="col-block" key={index}>
                                        <a href={sponsor.url} target="_blank">
                                            <img src={sponsor.logo} alt={sponsor.name} />
                                        </a>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* Partners orther Partners */}
                    <div className="row corporate-logo">
                        <div className="col-block">
                            <h3>{this.translate('2019.partnerSection.supportingOrganisationsTitle')}</h3>
                        </div>

                        <div className="block-1-6">
                            {
                                this.translate('2019.partnerSection.supportingOrganisations').map((sponsor, index) => {
                                    return <div className="col-block otherPartners" key={index}>
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
                <section className="s-section target-section">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2019.peopleSection.title')}</h1>
                        </div>
                    </div>
                </section>
                {/* End of people section */}

                {/* Start of contestant section */}
                <section className="s-section target-section">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2019.contestantSection.title')}</h1>
                        </div>
                    </div>
                </section>
                {/* End of contestant section */}

                {/* Start of photo section */}
                <section className="s-section target-section">
                    <div className="row">
                        <div className="col-block">
                            <h1>{this.translate('2019.photoSection.title')}</h1>
                        </div>
                    </div>
                </section>
                {/* End of photo section */}
            </ThisPageContainerComponent >
        )
    }
}