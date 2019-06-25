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
                {/* <div className="row">
          <div className="col-block">
          <a href="#schedule"><h4 className="subhead">Schedule</h4></a>
          <a href="#locations"><h4 className="subhead">Locations</h4></a>
          <a href="#tips"><h4 className="subhead">Local Tips</h4></a>
          <hr></hr>
          </div>
          
        </div> */}

                {/* <section className="s-section target-section" id="schedule">

          <div className="row">
              <div className="col-block">
                  <h1>Schedule</h1>
                  <h4 className="item-title">Friday 5 July</h4>
                  <h5>Workshops Day</h5>
                  <p>All received submissions requires at least some final adjustments. The workshop helps all team bridge the gap to meet minimal quality requirements and be ready for investors and academic “cross-examinations”.</p>
              </div>
              <div className="schedule" >
                  <table className="day1">
                      <tbody>
                          <tr>
                              <td className="session-schedule-time blue">
                                  <p>5:00 PM - 6:30 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Registration</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time red">
                                  <p>6:30 PM - 7:00 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Opening Ceremony</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time green">
                                  <p>7:00 PM - 8:00 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Dinner</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time orange">
                                  <p>8:00 PM - 9:00 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Games</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <h4 className="item-title">Saturday 6 July</h4>
                  <table className="day2">
                      <tbody>
                          <tr>
                              <td className="session-schedule-time blue">
                                  <p>9:00 AM - 9:30 AM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Exhibition Opens</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time red">
                                  <p>9:30 AM - 10:00 AM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Opening Remarks</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time green">
                                  <p>10:00 AM - 12:00 AM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Unconference</h5>
                                  <p>Chamber 1A and 1B</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time orange">
                                  <p>12:00 PM - 1:30 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Lunch</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time blue">
                                  <p>1:30 PM - 2:30 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Pitch Session 1</h5>
                                  <p>Meeting Room 3 and 4</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time red">
                                  <p>3:15 PM - 4:15 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Pitch Session 2</h5>
                                  <p>Meeting Room 3 and 4</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time green">
                                  <p>5:00 PM - 5:45 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Unconference</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <h4 className="item-title">Sunday 7 July</h4>
                  <table className="day3">
                      <tbody>
                          <tr>
                              <td className="session-schedule-time blue">
                                  <p>9:00 AM - 9:30 AM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Exhibition Opens</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time red">
                                  <p>9:30 AM - 10:30 AM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Opening Remarks</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time green">
                                  <p>10:30 AM - 11:30 AM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Pitch Session 3</h5>
                                  <p>Meeting Room 3 and 4</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time orange">
                                  <p>12:00 PM - 1:30 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Lunch</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time blue">
                                  <p>1:30 PM - 2:30 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Pitch Session 4</h5>
                                  <p>Meeting Room 3 and 4</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time red">
                                  <p>3:15 PM - 4:15 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Pitch Session 5</h5>
                                  <p>Meeting Room 3 and 4</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                          <tr>
                              <td className="session-schedule-time green">
                                  <p>5:00 PM - 5:45 PM</p>
                              </td>
                              <td className="session-schedule-detail">
                                  <h5>Closing Ceremony</h5>
                                  <p>Chamber 1A and 1B</p>
                                  <p>HKSTP InnoCentre</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div> 
        </section> */}
                <section className="s-section target-section" id="announcement">
                    <div className="row">
                        <h1>Announcement</h1>
                        <p>Demonstrations have taken place early June in the areas of Admiralty, Tamar Park, and the Central Government Complex in Hong Kong. Demonstrations may lead to significant disruptions to traffic and public transportation.</p>
                        <p>The International Blockchain Olympiad takes place far from these areas, as are the recommended lodging area, and will not be affect IBCOL events in any way.</p>
                        <p>Visitors should remain vigilant at all times, avoid all demonstrations and large gatherings, follow the advice of local authorities and monitor local media. We recommend that visitors get in touch with their family members and emergency contacts in your home country to confirm their whereabouts and well-being, even if they have not been affected by this event.</p>
                    </div>
                </section>

                <section className="s-section target-section" id="schedule">

                    <div className="row">
                        <div className="col-block">
                            <h1>Schedule</h1>
                            <h4 className="item-title">Friday 5 July</h4>
                            <h5>Workshops Day</h5>
                            <p>All received submissions requires at least some final adjustments. The workshop helps all team bridge the gap to meet minimal quality requirements and be ready for investors and academic “cross-examinations”.</p>
                        </div>
                        <div className="schedule" >
                            <table className="day1">
                                <tbody>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p>9:00 AM - 10:00 AM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <p>Shuttle Bus from Hotel to CityU</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time red">
                                            <p>10:00 AM - 5:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Workshop AND Lunch </h5>
                                            <p>City University of Hong Kong</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time green">
                                            <p>5:00 PM - 6:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Dinner</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time orange">
                                            <p>6:30 PM - 8:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Opening Ceremony</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4 className="item-title">Saturday 6 July</h4>
                            <h5>Expo Day</h5>
                            <p>All projects are exhibited for two audiences with very different cultures and objectives. The Symposium is for inspiring students to explore careers in the tech sector and for matching researchers with potential collaborators. The Exhibition is for introducing investors to potential investments and for matching corporations with potential collaborators.</p>
                            <table className="day2">
                                <tbody>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p>8:30 AM - 9:00 AM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Shuttle Bus from Hotel to CityU</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time red">
                                            <p>9:00 AM - 9:30 AM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Opening Remarks</h5>
                                            <p>City University of Hong Kong</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time green">
                                            <p>9:30 AM - 13:30 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Symposium</h5>
                                            <p>City University of Hong Kong</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time orange">
                                            <p>2:00 PM - 5:30 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Lunch AND Exhibition </h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p>5:30 PM - 6:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Announcements</h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4 className="item-title">Sunday 7 July</h4>
                            <h5>Pitch Day</h5>
                            <table className="day3">
                                <tbody>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p>8:30 AM - 9:00 AM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Shuttle Bus from Hotel to CityU</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time red">
                                            <p>9:00 AM - 9:15 AM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Opening Remarks</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time green">
                                            <p>9:15 AM - 10:00 AM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>1st Pitch Session (P1)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time orange">
                                            <p>10:00 AM - 10:15 AM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>1st Recess (R1)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p>10:15 AM -11:00 AM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>2nd Pitch Session (P2)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time red">
                                            <p>11:00 AM - 11:15 AM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>2nd Recess (R2)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time green">
                                            <p>11:15 AM -12:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>3nd Pitch Session (P3)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time orange">
                                            <p>12:00 PM - 1:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>3nd Recess (R3) AND Lunch</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p>1:00 PM - 1:45 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>4nd Pitch Session (P4)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time red">
                                            <p>1:45 PM - 2:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>4nd Recess (R4)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time green">
                                            <p>2:00 PM -2:45 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>5nd Pitch Session (P5)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time orange">
                                            <p>2:45 PM - 3:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>5nd Recess (R5)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p>3:00 PM - 3:45 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>6nd Pitch Session (P6)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time red">
                                            <p>3:45 PM - 4:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>6nd Recess (R6)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time green">
                                            <p>4:00 PM -5:45 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>7nd Pitch Session (P7)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time orange">
                                            <p>4:45 PM - 5:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>7nd Recess (R7)</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="session-schedule-time blue">
                                            <p>5:00 PM - 6:00 PM</p>
                                        </td>
                                        <td className="session-schedule-detail">
                                            <h5>Awards cum Closing Ceremony</h5>
                                            <p>HKSTP InnoCentre</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="s-section target-section" id="locations">
                    <div className="row">
                        <div className="col-block">
                            <h1>Locations</h1>
                        </div>

                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                <h4 className="item-title">Symposium @ City University of Hong Kong</h4>
                                <a href="https://goo.gl/maps/9g11DNf6fwJt9pLN7" target="_blank" >83 Tat Chee Ave, Kowloon Tong</a>
                                <p>City University of Hong Kong is located in the heart of Kowloon Tong amidst idyllic settings, and is surrounded by schools and is adjacent to one of the city’s most popular upscale shopping centres.</p>
                                <p>Just as all roads lead to Rome, City University of Hong Kong is one of Hong Kong’s key epicentres. The state-of-the-art facility is just 19 minutes from the city’s CBD, 42 minutes from Hong Kong International Airport and 43 minutes from the Shenzhen border, by Mass Transit Railway. </p>
                                <p>In addition, buses, mini buses and taxis make City University of Hong Kong even more accessible from anywhere in Hong Kong. </p>
                            </div>

                            <div className="col-block">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14761.865903624534!2d114.1732325!3d22.3360087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb13b4355bdf28a9d!2z6aaZ5riv5Z-O5biC5aSn5a245qWK5bu65paH5a246KGT5qiT!5e0!3m2!1szh-TW!2shk!4v1559725726775!5m2!1szh-TW!2shk" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                <h4 className="item-title">Exhibition @ InnoCentre</h4>
                                <a href="https://goo.gl/maps/R2KUQ88SGkM2" target="_blank" >72 Tat Chee Ave, Kowloon Tong</a>
                                <p>InnoCentre is located in the heart of Kowloon Tong amidst idyllic settings, and is surrounded by schools and is adjacent to one of the city’s most popular upscale shopping centres.</p>
                                <p>Just as all roads lead to Rome, InnoCentre is one of Hong Kong’s key epicentres. The state-of-the-art facility is just 19 minutes from the city’s CBD, 42 minutes from Hong Kong International Airport and 43 minutes from the Shenzhen border, by Mass Transit Railway. </p>
                                <p>In addition, buses, mini buses and taxis make InnoCentre even more accessible from anywhere in Hong Kong. </p>
                            </div>

                            <div className="col-block">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.4868109714753!2d114.17398011495541!3d22.33524028530552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040733d1064c37%3A0x10adc684c3666ee2!2sInnocentre%2C+72+Tat+Chee+Ave%2C+Kowloon+Tong!5e0!3m2!1sen!2shk!4v1555060483729!5m2!1sen!2shk" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>


                    </div>

                </section>

                <section className="s-section target-section" id="tips">
                    <div className="row">
                        <div className="col-block">
                            <h1>Local Tips</h1>
                        </div>
                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                <h4 className="item-title">1. Greetings</h4>
                                <p>Hugging or kissing on the cheeks may be your usual greeting when meeting someone, but not in Hong Kong. In fact, such warm signs of affection may often leave the other person feeling rather flustered and awkward. Of course, that’s not to say that everyone is put off by a harmless kiss on the cheek, but when you’re meeting someone for the first time, it’s better to be safe than sorry. So save your hugs and kisses for your nearest and dearest, and keep it more formal with a simple handshake, while avoiding too much body contact. </p>
                            </div>
                            <div className="col-block">
                                <h4 className="item-title">2. MTR Tactics</h4>
                                <p>Whether you’re new in town, or a seasoned Hong Konger, there’s one thing about this city that never ceases to amaze us – the MTR. More specifically, the people on it. From crowds of tie-wearing zombies shuffling to work every morning, to sprint races across station platforms to make it onto the next train before the doors close, the MTR is truly a great place of entertainment. It may look hilarious to those new to Hong Kong, but for the locals, this is simply a part of everyday life. So go ahead, run across the platform, and don’t be afraid to get real nice and tight with other people riding the train. It’s the only way to become a true local.</p>
                            </div>
                        </div>
                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                <h4 className="item-title">3. Business Cards</h4>
                                <p>Exchanging business cards is a quick and easy way to trade information with others, but be careful how you hand them out. In Hong Kong, it is considered rude to hand out your business card with only one hand. Instead, the person giving the card should hold the card with both hands, with the text facing the recipient, usually accompanied with a subtle nod of the head. It may seem like a lot to remember, but this simple gesture will be very much appreciated and make a positive first impression.</p>
                            </div>
                            <div className="col-block">
                                <h4 className="item-title">4. Gift Giving</h4>
                                <p>Although it is more of a superstition rather than a custom, it’s widely believed by many Hong Kongers that items like shoes and clocks should never be given as gifts. Giving someone a pair of shoes is considered a bad sign, as it suggests the other person should “run away”. Presenting a clock or a watch as a gift is also a big no-no in Hong Kong, because in Cantonese, the phrase for giving a clock – “Sung Jung” – sounds the same as the phrase for paying your last respects to a close family member. Yikes.</p>
                            </div>
                        </div>
                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                <h4 className="item-title">5. Lucky Versus Unlucky Numbers</h4>
                                <p>You may have noticed that the number four is not often used in Hong Kong. This is because it is considered unlucky, due to the fact that in Cantonese, the word “four” sounds very similar to the word “death”. A perfect example of this can be found in elevators where there is no option to go to the fourth floor, or any other floors ending with the number four, for that matter. Don’t worry, these floors do actually exist, they just aren’t numbered. On the bright side, simply double the four, and you’ve got yourself a lucky number, because the number eight is considered to bring luck as it sounds like the word “fortune” in Cantonese.</p>
                            </div>
                            <div className="col-block">
                                <h4 className="item-title">6. Extra Chopsticks</h4>
                                <p>When you’re in a Chinese restaurant, you might have noticed that you have two sets of chopsticks at your seat, often in different colours. The reason for them? Hygiene. While one pair of chopsticks is for eating with, the extra pair is strictly meant for transferring food into your own bowl. If a dish arrives with an extra spoon or pair of chopsticks, use those instead. Speaking of chopsticks, never stick these in your bowl of rice, especially not in an upright position. Not only is it seen as impolite and disrespectful, it’s also bad luck as the upright chopsticks resemble the imagery of incense sticks burning at a tomb for the dead. Eek!</p>
                            </div>
                        </div>
                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                <h4 className="item-title">7. Tapping the Table</h4>
                                <p>There’s no Hong Kong without dim sum, and there’s no dim sum without a hot cup of Chinese tea. But if you’ve ever been to a dim sum restaurant, you might be wondering why so many Hong Kongers like to tap the table when tea is being poured for them. We know it seems like a rude gesture, as if they were hurrying the server to finish pouring, but on the contrary, this light tapping of two fingers on the table is a gesture of appreciation. Think of it as a discreet way of saying “thank you” without actually saying it.</p>
                            </div>
                        </div>

                    </div>
                </section>

            </ThisPageContainerComponent>
        )
    }
}