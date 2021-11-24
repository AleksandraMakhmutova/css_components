import classNames from "classnames/bind";
import img1 from "../../img/nat-1-large.jpg";
import img2 from "../../img/nat-2-large.jpg";
import img3 from "../../img/nat-3-large.jpg";
import style from "./composition.module.scss";

const cx = classNames.bind(style);
console.log(style);

export default function Composition() {
  return (
    <div className={cx("composition")}>
      <img
        src={img1}
        alt="Photo__1"
        className={cx("composition__photo")}
        id={cx("--p1")}
      />
      <img
        src={img2}
        alt="Photo__2"
        className={cx("composition__photo")}
        id={cx("--p2")}
      />
      <img
        src={img3}
        alt="Photo__3"
        className={cx("composition__photo")}
        id={cx("--p3")}
      />
    </div>
  );
}
