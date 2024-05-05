# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![home](./space%20web%20screenshot/FireShot%20Capture%20001%20-%20Space%20tourism%20-%20home%20page.png)
![destination](./space%20web%20screenshot/FireShot%20Capture%20002%20-%20Space%20tourism%20-%20destination.png)
![crew](./space%20web%20screenshot/FireShot%20Capture%20003%20-%20Space%20tourism%20-%20crew.png)
![technology](./space%20web%20screenshot/FireShot%20Capture%20004%20-%20Space%20tourism%20-%20technology.png)



### Links

- Solution URL: [solution URL](https://space-web-site-seven.vercel.app/technology)
- Live Site URL: [Live](https://space-web-site-seven.vercel.app/technology)

## My process
I use vite-react, tailwind, redux-toolkit,lottie-react and react router dom 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Tailwind
- ReduxToolKit
- Lottie-react
- React router dom
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library



### What I learned

I leant ReduxToolKIt


```js
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
```


### Useful resources

- [Redux](https://redux.js.org/) - This helped me setup redux
- [Tailwind](https://tailwindcss.com/)- styling

## Author

- Website - [okocha emeka chinonso](https://www.your-site.com)
- Frontend Mentor - [@Mel-07](https://www.frontendmentor.io/profile/@Mel-07)
- Twitter - [@Nuel_70](https://x.com/nuel_70)

