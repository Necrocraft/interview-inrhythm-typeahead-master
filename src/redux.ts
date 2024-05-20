import axios from 'axios';
import { stat } from 'fs';
import { Reducer } from 'redux';
import { SET_COUNTRY, COUNTRIES_RECEIVED } from './form-page';

/**
 * =========================================================
 * ACTIONS
 * =========================================================
 */

export const getCountries = async (dispatch) => {
  const url = `/api/countries.json`;
  const response = await axios.get(url);
  dispatch({ type: COUNTRIES_RECEIVED, payload: response.data });
};

export const setCountry = (val) => (dispatch) => {
  dispatch({ type: SET_COUNTRY, payload: val });
};

//   TODO:
//   - Implement getCountries
//   - Use Axios or fetch to get the countries from `/api/countries.json`
//   - Store the result in the reducer

//   TODO:
//   - Implement setCountry
//   - Store the country in the reducer

/**
 * =========================================================
 * REDUCER
 * =========================================================
 */

export interface IAppState {
  //    TODO:
  countries: string[];
  country: string;
  //    - Implement countries as an array of strings
  //    - Implement country as a string
}

// TODO: Initialize app state
const initialState: IAppState = {
  countries: [],
  country: '',
};

export const reducer: Reducer<IAppState> = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  if (action.type === COUNTRIES_RECEIVED) {
    newState.countries = action.payload;
    return newState;
  }

  if (action.type === SET_COUNTRY) {
    newState.country = action.payload;
    return newState;
  }

  return newState;

  //    TODO:
  //    - Implement case COUNTRIES_RECEIVED
  //    - Store the countries in the reducer

  //    TODO:
  //    - Implement case SET_COUNTRY
  //    - Store the country in the reducer
};
