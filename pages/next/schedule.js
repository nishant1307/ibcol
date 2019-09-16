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
        this.setState({ scheduleInfo: this.translate('timeline') });
    }    
    render() {
        const getScheduleInfo = this.state.scheduleInfo.map((info, index)=>{
            var body = [];
            var colors = ["blue","red","green","orange"];
            var yearSpanLength=0;
            info.events.forEach(month => {
                month.detail.forEach(date => {
                    yearSpanLength++;
                });
            });
                for(var m=0;m<info.events.length;m++){
                    for (var i=0;i<info.events[m].detail.length;i++){
                        if(m==0){
                            if(i == 0){
                                body.push(
                                        <tr>
                                             <td className={`session-schedule-year ${colors[index%4]}`} rowSpan={yearSpanLength}>
                                             <h5>{info.year}</h5>
                                             </td>
                                            <td className={`session-schedule-month ${colors[m%4]}`} rowSpan={info.events[m].detail.length}>
                                            <h5>{info.events[m].month}</h5>
                                            </td>
                                            <td className={`session-schedule-time ${colors[i%4]}`}>
                                                <h5>{info.events[m].detail[0].date}</h5>
                                                {info.events[m].detail[0].time.length > 0 && (<p>{info.events[m].detail[0].time}</p>)}
                                            </td>
                                            <td className="session-schedule-detail">
                                                <h5>{info.events[m].detail[0].title}</h5>
                                                {info.events[m].detail[0].subtitle.length > 0 && (<h5><p>{info.events[m].detail[0].subtitle}</p></h5>)}
                                                <p>{info.events[m].detail[0].venue}</p>
                                            </td>
                                        </tr>);
                            }else{
                                var date = [];
                                 var title = [];
                                 date.push(<td className={`session-schedule-time ${colors[i%4]}`}>
                                    <h5>{info.events[m].detail[i].date}</h5>
                                    {info.events[m].detail[i].time.length > 0 && (<p>{info.events[m].detail[i].time}</p>)}
                                    </td>);
        
                                title.push(<td className="session-schedule-detail">
                                    <h5>{info.events[m].detail[i].title}</h5>
                                    {info.events[m].detail[i].subtitle.length > 0 && (<h5><p>{info.events[m].detail[i].subtitle}</p></h5>)}
                                    <p>{info.events[m].detail[i].venue}</p>
                                    </td>);
        
                                body.push(
                                    <tr>
                                        {date}
                                        {title}
                                    </tr>);
                                    
                                }
                
                        }else{
                            if(i == 0){
                                body.push(
                                        <tr>
                                            <td className={`session-schedule-month ${colors[m%4]}`} rowSpan={info.events[m].detail.length}>
                                            <h5>{info.events[m].month}</h5>
                                            </td>
                                            <td className={`session-schedule-time ${colors[i%4]}`}>
                                                <h5>{info.events[m].detail[0].date}</h5>
                                                {info.events[m].detail[0].time.length > 0 && (<p>{info.events[m].detail[0].time}</p>)}
                                            </td>
                                            <td className="session-schedule-detail">
                                                <h5>{info.events[m].detail[0].title}</h5>
                                                {info.events[m].detail[0].subtitle.length > 0 && (<h5><p>{info.events[m].detail[0].subtitle}</p></h5>)}
                                                <p>{info.events[m].detail[0].venue}</p>
                                            </td>
                                        </tr>);
                            }else{
                                var date = [];
                                 var title = [];
                                 date.push(<td className={`session-schedule-time ${colors[i%4]}`}>
                                    <h5>{info.events[m].detail[i].date}</h5>
                                    {info.events[m].detail[i].time.length > 0 && (<p>{info.events[m].detail[i].time}</p>)}
                                    </td>);
        
                                title.push(<td className="session-schedule-detail">
                                    <h5>{info.events[m].detail[i].title}</h5>
                                    {info.events[m].detail[i].subtitle.length > 0 && (<h5><p>{info.events[m].detail[i].subtitle}</p></h5>)}
                                    <p>{info.events[m].detail[i].venue}</p>
                                    </td>);
        
                                body.push(
                                    <tr>
                                        {date}
                                        {title}
                                    </tr>);
                                    
                                } 
                        }
                
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
                {this.translate('timeline')[0].events[0].month.length > 0 ? (<table className="scheduleTable">
                        <thead>
                        <tr>
                            <th className="first-child-padding">Year</th>
                            <th>Month</th>
                            <th>Date</th>
                            <th>Event</th>
                        </tr>
                        </thead>
                        <tbody>
                           {getScheduleInfo}
                        </tbody>
                    </table>): 
                    (<div>
                        <br/><h6 style={{"margin-inline-start": "1.2rem"}}>Coming Soon</h6>
                    </div>)}
                </div>
            </div>
            </section>

            </ThisPageContainerComponent>
        )
    }
}