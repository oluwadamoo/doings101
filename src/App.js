import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import styled from 'styled-components';
import Dashboard from './components/dashboard';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Dashboard />
    </AppContainer>
  );
}


const AppContainer = styled.div({

})
export default App;
