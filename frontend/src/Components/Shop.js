import React from 'react';

import ShopHead from './ShopHead';
import MadeByUs from './MadeByUs';
import MadeByOthers from './MadeByOthers';
import Wine from './Wine';
import Questions from './Questions';
import ShopFooter from './ShopFooter';
import Preparations from './Preparations';

import '../Styles/Shop.css';

const Shop= () => {
    return (
        <div className="Shop">
            <ShopHead />
            <MadeByUs /><hr />
            <Preparations making="us" />
            <MadeByOthers /><hr />
            <Wine /><hr/>
            <Questions /><hr /><br />
            <ShopFooter />
        </div>
    )
}

export default Shop;