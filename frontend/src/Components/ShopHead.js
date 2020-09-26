import React from 'react';

import '../Styles/ShopHead.css';

import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import SearchBox from './SearchBox';
const ShopHead=() => {
    return (
        <div className="ShopHead">
            <img src="/images/logo.png" className="logo" />
            <div className="makings">
                <a href="/shop/#made-by-us">MADE BY US</a> {" | "}
                <a href="/shop/#made-by-others">MADE BY OTHERS</a> {" | "}
                <a href="/shop/#wine">WINE</a>
            </div>
            <div className="icons">
                <Popup trigger={<IconButton><SearchIcon /></IconButton>} modal nested >
                    <SearchBox />
                </Popup>
                <IconButton><LocalMallIcon /></IconButton>
                <div className="price">
                    <div className="price-value">&euro; 0.00</div>
                </div>
            </div>

        </div>
    )
}

export default ShopHead;