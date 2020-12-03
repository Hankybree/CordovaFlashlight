// import logo from './logo.svg';
import { PowerButton } from './components'
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  min-height: 100vh;
`

function App() {
  return (
    <Content>
      <PowerButton color="black"/>
    </Content>
  );
}

export default App;
