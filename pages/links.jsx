import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Links(props) {


    return (
        <>
            <Layout>
                <h2 className="my-2 py-2">Important Links</h2>
                <p>Important Links is a work in progress, and we welcome your input. If you identify a website or article, you think would be helpful in keeping our children safe and healthy, please send it via our email address at <a href = "mailto: support@GodsChildID.com">support@GodsChildID.com</a> and also share it on our Facebook page, God’s Child ID. Below are some important links I encourage you view.</p>
                <p>Find out who may live in your area that has been formally convicted of a sexual felony.</p>
                <div className="py-2 my-2">
                    <Link href="https://www.nsopw.gov/">
                        <a>National Sex Offender Public Website</a>
                    </Link>
                    <div><Link href="http://www.criminalwatchdog.com/neighborhood-watch/default.aspx">
                        <a>Criminal Watch Dog</a>
                    </Link>
                    </div>
                </div>


                <p>Starting a Neighborhood Watch Group is a great idea and can help protect not only your property but the lives of your children. Below is a link that will show you how to get started.</p>

                <div className="py-2 my-2"><Link href="https://www.nnw.org/">
                    <a>National Neighborhood Watch</a>
                </Link>
                </div>


                <p>Teaching younger children about Stranger Danger is a must here’s one website that lays it out for you.</p>
                <div className="py-2 my-2">
                    <Link href="https://schoolbeat.cymru/en/parents/know-what-could-affect-your-child/personal-safety/what-you-need-to-know/stranger-danger/">
                        <a>What is Stranger Danger?</a>
                    </Link>
                </div>

                <p>Helping a teenager to be aware of their surroundings and how to be safe</p>
                <div className="py-2 my-2">
                    <Link href="https://www.thebettermom.com/blog/2017/5/17/10-tips-to-teach-your-teenagers-about-safety">
                    <a>The Better Mom Blog</a>
                </Link>
                </div>
                
            </Layout>

        </>
    )
}
