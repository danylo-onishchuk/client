import { FC } from 'react';
import { Form, Field } from 'react-final-form'
import styles from './AnswerForm.module.scss';
import { useNavigate } from 'react-router-dom';

export const AnswerForm: FC = () => {
  const navigate = useNavigate();

  const onSubmit = (values: {password: string}) => {
    navigate('/game/2')
  };

  return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <Field name='password'>
              {({ input, meta }) => (
                <div className={styles.passwordInputContainer}>
                  <label className={styles.passwordLabel}>Type your answer</label>
                  <input 
                    type='password' {...input} 
                    placeholder='one word'
                    className={styles.passwordInput}
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <button type='submit' className={styles.passwordInputButton}>Answer</button>
          </form>
        )}
      />
  );
};
