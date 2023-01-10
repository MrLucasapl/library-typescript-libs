import React from 'react';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import BasicButtons from 'components/button';
import ComeBack from 'components/comeBack';
import Head from 'components/head';
import { Ibooks } from 'global';
import { AddEditStyle, FormControlMui, InputFileStyled, TextFieldMui } from './style';
import { getBookId, postBook, putBookId } from 'services/api';
import { useParams } from 'react-router-dom';
import { convertBase64 } from 'util/convertBase64';
import { validationSchema } from './validation';
import { useFormik } from 'formik';

const structureBook: Ibooks = {
	'id': '',
	'title': '',
	'author': '',
	'genre': '',
	'status': {
		'isActive': true,
		'description': '',
	},
	'image': '',
	'systemEntryDate': '',
	'synopsis': '',
	'rentHistory': [{
		'studentName': '',
		'class': '',
		'withdrawalDate': '',
		'deliveryDate': '',
	}],
};

const AddEdit = () => {
	const { id } = useParams();

	const [baseImg, setBaseImg] = React.useState<string>('');
	const [type, setType] = React.useState('text');
	const [value, setValue] = React.useState<string>('');
	const [book, setBook] = React.useState<Ibooks>();
	
	React.useEffect(() => {
		if (id) {
			getBookId(id)
				.then((res) => {
					setBook(res);
					setBaseImg(res.image);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		setBook(structureBook);
	}, []);
		
	const handleClick = () =>{ 
		setBaseImg('');
	};

	const formik = useFormik({
		initialValues: {...book},
		enableReinitialize: true,
		validationSchema,
		onSubmit: () => {
			if (id) {
				const Newbook = book;
				putBookId(id, Newbook)
					.then((res) => {
						console.log(res);					
					})
					.catch((err) => {
						console.log(err);
					});
			}else{
				postBook(book)
					.then((res) => {
						console.log(res);					
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
	});

	const showInput = ()=>{
		if (baseImg == '') {
			return(
				<InputFileStyled
					id='image'
					type='file'
					onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
						convertBase64(event.target.files[0])
							.then(base64 => {
								setBook({ ...book, [event.target.id]: base64 });
								setBaseImg(base64);
								formik.handleChange({
									target: {
										name: event.target.id,
										value: base64,
									},
								});
							})
							.catch(error => {
								console.log(error);
							});
					}}
					error={formik.touched.image && Boolean(formik.errors.image)}
				/>
			);
		}
		return(
			<img src={baseImg} onClick={handleClick}/>
		);
	};
	
	if (book) {
		return (
			<AddEditStyle>
				<Head
					title='Add Books'
					content='private'
					description='O usuário com permissão pode adicionar um novo livro a plataforma.'
				/>
				<ComeBack
					id={id}
					to={id? '/home/biblioteca' : '/home'}
					value={id? 'Editar livro' : 'Cadastrar novo livro'}
				/>
				<div id='Box-Form'>
					<form onSubmit={formik.handleSubmit}>
						{showInput()}
						<TextFieldMui
							id='title'
							type='text'
							label='Título'
							autoComplete='off'
							value={book.title}
							onChange={({target}: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
								setBook({ ...book, [target.id]: target.value });
								formik.handleChange({
									target: {
										name: target.id,
										value: target.value,
									}
								});
							}}
							error={formik.touched.title && Boolean(formik.errors.title)}
							sx={{ gridArea: 'title' }}
						/>
						<TextFieldMui
							id='author'
							type='text'
							label='Autor'
							autoComplete='off'
							value={book.author}
							onChange={({target}: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
								setBook({ ...book, [target.id]: target.value });
								formik.handleChange({
									target: {
										name: target.id,
										value: target.value,
									}
								});
							}}
							error={formik.touched.author && Boolean(formik.errors.author)}
							sx={{ gridArea: 'author' }}
						/>
	
						<TextFieldMui
							id='synopsis'
							type='text'
							label='Sinopse'
							autoComplete='off'
							value={book.synopsis}
							onChange={({target}: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
								setBook({ ...book, [target.id]: target.value });
								formik.handleChange({
									target: {
										name: target.id,
										value: target.value,
									}
								});
							}}
							error={formik.touched.synopsis && Boolean(formik.errors.synopsis)}
							sx={{ gridArea: 'synopsis' }}
						/>
	
						<FormControlMui id='genre' focused={false}>
							<InputLabel>Gênero</InputLabel>
							<Select
								name='genre'
								value={value || book.genre}
								label='Gênero'
								onChange={(event: SelectChangeEvent<string>)=>{
									setValue(event.target.value);
									setBook({ ...book, [event.target.name]: event.target.value });
									formik.handleChange({
										target: {
											name: event.target.name,
											value: event.target.value
										}
									});
								}}
								error={formik.touched.genre && Boolean(formik.errors.genre)}
							>
								<MenuItem value=''>
									<em>Selecione</em>
								</MenuItem>
								<MenuItem value='Horror'>Horror</MenuItem>
								<MenuItem value='Romance'>Romance</MenuItem>
								<MenuItem value='Historia'>Historia</MenuItem>
								<MenuItem value='Fantasia'>Fantasia</MenuItem>
								<MenuItem value='Finanças'>Finanças</MenuItem>
								<MenuItem value='Autoajuda'>Autoajuda</MenuItem>
								<MenuItem value='Web Marketing'>Web Marketing</MenuItem>
								<MenuItem value='Ação e Aventura'>Ação e Aventura</MenuItem>
								<MenuItem value='Ficção Cientifica'>Ficção Cientifica</MenuItem>
							</Select>
						</FormControlMui>
	
						<TextFieldMui
							id='systemEntryDate'
							type={type}
							label='Data de entrada'
							autoComplete='off'
							onFocus={()=> setType('date')}
							onBlur={()=> {
								if (book.systemEntryDate) {
									setType('date');
									return;
								}
								setType('text');
							}}
							value={book.systemEntryDate}
							onChange={({target}: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
								setBook({ ...book, [target.id]: target.value});
								formik.handleChange({
									target: {
										name: target.id,
										value:target.value,
									}
								});
							}}
							error={formik.touched.systemEntryDate && Boolean(formik.errors.systemEntryDate)}
						/>
						<div id='Box-Buttons'>
							<BasicButtons
								width='143px'
								fontSize='0.9rem'
								height='42px'
								bordercolor='#FFC501'
								backgroundcolor='#FFC501'
								textcolor='black'
								type='submit'
							>
							SALVAR
							</BasicButtons>
	
							<BasicButtons
								width='143px'
								fontSize='0.9rem'
								height='42px'
								bordercolor='#133052'
								backgroundcolor='#FFFFFF'
								textcolor='#000000'
								type='reset'
							>
							CANCELAR
							</BasicButtons>						
						</div>
					</form>
				</div>
			</AddEditStyle>
		);
	}
};

export default AddEdit;