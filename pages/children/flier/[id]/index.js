import { getOne } from '../../../../lib/children'
import Layout from '../../../../components/layout'
import Childcard from '../../../../components/childcard'

function SingleChild({ child }) {
    // Render data...
    console.log(child)

    return (
        <>
            <Layout>

                <Childcard child={child} flier={true} />
            </Layout>


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