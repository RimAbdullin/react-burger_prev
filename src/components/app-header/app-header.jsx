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
        <div className={`${styles['navigation']}`}>
          <div className={`${styles['navigation-link-active']}`}>
            <BurgerIcon />
            <a
              className={'text text_type_main-default text_color_primary'}
              href="#"
            >
              Конструктор
            </a>
          </div>
          <div className={`${styles['navigation-link-inactive']}`}>
            <ListIcon />
            <a
              className={'text text_type_main-default text_color_inactive'}
              href="#"
            >
              Лента заказов
            </a>
          </div>
        </div>

        <div className={`${styles.logo}`}>
          <Logo />
        </div>

        <div className={`${styles['navigation-link-inactive1']}`}>
          <ProfileIcon />
          <a
            className={`text text_type_main-default text_color_inactive`}
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
