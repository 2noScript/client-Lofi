import * as React from "react";
import Link from "next/link";
export interface IPrivaryProps {}

export default function Privary(props: IPrivaryProps) {
  return (
    <div>
      <Link href={"/"} prefetch={true}>
        <a> quay về home</a>
      </Link>
      hello rivayry
    </div>
  );
}
