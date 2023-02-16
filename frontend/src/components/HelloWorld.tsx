import React from 'react';
import { useTheme } from '../theme/ThemesProvider';

type Props = {
  title: string;
}


function HelloWorld({ title }: Props) {
  const { theme, themeType, setCurrentTheme } = useTheme();
  return (
    <h5>
      {`Hello! ${title}, you are using '${themeType}' theme at the moment!`}
      <button onClick={() => setCurrentTheme('newYork')}>Click me!</button>
    </h5>
  );
}

export default HelloWorld;