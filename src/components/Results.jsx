import React from 'react';
const Results = (props)=> {
    const { item } = props;
    return(
        item.name?        
        <table border="1">
            <tbody>
                <tr>
                    <td colSpan="6">{item.name}</td>
                </tr>
                <tr>
                    <td>Temperature</td>
                    <td>Pressure</td>
                    <td>Humidity</td>
                    <td>Max temperature</td>
                    <td>Min temperature</td>
                    <td>Map</td>
                </tr>
                <tr>
                <td>
                        {item.main.temp || ''} 
                    </td>
                    <td>
                        {item.main.pressure}
                    </td>
                    <td>
                        {item.main.humidity}
                    </td>
                    <td>
                        {item.main.temp_max}
                    </td>
                    <td>
                        {item.main.temp_min}
                    </td>
                    <td>
                        <img alt="map" width='100' src={item.map} />
                    </td>
                    
                </tr>
            </tbody>
        </table>
        :null
    )
};

export default Results;