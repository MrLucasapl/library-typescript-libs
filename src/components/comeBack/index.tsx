import * as React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { StyleComeBack } from './style';

interface ComeBackProps {
id?: string;
to: string;
value: string;
}

const ComeBack = ({ id, to, value }: ComeBackProps) => {
	return (
		<StyleComeBack>
			<Link to={ id ? `${to}/${id}` : to}>
				<ArrowBackIosOutlinedIcon sx={{fontSize: 22}} /> {id? 'Biblioteca': 'Home'} <strong>/ {value}</strong>
			</Link>
		</StyleComeBack>
	);
};

export default ComeBack;