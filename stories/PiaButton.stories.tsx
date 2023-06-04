import React from "react";
import { Meta, Story } from '@storybook/react'
import PiaButton from "../src/components/PiaButton";

export default {
   title: 'Components/Button',
   component: PiaButton
} as Meta<typeof PiaButton>

const ButtonComponent: Story<typeof PiaButton> = () => {
   return(
      <PiaButton/> 
   )
}

export const Primary = ButtonComponent.bind({})