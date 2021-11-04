import { getOne } from '../../../../lib/children'
import Layout from '../../../../components/layout'
import Childcard from '../../../../components/childcard'

function SingleChild({ child }) {
    // Render data...
    console.log(child)

    return (
        <>

            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                        <Childcard child={child} flier={true} />
                    </div>
                </div>

            </div>




        </>
    )
}

// This gets called on every request
export async function getServerSideProps({ params }) {
    // Fetch data from external API

    try {
        const res = await getOne({ id: params.id })

        const result = await JSON.stringify(res)
        const child = await JSON.parse(result)
        return { props: { child } }

    } catch (error) {
        console.log(error)
    }



}

export default SingleChild