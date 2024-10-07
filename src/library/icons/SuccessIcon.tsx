import React from 'react';

export const SuccessIcon: React.FC<IconsProps> = ({
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
			d='M20 6L9 17l-5-5'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth}
		/>
	</svg>
);
