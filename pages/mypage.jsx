import React from 'react'
import Childcard from '../components/childcard'
import Layoutfull from '../components/layoutfull'

export default function Mypage(props) {
    

    return (
        <>
        <Layoutfull>
            <div className="row p-5">
                <div className="col-4">
                 <Childcard first_name="Kimani" last_name="Walker" height="5\'2" weight="135" gender="Male" dob="10-15-1994" age="27" hair="black" eyes="brown" medical_conditions="No existing medical conditions" marks="Large tatoo on right arm and chest" image="https://daisybeattyphotography.com/wp-content/uploads/2015/09/15-1790-post/head-shots-for-kids-new-york-daisy-beatty(pp_w768_h915).jpg"/>   
                </div>
                <div className="col-4">
                 <Childcard first_name="Kimani" last_name="Walker" height="5\'2" weight="135" gender="Male" dob="10-15-1994" age="27" hair="black" eyes="brown" medical_conditions="No existing medical conditions" marks="Large tatoo on right arm and chest" image="https://daisybeattyphotography.com/wp-content/uploads/2015/09/15-1790-post/head-shots-for-kids-new-york-daisy-beatty(pp_w768_h915).jpg"/>   
                </div>
                <div className="col-4">
                 <Childcard first_name="Kimani" last_name="Walker" height="5\'2" weight="135" gender="Male" dob="10-15-1994" age="27" hair="black" eyes="brown" medical_conditions="No existing medical conditions" marks="Large tatoo on right arm and chest" image="https://daisybeattyphotography.com/wp-content/uploads/2015/09/15-1790-post/head-shots-for-kids-new-york-daisy-beatty(pp_w768_h915).jpg"/>   
                </div>
            </div>
            
          
            
           
        </Layoutfull>
            
        </>
    )
}
