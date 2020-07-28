import React from 'react';

const Title = (props)=> {
    const { title, subTitle } = props;
    return(
        subTitle ? 
        <h2>
            {title}
        </h2>
        : 
        <h1>
            {title}
        </h1>
    )
};

export default Title;