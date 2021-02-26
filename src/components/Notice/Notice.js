import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import NoticeDetails from '../../components/NoticeDetails/NoticeDetails';
function Notice(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="Notice"
      hidden={value !== index}
      id={`scrollable-auto-Notice-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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

Notice.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-Notice-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className={classes.root}>
      <h2 className='text-primary'>Latest Notices</h2>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Exam Related Notice" {...a11yProps(0)} />
          <Tab label="21st February" {...a11yProps(1)} />
          <Tab label="Semester Fee (MSc)" {...a11yProps(2)} />
          <Tab label="COVID-19 Notice" {...a11yProps(3)} />
          <Tab label="Circular" {...a11yProps(4)} />
          <Tab label="Admission" {...a11yProps(5)} />
          <Tab label="Hall Management" {...a11yProps(6)} />
          <Tab label="Regestration Fee" {...a11yProps(7)} />
          <Tab label="Dhaka marathon" {...a11yProps(8)} />
          <Tab label="Holiday" {...a11yProps(9)} />

        </Tabs>
        </AppBar>
        <Notice value={value} index={0}>
          <NoticeDetails value = {value}></NoticeDetails>
        </Notice>
        <Notice value={value} index={1}>
          <NoticeDetails value = {value}></NoticeDetails>
        </Notice>
        <Notice value={value} index={2}>
          <NoticeDetails value = {value}></NoticeDetails>
        </Notice>
        <Notice value={value} index={3}>
          <NoticeDetails value = {value}></NoticeDetails>
        </Notice>
        <Notice value={value} index={4}>
          <NoticeDetails value = {value}></NoticeDetails>
        </Notice>
        <Notice value={value} index={5}>
          <NoticeDetails value = {value}></NoticeDetails>
        </Notice>
        <Notice value={value} index={6}>
          <NoticeDetails value = {value}></NoticeDetails>
        </Notice>
        <Notice value={value} index={7}>
          <NoticeDetails value = {value}></NoticeDetails>
        </Notice>
        <Notice value={value} index={8}>
          <NoticeDetails value = {value}></NoticeDetails>
        </Notice>
        <Notice value={value} index={9}>
          <NoticeDetails value = {value}></NoticeDetails>
        </Notice>
      </div>
    </div>
  );
}