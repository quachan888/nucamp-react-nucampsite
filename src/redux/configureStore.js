import { createStore, combineReducers } from 'redux';
import { Comments } from './comments';
import { Campsites } from './campsites';
import { Promotions } from './promotions';
import { Partners } from './partners';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );
    return store;
};
