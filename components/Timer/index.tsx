/* eslint-disable react/jsx-key */
import { memo } from "react";
import classNames from "classnames/bind";
import styles from "./Timer.module.scss";
import WrapDrag from "../WrapDrag";
import { useState, useMemo } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";
import OclockTime from "./OclockTime";
import SettingTime from "./SettingTime";
const cx = classNames.bind(styles);
export interface ITimerProps {}
const Timer = (props: ITimerProps) => {
  const [grabbing, setGrabbing] = useState(false);
  const [boardHide, setBoardHide] = useState(false);
  const [optionsActtion, setOptionsActtion] = useState(0);
  const OPTIONS: any = useMemo(() => {
    const L: any = [
      { name: "pomodoro", id: 0 },
      { name: "short break", id: 1 },
      { name: "long break", id: 2 },
    ];

    return L;
  }, []);
  return (
    <WrapDrag className={cx("parent")}>
      <div className={cx("wrapper")}>
        <strong
          className={cx("header", `${grabbing ? "grabbing" : ""}`)}
          onMouseDown={(e) => {
            if (e.button === 0) {
              setGrabbing(true);
            }
          }}
          onMouseUp={() => {
            setGrabbing(false);
          }}
        >
          <span className={cx("title")}>timer</span>
          <div className={cx("")}></div>
          <h2
            className={cx("hide")}
            // onClick={(e) => {
            //   e.preventDefault();
            //   e.stopPropagation();
            // }}
          >
            <AiOutlineMinus />
          </h2>
        </strong>
        <div className={cx("body")}>
          <OclockTime />
        </div>
        <div className={cx("footer")}>
          {OPTIONS.map((item: any) => {
            const { name, id } = item;
            return (
              <div
                key={id}
                className={cx("options-item")}
                onClick={() => {
                  setOptionsActtion(id);
                }}
              >
                {name}
                <div
                  className={cx(
                    "line",
                    `${optionsActtion == id && "line-action"}`
                  )}
                ></div>
              </div>
            );
          })}
          <div
            className={cx("setting")}
            onClick={() => {
              setBoardHide(!boardHide);
            }}
          >
            <TbSettings />
          </div>
        </div>
        <div className={cx("board-setting", `${boardHide && "board-hide"}`)}>
          <SettingTime />
        </div>
      </div>
    </WrapDrag>
  );
};
export default memo(Timer);
