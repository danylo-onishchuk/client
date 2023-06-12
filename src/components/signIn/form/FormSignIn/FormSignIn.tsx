import { FC } from 'react';
import { Form, Field } from 'react-final-form'
import styles from './FormSignIn.module.scss';
import { writeCookie } from '../../helpers/writeCookie';
import { readCookie } from '../../helpers/readCookie';
import { useNavigate } from 'react-router-dom';

export const FormSignIn: FC = () => {
  const navigate = useNavigate();

  const onSubmit = (values: {password: string}) => {
    if (values.password !== '1') {
      return;
    }

    writeCookie('token3', '123456789', 30);

    if (!!readCookie('token3')) {
      navigate('/game/1')
    } else {
      navigate('/login')
    }
  };

  return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <Field name='password'>
              {({ input, meta }) => (
                <div className={styles.passwordInputContainer}>
                  <label className={styles.passwordLabel}>Type your password</label>
                  <input 
                    type='password' {...input} 
                    placeholder='Password'
                    className={styles.passwordInput}
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <button type='submit' className={styles.passwordInputButton}>Login</button>
          </form>
        )}
      />
  );
};
