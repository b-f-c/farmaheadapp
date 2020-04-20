import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as marketsActions from '../../redux/actions/markets/marketsActions';

const mapStateToProps = (state) => ({
  ...state.markets,
});

const Markets = (props) => {
  const { markets } = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(marketsActions.fetchMarkets());
  }, []);

  return `
    <div></div>
  `;
};

export default Markets;
