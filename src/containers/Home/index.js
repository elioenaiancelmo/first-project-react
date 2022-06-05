import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Topo1 from '../../assets/topo1.svg';
import Seta from '../../assets/seta.svg';
import H1  from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';


import { Container, Image, InputLabel, Input, User } from './style';

const App = () => {

  const [users, setUsers] = useState([]);
  const history = useHistory();
  /*  const [name, setName] = useState();
   const [age, setAge] = useState(); */
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value });

    setUsers([...users, newUser]);

    history.push("/usuarios");

  }

  /* function changeInputName(event){
    setName(event.target.value)
  }

  function changeInputAge(event){
    setAge(event.target.value)
  } */

  return (
    <Container>
      <Image src={Topo1} alt="logo-imagem" />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} /* onChange={changeInputName} */ placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} /* onChange={changeInputAge} */ placeholder='Idade' />

        <Button  onClick={addNewUser}>Cadastrar <img src={Seta} alt="seta" /></Button>

      </ContainerItens>
    </Container>
  );

}

export default App