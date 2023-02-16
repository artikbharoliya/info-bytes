import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../theme/ThemesProvider';

export default function Card() {
	const { theme } = useTheme();

	const StyledCard = styled.div`
        width: 80%;
				background-image: linear-gradient(to right, ${theme['--primary']} , ${theme['--secondary']});
				border-radius: 8px;
				padding: 18px 18px;
				margin: 8px;
	`;


	return (
		<StyledCard>Card</StyledCard>
	)
}
