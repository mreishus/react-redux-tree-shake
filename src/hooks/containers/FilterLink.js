import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const FilterLink = ({ filter, children }) => {
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(setVisibilityFilter(filter));
  }, [dispatch, filter]);
  return (
    <Link onClick={onClick} active={filter === visibilityFilter}>
      {children}
    </Link>
  );
};
export default FilterLink;
