import React from 'react'
import UnderlinedHeading from './underlinedHeading';

const HomeSection = ({title, children,spacing}) => {
  return (
		<div className={`flex flex-col ${spacing}`}>
          <UnderlinedHeading name={title} />
          {children}
		</div>
  );
}

export default HomeSection