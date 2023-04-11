import styles from './burger-ingredients.module.css';
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
      <IngredientsList />
    </section>
  );
}

export default BurgerIngredients;
