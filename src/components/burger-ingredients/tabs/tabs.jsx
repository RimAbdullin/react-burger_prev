import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './tabs.module.css';

function Tabs() {
  const [current, setCurrent] = React.useState('one');

  const scrollElement = (v) => {
    console.log(v);
    setCurrent(v);
  };

  return (
    <div className={`text text_type_main-default ${styles.tabs}`}>
      <Tab value="one" active={current === 'one'} onClick={scrollElement}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={scrollElement}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={scrollElement}>
        Начинки
      </Tab>
    </div>
  );
}

export default Tabs;
