import classNames from "classnames/bind";
import BtnText from "../../components/btn-text/btnText";
import Composition from "../../components/composition/composition";

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
        <div className={cx("col-1-of-2")}>
          <h3 className={cx("heading-tertiary")}>You're going to travel</h3>
          <p className={cx("paragraph")}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            temporibus quis porro minima culpa fuga qui delectus consectetur
            maiores modi, dolorum cum repudiandae deleniti illo tempore
            veritatis hic itaque repellat?
          </p>
          <h3 className={cx("heading-tertiary")}>
            Live adventures like you never have before
          </h3>
          <p className={cx("paragraph")}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            temporibus quis porro minima culpa fuga qui delectus consectetur.
          </p>
          <BtnText />
        </div>
        <div className={cx("col-1-of-2")}>
          <Composition />
        </div>
      </div>
    </section>
  );
}
