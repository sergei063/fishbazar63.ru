import React from 'react';

const Iinfo = (props) => {
    return (
        <img src={require('../../img/design/i/i.png')}
             srcSet={`${require('../../img/design/i/i2x.png')} 2x, ${require('../../img/design/i/i3x.png')} 3x`}
             width='18px' height='18px'></img>
    );
}

export default Iinfo;