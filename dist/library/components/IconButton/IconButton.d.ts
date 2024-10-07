import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
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
export declare const IconButton: FC<IconButtonProps>;
