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
        <div className={`${styles['constructor-container']}`}>
          <BurgerIcon className={`${styles.icon}`} />
          <a
            className={`pl-2 text text_type_main-default text_color_primary`}
            href="#"
          >
            Конструктор
          </a>
        </div>

        <div className={`${styles['order-feed-container']}`}>
          <ListIcon className={`${styles.icon}`} />
          <a
            className={'pl-2 text text_type_main-default text_color_inactive'}
            href="#"
          >
            Лента заказов
          </a>
        </div>

        <div className={`${styles.logo}`}>
          <Logo />
        </div>

        <div className={`${styles['profile-container']}`}>
          <ProfileIcon className={`${styles.icon}`} />
          <a
            className={`pl-2 text text_type_main-default text_color_inactive`}
            href="#"
          >
            Личный кабинет
          </a>
        </div>
      </div>
    </nav>
  );
}

export default AppHeader;
