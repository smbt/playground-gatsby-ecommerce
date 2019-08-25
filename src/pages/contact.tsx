// Libraries
import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { Typography, Container, TextField, Button } from '@material-ui/core'

// Components
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const ContactPage = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [message, setMessage] = useState(null)

    const handleSubmit = () => {
        console.warn('Sending must be implemented')
        navigate('/contactSuccess')
    }

    useEffect(() => console.log(name))

    return (
        <Layout>
            <SEO title={'contact'} />
            <Typography variant={'h6'} component={'h2'}>
                Contact us
            </Typography>
            <Container maxWidth={'sm'}>
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
                <Button onClick={handleSubmit} variant={'outlined'}>
                    send
                </Button>
            </Container>
        </Layout>
    )
}

export default ContactPage
