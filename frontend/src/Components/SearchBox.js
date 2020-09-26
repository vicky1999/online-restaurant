import React from 'react';

import {TextField} from '@material-ui/core';

import '../Styles/SearchBox.css';

const SearchBox=()=> {
    return (
        <div className="SearchBox">
            <TextField label="Search" className="search" />
        </div>
    )
}

export default SearchBox;