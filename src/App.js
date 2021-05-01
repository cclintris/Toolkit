import './App.css';
import Home from './pages/Home'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh
`

// import {
//   Switch,
//   Route
// } from 'react-router-dom'

function App() {
  return (
    <Container>
      <Home></Home>
    </Container>
  );
}

export default App;
