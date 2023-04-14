import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './tabs.module.css';

function Tabs(props) {
  const [current, setCurrent] = React.useState('id-bun');

  const scrollElement = (v) => {
    console.log(v);
    props.click(v);
    setCurrent(v);
  };

  return (
    <div className={`text text_type_main-default ${styles.tabs}`}>
      <Tab value="id-bun" active={current === 'id-bun'} onClick={scrollElement}>
        Булки
      </Tab>
      <Tab
        value="id-sauce"
        active={current === 'id-sauce'}
        onClick={scrollElement}
      >
        Соусы
      </Tab>
      <Tab
        value="id-main"
        active={current === 'id-main'}
        onClick={scrollElement}
      >
        Начинки
      </Tab>
    </div>
  );
}

export default Tabs;
