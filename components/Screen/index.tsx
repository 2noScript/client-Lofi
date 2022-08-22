// import * as React from "react";
import classNames from "classnames/bind";
import styles from "./Screen.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CLIENT_RENEG_LIMIT } from "tls";
const cx = classNames.bind(styles);

export interface IScreenProps {
  src: string;
  type: string;
}

export default function Screen(props: IScreenProps) {
  const { src, type }: IScreenProps = props;
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("screen")}>
          {hasWindow && type == "video" && (
            <video src={src} autoPlay={true} loop={true} muted={true}></video>
          )}
          {hasWindow && type == "img" && <Image src={src} layout={"fill"} />}
        </div>
      </div>
      <div className={cx("prev-screen")}>lỗi rồi</div>
    </>
  );
}
