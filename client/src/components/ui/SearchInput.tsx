'use client'

import { FC } from "react";
import { InputRef } from "antd";
import ANTDInput from "antd/lib/input"
import { SearchProps } from "antd/es/input/Search";

const { Search } = ANTDInput;

type SearchInputProps = SearchProps & React.RefAttributes<InputRef>;

export const SearchInput: FC<SearchInputProps> = (props) => (
  <Search {...props} />
);
