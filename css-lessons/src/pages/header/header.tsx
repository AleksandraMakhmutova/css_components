import classNames from "classnames/bind";
import style from "./header.module.scss";
import logo from "../../img/logo-white.png";
import Button from "../../components/button/button";
const cx = classNames.bind(style);

function Header(): JSX.Element {
  return (
    <div className={cx("header")}>
      <div className={cx("header__logo-box")}>
        <img src={logo} alt="LOGO" className={cx("header__logo")} />
      </div>
      <div className={cx("header__text-box")}>
        <h1 className={cx("heading-primary")}>
          <span className={cx("heading-primary--main")}>Outdoors</span>
          <span className={cx("heading-primary--bottom")}>
            is where life happends
          </span>
        </h1>
        <Button />
      </div>
    </div>
  );
}

export default Header;
