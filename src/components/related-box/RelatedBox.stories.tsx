import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RelatedBox from "./RelatedBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "RelatedBox",
  component: RelatedBox,
} as ComponentMeta<typeof RelatedBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RelatedBox> = (args) => {
  const allData = ["ab", "bc", "cd", "ba"];

  const [query, setQuery] = useState("");

  const filteredData = allData.filter((d) => d.startsWith(query));

  return (
    <RelatedBox {...(args as any)}>
      <RelatedBox.InputText
        placeholder="Type something..."
        onChange={(v) => setQuery(v)}
      />
      <RelatedBox.SuggestionsBox onSelect={(i) => console.log(i)}>
        {filteredData.map((d) => (
          <RelatedBox.SuggestionItem key={d}>{d}</RelatedBox.SuggestionItem>
        ))}
      </RelatedBox.SuggestionsBox>
    </RelatedBox>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
