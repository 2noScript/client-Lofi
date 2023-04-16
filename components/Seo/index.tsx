import Head from 'next/head'
interface ISeo {
	title: string
}

export default function Seo(props: ISeo) {
	const { title } = props
	return (
		<Head>
			{/* <title>{title}</title> */}
			<title>{title}</title>
			<link rel='icon' href={'favicon/icon.png'} />
		</Head>
	)
}
