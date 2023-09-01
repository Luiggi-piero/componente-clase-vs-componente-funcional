import './App.css';
import FormSignUp from './components/FormSignUp';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import { Fragment } from 'react';

function App() {

  const handleSubmit = (valores) => {
    console.log('DESde app.js', valores);
  }

  return (
    // Fragment funciono como ng-container en angular, no genera elementos en el DOM
    // <Fragment>
    //   hola
    // </Fragment>

    // component : 'etiqueta raiz o componente raiz que envuelve todo el contenido'
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align='center'>Formulario registro</Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
