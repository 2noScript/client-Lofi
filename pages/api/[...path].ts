import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

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
	console.log(process.env.API)
	return new Promise(resolve => {
		req.headers.cookie = ''
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
