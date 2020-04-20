import React from 'react';

import MarketCard from './MarketCard'

import FlexBox from './custom/FlexBox'

export default () => {

	return (
		<div style={{width: '100%', height: '100%', padding: '24px 24px 24px 24px'}}>
			<FlexBox direction='row' pad={{between: 'small'}}>
				<FlexBox>
					<MarketCard 
						title={'Wonderful Farmers\' Market'}
						stars={3.1}
						address={'123 Cherry Lane'}
					/>
				</FlexBox>
				<FlexBox>
					<MarketCard 
						title={'Bodacious Beans'}
						stars={4}
						address={'200 Baker Street'}
					/>
				</FlexBox>
			</FlexBox>
		</div>
	)
}