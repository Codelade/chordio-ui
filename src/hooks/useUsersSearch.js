import { useCallback, useEffect, useState } from "react";
import userService from "../services/DebugUserService";
import useDebouncedValue from "./useDebouncedValue";

const INITIAL_FILTERS = {
  search: "",
  page: 0,
  size: 5,
  sortBy: "id",
  direction: "desc",
};

const useUsersSearch = () => {
  const [search, setSearch] = useState(INITIAL_FILTERS.search);
  const [page, setPage] = useState(INITIAL_FILTERS.page);
  const [size, setSize] = useState(INITIAL_FILTERS.size);
  const [sortBy, setSortBy] = useState(INITIAL_FILTERS.sortBy);
  const [direction, setDirection] = useState(INITIAL_FILTERS.direction);

  const debouncedSearch = useDebouncedValue(search, 300);

  const [usersPage, setUsersPage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await userService.searchUsers({
        search: debouncedSearch,
        page,
        size,
        sortBy,
        direction,
      });

      setUsersPage(response.data);
    } catch (error) {
      console.error("Failed to load users", error);
      setUsersPage(null);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, page, size, sortBy, direction]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setDirection((currentDirection) =>
        currentDirection === "asc" ? "desc" : "asc",
      );
    } else {
      setSortBy(column);
      setDirection("asc");
    }
  };

  const setSearchTerm = (value) => {
    setSearch(value);
    setPage(0);
  };

  const setPageSize = (value) => {
    setSize(value);
    setPage(0);
  };

  return {
    search,
    setSearchTerm,
    page,
    setPage,
    size,
    setPageSize,
    sortBy,
    direction,
    usersPage,
    loading,
    handleSort,
    refresh: fetchData,
  };
};

export default useUsersSearch;
