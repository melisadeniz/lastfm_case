import React from "react";

import Artist from "../components/Artist";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Artist",
  component: Artist,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Artist {...args} />;

//👇 Each story then reuses that template
export const LightStory = Template.bind({});
LightStory.args = {
  task: {
    name: "John Doe",
    backgroundColor: "white",
    listencount: "1234",
    playcount: "1234",
  },
};

export const DarkStory = Template.bind({});
DarkStory.args = {
  task: {
    name: "Jane Doe",
    backgroundColor: "gray.900",
    listencount: "1234",
    playcount: "1234",
  },
};
