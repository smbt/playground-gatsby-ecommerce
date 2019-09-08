// Libraries
import React, { useState } from 'react'
import { Typography, Container, TextField, Button } from '@material-ui/core'

// Components
import Layout from 'components/Layout'
import SEO from 'components/Seo'

const ContactPage = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    return (
        <Layout>
            <SEO title={'contact'}/>
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
                    <br/>
                    <TextField
                        label={'E-mail'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        fullWidth
                        margin={'normal'}
                    />
                    <br/>
                    <TextField
                        label={'Message'}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        multiline
                        rows={5}
                        fullWidth
                        margin={'normal'}
                    />
                    <Button type="submit" variant={'outlined'}>
                        send
                    </Button>
                </form>
            </Container>
        </Layout>
    )
}

export default ContactPage
