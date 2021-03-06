import React from 'react';
import { scroller } from 'react-scroll'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: -100
        });
        props.onClose(false)
    }

    return (
       <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
       >
            <List component='nav'>
                <ListItem 
                    button
                    onClick={() => scrollToElement("eventStarts")}
                >
                    L'evenement commence dans...
                </ListItem>

                <ListItem 
                    button
                    onClick={() => scrollToElement("venueInfo")}
                >
                    Venue INFO
                </ListItem>

                <ListItem 
                    button
                    onClick={() => scrollToElement("highlights")}
                >
                    En quelques mots
                </ListItem>

                <ListItem 
                    button
                    onClick={() => scrollToElement("pricing")}
                >
                    Prix
                </ListItem>

                <ListItem 
                    button
                    onClick={() => scrollToElement("location")}
                >
                    Lieux
                </ListItem>
            </List>
       </Drawer>
    );
};

export default SideDrawer;