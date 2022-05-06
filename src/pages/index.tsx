/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CallToAction from './components/callToaction'
import Avatar from '../../public/avatar.png'

import styles from '../styles/MenuBurger.module.css'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Yefweb | Portafolio</title>
				<meta
					name='description'
					content='Yeferson Olarte Roncancio Desarrollador frontend (yefweb)'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section className='mb-14'>
				<div className={styles.bg}>
					<div className='flex  h-96 w-full flex-col items-center justify-center gap-4 rounded-md  bg-gradient-to-t from-primary shadow-lg shadow-primary'>
						<h1 className='text-center text-4xl sm:text-5xl lg:text-7xl'>
							{' '}
							Hola soy{' '}
							<span className='font-bold text-emerald-400'>Yeferson, </span>un
							<span className='block font-bold'>
								&lt;Frontend{' '}
								<span className='text-emerald-400'> Developer</span>
								&#47;&gt;
							</span>
						</h1>

						<div className='flex flex-col gap-4 '>
							<div className='flex items-center justify-center gap-5 md:justify-start'>
								<a
									href='#sobre-mi'
									className='inline-block rounded-xl bg-emerald-700 p-3 font-medium  uppercase  text-white transition-all  duration-300
							md:hover:-translate-y-1 md:hover:bg-transparent md:hover:text-emerald-400 
							md:hover:shadow-sm md:hover:shadow-emerald-700 '
								>
									Sobre mí
								</a>
								<Link href='/contacto' passHref>
									<a className='inline-block rounded-xl border-2 border-emerald-700 p-3 uppercase text-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white  hover:text-primary hover:opacity-90'>
										contáctame
									</a>
								</Link>
							</div>
							<div className='flex items-center justify-center gap-4'>
								<a
									href='https://github.com/yeffweb'
									target='_blank'
									rel='noreferrer'
								>
									<Image
										src='/github.svg'
										alt='Github Logo'
										height='30'
										width='30'
									/>
								</a>

								<a
									href='https://www.linkedin.com/in/yeferson-olarte-roncancio-432867171/'
									target='_blank'
									rel='noreferrer'
								>
									<Image
										src='/linkedin.svg'
										alt='Linkeding Logo'
										height='30'
										width='30'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<article id='sobre-mi' className='mb-16 md:flex md:items-center md:gap-8'>
				<div className='mx-auto w-2/4 -scale-x-100  md:basis-2/4'>
					<Image
						src={Avatar}
						alt='Avatar Yeferson'
						layout='responsive'
						width={600}
						height={550}
						style={{
							borderRadius: '50%',
						}}
					/>
				</div>

				<div className='md:basis-2/3'>
					<p className='mb-4 sm:text-lg'>
						Soy desarrollador web, me caracterizo por trabajar con ReactJs y CSS
						para construir UI modernas e interactivas. Vivo en Bogotá, Colombia
						y estoy buscando nuevos retos en un rol como Frontend Developer en
						una empresa emocionante. Me gustaría que vieras mi trabajo.
					</p>

					<div>
						<Link href='/proyectos' passHref>
							<a className='inline-block rounded-xl border-2 border-emerald-700 p-4 uppercase text-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:border-white  hover:bg-white hover:text-primary hover:opacity-90 '>
								ver proyectos
							</a>
						</Link>
					</div>
				</div>
			</article>

			<CallToAction />
		</>
	)
}

export default Home
