import { memo, useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./Funtions.module.scss";
import { IoMdHelp } from "react-icons/io";
import { GiNotebook, GiAlarmClock, Gi3DGlasses } from "react-icons/gi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { TbMusic } from "react-icons/tb";
import { RiTodoLine, RiSoundModuleLine, RiMovieLine } from "react-icons/ri";
import { AiOutlineCode } from "react-icons/ai";

const cx = classNames.bind(styles);
export interface IFuntionsProps {}

const Funtions = (props: IFuntionsProps) => {
  const listFuntions = useMemo(() => {
    const obj = [
      {
        name: "dev",
        icon: <AiOutlineCode />,
      },

      {
        name: "timer",
        icon: <GiAlarmClock />,
      },
      {
        name: "music",
        icon: <TbMusic />,
      },
      {
        name: "to do",
        icon: <RiTodoLine />,
      },
      {
        name: "notes",
        icon: <GiNotebook />,
      },
      {
        name: "sounds",
        icon: <RiSoundModuleLine />,
      },
      {
        name: "game",
        icon: <TbDeviceGamepad2 />,
      },
      {
        name: "manga",
        icon: <Gi3DGlasses />,
      },
      {
        name: "movie",
        icon: <RiMovieLine />,
      },
      {
        name: "help",
        icon: <IoMdHelp />,
      },
    ];
    return obj;
  }, []);
  return (
    <div className={cx("wrapper")}>
      <ul>
        {listFuntions.map((item, index) => {
          const { name, icon } = item;
          return (
            <li key={index} className={cx("wrapper-item")}>
              <div className={cx("icon")}>{icon}</div>
              <div className={cx("name")}>{name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default memo(Funtions);
