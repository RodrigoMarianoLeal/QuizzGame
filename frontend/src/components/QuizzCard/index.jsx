import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

export default function QuizzCard({questions}) {

  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState(questions);
  return (
    <Container className="container">

      <div className="Titulo"> Quizz Game</div>

      <Container>
        <Row>
          <p className="enunciado">{questions[questionNumber].question}</p>
        </Row>
        <Row>
          <Button></Button>
          <Button></Button>
        </Row>
        <Row>
          <Button></Button>
          <Button></Button>
        </Row>
        <Row>
          <Button>Next</Button>
        </Row>
      </Container>
    </Container>
  );
}
