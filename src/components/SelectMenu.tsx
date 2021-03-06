import React,{useState} from 'react'
import Select from '@material-ui/core/Select'
import { createStyles, makeStyles} from '@material-ui/styles'
import { Container, FormControl, MenuItem, InputLabel } from '@material-ui/core'


const useStyles = makeStyles({
    formControl: {
        marginLeft: 400,
        marginTop: 200,
        minWidth: 120,
        
    },
    selectEmpty: {
        marginTop: 5
    },
    root: {
        width: '100%',
        maxWidth: 10000,        
    }
})

const users:string[] = ['Bryan', 'Kyle', 'TJ', 'Kelsey', 'Jenn']
export const SelectMenu = () => {
    const classes = useStyles()
    const [selectedUser, setSelectedUser] = useState('Bryan Oyloe')

    const populateSelect = (userArray:string[]) => {
        return userArray.map((user:string) => <MenuItem value={user}>{user}</MenuItem>)
    }

    const handleSelectChange = (event:React.ChangeEvent<{value: unknown}>) => {
        setSelectedUser(event.target.value as string)
    }

    return (
        <Container className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel id="select-label">Select A User</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    value={selectedUser}
                    onChange={handleSelectChange}
                >
                    {populateSelect(users)}
                </Select>
            </FormControl>
        </Container>
    )
}
