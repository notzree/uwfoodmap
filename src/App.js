import React, {useState,useEffect,createRef} from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api";
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
const App = () =>{
const [places,setPlaces] = useState([]);
    const [coordinates,setCoordinates] = useState({});
    const [bounds,setBounds] = useState({});
    const [childClicked,setChildClicked]= useState(null);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
            setCoordinates({lat:latitude, lng: longitude});
            console.log({lat:latitude});
            console.log({lng:longitude});
        })
    },[]);

    useEffect(()=> {
        
        getPlacesData(bounds.sw, bounds.ne)
        .then((data)=>{
            setPlaces(data);
            console.log(data);
           
        })
    },[coordinates,bounds])

    return(
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing = {3} width = '100%'>
                <Grid item xs={12} md = {4}>        {/* This grid is for the List. xd and md specify sizing*/}
                    <List places = {places} childClicked = {childClicked}/>
                </Grid>
                <Grid item xs={12} md = {8}>        {/* This grid is for the List*/}
                    <Map 
                    setCoordinates = {setCoordinates}
                    setBounds = {setBounds}
                    coordinates = {coordinates}
                    places = {places}
                    setChildClicked ={setChildClicked}
                    />
                </Grid>
            </Grid>

        </>

    );
}
export default App;