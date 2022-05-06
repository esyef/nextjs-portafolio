/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

const CallToAction = () => {
	return (
		<article className='mb-14 flex flex-col items-center justify-center gap-4'>
			<h2 className='text-center text-4xl font-bold'>
				{' '}
				¿Te gustaría hacer equipo conmigo?
			</h2>

			<Link href='/contacto' passHref>
				<a className='inline-block rounded-xl bg-emerald-700 p-4 font-medium  uppercase  text-white transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:shadow-sm md:hover:text-emerald-400 md:hover:shadow-emerald-700'>
					contáctame
				</a>
			</Link>
		</article>
	)
}
export default CallToAction
