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
    name: "Kanye West",
    backgroundColor: "white",
    listencount: "12345",
    playcount: "12345",
  },
};

export const DarkStory = Template.bind({});
DarkStory.args = {
  task: {
    name: "Kanye West",
    backgroundColor: "gray.900",
    listencount: "12345",
    playcount: "12345",
  },
};
