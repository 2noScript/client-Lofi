/* eslint-disable react/jsx-key */
import { memo, useMemo, useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./OclockTime.module.scss";
import { VscDebugStart, VscDebugPause } from "react-icons/vsc";
import { GrPowerReset } from "react-icons/gr";
import { BsCheckLg, BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";
import {
  TbNumber0,
  TbNumber1,
  TbNumber2,
  TbNumber3,
  TbNumber4,
  TbNumber5,
  TbNumber6,
  TbNumber7,
  TbNumber8,
  TbNumber9,
} from "react-icons/tb";
import { requestToBodyStream } from "next/dist/server/body-streams";
const cx = classNames.bind(styles);

// handle

const timeData = (number: number = 2022000) => {
  //=>abc

  if (number > 99) {
    const strNumber = number.toString();
    const arrNumber = strNumber.split("").map((item: any) => item * 1);
    // const;
    return {};
  } else {
  }
  return null;
};
console.log(timeData(123));
export interface IOclockTimeProps {}
const OclockTime = (props: IOclockTimeProps) => {
  const [startTime, setStartTime] = useState(false);
  const data = useSelector((state: any) => {
    const arr = [...state.timer.data];
    return arr.filter((item: any) => item.active == true)[0];
  });
  const [currrentTime, setCurrrentTime] = useState({
    minute: data.number,
    seconds: [0, 0],
  });

  console.log(data);
  const NUMBER: any = useMemo(() => {
    const L: any[] = [
      <TbNumber0 />,
      <TbNumber1 />,
      <TbNumber2 />,
      <TbNumber3 />,
      <TbNumber4 />,
      <TbNumber5 />,
      <TbNumber6 />,
      <TbNumber7 />,
      <TbNumber8 />,
      <TbNumber9 />,
    ];
    return L;
  }, []);

  const x = useMemo(() => {
    return null;
  }, []);

  return (
    <div className={cx("oclock")}>
      <time>
        <div className={cx("minute")}>
          <div className={cx("number")}>{NUMBER[0]}</div>
          <div className={cx("number")}>{NUMBER[0]}</div>
          <div className={cx("number")}>
            <TbNumber0 />
          </div>
        </div>
        <div className={cx("space")}>
          <div className={cx("dot")}>
            <BsDot />
          </div>
          <div className={cx("dot")}>
            <BsDot />
          </div>
        </div>

        <div className={cx("seconds")}>
          <div className={cx("number")}>
            <TbNumber0 />
          </div>
          <div className={cx("number")}>
            <TbNumber0 />
          </div>
        </div>
      </time>
      <button
        className={cx("start-pause")}
        onClick={() => {
          setStartTime(!startTime);
        }}
      >
        {startTime && <VscDebugPause />}
        {!startTime && <VscDebugStart />}
      </button>
      <button className={cx("reload")}>
        <GrPowerReset />
      </button>
    </div>
  );
};

export default memo(OclockTime);
