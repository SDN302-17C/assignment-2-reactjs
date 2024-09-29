import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import HomePage from './components/HomePage';

const QuizList = lazy(() => import('./components/quizzes/QuizList'));
const QuizDetail = lazy(() => import('./components/quizzes/QuizDetail'));
const CreateQuiz = lazy(() => import('./components/quizzes/CreateQuiz'));
const UpdateQuiz = lazy(() => import('./components/quizzes/UpdateQuiz'));
const QuestionList = lazy(() => import('./components/questions/QuestionList'));
const QuestionDetail = lazy(() => import('./components/questions/QuestionDetail'));
const CreateQuestion = lazy(() => import('./components/questions/CreateQuestion'));
const UpdateQuestion = lazy(() => import('./components/questions/UpdateQuestion')); 

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quizzes" element={<QuizList />} />
            <Route path="/quizzes/:quizID" element={<QuizDetail />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />
            <Route path="/questions" element={<QuestionList />} />
            <Route path="/questions/:questionID" element={<QuestionDetail />} />
            <Route path="/create-question" element={<CreateQuestion />} />
            <Route path="/update-quiz/:quizID" element={<UpdateQuiz />} />
            <Route path="/update-question/:questionID" element={<UpdateQuestion />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;