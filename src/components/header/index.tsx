import React from 'react';
import Logo from '../../assets/Logo.png';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HeaderStyle } from './style';
import { Link } from 'react-router-dom';

const Header = ({ name }:{name: string}) => {
	const [isActive, setIsActive] = React.useState<boolean>(false);

	function showMenu(): void {
		setIsActive((current: boolean) => !current);
	}

	function logOut(): void {
		localStorage.removeItem('user');
	}

	return (
		<HeaderStyle display={isActive? 'flex' : 'none'}>
			<img src={Logo} alt="imagem do logo" />
			<nav onClick={showMenu}>
				<div id="menu">
					<PersonIcon sx={{ color: '#FFC501' }}/>
					<p>{name}</p>
					<ExpandMoreIcon/>
				</div>
				<ul id="options-menu">
					<li>
						<Link onClick={logOut} to="/">
							Sair
						</Link>
					</li>
				</ul>
			</nav>
		</HeaderStyle>
	);
};

export default Header;
