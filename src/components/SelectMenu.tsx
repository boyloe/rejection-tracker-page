import React,{useState} from 'react'
import Select from '@material-ui/core/Select'
import { createStyles, makeStyles} from '@material-ui/styles'
import { Container, FormControl, MenuItem, InputLabel } from '@material-ui/core'


const useStyles = makeStyles({
    formControl: {
        margin: 0,
        minWidth: 120
    },
    selectEmpty: {
        marginTop: 5
    }
})

const users:string[] = ['Bryan', 'Kyle', 'TJ', 'Kelsey', 'Jenn']
export const SelectMenu = () => {
    const classes = useStyles()
    const [selectedUser, setSelectedUser] = useState('Bryan Oyloe')

    const populateSelect = (userArray:string[]) => userArray.map((user:string) => <MenuItem value={user}>{user}</MenuItem>)

    return (
        <Container>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Select A User</InputLabel>
            </FormControl>
        </Container>
    )
}
