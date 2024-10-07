import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import useIconRenderer from '../../logic/useIconRenderer';
import styles from './IconButton.module.css';

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	children: ReactNode;
	name?: string;
	type?: ButtonType;
	variant?: Variant;
	size?: Dimensions;
	radius?: Radius;
	shadow?: boolean;
	isLoading?: boolean;
	isDisabled?: boolean;
	noPropagation?: boolean;
};

export const IconButton: FC<IconButtonProps> = ({
	onClick,
	children,
	name,
	type = 'button',
	variant,
	size,
	radius,
	shadow,
	isLoading,
	isDisabled,
	noPropagation = false,
	...rest
}) => {
	const icon = useIconRenderer(
		isDisabled,
		isLoading,
		variant,
		children,
		size,
	);

	// Stop la propagation des évenements
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (noPropagation) {
			e.stopPropagation();
		}
		onClick?.(e);
	};

	return (
		<button
			onClick={handleClick}
			name={`icon-button-${name}`}
			type={type}
			data-variant={isDisabled ? undefined : variant}
			data-size={size}
			data-radius={radius}
			data-shadow={shadow}
			data-isloading={isDisabled ? undefined : isLoading}
			disabled={isDisabled || isLoading}
			className={styles.iconButton}
			{...rest}
		>
			{icon}
		</button>
	);
};
