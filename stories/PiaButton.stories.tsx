import React from "react";
import { Meta, Story } from '@storybook/react'
import PiaButton, { PiaButtonProps } from "../src/components/PiaButton";

export default {
   title: 'Components/Button',
   component: PiaButton
} as Meta<typeof PiaButton>

const ButtonComponent: Story<typeof PiaButton> = (args) => {
   return(
      <PiaButton {...args}/> 
   )
}

export const Primary = ButtonComponent.bind({})
Primary.args = {
   text: 'primary',
   variant: 'primary'
} as PiaButtonProps;


export const Secondary = ButtonComponent.bind({})
Secondary.args = {
   text: 'secondary',
   variant: 'secondary'
} as PiaButtonProps;