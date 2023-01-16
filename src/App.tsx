import { useState } from 'react'
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Aside,
	MediaQuery,
	Burger,
	useMantineTheme,
	Text,
} from '@mantine/core'
import React from 'react'
import { ThemeToggle } from './components/ThemeToggle'

export default function App() {
	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)

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
			<Text>Resize app to see responsive navbar in action</Text>
		</AppShell>
	)
}
