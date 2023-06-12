import { FC, useEffect, useState } from 'react';
import styles from './MainScreen.module.scss';

export const MainScreen: FC = () => {
  const [data, setData] = useState<string>();


  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          process.env.REACT_APP_API_URL as string,
        )
      ).text();

      setData(data);
    };

    dataFetch();
  }, []);

  return (
    <div className={styles.mainScreen}>
      <p>Home!!!</p>
      {!!data && data}
    </div >
  )
};
