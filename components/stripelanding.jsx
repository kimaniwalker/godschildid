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

                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <Subscriptioncard title="Monthly Fee" price="$6.95 / month" detail="Pay a one time fee of $12 and $6.95 monthly afterwards. Discontinue Anytime" button={<Stripesetup user={user} line_items={[
                                { price: 'price_1JuhdlEnwU3PfkMhY6923H2F', quantity: 1 },
                                { price: 'price_1JwEcuEnwU3PfkMh8Lrw5Blw', quantity: 1 },
                            ]} />} />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <Subscriptioncard title="Annual Fee" price="$79.60 / year" detail="Pay a one time fee of $79.60 for a full year of coverage saving you 10%." button={<Stripesetup user={user} line_items={[
                                { price: 'price_1JwEZXEnwU3PfkMhb5MDEaNj', quantity: 1 },

                            ]} />} />
                        </div>

                    </div>
                </div>
            </Layoutfull>
        </>
    )
}
