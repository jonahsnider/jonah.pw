import clsx from 'clsx';
import {NextSeo} from 'next-seo';
import type {FC} from 'react';
import Button from '../components/button';
import styles from '../components/button-group.module.scss';
import Container from '../components/container';
import Experience from '../components/experience';
import Header from '../components/header';
import Text from '../components/text';
import {header, links, url} from '../config';

// eslint-disable-next-line @typescript-eslint/naming-convention
const Home: FC = () => (
	<>
		<NextSeo titleTemplate='Jonah Snider | %s' title={header.subtitle} openGraph={{title: `Jonah Snider | ${header.subtitle}`}} canonical={url} />

		<Container main id='main'>
			<Header {...header} />

			<main id='links' className={clsx(styles['button-group'], styles.animated)}>
				{links.map(({id, content: link}) => (
					<Button key={id} href={link.url}>
						{link.text}
					</Button>
				))}
			</main>
		</Container>

		<Container id='experience'>
			<Text kind='h1' as='h2'>
				Experience
			</Text>

			<Experience id='voiceflow' date={{start: 'May 2021', end: 'present'}} title='Voiceflow' link='https://voiceflow.com'>
				Design, prototype, and launch voice/chat assistants. Full-time backend developer position working on the Voiceflow integrations team.
			</Experience>

			<Experience id='gameface' date={{start: 'November 2020', end: 'May 2021'}} title='GameFace' link='https://gamefaced.gg'>
				Esports tournament host. Part-time software developer position working on integrating our Discord bot with the GameFace platform.
			</Experience>

			<Experience id='team581' date={{start: 'October 2017', end: 'May 2021'}} title='Team 581' link='https://team581.club'>
				FIRST robotics team. Worked primarily on software, specializing in image recognition and autonomous routines.
			</Experience>
		</Container>
	</>
);

export default Home;
