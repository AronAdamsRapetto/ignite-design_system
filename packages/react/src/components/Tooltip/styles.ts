import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  width: '$4',
  height: '$2',
})
