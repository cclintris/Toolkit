import "./App.css";
import Home from "./pages/views/Home";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store/index";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Home></Home>
      </Container>
    </Provider>
  );
}

export default App;
