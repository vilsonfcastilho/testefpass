import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiTrash2 } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Header, Clients } from './styles';

interface User {
  id: number;
  name: string;
  birthdate: Date;
  cpf: string;
  phone: string;
  email: string;
  address: string;
  obs: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const usersStorage = localStorage.getItem('users');
    setUsers(usersStorage ? JSON.parse(usersStorage) : []);
  }, []);

  function handleSearch(): void {
    formRef.current?.getData();

    const nameFilter = formRef.current?.getFieldValue('name');

    setFilter(nameFilter.toLowerCase());
  }

  return (
    <>
      <Header>
        <h1>Dashboard</h1>
        <Link to="/newclient">Novo Cliente</Link>
      </Header>

      <Form ref={formRef} onSubmit={handleSearch}>
        <Input name="name" placeholder="Procure pelo nome" />
        <Button type="submit">Pesquisar</Button>
      </Form>

      <Clients>
        {users
          .filter(user => user.name.toLowerCase().includes(filter))
          .map(user => (
            <div key={user.name}>
              <div className="content">
                <strong>Nome</strong>
                <p>{user.name}</p>

                <strong>Nascimento</strong>
                <p>{user.birthdate}</p>

                <strong>CPF</strong>
                <p>{user.cpf}</p>

                <strong>Celular</strong>
                <p>{user.phone}</p>

                <strong>E-mail</strong>
                <p>{user.email}</p>

                <strong>Endereço</strong>
                <p>{user.address}</p>

                <strong>Observação</strong>
                <p>{user.obs}</p>
              </div>

              <button type="button">
                <FiTrash2 size={24} color="#fff" />
              </button>
            </div>
          ))}
      </Clients>
    </>
  );
};

export default Dashboard;
