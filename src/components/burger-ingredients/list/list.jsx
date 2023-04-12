import styles from './list.module.css';
import CardIngredients from '../card/card';

const IngredientsList = (props) => {
  return (
    <section>
      <div className={`mt-10 text text_type_main-medium text_color_primary`}>
        <a id="rolls">{props.title}</a>
      </div>
      <div className={styles.column}>
        {props.data.map((item) => (
          <CardIngredients key={item._id}>{item}</CardIngredients>
        ))}
      </div>
    </section>
  );
};

export default IngredientsList;
