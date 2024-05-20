import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState, getCountries, setCountry } from './redux';

import { Typeahead } from './typeahead';

export const COUNTRIES_RECEIVED = 'COUNTRIES_RECEIVED';
export const SET_COUNTRY = 'SET_COUNTRY';

export const FormPage = (props) => {
  // const [countries, setCountries] = useState([]);
  // const [country, setCountry] = useState('');
  const [sum, setSum] = React.useState<Sum<string>>();

  const { country, countries } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  /**
   * TODO:
   * This component currently uses setState. We would like to use Redux instead
   * - Please change the useEffect and onChange methods to dispatch actions instead
   * - Here are two lines you might need
   *    const { country, countries } = useSelector((state: IAppState) => state);
   *    const dispatch = useDispatch();
   */
  type Sum<T> = {
    a: T;
    b: number;
  };

  console.log(country, countries);

  useEffect(() => {
    dispatch(getCountries);
  }, []);

  const onChange = (choice: string) => {
    // TODO: move this into actions/redux
    dispatch(setCountry(choice));
  };

  return (
    <>
      <form>
        <div className="container">
          <label>Country: </label>
          <div className="input-block">
            <Typeahead options={countries} onChange={onChange} />
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
          You chose: {country}
        </div>
      </form>
    </>
  );
};
