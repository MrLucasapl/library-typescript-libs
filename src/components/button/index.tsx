import React from 'react';
import { IButtonsProps } from 'global';
import { StyledButton } from './style.js';

const BasicButtons = (format: IButtonsProps) => {
	return (
		<StyledButton
			className={format.className}
			width={format.width}
			height={format.height}
			bordercolor={format.bordercolor}
			backgroundcolor={format.backgroundcolor}
			type={format.type}
			fontSize={format.fontSize}
			variant={format.variant}
			onClick={format.onClick}
			disabled={format.disabled}
			sx={{color: format.textcolor}}
		>
			{format.children}
		</StyledButton> 
		
	);
};

export default BasicButtons;