import { useState } from 'react'
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	MediaQuery,
	Burger,
	useMantineTheme,
	Text,
} from '@mantine/core'
import React from 'react'
import { ThemeToggle } from './components/ThemeToggle'
import QuestionList from './components/QuestionList'

export default function App() {
	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)

	const dummy_questions = [
		{
			id: 1,
			title: 'What is react?',
			answer: 'Suck dick',
		},
		{
			id: 2,
			title: 'What is react?',
			answer: 'Suck dick',
		},
		{
			id: 3,
			title: 'What is react?',
			answer: 'Suck dick',
		},
		{
			id: 4,
			title: 'What is react?',
			answer: 'Suck dick',
		},
	]

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 200, lg: 300 }}
				>
					<Text>Navbar</Text>
				</Navbar>
			}
			footer={
				<Footer height={60} p="md">
					Application footer
				</Footer>
			}
			header={
				<Header height={{ base: 50, md: 70 }} p="md">
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							height: '100%',
						}}
					>
						<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size="sm"
								color={theme.colors.gray[6]}
								mr="xl"
							/>
						</MediaQuery>
						<Text>Header</Text>
						<ThemeToggle />
					</div>
				</Header>
			}
		>
			<QuestionList questions={dummy_questions} />
		</AppShell>
	)
}
