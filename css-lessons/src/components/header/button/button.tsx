import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import style from "./button.module.css";
const cx = classNames.bind(style);

function Button() {
  return (
    <div className={cx("btn")}>
      <Link to="#" className={cx("btn-white")}>
        Discover our tours
      </Link>
    </div>
  );
}

export default Button;
