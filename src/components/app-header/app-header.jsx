import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader() {
  return (
    <nav className={`${styles['app-header']}`}>
      <div className={`${styles['content']}`}>
        <div
          className={`pt-4 pl-5 pr-5 pb-4 mt-4 ${styles['constructor-container']}`}
        >
          <BurgerIcon className={`${styles.icon}`} />
          <a
            className={'text text_type_main-default text_color_primary'}
            href="#"
          >
            Конструктор
          </a>
        </div>

        <div
          className={`pt-4 pl-5 pr-5 pb-4 ml-2 mt-4 ${styles['element-order-feed']}`}
        >
          <ListIcon className={`${styles.icon}`} />
          <a
            className={'text text_type_main-default text_color_inactive'}
            href="#"
          >
            Лента заказов
          </a>
        </div>

        <div className={`${styles.logo}`}>
          <Logo />
        </div>

        {/* <div className={`${styles['navigation-link-inactive1']}`}>
          <ProfileIcon />
          <a
            className={`text text_type_main-default text_color_inactive`}
            href="#"
          >
            Личный кабинет
          </a>
        </div> */}
      </div>
    </nav>
  );
}

export default AppHeader;
