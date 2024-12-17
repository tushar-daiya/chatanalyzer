import React from "react";
import { TagCloud } from "react-tagcloud";
type Props = {
  data: any;
};

export default function WordCloud({ data }: Props) {
  return (
    <div className="pt-5">
      <h2 className="text-xl font-bold mb-2">Tag Cloud</h2>
      <TagCloud tags={data} minSize={12} maxSize={35} />
    </div>
  );
}
