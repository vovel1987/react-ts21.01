import React from 'react';
import head from './head.module.css'

const Header = (props) => {
    return (
        <h1 className={head.title}>
            {props.course}
        </h1>
    );
};

export default Header;