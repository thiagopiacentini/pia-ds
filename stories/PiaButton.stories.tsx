import React from "react";
import { Meta, Story } from '@storybook/react'
import PiaButton from "../src/components/PiaButton";

export default {
   title: 'Components/Button',
   component: PiaButton
} as Meta<typeof PiaButton>

const Template: Story<typeof PiaButton> = ()=> <PiaButton/> 

export const Primary = Template.bind({})