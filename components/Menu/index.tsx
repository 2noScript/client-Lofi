// import MENU from '@/configs/menu'

function Menu() {
	return (
		<div className='w-[200px] h-[200px] absolute  '>
			<ul>
				{/* {MENU.map(item => {
					const { icon, name, id } = item
					const Icon = icon
					return (
						<li
							key={id}
							className='flex items-center capitalize cursor-pointer'>
							<Icon className='text-[26rem]' 	/>
							<h2>{name}</h2>
						</li>
					)
				})} */}
			</ul>
		</div>
	)
}

export default Menu
