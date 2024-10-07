import React from 'react';

export const InfoIcon: React.FC<IconsProps> = ({
	size = 22,
	strokeWidth = 2,
	...props
}) => (
	<svg
		height={size}
		width={size}
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth}
		>
			<circle cx='12' cy='12' r='10' />
			<path d='M12 16v-4m0-4h.01' />
		</g>
	</svg>
);
