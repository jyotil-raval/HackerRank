import React from 'react';
import { cryptocurrencyList } from '../cryptocurrency-list';

function Table({ exchangeAmount, hasError }) {
	return (
		<div className='card card-text mt-10 mx-4'>
			<table className='mb-0'>
				<thead>
					<tr>
						<th>Cryptocurrency</th>
						<th>Exchange Rate</th>
						<th>Number of Coins</th>
					</tr>
				</thead>

				<tbody data-testid='exchange-data'>
					{cryptocurrencyList.map(({ code, name, rate }) => (
						<tr key={code}>
							<td>{name}</td>
							<td>
								1 USD = {rate} {code}
							</td>
							<td>
								{hasError
									? 'n/a'
									: ((exchangeAmount || 0) * rate).toFixed(8)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
