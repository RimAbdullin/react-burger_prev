import { useState, useEffect } from 'react';
import styles from './burger-ingredients.module.css';
import Tabs from '../tabs/tabs';
import IngredientsList from '../list/list';

function BurgerIngredients() {
  const [state, setState] = useState({
    error: false,
    burgerData: null,
    loading: true,
    bun: null,
    main: null,
    sauce: null,
  });

  useEffect(() => {
    const getBurgerData = async () => {
      setState({ ...state, loading: true });
      try {
        const res = await fetch(
          `https://norma.nomoreparties.space/api/ingredients`
        );

        const data = await res.json();

        setState({
          burgerData: data.data,
          bun: data.data.filter((bun) => bun.type == 'bun'),
          main: data.data.filter((bun) => bun.type == 'main'),
          sauce: data.data.filter((bun) => bun.type == 'sauce'),
          loading: false,
        });
      } catch (err) {
        setState({ ...state, error: true });
      }
    };

    getBurgerData();
  }, []);

  if (state.error) {
    return <h1>Данные не найдены.</h1>;
  }

  console.log(state.bun);
  return (
    <section className={`${styles.container}`}>
      {!state.loading && (
        <>
          <div
            className={`mt-10 mb-5 text text_type_main-large text_color_primary ${styles.title}`}
          >
            Соберите бургер
          </div>
          <Tabs />
          <section className={`custom-scroll ${styles['scroll-area']}`}>
            <IngredientsList title={'Булки'} data={state.bun} />
            <IngredientsList title={'Соусы'} data={state.sauce} />
            <IngredientsList title={'Начинка'} data={state.main} />
          </section>
        </>
      )}
    </section>
  );
}

export default BurgerIngredients;
