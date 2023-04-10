import { memo, useMemo } from 'react'
import classNames from 'classnames/bind'
import { IoMdHelp } from 'react-icons/io'
import { GiNotebook, GiAlarmClock, Gi3DGlasses } from 'react-icons/gi'
import { TbDeviceGamepad2 } from 'react-icons/tb'
import { TbMusic } from 'react-icons/tb'
import { RiTodoLine, RiSoundModuleLine, RiMovieLine } from 'react-icons/ri'
import { AiOutlineCode } from 'react-icons/ai'

const cx = classNames.bind(undefined)
export interface IFunctionsProps {}

const Functions = (props: IFunctionsProps) => {
	const listFunctions = useMemo(() => {
		const obj = [
			{
				name: 'dev',
				icon: <AiOutlineCode />,
			},
			{
				name: 'timer',
				icon: <GiAlarmClock />,
			},
			{
				name: 'music',
				icon: <TbMusic />,
			},
			{
				name: 'to do',
				icon: <RiTodoLine />,
			},
			{
				name: 'notes',
				icon: <GiNotebook />,
			},
			{
				name: 'sounds',
				icon: <RiSoundModuleLine />,
			},
			{
				name: 'game',
				icon: <TbDeviceGamepad2 />,
			},
			{
				name: 'manga',
				icon: <Gi3DGlasses />,
			},
			{
				name: 'movie',
				icon: <RiMovieLine />,
			},
			{
				name: 'help',
				icon: <IoMdHelp />,
			},
		]
		return obj
	}, [])
	return (
		<div
			className={cx(
				'w-[58rem] max-h-[460rem] bg-primary-white rounded-[4rem] py-[8rem]',
				'px-0 [direction:rtl] [overflow:overlay] overflow-y-auto',
				'scroll-3'
			)}>
			<ul>
				{listFunctions.map((item, index) => {
					const { name, icon } = item
					return (
						<li
							key={index}
							className={cx(
								'px-[4rem] py-[8rem] flex items-center justify-center flex-col cursor-pointer',
								'hover:text-red-500'
							)}>
							<div className={cx('text-[20rem]', 'flex-center')}>{icon}</div>
							<div className={cx('capitalize text-[12rem] font-[500]')}>
								{name}
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default memo(Functions)
