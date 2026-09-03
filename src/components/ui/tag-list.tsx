type TagListProps = {
  tags: readonly string[];
  compact?: boolean;
};

export function TagList({ tags, compact = false }: TagListProps) {
  return (
    <ul className={compact ? "tag-list tag-list--compact" : "tag-list"} aria-label="Tecnologías">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
