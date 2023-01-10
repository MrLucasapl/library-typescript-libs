import React from 'react';
import CardHome from 'components/cardHome';
import ImgAdd from 'assets/add.png';
import ImgBook from 'assets/book.png';
import ImgHistori from 'assets/historico.png';
import { HomeStyle } from './style';
import Head from 'components/head';

const Home = () => {
	return (
		<HomeStyle>
			<Head
				title="Home"
				content="private"
				description="A maior plataforma de eBooks universitários e de formação profissional do Brasil."
			/>
			<CardHome
				to="/home/addbook"
				value="Cadastrar novo livro"
				img={ImgAdd}
				alt="imagem adicionar livro"
			/>
			<CardHome
				to="/home/biblioteca"
				value="Biblioteca"
				img={ImgBook}
				alt="imagem biblioteca"
			/>
			<CardHome
				to="/home/historico"
				value="Histórico de empréstimos"
				img={ImgHistori}
				alt="imagem do historico dos livro"
			/>
		</HomeStyle>
	);
};

export default Home;