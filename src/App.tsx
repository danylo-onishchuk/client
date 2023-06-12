import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormSignIn } from './components/signIn/form/FormSignIn';
import { GameScreen } from './components/game/GameScreen ';
import { MainScreen } from './components/main/MainScreen';
import { HeaderModule } from './components/header/HeaderModule';
import { FooterModule } from './components/footer';

export function App() {
  return (
    <BrowserRouter>
      <HeaderModule />
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/login' element={<FormSignIn />} />
        <Route
          path='/game'
          element={<GameScreen />}
        >
          <Route path='/game/:id' element={<GameScreen />} />
        </Route>
        <Route
          path='*'
          element={<MainScreen />}
        />
      </Routes>
      <FooterModule />
    </BrowserRouter >
  );
}
