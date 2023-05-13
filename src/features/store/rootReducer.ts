import { combineReducers } from '@reduxjs/toolkit';
import itemSearchEngineReducer from '../itemSearchEngine/itemSearchEngineSlice';
import resourceReducer from '../resource/resourceSlice';
import resourceTypeReducer from '../resourceType/resourceTypeSlice';
import stockReducer from '../stock/stockSlice';
import transactionReducer from '../transaction/transactionSlice';

const combinedReducers = combineReducers({
  itemSearchEngine: itemSearchEngineReducer,
  resource: resourceReducer,
  resourceType: resourceTypeReducer,
  transaction: transactionReducer,
  stock: stockReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'app/resetAll') {
    state = undefined;
  }

  return combinedReducers(state, action);
};

export default rootReducer;
