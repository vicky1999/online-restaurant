import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import '../Styles/Preparations.css';

const dishes=[
    {
        "name": "Confit Potatoes",
        "type": "Shop Classics",
        "description": "Our confit potatoes have become rather legendary.",
        "price": "5.00"
    },
    {
        "name": "Chicken Leek pie",
        "type": "Shop Classics",
        "description": "Our confit potatoes have become rather legendary.",
        "price": "5.00"
    },
    {
        "name": "Sausage Roll",
        "type": "Shop Classics",
        "description": "Our confit potatoes have become rather legendary.",
        "price": "5.00"
    },
    {
        "name": "Dexter Beef Mince",
        "type": "Ready-To-Heat",
        "description": "Our confit potatoes have become rather legendary.",
        "price": "5.00"
    },
    {
        "name": "Chicken Tomato Orzo",
        "type": "Ready-To-Heat",
        "description": "Our confit potatoes have become rather legendary.",
        "price": "5.00"
    },
];

const types=["Shop Classics","Ready-To-Heat","Butcher","Gifts","Books"];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Preparations = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs 
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="dishes" centered
          className="tabs"
        >
          {types.map((value,index) => {
              return <Tab label={value} {...a11yProps({index})} />
          })}
        </Tabs>
      </AppBar>
      {types.map((res,index) => {
        console.log(index);
        return (
            <TabPanel value={value} index={index}>
                <div className="dishes">
                    {dishes.map((dish,index) => {
                        if(dish.type==res) {
                            return (
                                <div className="dish">
                                    <h3>{dish.name}</h3>
                                    <p>{dish.description}</p>
                                    <p>&euro; {dish.price}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </TabPanel>
        )
      })}
      
    </div>
  );
}

export default Preparations;