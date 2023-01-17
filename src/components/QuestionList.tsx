import React from 'react'
import Question from './Question'
import { Stack } from '@mantine/core'

export interface QuestionProps {
	id: number
	title: string
	answer: string
}
interface QuestionListProps {
	questions: QuestionProps[]
}
const QuestionList = ({ questions }: QuestionListProps) => {
	return (
		<Stack>
			<ul style={{ listStyle: 'none' }}>
				{questions.map((question) => (
					<Question
						key={question.id}
						id={question.id}
						title={question.title}
						answer={question.answer}
					/>
				))}
			</ul>
		</Stack>
	)
}

export default QuestionList
