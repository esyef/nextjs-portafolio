/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menu = [
	{ title: 'Inicio', path: '/' },
	{ title: 'Proyectos', path: '/proyectos' },
	{ title: 'Contáctame', path: '/contacto' },
]

const Header = () => {
	const router = useRouter()

	return (
		<header className='flex justify-between items-center'>
			<Link href='/'>
				<a className={router.pathname === '/' ? 'text-red-300' : ''}>
					<Image alt='Logo Yefweb' src='/logo.svg' height='60' width='60' />
				</a>
			</Link>

			<nav className='basis-1/3'>
				<ul className='flex justify-between text-xl uppercase font-bold'>
					{menu.map((item, index) => {
						return (
							<Link key={index} href={item.path} passHref>
								<a
									className={`cursor-pointer  transition-colors duration-150 ${
										router.pathname === item.path
											? 'text-emerald-500'
											: 'hover:text-emerald-500'
									}`}
								>
									{item.title}
								</a>
							</Link>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}

export default Header
