import { Button, Toast, ToastProps, ToastProvider } from '@aron-adams/react'
import { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Other/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'Scheduling made',
    content: 'Wednesday, October 23rd at 4pm',
  },
  decorators: [
    (_, { allArgs }) => {
      const [open, setOpen] = useState(false)

      const ToggleToast = (newState: boolean) => {
        setOpen(newState)
        console.log(open)
      }

      return (
        <ToastProvider>
          <Button variant="primary" size="sm" onClick={() => ToggleToast(true)}>
            Add
          </Button>

          <Toast {...allArgs} open={open} onOpenChange={ToggleToast} />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
