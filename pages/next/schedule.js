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
function getEventDetail(info){
    if(info !== undefined){
        info.map((detail,index)=>{
            console.log('getEventDetail');
            console.log(detail, index);
            console.log(detail.date);
            return(
                <td className="session-schedule-time red">
                    <h5>{detail.date}</h5>
                </td>
                // <td className="session-schedule-detail">
                //     <h5>{detail.title}</h5>
                //     <p>{detail.venue}</p>
                // </td>
              )
        });
    }
  }

export default class extends React.Component {
    state = { scheduleInfo: [] }
    static async getInitialProps({ query }) {
        return { query }
    }

    translate = (t) => translate(t, 'schedule', this.props.query.locale);

    componentWillMount(){
        this.setState({ scheduleInfo: this.translate('events') });
    }    
    render() {
        var x = 0;
        const getScheduleInfo = this.state.scheduleInfo.map((info, index)=>{
            
            var body = [];
            var colors = ["blue","red","green","yello"];
            
            for (var i=0;i<info.detail.length;i++){
                
                    if(i == 0){
                        body.push(
                                <tr>
                                    <td className={`session-schedule-time ${colors[index%4]}`} rowSpan={info.detail.length}>
                                    <h5>{info.month}</h5>
                                    </td>
                                    <td className={`session-schedule-time ${colors[i%4]}`}>
                                        <h5>{info.detail[0].date}</h5>
                                    </td>
                                    <td className="session-schedule-detail">
                                        <h5>{info.detail[0].title}</h5>
                                        <p>{info.detail[0].venue}</p>
                                    </td>
                                </tr>);
                    }else{
                        var d = [];
                         var b = [];
                        d.push(<td className={`session-schedule-time ${colors[i%4]}`}>
                            <h5>{info.detail[i].date}</h5>
                            </td>);

                        b.push(<td className="session-schedule-detail">
                            <h5>{info.detail[i].title}</h5>
                            <p>{info.detail[i].venue}</p>
                            </td>);

                        body.push(<tr>
                                {d}
                                {b}
                            </tr>);
                    }
            }
            console.log(body)
            return body;
        });
           
 
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
                {/* <div className="row section-header center" style={{ textAlign: "center" }}>
                    <div className="col-block">
                        {/* <a href="#schedule"><h4 className="subhead">Schedule</h4></a> 
                        <a href="#schedule"><h4 className="subhead">Schedule</h4></a>
                        <a href="#locations"><h4 className="subhead">Locations</h4></a>
                        <a href="#tips"><h4 className="subhead">Local Tips</h4></a>
                    </div>
                </div> */}
                
        <section className="s-section target-section last" id="schedule">
            <div className="row">
                <div className="col-block">
                    <h4 className="item-title">{this.translate('timelineTitle')}</h4>
                </div>
                <div className="schedule">
                    <table className="scheduleTable">
                        <tbody>
                        <tr>
                            <th className="first-child-padding">Month</th>
                            <th>Date</th>
                            <th>Event</th>
                        </tr>
                           {getScheduleInfo}
                        </tbody>
                    </table>
                </div>
            </div>
            </section>

            </ThisPageContainerComponent>
        )
    }
}