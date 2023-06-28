import { Avatar, AvatarProps } from '@aron-adams/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    src: 'https://picsum.photos/200',
    alt: 'Aron Adams',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: '',
  },
}
