import logo from './logo.svg';
import './App.css';
import { UserProvider } from './context/UserContext'; 
import UserDisplay from './components/UserDisplay'; 
import UserInput from './components/UserInput'; 
import { ThemeProvider } from './context/ThemeContext'; 
import ThemeToggle from './components/ThemeToggle'; // Importa el nuevo componente
import ThemedComponent from './components/ThemedComponent'; // Importa el componente con tema

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <UserDisplay />
            <UserInput />
            <ThemeToggle /> {/* Componente para cambiar el tema */}
            <ThemedComponent /> {/* Componente que cambia su estilo */}
          </header>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
