import CardIngredients from '../card/card';
import styles from './ingredients.module.css';
import data from '../../utils/data';

function Ingredients() {
  return (
    <section className={`custom-scroll ${styles['ingredients']}`}>
      <div
        className={`mt-10 mb-5 text text_type_main-medium text_color_primary ${styles['title']}`}
      >
        <a id="rolls">Булки</a>
      </div>

      {data.map((ingredient) => (
        // <div className="Message" key={message.id}>
        //     <span className="Message-user">{message.user}</span>
        //     <span className="Message-text">{message.text}</span>
        // </div>
        <CardIngredients key={ingredient._id}>
          {/* {ingredient.name} */}1
        </CardIngredients>
      ))}
    </section>
  );
}

export default Ingredients;
