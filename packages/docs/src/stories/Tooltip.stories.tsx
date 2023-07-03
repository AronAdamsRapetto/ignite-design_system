import { Box, Button, Text, Tooltip, TooltipProps } from '@aron-adams/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Other/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    trigger: (
      <Box
        css={{
          width: 'max-content',
          height: 'max-content',
          margin: '100px auto',
        }}
      >
        <Text>Hover me</Text>
      </Box>
    ),
    textContent: 'I am a Tooltip',
  },
}

export const DisabledMessage: StoryObj<TooltipProps> = {
  args: {
    trigger: (
      <Button
        css={{ margin: '100px auto' }}
        variant="primary"
        size="sm"
        disabled
      >
        Enviar
      </Button>
    ),
    textContent: 'Invalid email',
  },
}
