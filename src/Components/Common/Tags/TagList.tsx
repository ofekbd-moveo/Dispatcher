import { Tag, TagsContainer } from "./Tag";

const TagList = ({ tags }: { tags: string[] }): JSX.Element => {
  const renderTagList = (tags: string[]) => tags.map((tag: string, key: number) => <Tag key={key}>{tag}</Tag>);

  return <TagsContainer>{renderTagList(tags)}</TagsContainer>;
};

export default TagList;
