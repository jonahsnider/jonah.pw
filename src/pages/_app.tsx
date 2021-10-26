import {DefaultSeo} from 'next-seo';
import {ThemeProvider, useTheme} from 'next-themes';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import 'normalize.css';
import type {FC} from 'react';
import {color, seo, url} from '../config';
import '../styles/global.scss';

// eslint-disable-next-line @typescript-eslint/naming-convention
const JonahSniderApp: FC = props => {
	const theme = (useTheme().resolvedTheme as undefined | 'dark' | 'light') ?? 'light';

	return (
		<>
			<Head>
				<meta name='theme-color' content={theme === 'dark' ? color.foreground : color.background} />
				<link rel='manifest' href={`${url}/manifests/${theme}.webmanifest`} />

				<link rel='icon' href={`${url}/images/js/${theme}/favicon.ico`} type='image/x-icon' />

				{[72, 96, 128, 144, 152, 192, 384, 512].map(dimension => [
					<link
						key={`icon-${dimension}`}
						rel='icon'
						type='image/png'
						sizes={`${dimension}x${dimension}`}
						href={`${url}/images/js/${theme}/js-${dimension}x.png`}
					/>,
					<link
						key={`apple-touch-icon-${dimension}`}
						rel='apple-touch-icon'
						type='image/png'
						sizes={`${dimension}x${dimension}`}
						href={`${url}/images/js/${theme}/js-${dimension}x.png`}
					/>,
				])}
			</Head>

			<DefaultSeo {...seo} />

			{props.children}
		</>
	);
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const ThemedApp: FC<AppProps> = ({Component, pageProps}) => (
	<ThemeProvider>
		<JonahSniderApp>
			<Component {...pageProps} />
		</JonahSniderApp>
	</ThemeProvider>
);

export default ThemedApp;
