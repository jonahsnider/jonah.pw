import type {FC, PropsWithChildren} from 'react';
import styles from './experience.module.scss';
import Text from './text';

export type Props = {
	id: string;
	date: {start: string; end: string};
	title: string;
	link?: string;
};

const Experience: FC<PropsWithChildren<Props>> = props => (
	<section id={props.id} className={styles.experience}>
		<Text kind='h3'>
			{props.link ? (
				<a rel='noopener noreferrer' target='_blank' className={styles.link} href={props.link}>
					{props.title}
				</a>
			) : (
				props.title
			)}
		</Text>
		<Text kind='p'>
			{props.date.start} - {props.date.end}
		</Text>
		<Text kind='p'>{props.children}</Text>
	</section>
);

export default Experience;
