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
      <div className={`mt-4 mb-4 ${styles['content']}`}>
        <div
          className={`${styles['constructor-container']} ${styles['border-round']} ${styles['flex-container']}`}
        >
          <BurgerIcon />
          <a
            className={`pl-2 text text_type_main-default text_color_primary`}
            href="#"
          >
            Конструктор
          </a>
        </div>

        <div
          className={`ml-2 ${styles['order-feed-container']} ${styles['border-round']} ${styles['flex-container']}`}
        >
          <ListIcon />
          <a
            className={'pl-2 text text_type_main-default text_color_inactive'}
            href="#"
          >
            Лента заказов
          </a>
        </div>

        <div className={`mt-2 mb-2 ${styles.logo}`}>
          <Logo />
        </div>

        <div
          className={`${styles['profile-container']} ${styles['border-round']} ${styles['flex-container']}`}
        >
          <ProfileIcon />
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
