import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
import Cookies from 'cookies'

export const config = {
	api: {
		bodyParser: false,
	},
}

const proxy = httpProxy.createProxy({})
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	return new Promise(resolve => {
		const cookie = new Cookies(req, res, {
			secure: process.env.NODE_ENV !== 'development',
		})
		const accessToken = cookie.get('accessToken')
		if (accessToken) req.headers.authorization = `Bearer ${accessToken}`
		proxy.web(req, res, {
			target: process.env.API,
			changeOrigin: true,
			selfHandleResponse: false,
		})

		proxy.once('proxyRes', () => {
			resolve(true)
		})
	})
}
