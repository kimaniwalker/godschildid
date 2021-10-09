import React from 'react'
import Layoutfull from './layoutfull'
import Stripesetup from './stripesetup'
import Subscriptioncard from './subscriptioncard'
import { useUser } from '../lib/hooks'

export default function Stripelanding(props) {
    const user = useUser({ redirectTo: '/login' })


    return (
        <>
            <Layoutfull>
                <h2 className="text-center my-4">Pricing</h2>
                <div className="container">
                    <div className="row py-4 justify-content-center">

                        <div className="col-4">
                            <Subscriptioncard title="Monthly Fee" price="8$ / month" detail="Pay a one time fee of 12$ and 8$ monthly afterwards. Cancel Anytime" button={<Stripesetup user={user} line_items={[
                                { price: 'price_1JiSFzDpTp0gd1N8kb6JWSCH', quantity: 1 },
                                { price: 'price_1JiSFzDpTp0gd1N8YqoiFefa', quantity: 1 },
                            ]} />} />
                        </div>
                        <div className="col-4">
                            <Subscriptioncard title="Annual Fee" price="90$ / year" detail="Pay a one time fee of 90$ for a full year of coverage. Cancel anytime" button={<Stripesetup user={user} line_items={[
                                { price: 'price_1JiSHNDpTp0gd1N8zM2XD8SH', quantity: 1 },

                            ]} />} />
                        </div>

                    </div>
                </div>
            </Layoutfull>
        </>
    )
}
