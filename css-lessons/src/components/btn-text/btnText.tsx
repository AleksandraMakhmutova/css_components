import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./btnText.module.scss";

const cx = classNames.bind(style);
export default function BtnText() {
    return (
        <Link to="#" className={cx("btn-text")}>
        Lern More &rarr;
      </Link>
    )
}
