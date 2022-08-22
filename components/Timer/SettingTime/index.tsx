import { memo } from "react";
import classNames from "classnames/bind";
import styles from "./SettingTime.module.scss";
import { GiTimeTrap } from "react-icons/gi";
const cx = classNames.bind(styles);
export interface ISettingTimeProps {}

const SettingTime = (props: ISettingTimeProps) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("setting-number")}>
        <div className={cx("setting-icon")}>
          <GiTimeTrap />
        </div>
        <div className={cx("title")} placeholder="">
          promodoro
        </div>
        <div className={cx("setting-input")}>
          <input type="number" placeholder="00:00" />
        </div>
      </div>
    </div>
  );
};
export default memo(SettingTime);
