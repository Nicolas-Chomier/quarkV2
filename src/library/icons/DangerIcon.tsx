import React from 'react';

export const DangerIcon: React.FC<IconsProps> = ({
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
		<path
			d='M18 6L6 18M6 6l12 12'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth}
		/>
	</svg>
);
