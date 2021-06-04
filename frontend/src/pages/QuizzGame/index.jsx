/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from '../../utils/api';
import './quizz.css';

export default function QuizzGame({ history }) {
  const initialState = {
    questions: [],
    score: 0,
    userName: '',
    dificuldade: '',
  };
  const [state, setState] = useState(initialState);

  const getQuestions = async () => {
    try {
      const response = await axios.get('api/questions?difficulty=easy&category=Filmes&quantity=10');
      console.log(response?.data);

      setState({
        ...state,
        questions: response.data.data,
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  const printQuestions = () => {
    console.log(state.questions);
  };
  return (
    <Container className="container">
      <div className="back">
        <Button variant="primary" onClick={getQuestions}>  Iniciar</Button>
        <Button variant="secondary" onClick={printQuestions}>  Print questions</Button>
        <Button variant="primary" onClick={printQuestions}>  Print questions</Button>
        <Button variant="primary" onClick={printQuestions}>  Teste</Button>
      </div>
    </Container>
  );
}
