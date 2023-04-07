import styles from './burger-ingredients.module.css';
import Ingredients from '../ingredients/ingredients';
import Tabs from '../tabs/tabs';

function BurgerIngredients() {
  return (
    <section className={`${styles['burger-ingredients']}`}>
      <div
        className={`mt-10 mb-5 text text_type_main-large text_color_primary ${styles['title']}`}
      >
        Соберите бургер
      </div>
      <Tabs />
      <Ingredients />
    </section>
  );
}

export default BurgerIngredients;
