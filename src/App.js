import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Login />
      </Container>
    </div>
  );
}

export default App;
