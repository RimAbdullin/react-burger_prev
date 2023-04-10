import styles from './card.module.css';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

function CardIngredients(props) {
  const data = props.children;

  return (
    <div
      className={`ml-4 mb-10 mt-6 ${styles['card-ingredients']} ${styles['card-border']}`}
    >
      <Counter
        count={9}
        size="default"
        extraClass={`m-0 ${styles['counter']} ${styles['card-border']}`}
      />
      <div
        className={`mr-4 ml-4 ${styles['illustration']} ${styles['card-border']}`}
      >
        <img src={data.image} alt="" />
      </div>
      <div className={`mt-1 mb-1 ${styles.price} ${styles['card-border']}`}>
        <div>
          <span className={`text_type_digits-default`}>{data.price}</span>
        </div>
        <div className={`${styles['icon']}`}>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <div className={`${styles.name}`}>
        <span
          className={`text_type_main-default`}
          style={{ textAlign: 'center' }}
        >
          {data.name}
        </span>
      </div>
    </div>
  );
}

export default CardIngredients;
