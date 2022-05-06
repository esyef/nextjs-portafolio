import React from 'react'

const curentYear = new Date().getFullYear()
const Footer = () => {
	return (
		<footer className='pt-4 text-center shadow-inner'>
			<p> Desarrollado con 💚 por YefWeb</p>
			<span className='block'>{curentYear}</span>
		</footer>
	)
}

export default Footer
