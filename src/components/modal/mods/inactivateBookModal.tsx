import { useFormik } from 'formik';
import React from 'react';
import { Ibooks, MainModalProps } from '../../../global';
import { getBookId, putBookId } from '../../../services/api';
import BasicButtons from '../../button';
import CloseModal from '../closeModal';
import { InputDescription, StyleInactivate } from '../style';
import { initialValuesInactivate, validationSchemaInactivate } from '../validation';

const InactivateBookModal = ({ bookId, handleChangeModal }: MainModalProps) => {

	const [book, setBook] = React.useState<Ibooks>();

	React.useEffect(() => {
		getBookId(bookId)
			.then((res) => {
				setBook(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const formik = useFormik({
		initialValues: initialValuesInactivate,
		validationSchema: validationSchemaInactivate,
		onSubmit: (values) => {
			if(book){
				const newStatus = {
					description: values.Description,
					isActive: false,
				};
				book.status = newStatus;
				putBookId(bookId, book);
				handleChangeModal('inactive','main');
			}	
		},
	});
    
	if (book) {
		return (
			<StyleInactivate>
				<CloseModal onClick={()=>handleChangeModal('inactive','main')} />
				<div>
					<h1>Inativar Livro</h1>
				</div>
				<form onSubmit={formik.handleSubmit}>
					<InputDescription
						type='text'
						label='Descrição'
						id='Description'
						variant='outlined'
						autoComplete='off'
						value={formik.values.Description}
						onChange={formik.handleChange}
						error={formik.touched.Description && Boolean(formik.errors.Description)}
					/>
					<div className='box-button-inactivate'>
						<BasicButtons
							width='101px'
							height='53px'
							bordercolor='#ED5E5E'
							backgroundcolor='#FFFFFF'
							type='submit'
							fontSize='0.9rem'
							textcolor= '#ED5E5E'
							onClick={() => handleChangeModal('main', 'inactive')}
						>
						Inativar
						</BasicButtons>
					</div>
				</form>
			</StyleInactivate>
		);
	}

	return <h1>Erro na requisição tente mais tarde</h1>;
};

export default InactivateBookModal;