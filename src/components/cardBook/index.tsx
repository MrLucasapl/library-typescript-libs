import React from 'react';
import { Ibooks } from 'global';
import { CardBookStyled } from './style';

interface CardBookProps {
	value: Ibooks[];
	handleClickModal: (id: string) => void;
}

const CardBook = ({ value, handleClickModal}: CardBookProps) => {
	if (value) {
		const book = value?.map((book) => {
			return (
				<CardBookStyled key={book.id}>
					<div
						id={book.id}
						onClick={() => handleClickModal(book.id)}
					>
						<img id={book.id} src={book.image} />
						<strong id={book.id}>{book.title}</strong>
					</div>
				</CardBookStyled>
			);
		});
		return <React.Fragment>{book}</React.Fragment>;
	}
};

export default CardBook;
