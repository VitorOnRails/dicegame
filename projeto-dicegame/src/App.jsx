import { useState } from 'react';
import Menu from './components/Menu';
import Gameplay from './components/Gameplay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameMode = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
    {isGameStarted ? <Gameplay /> : <Menu toggle={toggleGameMode} />}
    </>
  );
}

export default App;