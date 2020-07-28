import React from 'react';

const Search = (props)=>{

    const { labelButton, onSearch, placeholder, getValue } = props;

    const changeText = (x) =>{    
        getValue(x.target.value);
    }

    const submit = (ev)=>{
        ev.preventDefault();
        onSearch();
    }

    return(
        <form onSubmit={submit}>
            <input
                type="text"
                name="city"
                placeholder={placeholder}
                onChange={changeText}
            />
            <button>{labelButton}</button>
        </form>
    )
};

export default Search;