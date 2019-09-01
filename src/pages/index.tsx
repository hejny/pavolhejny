import { NextPageContext } from 'next';
import * as React from 'react';
import { Layout } from '../components/Layout';
//import '../style/index.css';

export default function IndexPage() {
    return (
        <Layout>
            <div className="layer layer2">
                <div className="vcard">
                    <div className="inner">
                        <a className="avatar">
                            <img
                                src="https://1.gravatar.com/avatar/3d98c15957c5f5dd227e53dbc7cbb60d?s=300&r=pg&d=mm"
                                alt="Pavol Hejný"
                            />
                        </a>
                        <h1 className="name">Pavol Hejný</h1>
                        <div className="about">
                            <p>
                                I am a developer and technology enthusiast from Prague. I ❤️ new technologies.
                                Especially technologies on the web (
                                <a href="/virtualni-realita-na-webu-2018-11-14">like WebVR</a>).
                            </p>
                            <p>
                                I speak at tech conferences (e.g.
                                <a href="https://www.youtube.com/watch?v=i7gQtatWSKc">LinuxDays about BrowserAPIs</a>)
                                and organize tech/startup communities (e.g.
                                <a href="https://www.mozilla.cz/">Mozilla.cz</a>,
                                <a href="http://communities.techstars.com/czech-republic/prague/startup-weekend/">
                                    StartupWeekend Prague
                                </a>
                                ,<a href="https://www.itnetwork.cz/">ITNetwork</a>.
                            </p>
                            <p>
                                I am currently working on
                                <a href="https://www.h-edu.cz/">math textbooks</a>
                                and also I have
                                <a href="https://github.com/hejny/">few own projects</a>. I was a former employee of
                                <a href="https://www.birdlife.cz/">Czech Society for Ornithology</a>
                                where I was creating apps for citizen science.
                            </p>
                            <p>
                                If you don't want to miss an interesting
                                event&nbsp;/&nbsp;conference&nbsp;/&nbsp;hackathon write me your email and stay in
                                touch!
                            </p>
                            <form
                                action="https://pavolhejny.us18.list-manage.com/subscribe/post?u=d71ea5d2703abed51cb32d0c7&id=d6fc10835b"
                                method="post"
                                name="mc-embedded-subscribe-form"
                                target="_blank"
                            >
                                <input id="newsletter" type="email" defaultValue="@" name="EMAIL" />
                                <input type="submit" defaultValue="Subscribe" name="subscribe" />
                            </form>
                        </div>
                        <div className="contacts">
                            <a href="mailto: me@pavolhejny.com" target="_blank" title="Email">
                                <i className="icon-envelope icons"></i>
                            </a>
                            <a href="https://github.com/hejny/" target="_blank" title="Github">
                                <i className="icon-social-github icons"></i>
                            </a>
                            <a href="https://www.facebook.com/hejny" target="_blank" title="Facebook">
                                <i className="icon-social-facebook icons"></i>
                            </a>
                            <a href="https://instagram.com/pavolhejny/" target="_blank" title="Instagram">
                                <i className="icon-social-instagram icons"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/hejny/" target="_blank" title="LinkedIn">
                                <i className="icon-social-linkedin icons"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                a:hover {
                    color: #fff;
                }

                .fas {
                    margin-left: 0.5em;
                    margin-right: 0.5em;
                }

                form {
                    display: block;
                    -webkit-text-fill-color: #fff;
                    margin-top: 15px;
                    margin-bottom: 15px;
                }

                form input {
                    padding: 10px;
                    margin: 0;
                    font-size: 1.1rem;
                    border: none;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    text-align: center;
                    background-color: rgba(37, 8, 8, 0.322);
                    color: #fff;
                    width: calc(100% - 180px);
                }

                form input:hover,
                form input:focus {
                    background-color: rgba(37, 8, 8, 0.651);
                }

                form input[type='submit'] {
                    float: right;
                    cursor: pointer;
                    width: 150px;
                }

                .vcard {
                    z-index: 100;
                    position: absolute;
                    top: 0;
                    left: 50vw;
                    right: 0;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(90deg, transparent, black);
                }

                .vcard .inner {
                    display: inline-block;
                    width: 400px;
                    max-width: 100%;
                    padding: 15px;
                    margin: 15px;
                    background: linear-gradient(90deg, white, #ffe0a5);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .vcard .inner .avatar {
                    display: none;
                }

                .vcard .inner .avatar img {
                    display: inline-block;
                    width: 125px;
                    height: 125px;
                    max-width: 80%;
                    border-radius: 1000px;
                    box-shadow: rgba(255, 255, 255, 0.363) 0 0 3px;
                    padding: 3px;
                    margin: auto;
                    margin-bottom: 12px;
                }

                .vcard .inner h1.name {
                    display: block;
                    text-decoration: none;
                    font-size: 3rem;
                    margin-top: 10px;
                    margin-bottom: 8px;
                }

                .vcard .inner .contacts {
                    text-align: center;
                }

                .vcard .inner .contacts a {
                    display: inline-block;
                    font-size: 27px;
                    text-decoration: none;
                    margin: 8px;
                }

                .vcard .inner .about {
                    text-align: justify;
                    font-size: 1.2rem;
                }

                @media only screen and (max-width: 1000px) {
                    .vcard {
                        display: block;
                        background: linear-gradient(90deg, rgba(0, 0, 0, 0.548), black);
                        left: 0;
                        padding: 10vw;
                    }
                    .vcard .inner {
                        margin: 0;
                        margin-top: 30px;
                        width: calc(100% - 25px);
                    }
                    .vcard .inner .avatar {
                        display: block;
                    }
                    .vcard .inner .about {
                        text-align: left;
                    }
                }

                @media only screen and (min-width: 1300px) {
                    h1.name {
                        font-size: 3.9rem !important;
                    }
                    .about {
                        font-size: 1.4rem !important;
                    }
                }
            `}</style>
        </Layout>
    );
}
