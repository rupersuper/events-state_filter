export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="categories">
      <ul className="toolbar">
        {filters.map((filter) => (
          <li
            className="toolbar__item"
            key={filter}
            onClick={() => onSelectFilter(filter)}
            style={{
              transform: filter === selected ? "scale(0.9)" : "",
            }}
          >
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
}
