import { useState } from 'react';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/container/BurgerIngredients';
import Modal from '../modal/Modal';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <button onClick={() => setModal(true)}>Открыть диалоговое окно</button>
      <Modal visible={modal} setVisible={setModal}>
        123
      </Modal>
      <header>
        <AppHeader />
      </header>
      <main>
        <section>
          <BurgerIngredients />
        </section>
      </main>
    </>
  );
}

export default App;
