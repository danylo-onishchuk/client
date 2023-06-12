import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './HeaderModule.module.scss';

export const HeaderModule: FC = () => {
  let location = useLocation();

  return (
    <div className={styles.headerModule}>
      Active Quest
      <div className={styles.links}>
        {location.pathname !== '/home' && (
          <li className={styles.link}>
            <Link to='/home'>Home</Link>
          </li>
        )}

        {location.pathname !== '/game' && (
          <li className={styles.link}>
            <Link to='/game/1'>Go to game</Link>
          </li>
        )}
      </div>
    </div >
  );
};
