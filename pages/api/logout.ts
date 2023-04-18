import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyReqCallback, ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

interface Data {
	message: string
}

export const config = {
	api: {
		bodyParser: false,
	},
}

const proxy = httpProxy.createProxy({})
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== 'POST')
		return res.status(404).json({
			message: 'method not supported',
		})
	const cookie = new Cookies(req, res)
	const rf = cookie.get('refreshToken')
	req.headers.cookie = ''
	console.log(req.body)
	// console.log(rf)
	return new Promise(resolve => {
		const handleLogout: ProxyReqCallback = (proxyReq, _req, _res) => {
			// console.log(_req)
			// proxyReq.write
			// proxyReq.write()
		}

		proxy.on('proxyReq', handleLogout)
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
