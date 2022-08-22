import Draggable from "react-draggable";
import { useRef, useState, useCallback, memo } from "react";
import classNames from "classnames/bind";
import { useWindowSize } from "@react-hook/window-size";

import styles from "./WrapDrag.module.scss";
const cx = classNames.bind(styles);

import * as React from "react";

export interface IWrapDragProps {
  children: any;
  className: string;
}

const WrapDrag = (props: IWrapDragProps) => {
  const { children, className, ...passProps } = props;
  const nodeRef = useRef(null);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [screenWidth, screensHeight] = useWindowSize();
  const handleDrag = useCallback(
    (e: any, ui: any) => {
      const { x, y } = deltaPosition;
      const limit = 100;
      let Px, Py;
      if (x < -limit) {
        Px = -limit;
      } else {
        Px = x > screenWidth - 100 ? screenWidth - 100 : x + ui.deltaX;
      }
      if (y < 0) {
        Py = 0;
      } else {
        Py = y > screensHeight - 100 ? screensHeight - 100 : y + ui.deltaY;
      }
      setDeltaPosition({
        x: Px,
        y: Py,
      });
    },
    [deltaPosition]
  );
  // console.log(deltaPosition.x > screenWidth - 100);
  return (
    <Draggable
      nodeRef={nodeRef}
      {...passProps}
      handle="strong"
      cancel="h2"
      // defaultPosition={{ x: 1000, y: 0 }}
      position={deltaPosition}
      onDrag={handleDrag}
    >
      <div
        className={cx("wrapper", {
          [className]: className,
        })}
        ref={nodeRef}
      >
        {children}
      </div>
    </Draggable>
  );
};

export default memo(WrapDrag);
