import React from 'react';
import { getBookId, putBookId } from '../../../services/api';
import { Ibooks, MainModalProps } from '../../../global';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BasicButtons from '../../button';
import { TextFieldMui, StyleLend } from '../style';
import { initialValuesLend, validationSchemaLend } from '../validation';
import { useFormik } from 'formik';

const LendBookModal = ({ bookId, handleChangeModal }: MainModalProps) => {

	const [book, setBook] = React.useState<Ibooks>();
	const [deliveryDate, setDeliveryDate] = React.useState('text');
	const [withdrawalDate, setWithdrawalDate] = React.useState('text');

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
		initialValues: initialValuesLend,
		validationSchema: validationSchemaLend,
		onSubmit: (values) => {
			if(book){
				const rentHistory = {
					studentName: values.StudentName,
					class: values.Class,
					withdrawalDate: values.WithdrawalDate,
					deliveryDate: values.DeliveryDate,
				};
				book.rentHistory.push(rentHistory);
				putBookId(book.id, book);
				handleChangeModal('lent','main');
			}	
		},
	});
    
	if (book) {
		return (
			<StyleLend>
				<div className="box-content">
					<div className='box-text'>
						<h1>Informe os dados do aluno antes de continuar</h1>
					</div>
					<form onSubmit={formik.handleSubmit}>
						<div className='box-two-input'>
							<TextFieldMui
								type='text'
								label='Nome do Aluno'
								id='StudentName'
								variant='outlined'
								autoComplete='on'
								value={formik.values.StudentName}
								onChange={formik.handleChange}
								error={formik.touched.StudentName && Boolean(formik.errors.StudentName)} 
							/>
							<TextFieldMui
								type={withdrawalDate}
								label='Data da retirada'
								id='WithdrawalDate'
								variant='outlined'
								autoComplete='on'
								onFocus={()=> setWithdrawalDate('date')}
								onBlur={()=>{
									if (formik.values.WithdrawalDate) {
										setWithdrawalDate('date');
										return;
									}
									setWithdrawalDate('text');
								}}
								value={formik.values.WithdrawalDate}
								onChange={formik.handleChange}
								error={formik.touched.WithdrawalDate && Boolean(formik.errors.WithdrawalDate)} 
							/>
						</div>
						<div className='box-two-input'>
							<TextFieldMui
								type='text'
								label='Turma'
								id='Class'
								variant='outlined'
								autoComplete='on'
								value={formik.values.Class}
								onChange={formik.handleChange}
								error={formik.touched.Class && Boolean(formik.errors.Class)} 
							/>
							<TextFieldMui
								type={deliveryDate}
								label='Data da Entrega'
								id='DeliveryDate'
								variant='outlined'
								autoComplete='on'
								onFocus={()=> setDeliveryDate('date')}
								onBlur={()=> {
									if (formik.values.DeliveryDate) {
										setDeliveryDate('date');
										return;
									}
									setDeliveryDate('text');
								}}
								value={formik.values.DeliveryDate}
								onChange={formik.handleChange}
								error={formik.touched.DeliveryDate && Boolean(formik.errors.DeliveryDate)} 
							/>
						</div>
						<div className="box-button-lend">
							<BasicButtons
								width='272px'
								height='53px'
								bordercolor='#ADB5BD'
								backgroundcolor='#FFC501'
								type='submit'
								fontSize='0.9rem'
								textcolor= '#000000'
							>
								<AutoStoriesIcon sx={{ fontSize: '2.3rem', padding: '0px 8px'}}/>  Emprestar
							</BasicButtons>
						</div>
					</form>
				</div>
			</StyleLend>
		);
	}

	return <h1>Erro na requisição tente mais tarde</h1>;
};

export default LendBookModal;