import React from "react";
import classNames from "classnames/bind";

import style from "./mainPage.module.scss";
const cx = classNames.bind(style);
export default function MainPage() {
  return (
    <div>
      <section className={cx("section-about")}>
        <h2 className={cx("heading-secondary")}>Next for test</h2>
      </section>
    </div>
  );
}
