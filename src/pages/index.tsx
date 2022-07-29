import React from "react";
import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../component/Chart";
import Deposits from "../component/Deposits";
import Deposits2 from "../component/Deposit_somme_vaccin";
import Slider_zone from "../component/Slider";
import { Camembert } from "../component/PieChart";
import { ToggleButtonPerso } from "../component/RadioButton";
import { ThemeProvider } from "@material-ui/core/styles";
// import theme,{CustomTheme} from '../../custom.d';
import Maps from "../component/Maps";
import BarChartWrap from "../component/BarChart";
import { Navbar, NavItem } from "../component/navbar/navbar";
// import theme from '../types/theme';
import theme from "../../custom.d";
// import {DefaultTheme} from '@material-ui/core/styles'

import Login from "../Login/Login";
import { test, get_login } from "../fonction/fonction";

import  MenuContainer  from "../component_pate/slide";
import Corps from "../component_pate/corps";
const drawerWidth = 0;
import 'bootstrap/dist/css/bootstrap.css';

// const useStyles = makeStyles((theme) => ({
//   // target: {
//   //   backgroundColor: theme.palette.primary
//   // },
//   root: {
//     display: "block",
//     // position:'absolute'
//   },
//   barchart_container: {
//     [theme.breakpoints.up("sm")]: {
//       width: `calc(100% - 260px)`,
//     },
//     [theme.breakpoints.down("sm")]: {
//       width: "100%",
//     },
//   },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   menuButtonHidden: {
//     display: "none",
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: "center",
//   },
//   drawerPaper: {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: "hidden",
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing(7),
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9),
//     },
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: "100vh",
//     overflow: "auto",
//     minWidth: "700px",
//     // zIndex:-1
//   },
//   container: {
//     paddingTop: theme.spacing(0),
//     paddingBottom: theme.spacing(2),
//     flexWrap: "nowrap",
//     // zIndex:-3
//   },
//   paper: {
//     padding: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//     display: "flex",
//     overflow: "visible",
//     flexDirection: "column",
//     height: "auto",
//     // backgroundColor: theme.palette.secondary.bgPaper
//   },
//   paper_row: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "visible",
//     flexDirection: "row",
//   },
//   paper_droite: {
//     padding: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//     display: "flex",
//     overflow: "visible",
//     flexDirection: "column",
//     alignContent: "center",
//     boxSizing: "border-box",
//     justifyContent: "center",
//   },
//   containerprinc: {
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2),
//     paddingRight: "0.75rem",
//     paddingLeft: "0.75rem",
//     flexWrap: "nowrap",
//     width: "100%",
//     maxWidth: "1105px",
//   },
//   fixedHeight: {
//     height: 350,
//   },
//   fixedWidth: {
//     width: 600,
//   },
//   fixedHeightx3: {
//     height: 240,
//   },
//   flexRow: {
//     display: "flex",
//     overflow: "visible",
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
// }));

export default function Dashboard() {
  // const classes = useStyles();

  // const fixedHeightPaper = clsx(classes.paper);
  // const paper_droite = clsx(classes.paper_droite);

  return (
    <React.StrictMode>
      <div className={"h-100 overflow-hidden"}>
        {/* <CssBaseline /> */}

        <Navbar>
          {/* <NavItem></NavItem> */}
        </Navbar>
        {/* <Slide /> */}
        
        <MenuContainer />
        {/* <MenuSvg /> */}
        <Corps />
        {/* <main className={}> */}
          {/* <div className={} /> */}
          {/* <video
            className={"videoFront"}
            src={"/proutVideo.mp4"}
            autoPlay
            loop
            muted
          /> */}
          {/* </div> */}
        {/* </main> */}
      </div>
    </React.StrictMode>
  );
}
