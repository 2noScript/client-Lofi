import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
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
	return new Promise(resolve => {
		req.headers.cookie = ''
		const handleLogin: ProxyResCallback = (proxyRes, _req, _res) => {
			let body: any = []
			proxyRes.on('data', chunk => {
				body.push(chunk)
			})
			proxyRes.on('end', () => {
				try {
					body = Buffer.concat(body).toString()
					const { accessToken, refreshToken, expiresIn } = JSON.parse(body)
					// console.log({ accessToken, refreshToken, expiresIn })

					const cookie = new Cookies(_req, _res, {
						secure: process.env.NODE_ENV !== 'development',
					})
					cookie.set('accessToken', accessToken, {
						httpOnly: true,
						sameSite: 'lax',
						expires: new Date(expiresIn),
					})
					// localStorage.setItem('refreshToken', refreshToken)
					cookie.set('refreshToken', refreshToken, {
						httpOnly: true,
						sameSite: 'lax',
					})
					;(_res as NextApiResponse<Data>).status(200).json({
						message: 'success',
					})
				} catch (error) {
					;(_res as NextApiResponse<Data>).status(500).json({
						message: 'something went wrong',
					})
				} finally {
					resolve(true)
				}
			})
		}
		proxy.web(req, res, {
			target: process.env.API,
			changeOrigin: true,
			selfHandleResponse: true,
		})
		proxy.once('proxyRes', handleLogin)
	})
}
