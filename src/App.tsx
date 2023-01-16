import {
	Text,
	Button,
	Stack,
	MantineProvider,
	MantineThemeOverride,
} from '@mantine/core'
import React from 'react'

export const theme: MantineThemeOverride = {
	colorScheme: 'dark',
}

export default function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
			<Stack align="center" mt={50}>
				<Text size="xl" weight={500}>
					Welcome to Mantine!
				</Text>
				<Button>Click the button</Button>
			</Stack>
		</MantineProvider>
	)
}
