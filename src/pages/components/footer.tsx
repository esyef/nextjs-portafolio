import React from 'react'

const curentYear = new Date().getFullYear()
const Footer = () => {
	return (
		<footer className='text-center shadow-inner pt-4'>
			<p> Desarrollado con 💚 por YefWeb</p>
			<span className='block'>{curentYear}</span>
		</footer>
	)
}

export default Footer
