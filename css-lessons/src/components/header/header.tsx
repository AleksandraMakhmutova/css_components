import React from "react";
import classNames from "classnames/bind";
import style from "./header.module.css";

const cx = classNames.bind(style);

function Header() {
  return <div className={cx("header")}>Hello</div>;
}

export default Header;
