import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,IconButton,Typography,Button,Toolbar,Grid,Slide} from '@material-ui/core';
import coverPic from './image/cover.jpg';
import CRCP from './component/CRCP'
import logo from './image/logo.png'
import Report from "./component/report";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titleNav: {
    flexGrow: 1,
  },
  title: {
    color: 'white'
  },
  cover: {
    width:'100%',
    position:'fixed',
    background: `linear-gradient(0deg,rgba(0,0,0,0) 0,#000 100%), url(${coverPic}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '100vh',
    overflow: 'hidden',
    zIndex: -1
  },
  logo: {
    height: '3rem'
  }
}));

function App() {
  const [page, setPage] = React.useState('home');
  const [reportData, setReportData] = React.useState({});
  const [AnalysisPunchouts, setAnalysisPunchouts] = React.useState(0);
  const [AnalysisSlabThickness, setAnalysisSlabThickness] = React.useState(0);
  const classes = useStyles();
  const AnalysisPunchoutsFunc = (d)=>d===undefined?AnalysisPunchouts:setAnalysisPunchouts(d);
  const AnalysisSlabThicknessFunc = (d)=>d===undefined?AnalysisSlabThickness:setAnalysisSlabThickness(d);
  return (
    <div >
      <div className={classes.cover}></div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.titleNav}>
            Bonded CRCP
          </Typography>
          <div className={classes.grow}></div>
          <a href={'https://www.kict.re.kr/eng/'}>
          <img src={logo} className={classes.logo}/>
          </a>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Slide direction="up" in={page==='home'} mountOnEnter unmountOnExit>
          <Grid container spacing={5} alignItems="center" justify="center" direction={"column"} style={{height: 'calc(100vh - 64px)',width:'100%'}}>
            <Grid item>
              <Typography variant="h4" className={classes.title}>
                Bonded CRCP Overlay on Jointed Concrete Pavement Design System
              </Typography>
            </Grid>
            <Grid container item alignItems="stretch" justify="center" direction={"column"} spacing={3} style={{width:'fit-content'}}>
              <Grid item>
                <Button variant="contained" color="primary" style={{width:'100%'}} size={"large"} onClick={()=>setPage('CRCP')}>Start</Button>
              </Grid>
            </Grid>
          </Grid>
        </Slide>
        <Slide direction="up" in={page==='CRCP'} mountOnEnter unmountOnExit>
          <CRCP
              toMenu={()=>setPage('home')}
              // print={(d)=>{setReportData(d);setPage('Print')}}
              AnalysisPunchouts={AnalysisPunchoutsFunc}
              AnalysisSlabThickness={AnalysisSlabThicknessFunc}
          />
        </Slide>
        {/*<Slide direction="up" in={page==='Print'} mountOnEnter unmountOnExit>*/}
        {/*  <Report*/}
        {/*      data={reportData}*/}
        {/*      toMenu={()=>setPage('home')}*/}
        {/*      toCRCP={()=>setPage('CRCP')}*/}
        {/*      AnalysisPunchouts={AnalysisPunchoutsFunc()}*/}
        {/*  />*/}
        {/*</Slide>*/}
      </div>
    </div>
  );
}

export default App;
