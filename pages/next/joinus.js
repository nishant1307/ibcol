import React from 'react';
import styled from 'styled-components';

import configs from 'configs';

import { media, style } from 'helpers/styledComponents.js';

import {translate} from 'helpers/translate.js';
import { transparentize } from 'polished'

import { Link } from '/routes';

import PageContainerComponent from 'components/PageContainerComponent';

import Head from 'next/head';


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


export default class extends React.Component {
  static async getInitialProps({ query }) {
    
    return { query }
  }
  
    translate = (t) => translate(t, 'sponsors', this.props.query.locale);
  
  render() {
    
    // console.log(">>> query", this.props.query);


    const locale = this.props.query.locale;
    
    return (
      <ThisPageContainerComponent>
            <Head>
                <title>{this.translate('siteTitle')} {this.translate('titleSeparator')} {this.translate('pageTitle')}</title>
                <meta name="description" content={this.translate('seoDescription')}/>
                <meta name="keywords" content={this.translate('keywords')}/>
                <meta property="og:image" content={`${configs.url}${this.translate('ogImage')}`} />
                <meta property="og:type" content="website" />
            </Head>
        
            {/* <!-- Sponsors
        ================================================== --> */}

    <section className="s-section target-section join-us first">
        <div className="row section-header">
            <div className="col-block">
                <h3 className="subhead">Join Us</h3>
            </div>
        </div> 
        {/* <!-- end section-header --> */}
        <div className="row">
            <div className="block-1-3 block-tab-full">
                <div className="col-block w-20 hide-on-mb">
                    <h4>Roles</h4>
                    <a href="#game-day">
                        Game Day Team
                    </a>
                    <a href="#public-relations">
                        Public Relations Team
                    </a>
                    <a href="#student-relations">
                        Student Relations Team
                    </a>
                    <a href="#partnership-team">
                        Partnership Team
                    </a>
                    <a href="#special-team">
                        Special Events Team
                    </a>
                    <a href="#school-chapter">
                        IBCOL School Chapter
                    </a>
                </div>
                <div className="col-block w-40">
                    <h4>About the IBCOL</h4>
                    <p>
                        International Blockchain Olympiad (IBCOL) is an annual, non-profit, multidisciplinary design & building competition for students worldwide to submit complete solutions for solving real-world challenges through decentralised apps — systems that use blockchain or distributed ledger technologies (DLT). Contestants submit a whitepaper as proposal, with qualifying teams proceeding further to interviews, technical demos, and pitch presentations. Regardless of winning status, IBCOL assists all projects meeting quality standards in further developing with academic, government, and industry partners.
                    </p>
                    <p>
                        The 2019 International Blockchain Olympiad was held successfully at the City University of Hong Kong and at the Hong Kong Science Park InnoCentre, both in Kowloon Tong, from Friday 5 July to Sunday 7 July 2019. In preparation for IBCOL 2020, we are looking for volunteers from Hong Kong to fill in the following roles: 
                    </p>
                    <br />

                    <h2 id="game-day">Game Day Team</h2>
                    <h4>Role & Responsibilities</h4>
                    <p>
                        Your mission is to make sure the actual events run smoothly for our VIPs, guests, judges, contestants, and that everyone is happy. While you are free to assemble your team in any way you want — broadly speaking, your mission can be broken down into the following:
                    </p>
                    <p>
                        Event Hospitality — you are responsible for making sure that people are satisfied. Your job includes the following: ensuring good travel arrangements for overseas contestants, i.e. visas; recommendation for accommodation in Hong Kong; guidance in transportation around Hong Kong, etc. 
                    </p>
                    <p>
                        Event Production — this includes being in charge of everything behind the scenes prior to the event. It may seem like a lot but realistically, you job is simply to take care of catering (i.e. food and drinks), ticketing and registration, security, managing venues, managing programme books and name tags, organising backdrops, etc. 
                    </p>
                    <p>
                        Human Relations — you are responsible for the following: finding, training, and managing volunteers at the event; organising certificates and appreciation activities; addressing the challenges of a multilingual environment; and assist in building team cohesion. It is your mission to make sure that everyone is in the position that they should be in and taking up their responsibilities, and handle any crisis that may come up, e.g. coming up with alternatives as soon as possible, reassigning responsibilities, etc. 
                    </p>
                    <p>
                        This position is desirable for students studying tourism (especially MICE), communications, psychology, business and administration majors, management sciences, and logistics. Candidate must be reasonably fluent in English, Cantonese, or Mandarin. All internship positions are on a voluntary basis.
                    </p>
                    <h4>Perks & Benefits</h4>
                    <p>
                        Besides an official certificate of recognition and backstage access to IBCOL events, those on the Game Day Team have a great real-world opportunity working with industry professionals to perfect the art of verifying the identities of hundreds of people in a short time frame. Others in the MICE industry or even the department of Human Resources might want to hire you after this experience!
                    </p>
                    <span className="hide-on-desktop">
                        <p>
                            If you are interested in being a volunteer, fill out the application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/30BOsqr" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Volunteer Role
                        </a>
                        <p>
                            If you are interested in being a leader, fill out this application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/2Lrf2z8" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Leadership Role
                        </a>
                    </span>
                    <br />

                    <h2 id="public-relations">Public Relations Team</h2>
                    <h4>Role & Responsibilities</h4>
                    <p>
                        You are IBCOL’s gateway to the public! This means that you are in charge of marketing, public promotion, and managing (especially updating) IBCOL social media accounts! It is your job to establish media contacts, distribute promotional materials to the public (including to potential sponsors, attendees, media, etc), assist with branding and creating an aesthetic look and feel of the website, the look and feel of all public documents, as well as designing ideas for the actual event. If you are creative, have sassy writing skills, can design a killer pamphlet, or can deliver a IBCOL elevator pitch, then this is the team for you!
                    </p>
                    <p>
                        This position is ideal for students studying marketing, communications, languages, psychology, and the arts. Candidate must be reasonably fluent in English, Cantonese, or Mandarin. All internship positions are on a voluntary basis.
                    </p>
                    <h4>Perks & Benefits</h4>
                    <p>
                        Besides an official certificate of recognition and backstage access to IBCOL events, those on the PR Team have a great real-world opportunity working with industry professionals to perfect the art of writing, content creation (including graphics, Instagram-worthy photos, etc), the art of capturing attention, how to present and sell a good story, how to influence people. 
                    </p>
                    <span className="hide-on-desktop">
                        <p>
                            If you are interested in being a volunteer, fill out the application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/30BOsqr" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Volunteer Role
                        </a>
                        <p>
                            If you are interested in being a leader, fill out this application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/2Lrf2z8" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Leadership Role
                        </a>
                    </span>
                    <br />

                    <h2 id="student-relations">Student Relations Team</h2>
                    <h4>Role & Responsibilities</h4>
                    <p>
                        What would a student competition be without students?! The Student Relations Team is responsible for ensuring that we not only reach our contestant capacity, but ensure that the contestants we get are truly interested and prepared to compete on the world stage with a complete solution. It will be your job to take care of the general marketing to students and you will be responsible in finding and managing School Chapter Coordinators from around the world, working out ways for non-local students to find their way to IBCOL (logistically and financially). It is vital to let all students across the world know IBCOL in ensuring that this is a competition they won't want to miss. Have fun and enjoy making campus visits and making friends around the world!
                    </p>
                    <p>
                        This position is ideal for students studying marketing, communications, languages, psychology, and the arts. Candidate must be reasonably fluent in English, Cantonese, or Mandarin. All internship positions are on a voluntary basis.
                    </p>
                    <h4>Perks & Benefits</h4>
                    <p>
                        Besides an official certificate of recognition and backstage access to IBCOL events, those on the Student Relations Team have a great real-world opportunity working with industry professionals to build deep relationships with university administration and student groups.
                    </p>
                    <span className="hide-on-desktop">
                        <p>
                            If you are interested in being a volunteer, fill out the application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/30BOsqr" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Volunteer Role
                        </a>
                        <p>
                            If you are interested in being a leader, fill out this application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/2Lrf2z8" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Leadership Role
                        </a>
                    </span>
                    <br />

                    <h2 id="partnership-team">Partnership Team</h2>
                    <h4>Role & Responsibilities</h4>
                    <p>
                        Without Partnership, the event could not take place. Being a part of the Partnership Team is your chance to show off your negotiation savvy and expertise in relationship management. This team is responsible for defining partnership levels and incentives, and for establishing and ensuring a mutually-beneficial relationship with IBCOL sponsors. In this position, you will need to find ways of seeking in-kind sponsorship and supporting organizations, as well as managing VIPs and sending out invitations to the judges. 
                    </p>
                    <p>
                        This position is a good fit for aspiring entrepreneurs, management consultants, and students of business administration and management sciences. Candidate must be reasonably fluent in English, Cantonese, or Mandarin. All internship positions are on a voluntary basis.
                    </p>
                    <h4>Perks & Benefits</h4>
                    <p>
                        Besides an official certificate of recognition and backstage access to IBCOL events, those on the Partnership Team have a great real-world opportunity working with industry professionals to learn highly valued and highly transferable skills for startup or corporate life, especially in business development, sales, marketing, and accounts management. This experience will only compound in personal and professional value.
                    </p>
                    <span className="hide-on-desktop">
                        <p>
                            If you are interested in being a volunteer, fill out the application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/30BOsqr" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Volunteer Role
                        </a>
                        <p>
                            If you are interested in being a leader, fill out this application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/2Lrf2z8" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Leadership Role
                        </a>
                    </span>
                    <br />

                    <h2 id="special-team">Special Events Team</h2>
                    <h4>Role & Responsibilities</h4>
                    <p>
                        Everybody likes to have some fun! Having special events is an excellent way to start and end an anticipating competition. As part of the Special Events Team, it is your responsibility to arrange, organise, and manage extraordinary events for contestants to enjoy! Ranging from icebreaking ‘get-to-know-each-other’ games and activities, tours around Hong Kong specially made for overseas contestants, to a celebration dinner to  round up the competition, and so much more. 
                    </p>
                    <p>
                        This position is a good fit for students interested in MICE, marketing, hotel management, business management, management consultancy, business administration and management sciences. Candidate must be reasonably fluent in English, Cantonese, or Mandarin. All internship positions are on a voluntary basis.
                    </p>
                    <h4>Perks & Benefits</h4>
                    <p>
                        Besides an official certificate of recognition and backstage access to IBCOL events, those on the Special Events Team have a great real-world opportunity in collaborating with professionals, organising and planning the worldwide event of IBCOL. 
                    </p>
                    <span className="hide-on-desktop">
                        <p>
                            If you are interested in being a volunteer, fill out the application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/30BOsqr" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Volunteer Role
                        </a>
                        <p>
                            If you are interested in being a leader, fill out this application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/2Lrf2z8" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Leadership Role
                        </a>
                    </span>
                    <br />

                    <h2 id="school-chapter">School Chapter Coordinator</h2>
                    <h4>Role & Responsibilities</h4>
                    <p>
                        Every successful team needs great leadership. This is exactly what the School Chapter Coordinator is for, i.e. representing IBCOL on their campus. It will be your job to work with the Student Relations Team and establish a community within your school in order to let people gain insights about the IBCOL 2020. Your responsibilities are as follows: assisting and supporting students that want to compete in IBCOL 2020, e.g. providing information sessions; finding a certified trainer (or becoming one) to deliver training sets*; collect FAQs in your school to feedback into the official FAQ on the IBCOL website in order to support the contestants; and promoting IBCOL 2020 in your school. 
                    </p>
                    <p>
                        * Each training set consists of 4 courses of 2 hours each; materials are provided by the IBCOL 2020 Organizing Committee (OC20). The training set consists of the following courses: Introduction to Blockchain & Cryptography; Decentralised Application Design; Legal & Compliance for DApps; and Business Blockchain. A certified trainer is required per school in order to deliver the training sets to the contestants. You may choose to become a trainer if you like.
                    </p>
                    <h4>Perks & Benefits</h4>
                    <p>
                        Besides an official certificate of recognition and backstage access to IBCOL events, those who are School Chapter Coordinator have a great real-world opportunity working with academic and industry professionals to build deep relationships with school administration and student groups.
                    </p>
                    <span className="hide-on-desktop">
                        <p>
                            If you are interested in being a volunteer, fill out the application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/30BOsqr" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Volunteer Role
                        </a>
                        <p>
                            If you are interested in being a leader, fill out this application below. Please note that you will need to go through an interview process after application. 
                        </p>
                        <a href="http://bit.ly/2Lrf2z8" target="_blank" className="btn-joinus btn btn--primary btn--large">
                            Apply for Leadership Role
                        </a>
                    </span>
                    <br />
                </div>
                <div className="col-block sticky-block w-40 hide-on-mb">
                    <h4>Apply Now</h4>
                    <p>
                        If you are interested in being a volunteer, fill out the application below. Please note that you will need to go through an interview process after application. 
                    </p>
                    <a href="http://bit.ly/30BOsqr" target="_blank" className="btn-joinus btn btn--primary btn--large">
                        Apply for Volunteer Role
                    </a>
                    <p>
                        If you are interested in being a leader, fill out this application below. Please note that you will need to go through an interview process after application. 
                    </p>
                    <a href="http://bit.ly/2Lrf2z8" target="_blank" className="btn-joinus btn btn--primary btn--large">
                        Apply for Leadership Role
                    </a>
                </div>
            </div>
        </div>
    </section>

        
      </ThisPageContainerComponent>
    )
  }
}
    