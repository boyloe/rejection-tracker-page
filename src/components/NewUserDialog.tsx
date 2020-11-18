import React, { useState } from 'react'
import {createStyles, makeStyles} from '@material-ui/core/styles'
import { Container, Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
        display: 'flex',
        flexWrap: 'wrap',
        },
        formControl: {
        margin: 0,
        minWidth: 120,
        },
    }),
)

export const NewUserDialog = () => {
    const [isOpen, setIsOpen] = useState(false)


    const handleClickOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <Container>
            <Button variant="outlined" color='secondary' onClick={handleClickOpen}>
                Add New Rejectee
            </Button>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="new-user-dialog-title">
                <DialogTitle id="new-user-dialog-title">Enter Your name</DialogTitle>
                <DialogContent>

                </DialogContent>
            </Dialog>
        </Container>
    )
}