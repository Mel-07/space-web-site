export type Paths<T> = T[]
export type  PathObject = {
    id:number,
    path:string,
    pathString:string,
    pathStringNumber:string
}
export type State = {
    planetName: string,
    planetDescription : string,
    planetImage : string ,
    planetDistance: string,
    planetTravel: string,
    planetSelected: number,
    crewSliderIndex:number,
    techSliderIndex:number,
    menu:boolean
}
export type CrewImage<T> = T[]
export type TechImage<T> = T[]
export type TechImageScape = {
    landScape_img:string,
    portrait_img: string
}