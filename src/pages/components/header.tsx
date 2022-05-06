/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/MenuBurger.module.css'

const menu = [
	{ title: 'Inicio', path: '/' },
	{ title: 'Proyectos', path: '/proyectos' },
	{ title: 'Contáctame', path: '/contacto' },
]

const MenuMobile = () => {
	const router = useRouter()
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const clickedOutSide = (e: any) => {
			if (isOpen && ref.current && !ref.current.contains(e.target)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', clickedOutSide)

		return () => {
			document.removeEventListener('mousedown', clickedOutSide)
		}
	}, [isOpen])

	return (
		<section className='md:hidden' ref={ref}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={styles.menu_icon}
				type='button'
			>
				<div
					className={`${styles.line_1} ${isOpen ? styles.rotate1 : 'null'}`}
				></div>
				<div
					className={`${styles.line_2} ${isOpen ? styles.hidden : 'null'}  `}
				></div>
				<div
					className={`${styles.line_3} ${isOpen ? styles.rotate2 : 'null'}`}
				></div>
			</button>
			<nav className={`${styles.menuMobile} ${isOpen ? styles.show : 'null'}`}>
				<ul className='flex w-1/2 flex-col items-center gap-11 text-2xl'>
					{menu.map((item, index) => {
						return (
							<Link key={index} href={item.path} passHref>
								<a
									onClick={() => setIsOpen(!isOpen)}
									role='button'
									tabIndex={0}
									className={`cursor-pointer uppercase transition-colors duration-150 ${
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
		</section>
	)
}

const Header = () => {
	const router = useRouter()

	return (
		<header className='lg flex items-center justify-between'>
			<Link href='/'>
				<a
					className={`order-last md:order-first ${
						router.pathname === '/' ? 'text-red-300' : 'null'
					}`}
				>
					<Image
						alt='Logo Yefweb'
						src='/logo.svg'
						height='60'
						width='60'
						priority
					/>
				</a>
			</Link>

			<div className='md:hidden'>
				<MenuMobile />
			</div>

			<nav className='md:basis-1/3'>
				<ul className='hidden justify-end text-xl font-bold uppercase md:flex  md:gap-4'>
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
