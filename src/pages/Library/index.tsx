import React from 'react';
import CardBook from '../../components/cardBook';
import ComeBack from '../../components/comeBack';
import Head from '../../components/head';
import { Ibooks } from '../../global';
import SearchIcon from '@mui/icons-material/Search';
import { getAllBooks } from '../../services/api';
import { LibraryStyles, TextFieldMui } from './style';  
import BasicButtons from '../../components/button';
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { filterBooks } from '../../util/filterBooks';
import Modal from '../../components/modal';

type TInputField = {
	name: string;
	value: string;
};

const inputField: TInputField[]  = [
	{
		name: 'search',
		value: '',
	},
	{
		name: 'filter',
		value: '',
	},
];

const Library = () => {

	const { showModal, handleClickModal} = Modal();

	const [books, setBooks] = React.useState<Ibooks[]| []>([]);
	const [copyBooks, setCopyBooks] = React.useState<Ibooks[] | []>([]);
	const [formSave, setformSave] = React.useState(
		inputField.reduce((acc, field) => {
			return { ...acc, [field.name]: '' };
		}, {search: '', filter: '',})
	);
	
	React.useEffect(() => {
		getAllBooks()
			.then((res) => {
				setBooks(res);
				setCopyBooks(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
		setformSave({ ...formSave, [target.name]: target.value });
	};

	const handleSubmit = (event: React.FormEvent) => {		
		event.preventDefault();
		filterBooks(formSave.search, formSave.filter, books, setCopyBooks);
	};

	return (
		<LibraryStyles>
			<Head
				title="Biblioteca"
				content="private"
				description="A página mostra todoa os livros que o usuário pode alugar."
			/>
			<ComeBack
				to="/home"
				value="Cadastrar novo livro"
			/>
			<form className="box-component" onSubmit={handleSubmit}>
				<div className='box-search'>
					<TextFieldMui
						InputProps={{startAdornment: (<SearchIcon sx={{color: '#ADB5BD', marginRight: '5px'}}/>)}}
						label=''
						name='search'
						placeholder='E-mail'
						variant='outlined'
						autoComplete='off'
						value={formSave.search}
						onChange={handleChange}
					/>
					<BasicButtons
						width='82px'
						height='37px'
						fontSize='0.8rem'
						bordercolor='#FFC501'
						backgroundcolor='#FFC501'
						textcolor='black'
						type='submit'
					>
						Buscar
					</BasicButtons>
				</div>
				<FormControl id="filter" focused={false} sx={{ m: 1, minWidth: 170}}>
					<InputLabel>Filtrar</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						name="filter"
						value={formSave.filter}
						label="Filtrar"
						onChange={handleChange}
					>
						<MenuItem value="">
							<em>Selecione</em>
						</MenuItem>
						<MenuItem value='genre'>Gênero</MenuItem>
						<MenuItem value='author'>Autor</MenuItem>
						<MenuItem value='systemEntryDate'>Data de entrada</MenuItem>
					</Select>
				</FormControl>
			</form>

			<div id="box-books">
				<CardBook
					value={copyBooks}
					handleClickModal={handleClickModal}
				/>
			</div>
			{showModal()}
		</LibraryStyles>
	);
};

export default Library;