import React, { useEffect, useState} from 'react';
const History = (props)=>{

    const { data, onSelect, onDelete } = props;    
    
    const [elements,setElements]= useState([]);

    const deleteElement = (index) =>{
        onDelete(index);
    }

    const defineIndex = (index) =>{
        onSelect(index);
    }

    useEffect(() => {
        if(data.history){
            setElements(data.history)
        }
    }, [data]);
    
    return(
        <div>
            {elements.length>0 ? 
            <table border="1">
                <tbody>
                    <tr>
                        {
                            elements.map((item, index)=>{                                
                                return(
                                    <td key={Math.random()}>
                                        {`${item.name}`}
                                        <button onClick={()=>deleteElement(index)}>borrar</button>
                                        <button onClick={()=>defineIndex(index)}>Mostrar</button>
                                    </td>)
                        })
                        }
                    </tr>
            </tbody>
            </table>:null
            }
        </div>
        
            
        
        
    )
}

export default History;