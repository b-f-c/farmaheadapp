import React from 'react';

import Page from './Page'
import MarketCard from './MarketCard'

import FlexBox from './custom/FlexBox'

export default () => {

	return (
		<Page>
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
		</Page>
	)
}