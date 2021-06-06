/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from '../../utils/api';
import './quizz.css';
import QuizzCard from '../../components/QuizzCard';

export default function QuizzGame({ history }) {
  const initialState = {
    questions: [],
  };
  const [state, setState] = useState(initialState);
  const [questions, setQuestions] = useState();
  const [showCardGame, setShowCardGame] = useState(false);

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

  const prepareQuestions = () => {
    const newQuestions = state.questions.map((item) => ({ enunciado: item.question, correta: item.correct_answer, alternativas: item.incorrect_answers.concat([item.correct_answer]).sort(() => ((Math.random() > 0.5) ? 1 : -1)) }));
    setQuestions(newQuestions);
    console.log(newQuestions);
  };

  const getQuizzGameCard = () => {
    setShowCardGame(true);
  };
  const printQuestions = () => {
    console.log(state.questions);
  };
  return (
    <Container className="container">
      <div className="back">
        <Container>
        {showCardGame ? <QuizzCard questions={questions} /> : (
<div>
        <Button variant="primary" onClick={getQuestions}>  Iniciar</Button>
        <Button variant="secondary" onClick={prepareQuestions}>  Preparar Questões</Button>
        <Button variant="primary" onClick={getQuizzGameCard}>  Iniciar jogo</Button>
</div>
        )}
        </Container>
      </div>
    </Container>
  );
}
