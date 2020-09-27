import React from 'react';

import ShopHead from './ShopHead';
import MadeByUs from './MadeByUs';
import MadeByOthers from './MadeByOthers';
import Wine from './Wine';
import Questions from './Questions';
import ShopFooter from './ShopFooter';
import Preparations from './Preparations';

import '../Styles/Shop.css';

import {ApolloProvider} from '@apollo/client';
import client from '../Client';

const Shop= () => {
    return (
    <ApolloProvider client={client}>
        <div className="Shop">
            <ShopHead />
            <MadeByUs /><br/>
            <Preparations by="us" /><hr />
            <MadeByOthers /><br/>
            <Preparations by="others" /><hr />
            <Wine /><br/>
            <Preparations by="wine" /><hr />
            <Questions /><hr /><br />
            <ShopFooter />
        </div>
    </ApolloProvider>
    )
}

export default Shop;