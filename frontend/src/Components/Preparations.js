import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Dish from './Dish';

import '../Styles/Preparations.css';

import {gql, useQuery} from '@apollo/client';



// const types=["Shop Classics","Ready-To-Heat","Butcher","Gifts","Books"];

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

  let types=[]
  const typesQuery=gql`
    query types($by: String) {
      types(by:$by)
    }
  `;
  const types_data = useQuery(typesQuery, {variables: {by: props.by}});
  if(types_data.loading) types=["loading"];
  if(types_data.error) {
    types=["error!"];
  }
  if(types_data.data) {
    types=types_data.data.types;
  }
  // To Get Dishes by ....
  let dishes=[]
  const dishQuery=gql`
    query dish($by:String!)
    {
      dish(by:$by) {
        name
        description
        type
        price
      }
    }
  `;
  const {loading,err,data} = useQuery(dishQuery,{
    variables: {by: props.by }
  });
  if(loading) return <p>Loading...</p>;
  if(err) return <p> Error...!</p>;
  if(data) {
    dishes=data.dish;
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
          return (
              <TabPanel value={value} index={index} className="tab-data">
                  <div className="dishes">
                      {dishes.map((dish,index) => {
                          if(dish.type==res) {
                              return (
                                  <div className="dish">
                                    <Dish name={dish.name} description={dish.description} price={dish.price} />
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
}

export default Preparations;