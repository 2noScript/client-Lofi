import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Funtions from "./Funtions";
const cx = classNames.bind(styles);

export interface IMenuProps {}

export default function Menu(props: IMenuProps) {
  const [hideOptions, setHideOptions] = useState(true);

  return (
    <div
      className={cx(
        "wrapper",
        `${hideOptions ? "hide-options" : "show-options"}`
      )}
    >
      <div
        className={cx("tab-arrows")}
        onClick={() => {
          setHideOptions(!hideOptions);
        }}
      >
        {!hideOptions && <IoMdArrowDropleft className={cx("left")} />}
        {hideOptions && <IoMdArrowDropright className={cx("right")} />}
      </div>
      <div className={cx("options")}></div>
      <div className={cx("funtions")}>
        <Funtions />
      </div>
    </div>
  );
}
