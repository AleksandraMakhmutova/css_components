import classNames from "classnames/bind";

import style from "./featuresPart.module.scss";

const cx = classNames.bind(style);

export default function FeaturesPart() {
  return (
    <div className={cx("section-features")}>
      <div className={cx("row")}>
        <div className={cx("col-1-of-4")}>
          <div className={cx("feature-box")}>
            <i className={cx("feature-box__icon icon-basic-world")}></i>
            <h3 className={cx("heading-tertiary u-margin-bottom-small")}>
              Explore the world
            </h3>
            <p className={cx("feature-box__text")}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
