import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



export const Header = () => {
    return(
        <Container>
            <Typography variant='h1' component='h2' >
                Flatiron Rejection Tracker!!
            </Typography>
        </Container>
    )
}