import React from "react";
import { Meta, Story } from '@storybook/react';
import PiaCardOptions, { PiaCardOptionsProps } from "../src/components/PiaCardOptions";

export default {
  title: 'components/CardOptions',
  component: PiaCardOptions
} as Meta<typeof PiaCardOptions>

const CardOptionsComponent: Story<typeof PiaCardOptions> = (args) => {
  return(
    <PiaCardOptions options={[]} {...args} />
  )
}

export const Default = CardOptionsComponent.bind({})
Default.args = {
  options: [
    {
      id: 1,
      title: 'E-book',
      subtitle: 'R$ 00,00',
      footer: '.pdf, .epub, .mob'
    },
    {
      id: 2,
      title: 'Impresso',
      subtitle: 'R$ 00,00',
      footer: '.pdf, .epub, .mob'
    },
    {
      id: 3,
      title: 'Impresso + E-book',
      subtitle: 'R$ 00,00',
      footer: '.pdf, .epub, .mob'
    },
  ]
} as PiaCardOptionsProps