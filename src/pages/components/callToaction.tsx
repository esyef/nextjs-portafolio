/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

const CallToAction = () => {
	return (
		<article className='flex flex-col justify-center items-center gap-4'>
			<h2 className='text-4xl font-bold'> ¿Te gustaría hacer equipo? </h2>

			<Link href='/contacto' passHref>
				<a className='bg-emerald-700 text-white p-4 uppercase font-medium  hover:shadow-sm  inline-block rounded-xl transition-all duration-300 hover:bg-transparent hover:text-emerald-400 hover:shadow-emerald-700 hover:-translate-y-1'>
					contáctame
				</a>
			</Link>
		</article>
	)
}
export default CallToAction
