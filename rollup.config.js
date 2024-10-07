import del from 'rollup-plugin-delete';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

// Plugin personnalisé pour supprimer "use client"
function removeUseClient() {
	return {
		name: 'remove-use-client',
		transform(code) {
			return code.replace(/^\s*"use client"\s*;?/m, '');
		},
	};
}

const rollupConfig = {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs',
		},
		{
			file: 'dist/index.esm.js',
			format: 'esm',
		},
	],
	plugins: [
		del({ targets: 'dist/*' }),
		removeUseClient(),
		resolve(),
		commonjs(),
		typescript({ tsconfig: './tsconfig.json' }),
		postcss({
			modules: true,
			extract: 'Quark_UI.css',
		}),
		babel({
			babelHelpers: 'bundled',
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			presets: [
				'@babel/preset-react',
				'@babel/preset-typescript',
				'@babel/preset-env',
			],
		}),
		terser(),
	],
	external: ['react', 'react-dom'],
};

export default rollupConfig;
