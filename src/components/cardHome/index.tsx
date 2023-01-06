import React from 'react';
import { Link } from 'react-router-dom';
import { CardsStyle } from './style';

interface CardHomeProps {
value: string;
img: string;
alt: string;
to: string;
}

const CardHome = ({ value, img, alt, to }: CardHomeProps) => {
	return (
		<CardsStyle>
			<Link to={to}>
				<span>
					<img src={img} alt={alt} />
				</span>
				<div>
					<p>{value}</p>
				</div>
			</Link>
		</CardsStyle>
	);
};

export default CardHome;