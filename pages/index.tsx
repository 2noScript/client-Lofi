import type { NextPage } from "next";
import Test from "../components/Test";
import Link from "next/link";
import Image from "next/image";
import Screen from "../components/Screen";
import classNames from "classnames/bind";
import styles from "../styles/Home.module.scss";
import Menu from "../components/Menu";
import Timer from "../components/Timer";
const cx = classNames.bind(styles);
const a: string =
  "https://ar.toneden.io/43970731/81c05c13-2501-4fe1-a456-e07c5e6720de";
const b: string =
  "https://drive.google.com/uc?export=download&id=1MBKLrxNBMOeuPhn8LzhyHE0hewrxM6jX";
const Home: NextPage = () => {
  return (
    <div>
      <Screen type="video" src={b} />
      <Menu />
      <Timer />
    </div>
  );
};

export default Home;
