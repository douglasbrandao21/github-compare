import React from 'react';
import logo from '../../assets/logo.png';
import { Container, Form } from './style';
import CompareList from '../../components/CompareList/index';

const Main = () => (
  <Container>
    <img src={logo} alt="" />
    <Form>
      <input type="text" placeholder="usuáro/repositório" />
      <button type="submit">OK</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;
