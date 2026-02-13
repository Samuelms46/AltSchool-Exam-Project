import "../Styles/SearchFilter.css";

function SearchFilter({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
}) {
  return (
    <div className="search-filter-container">
      <div className="search-box">
        <label htmlFor="search-input" className="visually-hidden">
          Search todos
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Search todos by title..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
          aria-label="Search todos by title"
        />
      </div>

      <div
        className="filter-buttons"
        role="group"
        aria-label="Filter by completion status"
      >
        <button
          onClick={() => onStatusChange("all")}
          className={`filter-btn ${statusFilter === "all" ? "active" : ""}`}
          aria-pressed={statusFilter === "all"}
        >
          All
        </button>
        <button
          onClick={() => onStatusChange("complete")}
          className={`filter-btn ${statusFilter === "complete" ? "active" : ""}`}
          aria-pressed={statusFilter === "complete"}
        >
          Complete
        </button>
        <button
          onClick={() => onStatusChange("incomplete")}
          className={`filter-btn ${statusFilter === "incomplete" ? "active" : ""}`}
          aria-pressed={statusFilter === "incomplete"}
        >
          Incomplete
        </button>
      </div>
    </div>
  );
}

export default SearchFilter;
