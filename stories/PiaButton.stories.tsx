import React from "react";
import { Meta, Story } from '@storybook/react'
import PiaButton, { ButtonProps } from "../src/components/PiaButton/button";

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
   children: 'primary',
   variant: 'primary'
} as ButtonProps;

export const Secondary = ButtonComponent.bind({})
Secondary.args = {
   children: 'secondary',
   variant: 'secondary'
} as ButtonProps;

export const Success = ButtonComponent.bind({})
Success.args = {
   children: 'success',
   variant: 'success'
} as ButtonProps;

export const Warning = ButtonComponent.bind({})
Warning.args = {
   children: 'warning',
   variant: 'warning'
} as ButtonProps;

export const Danger = ButtonComponent.bind({})
Danger.args = {
   children: 'danger',
   variant: 'danger'
} as ButtonProps;