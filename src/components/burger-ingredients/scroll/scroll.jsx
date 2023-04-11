import { useState, useEffect } from 'react';
import CardIngredients from '../card/card';
import styles from './ingredients-list.module.css';

const IngredientsBlock = () => {
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

  return (
    <section className={`custom-scroll ${styles['ingredients']}`}>
      {!state.loading && (
        <>
          <div
            className={`mt-10 text text_type_main-medium text_color_primary`}
          >
            <a id="rolls">Булки</a>
          </div>
          {state.bun.map((item) => (
            <CardIngredients key={item._id} title={'Булки'}>
              {item}
            </CardIngredients>
          ))}

          <div
            className={`mt-10 text text_type_main-medium text_color_primary`}
          >
            <a id="rolls">Начинки</a>
          </div>
          {state.main.map((item) => (
            <CardIngredients key={item._id} title={'Начинки'}>
              {item}
            </CardIngredients>
          ))}

          <div
            className={`mt-10 text text_type_main-medium text_color_primary`}
          >
            <a id="rolls">Соусы</a>
          </div>
          {state.sauce.map((item) => (
            <CardIngredients key={item._id} title={'Соусы'}>
              {item}
            </CardIngredients>
          ))}
        </>
      )}
    </section>
  );
};

export default IngredientsBlock;
