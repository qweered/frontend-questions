import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core'
import React, { useState } from 'react'
import App from './App'

function ThemeProviders() {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{ colorScheme }}
			>
				<App />
			</MantineProvider>
		</ColorSchemeProvider>
	)
}

export default ThemeProviders
