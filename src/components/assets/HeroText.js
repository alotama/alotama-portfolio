import React from 'react'
import BodyContent from './BodyContent';

const HeroText = ({text}) => {
	return (
		<div className="hero__subtitle">
			<BodyContent blocks={text} />
		</div>
	)
}

export default HeroText
