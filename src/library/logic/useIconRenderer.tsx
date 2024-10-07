import React, { useMemo } from 'react';
import Loader from '../components/loader/Loader';
import { SuccessIcon } from '../icons/SuccessIcon';
import { WarningIcon } from '../icons/WarningIcon';
import { DangerIcon } from '../icons/DangerIcon';
import { InfoIcon } from '../icons/InfoIcon';
import { LoveIcon } from '../icons/LoveIcon';

const useIconRenderer = (
	isDisabled: boolean | undefined,
	isLoading: boolean | undefined,
	variant: Variant | undefined,
	children: React.ReactNode | undefined,
	size: Dimensions | undefined,
) => {
	const iconSize =
		size === 'small'
			? 22
			: size === 'medium'
			? 24
			: size === 'large'
			? 26
			: size === 'full'
			? 40
			: 22;

	return useMemo(() => {
		if (isLoading && !isDisabled) {
			return <Loader variant={variant} />;
		}

		switch (variant) {
			case 'success':
				return <SuccessIcon size={iconSize} strokeWidth={1.8} />;
			case 'warning':
				return <WarningIcon size={iconSize} strokeWidth={1.8} />;
			case 'danger':
				return <DangerIcon size={iconSize} strokeWidth={1.8} />;
			case 'info':
				return <InfoIcon size={iconSize} strokeWidth={1.8} />;
			case 'love':
				return <LoveIcon size={iconSize} strokeWidth={1.8} />;
			default:
				return children || null;
		}
	}, [isLoading, isDisabled, variant, iconSize, children]);
};

export default useIconRenderer;
