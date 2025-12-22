'use client';

import Link from 'next/link';
import clsx from 'clsx';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SectionProps {
	label: string;
	href: string;
	className?: string;
}

export const SectionButton = ({label, href, className}: SectionProps) => (
	<Link href={href} target='_blank'>
		<Button variant='transparent' className={clsx('group', className)} >
			<span className="leading-none">{label}</span>
			<FontAwesomeIcon icon={['fas', 'arrow-right']} className="text-secondary group-hover:translate-x-1 transition-transform" />
		</Button>
	</Link>
);
