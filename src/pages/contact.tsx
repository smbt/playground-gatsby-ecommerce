// Libraries
import React, { useState } from 'react'
import { Container, TextField, Button } from '@material-ui/core'

// Components
import Layout from 'components/Layout'

const ContactPage = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    return (
        <Layout footerPosition={'absolute'}>
            <h1> Contact us </h1>
            <Container maxWidth={'sm'}>
                <form
                    action={'https://formspree.io/simon.brandt@htw-dresden.de'}
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
                        label={'Email'}
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
