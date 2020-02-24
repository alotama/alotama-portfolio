import React from 'react'

const HeroText = ({text}) => {
	return (
		<div className="hero__subtitle" dangerouslySetInnerHTML={{ __html: text}} />
	)
}

export default HeroText
