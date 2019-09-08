// Libraries
import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { Typography, Container, TextField, Button } from '@material-ui/core'

// Components
import Layout from 'components/Layout'
import SEO from 'components/Seo'

const ContactPage = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit = () => {
        // console.warn('Sending must be implemented')
        // navigate('/contactSuccess')
    }

    return (
        <Layout>
            <SEO title={'contact'} />
            <Typography variant={'h6'} component={'h2'}>
                Contact us
            </Typography>
            <Container maxWidth={'sm'}>
                <form
                    action={'https://formspree.io/simon_foster116@yahoo.de'}
                    method={'POST'}
                >
                    <TextField
                        label={'Name'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        fullWidth
                        margin={'normal'}
                    />
                    <br />
                    <TextField
                        label={'E-mail'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        fullWidth
                        margin={'normal'}
                    />
                    <br />
                    <TextField
                        label={'Message'}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        multiline
                        rows={5}
                        fullWidth
                        margin={'normal'}
                    />
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        variant={'outlined'}
                    >
                        send
                    </Button>
                </form>
            </Container>
        </Layout>
    )
}

export default ContactPage

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam voluptatum a nisi commodi, consequuntur inventore reprehenderit officiis totam harum maxime! Suscipit officiis beatae esse vitae, quisquam asperiores accusantium? Mollitia, laudantium eaque! Laborum hic dignissimos consequatur nobis placeat fuga cumque aut. Saepe perspiciatis debitis distinctio officiis! Est, libero soluta officia quasi tenetur, in, nihil corrupti repudiandae accusamus nemo omnis quia iure praesentium non esse dolores. Dicta id eveniet vitae perferendis dolores! Ullam, nemo. Inventore odit nulla molestias ipsa consequuntur aspernatur adipisci itaque. Nam, tenetur modi tempora beatae nulla animi perferendis adipisci quos, laudantium veniam voluptatum architecto debitis, commodi facilis quam!