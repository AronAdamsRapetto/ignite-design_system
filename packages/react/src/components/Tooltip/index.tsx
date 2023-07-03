import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { Text } from '../Text'
import { TooltipArrow, TooltipContainer } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  trigger: ReactNode
  textContent: string
}

export function Tooltip({ trigger, textContent, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={300}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <TooltipContainer {...props}>
            <Text size="sm" as="span">
              {textContent}
            </Text>

            <TooltipArrow />
          </TooltipContainer>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
