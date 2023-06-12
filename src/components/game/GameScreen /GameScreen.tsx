import { FC, useEffect } from 'react';
import styles from './GameScreen.module.scss';
import { readCookie } from '../../signIn/helpers/readCookie';
import { useNavigate, useParams } from 'react-router-dom';
import { AnswerForm } from '../AnswerForm';
import imageOne from '../../../assets/1.png';
import imageTwo from '../../../assets/2.png';

type Level = {
  number: number;
  photo: string;
  text: string;
  answer: string;
}

const levels: Level[] = [
  {
    number: 1,
    photo: imageOne,
    text: 'Hello, this is question1! Can you do it?',
    answer: 'hi1',
  },
  {
    number: 2,
    photo: imageTwo,
    text: 'Hello, this is question2! Can you do it?',
    answer: 'hi2',
  },
]

export const GameScreen: FC = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (readCookie('token3') === undefined) {
      navigate('/login');
    }
  });

  let currentLevel: Level | undefined = undefined;

  if (id) {
    currentLevel = levels[Number(id) - 1];
  }

  return (
    <div className={styles.gameScreen}>
      {currentLevel && (
        <>
        <h2 className={styles.title}>Level {currentLevel.number} </h2>
        <div className={styles.questionBody}>
          <img src={currentLevel.photo} alt="questImg" className={styles.photo}/>
          <p>{currentLevel.text}</p>
       </div>
      <AnswerForm />
      </>
      )}
    </div >
  );
};
