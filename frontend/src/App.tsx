import './App.css';
import HelloWorld from './components/HelloWorld';
import { ThemesProvider } from './theme/ThemesProvider';

function App() {
  return (
    <ThemesProvider>
      <HelloWorld title='Artik' />
    </ThemesProvider>
  );
}

export default App;
