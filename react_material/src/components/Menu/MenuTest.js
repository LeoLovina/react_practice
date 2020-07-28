import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from  '@material-ui/core'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

export default function MenuTest(){
    const classes = useStyles();
    const [menuopens, setMenuopens] = React.useState([]);
  
    const handleClick = (id) => {
        const menuopen = menuopens.find(x=>x.id === id);
        let newMenuOpenStatus = menuopens;
        if (menuopen){
            newMenuOpenStatus = menuopens.map((item, key) =>{
                if (item.id === id)
                    return {...item, open: !item.open};
                else 
                    return item;
            });
        }
        else {
            newMenuOpenStatus.push({id:id, open:false});
        }
        setMenuopens(newMenuOpenStatus);
    };

    const menuOpenStatus = (id) =>{
        const menuopen = menuopens.find(x=>x.id === id);
        return (menuopen? menuopen.open: false);
    }

    return (
      <div>
        <h1>Menu Test</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick(1)}
        >
          Primary
        </Button>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button ListItemIcon={<SendIcon />} ListItemText={<ListItemText primary="Sent mail" />}>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button onClick={()=>handleClick(1)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {menuOpenStatus(1) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={menuOpenStatus(1)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={()=>handleClick(2)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {menuOpenStatus(2) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={menuOpenStatus(2)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>         
        </List>
      </div>
    );
}
