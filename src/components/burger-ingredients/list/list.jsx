import styles from './list.module.css';
import CardIngredients from '../card/card';

const IngredientsList = (props) => {
  const modal = () => {
    console.log('123');
    // console.log(e.target.getAttribute('key'));
  };

  return (
    <section>
      <div className={`mt-10 text text_type_main-medium text_color_primary`}>
        <a id={props.id}>{props.title}</a>
      </div>
      <div className={styles.column}>
        {props.data.map((item) => (
          <CardIngredients key={item._id} onClick={modal}>
            {item}
          </CardIngredients>
        ))}
      </div>
    </section>
  );
};

export default IngredientsList;
