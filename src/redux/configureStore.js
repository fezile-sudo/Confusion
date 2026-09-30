import { configureStore } from '@reduxjs/toolkit';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';


export const store = configureStore({

    reducer: {

        dishes: Dishes,

        comments: Comments,

        leaders: Leaders

    }

});
