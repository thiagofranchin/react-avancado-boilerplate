import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    title: 'Title default',
    description: 'Description default'
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />
