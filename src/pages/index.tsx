/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CallToAction from './components/callToaction'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Yefweb | Portafolio</title>
				<meta
					name='description'
					content='Yeferson Olarte Roncancio Yefweb Desarrollador frontend'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section className='md:flex items-center justify-between flex-wrap mb-14'>
				<div className='flex flex-col gap-4'>
					<h1 className='md:text-5xl'>
						{' '}
						Hola soy{' '}
						<span className='text-emerald-400 font-bold'>Yeferson,</span> un
						<span className='block font-bold'>
							&lt; Frotend <span className='text-emerald-400'> Developer</span>{' '}
							&#47; &gt;
						</span>
					</h1>

					<div className='flex flex-col gap-4'>
						<div className='flex gap-5 items-center'>
							<a
								href='#sobre-mi'
								className='bg-emerald-700 text-white p-4 uppercase font-medium  hover:shadow-sm  inline-block rounded-xl  duration-300
							hover:bg-transparent hover:text-emerald-400 hover:shadow-emerald-700 
							hover:-translate-y-1 transition-all scroll-smooth	
							'
							>
								Sobre mí
							</a>
							<Link href='/contacto' passHref>
								<a className='border-2 border-emerald-700 inline-block p-4 uppercase rounded-xl hover:bg-white hover:border-white hover:-translate-y-1 transition-all text-emerald-400 hover:text-primary  duration-300 hover:opacity-90'>
									contáctame
								</a>
							</Link>
						</div>
						<div className='flex gap-4'>
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

				<Image
					src='/hero-image_1400.png'
					alt='ilustración'
					height='450'
					width='600'
				/>
			</section>

			<article id='sobre-mi' className='flex items-center justify-evenly mb-16'>
				<div className='basis-1/3 -scale-x-100 shadow-lg shadow-slate-900 rounded-full'>
					<Image
						src='/avatar.png'
						alt='Avatar Yeferson'
						height='500px'
						width='500px'
						layout='responsive'
						style={{ borderRadius: '50%' }}
					/>
				</div>
				<div className='basis-2/4 flex flex-col gap-4'>
					<p>
						Soy desarrollador web, y me gusta crear la parte visual de un sitio
						web modernos con HTML, CSS y Javascript. En mis proyectos, uso
						ReactJs para un frontend moderno e interactivo. Vivo en Bogotá,
						Colombia y estoy buscando nuevos retos en un rol como Frontend
						Developer en una empresa emocionante. Me gustaría que vieras mi
						trabajo.
					</p>
					<div>
						<Link href='/proyectos' passHref>
							<a className='border-2 border-emerald-700 inline-block p-4 uppercase rounded-xl hover:bg-white hover:border-white hover:opacity-90 text-emerald-400 hover:text-primary  duration-300 hover:-translate-y-1 transition-all '>
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
