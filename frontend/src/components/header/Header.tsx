import React from 'react'
import styled from 'styled-components';
import { RiSettings4Fill } from 'react-icons/ri';
import { useTheme } from '../../theme/ThemesProvider';


export const Header = () => {

  const { theme } = useTheme();

  const HeaderContainer = styled.div`
    background-color: ${theme['--background']};
    width: 80%;
    display: flex;
    justify-content: flex-end;
    padding: 18px 18px;
  `;

  return (
    <HeaderContainer>
      <RiSettings4Fill />
    </HeaderContainer>
  )
}
