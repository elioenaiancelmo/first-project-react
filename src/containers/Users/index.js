import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Topo2 from '../../assets/topo2.svg';
import Seta from '../../assets/seta.svg';
import Lixeira from '../../assets/lixeira.svg'
import H1 from '../../components/Title';
import  ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';



import { Container, Image, User } from './style';

const Users = () => {

  const [users, setUsers] = useState([]);

  const history = useHistory();
  /*  const [name, setName] = useState();
   const [age, setAge] = useState(); */

  /* function changeInputName(event){
    setName(event.target.value)
  }

  function changeInputAge(event){
    setAge(event.target.value)
  } */

  useEffect(() => {

    async function fetchUsers() {

      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter(user => user.id !== userId);

    setUsers(newUsers);
  }


  function goBackPage(){
    history.push("/");
  }


  return (
    <Container>
      <Image src={Topo2} alt="logo-imagem" />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Lixeira} alt="lixeira" /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}><img src={Seta} alt="seta" /> Valtar </Button>

      </ContainerItens>
    </Container>
  );

}

export default Users