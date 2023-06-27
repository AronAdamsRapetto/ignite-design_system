import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Description</Text>
          {Story()}
        </Box>
      )
    },
  ],
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type about you',
  },
}

export const disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
