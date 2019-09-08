// Node modules
import React from 'react'

// Components
import Layout from 'components/Layout'

interface Props {
    data: any
}

export default (props: Props) => {
    const data = props.data
    console.log('data', data)
    return (
        <Layout>
            <div>
                blog
            </div>
        </Layout>
    )
}
