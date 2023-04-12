import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/container/burger-ingredients';

function App() {
  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main>
        <section className="App">
          <BurgerIngredients />
        </section>
      </main>
    </>
  );
}

export default App;
