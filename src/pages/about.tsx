// Node modules
import React, { useEffect, useState } from 'react'

// Components
import Layout from 'components/Layout'
import { Box, Grid, CircularProgress } from '@material-ui/core'

export default () => {
    const [tweetsDynamic, setTweetsDynamic] = useState<{}[] | null>(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setTweetsDynamic(data)
            })
    }, [])

    return (
        <Layout>
            <h1>About our Shop</h1>
            <h2>Our Story</h2>
            <Box style={{display: 'flex', textAlign: 'justify'}}>
                <Box style={{padding: 10}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                    corporis cupiditate dignissimos, et illum laborum molestias neque
                    nesciunt nihil numquam odio odit omnis quas quis, repellat vel
                    veritatis! Consectetur, cumque eligendi expedita facilis iusto
                    labore laboriosam nihil nobis perferendis porro possimus qui quia,
                    tempora temporibus voluptas?
                </Box>
                <Box style={{padding: 10}}>
                    Aut eaque enim exercitationem explicabo
                    impedit rerum ullam veniam. Amet cupiditate delectus distinctio
                    doloribus est exercitationem hic incidunt magni maxime nesciunt,
                    optio praesentium quam quis reprehenderit saepe, sequi similique
                    temporibus ut veniam voluptatum! Aliquid amet at dignissimos dolore
                    dolorum ex facere illo itaque magnam, maiores minus officia
                    provident quaerat repellat reprehenderit sapiente sequi sit!
                    Aut eaque enim exercitationem explicabo
                    impedit rerum ullam veniam. Amet cupiditate delectus distinctio
                    doloribus est exercitationem hic incidunt magni maxime nesciunt,
                    optio praesentium quam quis reprehenderit saepe, sequi similique
                    temporibus ut veniam voluptatum! Aliquid amet at dignissimos dolore
                    dolorum ex facere illo itaque magnam, maiores minus officia
                    provident quaerat repellat reprehenderit sapiente sequi sit!
                </Box>
            </Box>
            <br/>
            <br/>
            <Box>
                <h2>See our lates tweets here</h2>
                <Grid container spacing={6} style={{ justifyContent: 'center' }}>
                    <Grid item xs={10} sm={5}>
                        <h3>Fetched during build time</h3>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <h3>
                            Fetched during run time
                        </h3>
                        {tweetsDynamic ? (
                            tweetsDynamic.map((tweet: any) => (
                                <div
                                    key={tweet.id}
                                    style={{ marginBottom: 20 }}
                                >
                                    <div>{tweet.name}</div>
                                </div>
                            ))
                        ) : (
                            <CircularProgress style={{ margin: 'auto' }}/>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}
