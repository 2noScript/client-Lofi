import * as React from 'react';
import classNames from 'classnames/bind'
import styles from './Test.module.scss'
const cx = classNames.bind(styles)
export interface ITestProps {
}

export default function Test (props: ITestProps) {
  return (
    <div className={cx('wrapper')}>
       hello
    </div>
  );
}
