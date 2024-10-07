// React core
import React from 'react';
// External modules / Third-party libraries
// Local components
// Hooks and utilities
// Configuration
// Styles
import styles from './Loader.module.css';

type LoaderProps = { variant?: Variant };

const Loader: React.FC<LoaderProps> = ({ variant }) => {
	return <span className={styles.loader} data-variant={variant}></span>;
};

export default Loader;
