import React from 'react'
import Layout from '../components/layout'

export default function Howitworks(props) {


    return (
        <>
            <Layout>
                <h2 className="py-3">How It Works</h2>
                <p>At God’s Child ID we have strived to make everything simple and easy. This includes signing up to become a member, adding information about your children and being able to quickly share that information to Law Enforcement etc. Below are the steps you will need to take to get started.</p>
                <ol>
                    <li>Register for a new account on our <a href="/signup">signup</a> page.</li>
                    <li>Once you have logged in, you will directed to the settings page where you can signup for your subscription. You are allowed to either pay in full for one year or set it up into monthly payments. See our pricing section <a href="/">here</a> for more information.</li>
                    <li>Setup two factor authentication to enable additional security measures via email or text keeping your childrens information safe and secure.</li>
                    <li>You will receive an email from God’s Child ID three times a year reminding you to update your children’s information.</li>
                </ol>

                <h2 className="py-3">What To Do If Your Child Is Lost or Abducted</h2>
                <ol>
                    <li>Contact Law Enforcement by dialing 911. Inform them of your situation and let them know you have a digital ID Kit with your child’s picture and their information. Ask them if you should text or email it to them.</li>
                    <li>Go to that child’s information under My Children’s Page and click on the Flier Icon underneath that child’s info. Add your child’s name and information such as what they are wearing, where last seen etc.</li>
                    <li>Once this is done click on the Green Flier Icon and then choose Text, Email, Share to Facebook or Print. (You can always come back and choose the other options after its first sent to Law Enforcement)</li>
                    <li>If you’re at an amusement park, state or national park quickly find their security or park rangers and text the Flier to them so their entire team can BOLO for you’re child.</li>
                </ol>
                <strong>Note: Be sure and read the information under Important Links on our homepage.</strong>

            </Layout>
        </>
    )
}
