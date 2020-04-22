import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as marketsActions from '../../redux/actions/markets/marketsActions';
import FlexBox from '../custom/FlexBox';
import MarketCard from '../MarketCard';
import Page from '../Page';

const mapStateToProps = (state) => ({
  ...state.markets,
});

const Markets = (props) => {
  const { markets } = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(marketsActions.fetchMarkets());
  }, []);

  return (
    <Page>
      <FlexBox direction="row" pad={{ between: 'small' }}>
        <FlexBox>
          <MarketCard
            title={'Wonderful Farmers\' Market'}
            stars={3.1}
            address="123 Cherry Lane"
          />
        </FlexBox>
        <FlexBox>
          <MarketCard
            title="Bodacious Beans"
            stars={4}
            address="200 Baker Street"
          />
        </FlexBox>
      </FlexBox>
    </Page>
  )
};

export default Markets;
