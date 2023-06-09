import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header";
import List from './components/List';
import Map from './components/Map';
import PlaceDetails from './components/PlaceDetails';

const App = () => {
    return (
<div>
    <CssBaseline />
    <header />
    <Grid container spacing={3} style={{ width: '100%'}}>
    <Grid item xs={12} md={4}>
 <List />
    </Grid>
   
    

    <Grid item xs={12} md={8}>
    <Map />
    </Grid>
   
    </Grid>

    <h1> </h1>
</div>

    );
}