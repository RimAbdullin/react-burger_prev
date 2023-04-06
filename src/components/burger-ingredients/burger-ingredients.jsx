import MyTab from '../my-tab/my-tab';
import styles from './burger-ingredients.module.css';

function BurgerIngredients() {
  return (
    <section className={`${styles['burger-ingredients']}`}>
      <div
        className={`mt-10 mb-5 text text_type_main-large text_color_primary ${styles['title']}`}
      >
        Соберите бургер
      </div>
      <div>
        <MyTab />
      </div>
    </section>
  );
}

export default BurgerIngredients;
