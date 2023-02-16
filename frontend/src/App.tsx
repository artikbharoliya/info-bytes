import './App.css';
import Card from './components/card/Card';
import { ThemesProvider } from './theme/ThemesProvider';
import styled from 'styled-components';
import { Header } from './components/header/Header';

function App() {
  const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100vh;
  `;

  const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
  `;
  return (
    <ThemesProvider>
      <AppContainer>
        <Header />
        <CardContainer>
          <Card />
        </CardContainer>
      </AppContainer>
    </ThemesProvider>
  );
}

export default App;
