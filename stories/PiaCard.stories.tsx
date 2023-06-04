import React from "react";
import { Meta, Story } from "@storybook/react";
import PiaCard from "../src/components/PiaCard";

export default {
  title: 'components/Card',
  component: PiaCard,
} as Meta<typeof PiaCard>


const CardComponent: Story<typeof PiaCard> = () => {
  return (
    <PiaCard children={'Example: Card component'} />
  )
}

export const Primary = CardComponent.bind({})