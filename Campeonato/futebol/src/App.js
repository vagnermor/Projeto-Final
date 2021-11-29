import './App.css';
import Jogador from "./components/Modelos/Jogador";
import Time from './components/Modelos/Time'
import Campeonato from './components/Modelos/Campeonato'
import { Container, Card } from '@material-ui/core'


function App() {
  return (

    <Container maxWidth="sm">
      <Card variant="outlined">
        <Jogador></Jogador>
      </Card>
      <Card variant="outlined">
        <Time></Time>
      </Card>
      <Card variant="outlined">
        <Campeonato></Campeonato>
      </Card>
    </Container>

  );
}

export default App;
