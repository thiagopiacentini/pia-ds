import React from "react";
import { Meta, Story } from "@storybook/react";
import PiaTag from '../src/components/PiaTag';

export default {
  title: 'components/Tag',
  component: PiaTag,
} as Meta<typeof PiaTag>

const TagComponent: Story<typeof PiaTag> = (args) => {
  return(
    <PiaTag text={'Example'} {...args} />
  )
}

export const Primary = TagComponent.bind({})
