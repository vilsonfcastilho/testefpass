import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

type NewClientProps = RouteComponentProps;

const NewClient: React.FC<NewClientProps> = props => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          birthdate: Yup.date().required(),
          cpf: Yup.string()
            .required('CPF obrigatório')
            .matches(/^\d{3}.\d{3}.\d{3}-\d{2}$/, 'CPF não válido'),
          phone: Yup.string().required('Número obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          address: Yup.string().required('Endereço obrigatório'),
          obs: Yup.string().max(300, 'No máxio 300 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const users = localStorage.getItem('users');
        const usersArray = users ? JSON.parse(users) : [];

        localStorage.setItem('users', JSON.stringify([...usersArray, data]));

        props.history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [props],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastrar cliente</h1>

          <Input name="name" placeholder="Digite o nome" />
          <Input name="birthdate" placeholder="Nascimento mm/dd/aaaa" />
          <Input name="cpf" placeholder="Digite o CPF" />
          <Input name="phone" placeholder="(00) 99999-0000" />
          <Input name="email" placeholder="Digite o e-mail" />
          <Input name="address" placeholder="Digite o endereço" />
          <Input name="obs" placeholder="Digite uma observação" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default withRouter(NewClient);
