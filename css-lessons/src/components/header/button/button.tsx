import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import style from "./button.module.scss";
const cx = classNames.bind(style);

const  Button = (): JSX.Element  => {
  return (
    <div className={cx("btn")}>
      <Link to="#" className={cx("btn-white")}>
        Discover our tours
      </Link>
    </div>
  );
}

export default Button;
