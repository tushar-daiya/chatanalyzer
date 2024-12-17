import React from "react";

type Props = {
  data: any;
};

export default function Links({ data }: Props) {
  return (
    <div className="py-5">
      <h2 className="text-xl font-bold">Links</h2>
      <ul className="list-disc list-inside mt-2">
        {data?.map((link: string, index: number) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
