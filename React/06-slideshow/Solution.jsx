import React, { useState } from 'react';

function Slides({ slides }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	const resetCurrentSlide = () => {
		setCurrentSlide(0);
	};
	const prevCurrentSlide = () => {
		setCurrentSlide((prevIdx) => (prevIdx - 1 < 0 ? 0 : prevIdx - 1));
	};
	const nextCurrentSlide = () => {
		setCurrentSlide((prevIdx) =>
			prevIdx + 1 < slides.length ? prevIdx + 1 : prevIdx
		);
	};

	return (
		<div>
			<div id='navigation' className='text-center'>
				<button
					data-testid='button-restart'
					className='small outlined'
					onClick={resetCurrentSlide}
					disabled={currentSlide === 0}>
					Restart
				</button>
				<button
					data-testid='button-prev'
					className='small'
					onClick={prevCurrentSlide}
					disabled={currentSlide === 0}>
					Prev
				</button>
				<button
					data-testid='button-next'
					className='small'
					onClick={nextCurrentSlide}
					disabled={currentSlide === slides.length - 1}>
					Next
				</button>
			</div>
			<div id='slide' className='card text-center'>
				<h1 data-testid='title'>{slides[currentSlide].title}</h1>
				<p data-testid='text'>{slides[currentSlide].text}</p>
			</div>
		</div>
	);
}

export default Slides;
