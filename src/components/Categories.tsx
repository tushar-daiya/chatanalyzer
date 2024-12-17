import React, { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = {
  data: any;
};

export default function Categories({ data }: Props) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>(
    data?.[0]?.name
  );
  const selectedCategoryData = useMemo(() => {
    return data?.find((category: any) => category.name === selectedCategory);
  }, [selectedCategory, data]);
  return (
    <div className="pt-5">
      <h2 className="text-xl font-bold mb-2">Categories</h2>
      <Select
        value={selectedCategory}
        onValueChange={(e) => {
          setSelectedCategory(e);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {data?.map((category: any, index: number) => (
              <SelectItem value={category.name} key={index}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedCategoryData && (
        <div className="mt-5">
          <h3 className="text-lg font-bold">{selectedCategoryData.name}</h3>
          <ul className="list-disc list-inside mt-2">
            {selectedCategoryData.messages.map(
              (message: string, index: number) => (
                <li key={index}>{message}</li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
