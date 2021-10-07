import React from 'react'
import Layout from '../components/layout'

export default function Faq(props) {


    return (
        <>
            <Layout>
                <h2 className="py-2 my-2">Frequently Asked Questions</h2>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Does God’s Child ID determine if an Amber Alert should be issued for an abducted child?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">No. Each state has their on criteria to determine if an Amber Alert should be issued.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                What advantages does God’s Child ID offer to a parent if their child becomes lost

                                or abducted?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">It offers a quicker way to get your child’s information to the police (via email or text) and is formatted so it can be shared with others on patrol. It can also be shared by you to various Social Media outlets so others can BOLO also.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                At what age do you recommend I start adding my children’s information to the

                                Profile Page?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">I strongly suggest you add them as a toddler and then update their information till they reach responsible age of say 20-22.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            How can I cancel my subscription to God’s Child ID?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headinFour" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">It's simple. Just navigate to your profile page and click the manage my subscription button. Here you can cancel your subscription. </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
