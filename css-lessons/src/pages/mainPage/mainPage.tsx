import React from "react";
import classNames from "classnames/bind";

import style from "./mainPage.module.scss";

const cx = classNames.bind(style);
export default function MainPage() {
  return (
    <section className={cx("section-about")}>
      <div className={cx("u-center-text")}>
        <h2 className={cx("heading-secondary")}>
          exiting tours for adventurous people
        </h2>
      </div>
      <div className={cx("row")}>
        <div className={cx("col-1-of-2")}>Text</div>
        <div className={cx("col-1-of-2")}>Image composition</div>
      </div>
    </section>
  );
}
