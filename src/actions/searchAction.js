import axios from 'axios';
const api ='5722cf0cfbd1e9c580b99e42bdb1af1d'
const SEARCH = 'SEARCH';
const DELETE_SEARCH = 'DELETE_SEARCH';

export const searchAction = (value)=>({
    type: SEARCH,
    value
})

export const searchActionA = (value) => dispatch =>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${api}`)
    .then(({data})=>{
        const zoom = 4;
        const lat = Math.floor((1-Math.log(Math.tan(data.coord.lat*Math.PI/180) + 1/Math.cos(data.coord.lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))
        const lon = Math.floor((data.coord.lon+180)/360*Math.pow(2,zoom))

        dispatch(searchAction({
            id: data.id,
            name: data.name,
            coords: data.coord,
            main: data.main,
            map: `https://tile.openweathermap.org/map/temp_new/${zoom}/${lat}/${lon}.png?appid=${api}`
        }));
        
    }).catch((err)=>{
        alert('no se encontro ninguna coincidencia')
    })
}

export const deleteSearch = (index)=>{
    return {
        type: DELETE_SEARCH,
        index
    }
}

 