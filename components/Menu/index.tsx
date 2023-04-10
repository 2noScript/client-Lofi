import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { useState } from 'react'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'
import Function from './Function'
const cx = classNames.bind(styles)

export interface IMenuProps {}

export default function Menu(props: IMenuProps) {
	const [hideOptions, setHideOptions] = useState(true)

	return (
		<div
			className={cx(
				'flex-center fixed z-medium w-[40rem] h-[100vh] bg-primary-white top-0 left-0',
				'p-[8rem] pr-0 transition-[left] duration-[0.4s] ease-out',
				`${hideOptions ? 'hide-options' : 'show-options'}`
			)}>
			<div
				className={cx('tab-arrows')}
				onClick={() => {
					setHideOptions(!hideOptions)
				}}>
				{!hideOptions && <IoMdArrowDropleft className={cx('left')} />}
				{hideOptions && <IoMdArrowDropright className={cx('right')} />}
			</div>
			<div className={cx('function')}>
				<Function />
			</div>
		</div>
	)
}
