import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import dataPage from '../data/data.json'
import moonImage from '../assets/destination/image-moon.png'
import marImage from '../assets/destination/image-mars.png'
import europaImage from '../assets/destination/image-europa.png'
import titanImage from '../assets/destination/image-titan.png'
import type { State } from "../data/types"
const destination = dataPage.destinations
const initialState:State = {
    planetName: destination[0].name,
    planetDescription : destination[0].description,
    planetImage : moonImage ,
    planetDistance: destination[0].distance,
    planetTravel: destination[0].travel,
    planetSelected: 0,
    crewSliderIndex:0,
    techSliderIndex:0,
    menu:false
}
export const slice  = createSlice({
    name:'space',
    initialState,
    reducers:{
        moon:(state)=>{
            state.planetDistance = destination[0].distance
            state.planetDescription = destination[0].description
            state.planetName = destination[0].name
            state.planetTravel = destination[0].travel
            state.planetImage = moonImage
            state.planetSelected = 0
        },
        mars:(state)=>{
            state.planetDistance = destination[1].distance
            state.planetDescription = destination[1].description
            state.planetName = destination[1].name
            state.planetTravel = destination[1].travel
            state.planetImage = marImage
            state.planetSelected = 1
        },
        europa:(state)=>{
            state.planetDistance = destination[2].distance
            state.planetDescription = destination[2].description
            state.planetName = destination[2].name
            state.planetTravel = destination[2].travel
            state.planetImage = europaImage
            state.planetSelected = 2
        },
        titan:(state)=>{
            state.planetDistance = destination[3].distance
            state.planetDescription = destination[3].description
            state.planetName = destination[3].name
            state.planetTravel = destination[3].travel
            state.planetImage = titanImage
            state.planetSelected = 3
        },
        crewScrollIndex:(state, payload:PayloadAction<number>)=>{
            state.crewSliderIndex = payload.payload
        },
        techScrollIndex:(state,index:PayloadAction<number>)=>{
            state.techSliderIndex = index.payload
        },
        handleMenu:(state,show:PayloadAction<boolean>)=>{
            state.menu = show.payload
        }
    }
})
 export const {moon,mars,europa,titan,crewScrollIndex,techScrollIndex,handleMenu} = slice.actions

 export default slice.reducer