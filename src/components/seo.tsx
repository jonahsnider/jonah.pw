import React from 'react';
import SiteMetadata from '../../types/site-metadata';
import siteMetadata from '../config/site-metadata';
import {useAmp} from 'next/amp';

/**
 * A collection of SEO tags that use values from a site-wide or page specific config.
 */
export default function SEO(props: {
	siteMetadata: SiteMetadata;
	theme?: 'dark' | 'default';
}): JSX.Element {
	// Invert colors if on dark theme
	const themeColor =
		props.theme === 'dark' ? siteMetadata.accentColor : siteMetadata.themeColor;

	return (
		<>
			{['mobile-web-app-capable', 'apple-mobile-web-app-capable'].map(name => (
				<meta key={name} name={name} content='yes' />
			))}

			<meta name='msapplication-starturl' content='/' />
			<link rel='manifest' href={`/manifests/${props.theme}.webmanifest`} />

			<link
				rel='icon'
				href={`${props.siteMetadata.url}/images/js/${props.theme}/favicon.ico`}
				type='image/x-icon'
			/>

			<meta
				property='og:image'
				content={`${props.siteMetadata.url}/images/js/${props.theme}/icon-512.png`}
			/>
			<meta
				property='og:image:secure_url'
				content={`${props.siteMetadata.url}/images/js/${props.theme}/icon-512.png`}
			/>
			<meta property='og:image:type' content='image/png' />
			<meta property='og:image:width' content='512' />
			<meta property='og:image:height' content='512' />

			{/* A bunch of icons. */}
			{[72, 96, 128, 144, 152, 192, 384, 512].map(dimension => [
				<link
					key={`icon-${dimension}`}
					rel='icon'
					type='image/png'
					sizes={`${dimension}x${dimension}`}
					href={`${props.siteMetadata.url}/images/js/${props.theme}/icon-${dimension}.png`}
				/>,
				<link
					key={`apple-touch-icon-${dimension}`}
					rel='apple-touch-icon'
					type='image/png'
					sizes={`${dimension}x${dimension}`}
					href={`${props.siteMetadata.url}/images/js/${props.theme}/icon-${dimension}.png`}
				/>
			])}

			<link rel='apple-touch-startup-image' href={props.siteMetadata.icon} />

			<meta
				name='apple-mobile-web-app-status-bar-style'
				content='black-translucent'
			/>

			{props.siteMetadata.title && (
				<>
					<meta
						key='openGraphSiteName'
						name='title'
						content={props.siteMetadata.title}
					/>
					<meta name='application-name' content={props.siteMetadata.title} />
					<meta
						name='apple-mobile-web-app-title'
						content={props.siteMetadata.title}
					/>
					<meta
						key='twitterTitle'
						name='twitter:title'
						content={props.siteMetadata.title}
					/>
				</>
			)}
			{props.siteMetadata.title && (
				<meta
					key='openGraphTitle'
					property='og:title'
					content={props.siteMetadata.title}
				/>
			)}

			{props.siteMetadata.url && (
				<>
					<meta
						key='openGraphURL'
						property='og:url'
						content={props.siteMetadata.url}
					/>
					{/* I'm pretty sure Next.js inserts their own canonical URL and AMP gets mad when I insert mine as well */}
					{!useAmp() && (
						<link
							key='canonicalURL'
							rel='canonical'
							href={props.siteMetadata.url}
						/>
					)}
				</>
			)}

			{props.siteMetadata.i18n?.language && (
				<meta
					key='language'
					name='language'
					content={props.siteMetadata.i18n.language}
				/>
			)}
			{props.siteMetadata.i18n?.locale && (
				<meta
					key='openGraphLocale'
					property='og:locale'
					content={props.siteMetadata.i18n.locale}
				/>
			)}

			{props.siteMetadata.description && (
				<>
					<meta
						key='description'
						name='description'
						content={props.siteMetadata.description}
					/>
					<meta
						key='twitterDescription'
						name='twitter:description'
						content={props.siteMetadata.description}
					/>
					<meta
						key='openGraphDescription'
						property='og:description'
						content={props.siteMetadata.description}
					/>
				</>
			)}

			<meta property='og:type' content='website' />

			<meta name='twitter:card' content='summary' />

			<meta key='themeColor' name='theme-color' content={themeColor} />
			<meta name='msapplication-navbutton-color' content={themeColor} />

			<meta
				key='keywords'
				name='keywords'
				content={props.siteMetadata.keywords.join(', ')}
			/>
		</>
	);
}
