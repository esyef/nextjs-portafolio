import React from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
	children: JSX.Element
}

const Layout = ({ children }: Props) => {
	return (
		<div className='bg-primary text-white'>
			<div className='grid-cols-4 gap-11 px-4 py-11 md:grid md:px-16'>
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
