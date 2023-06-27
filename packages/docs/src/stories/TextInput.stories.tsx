import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Username</Text>
          {Story()}
        </Box>
      )
    },
  ],
  args: {
    placeholder: 'Type your name',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const disabled: StoryObj<TextInputProps> = {
  args: {
    placeholder: '',
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
