import { getOne } from '../../../../lib/children'
import Layout from '../../../../components/layout'
import Childcardedit from '../../../../components/childcardedit'
import { useUser } from '../../../../lib/hooks'

function SingleChildEdit({ child }) {
    const user = useUser({ redirectTo: '/login' })
    // Render data...
    console.log(child)

    return (
        <>
            <Layout>
                <Childcardedit child={child} user={user} />
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

export default SingleChildEdit