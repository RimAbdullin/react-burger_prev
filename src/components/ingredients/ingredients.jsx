import { useState, useEffect } from 'react';
import CardIngredients from '../card/card';
import styles from './ingredients.module.css';

const Ingredients = () => {
  const [state, setState] = useState({
    error: false,
    burgerData: null,
    loading: true,
  });

  useEffect(() => {
    const getBurgerData = async () => {
      setState({ ...state, loading: true });
      try {
        const res = await fetch(
          `https://norma.nomoreparties.space/api/ingredients`
        );

        const data = await res.json();

        setState({ burgerData: data.data, loading: false });
      } catch (err) {
        setState({ ...state, error: true });
      }
    };

    getBurgerData();
  }, []);

  return (
    <section className={`custom-scroll ${styles['ingredients']}`}>
      <div className={`mt-10 text text_type_main-medium text_color_primary`}>
        <a id="rolls">Булки</a>
      </div>
      {state.error && <h1>Данные не найдены.</h1>}
      {!state.error &&
        !state.loading &&
        state.burgerData.map((ingredient) => (
          <CardIngredients key={ingredient._id}>{ingredient}</CardIngredients>
        ))}
    </section>
  );
};

export default Ingredients;
