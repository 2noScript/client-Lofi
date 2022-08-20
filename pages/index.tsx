import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Test from "../components/Test";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div>
      <Link href={"/privary"}>
        <a>back</a>
      </Link>
      <Test />
    </div>
  );
};

export default Home;
