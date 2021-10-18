import { Tag, TagsContainer } from "./Tag";
import { nextKeyIndex } from "../../../Utils/HelpFunctions/generators";

const TagList = ({ tags }: { tags: string[] }): JSX.Element => {
  const renderTagList = (tags: string[]) =>
    tags.map((tag: string, index: number) => <Tag key={nextKeyIndex()}>{tag}</Tag>);

  return <TagsContainer>{renderTagList(tags)}</TagsContainer>;
};

export default TagList;
