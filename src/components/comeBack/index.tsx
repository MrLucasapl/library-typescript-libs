import * as React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { StyleComeBack } from './style';

interface ComeBackProps {
to: string;
value: string;
}

const ComeBack = ({ to, value }: ComeBackProps) => {
	return (
		<StyleComeBack>
			<Link to={to}>
				<ArrowBackIosOutlinedIcon sx={{fontSize: 22}} /> Home <strong>/ {value}</strong>
			</Link>
		</StyleComeBack>
	);
};

export default ComeBack;