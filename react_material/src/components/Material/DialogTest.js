import React, {useState} from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function DialogTest(){
    const [open, setOpen] = React.useState(false);

    const handleClose = () =>{
        alert('onClose');
        setOpen(false);
    }

    const handleButton = () =>{
        setOpen(true);
    }

    const handleListItemClick = value => {
        alert(value);
        setOpen(false);
      };

    return (
        <div>Dialog Test
            <Button onClick={handleButton}>Open Dialog</Button>

            <Dialog onClose={handleClose} open={open}>
                <DialogTitle id="formColumn">Select Column</DialogTitle>
                <List>
                    <ListItem checkbox onClick={() => handleListItemClick('email')}  >
                        <ListItemText primary="column A"></ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleListItemClick('address')} >
                        <ListItemText primary="column B"></ListItemText>
                    </ListItem>
                </List>
            </Dialog>

        </div>
    );
}