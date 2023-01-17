import React from 'react'
import { Text, Badge, Box } from '@mantine/core'
import { QuestionProps } from './QuestionList'

const Question = ({ id, title, answer }: QuestionProps) => {
	return (
		<li>
			<Box
				sx={(theme) => ({
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[6]
							: theme.colors.gray[0],
					textAlign: 'center',
					padding: theme.spacing.xs,
					borderRadius: theme.radius.md,
					width: '50%',

					'&:hover': {
						backgroundColor:
							theme.colorScheme === 'dark'
								? theme.colors.dark[5]
								: theme.colors.gray[1],
					},
				})}
			>
				<Text span sx={{}}>
					{title}
				</Text>
				<Text>{answer}</Text>
				<Text>id: {id}</Text>
				<Badge>tags</Badge>
			</Box>
		</li>
	)
}

export default Question
