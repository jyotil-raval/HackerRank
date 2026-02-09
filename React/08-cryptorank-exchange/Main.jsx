import React, { useState } from 'react';
import Table from './Table';

function Main() {
	const balance = 17042.67;

	const [exchangeAmount, setExchangeAmount] = useState(null);
	const [exchangeAmountError, setExchangeAmountError] = useState('');

	const handleAmountChange = (e) => {
		const value = e.target.value;

		if (value === '') {
			setExchangeAmount(null);
			setExchangeAmountError('Amount cannot be empty');
			return;
		}

		const amt = Number(value);

		if (amt < 0.01) {
			setExchangeAmount(amt);
			setExchangeAmountError('Amount cannot be less than $0.01');
		} else if (amt > balance) {
			setExchangeAmount(amt);
			setExchangeAmountError(
				'Amount cannot exceed the available balance'
			);
		} else {
			setExchangeAmount(amt);
			setExchangeAmountError('');
		}
	};

	const hasError = exchangeAmountError !== '';

	return (
		<div className='layout-column align-items-center mx-auto'>
			<h1>CryptoRank Exchange</h1>

			<section>
				<div className='card-text layout-column align-items-center mt-12 px-8 flex text-center'>
					<label>
						I want to exchange ${' '}
						<input
							className='w-10'
							data-testid='amount-input'
							type='number'
							placeholder='USD'
							value={exchangeAmount}
							onChange={handleAmountChange}
						/>{' '}
						of my $<span>{balance}</span>:
					</label>

					{hasError && (
						<p
							data-testid='error'
							className='form-hint error-text mt-3 pl-0 ml-0'>
							{exchangeAmountError}
						</p>
					)}
				</div>
			</section>

			<Table exchangeAmount={exchangeAmount} hasError={hasError} />
		</div>
	);
}

export default Main;
