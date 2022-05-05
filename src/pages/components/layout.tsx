import React from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
	children: JSX.Element
}

const Layout = ({ children }: Props) => {
	return (
		<div className='bg-primary text-white'>
			<div className='container mx-auto md:px-16 sm:px-0 py-8 md:grid gap-11 grid-cols-4'>
				<div className='col-span-full'>
					<Header />
				</div>
				<main className='col-span-full'>{children}</main>
				<div className='col-span-full row-end-auto'>
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default Layout
