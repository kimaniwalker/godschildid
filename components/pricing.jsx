import React from 'react'

import Subscriptioncard from './subscriptioncard'

export default function Pricing(props) {





    return (


        <>

            <h2 className="text-center my-4">Our Pricing Options</h2>
            <div className="container">
                <div className="row py-4 justify-content-center">

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <Subscriptioncard title="Monthly Fee" price="$6.95 / month" detail="Pay a one time fee of $12 and $6.95 monthly afterwards. Discontinue Anytime" />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <Subscriptioncard title="Annual Fee" price="$79.60 / year" detail="Pay a one time fee of $79.60 for a full year of coverage saving you 10%." />
                    </div>

                </div>
            </div>
        </>
    )






}
