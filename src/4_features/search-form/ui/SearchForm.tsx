import { Button } from "@/6_shared/components/ui/button";
import { Input } from "@/6_shared/components/ui/input";
import { useAppDispatch } from "@/6_shared/hooks/redux.hooks";
import { useState } from "react";
import { searchQuestions } from "../model/searchSlice";
import { Spinner } from "@/6_shared/components/ui/spinner";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(searchQuestions(query));
    setQuery("");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">
        StackOverflow Viewer
      </h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
      >
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="flex-1"
        />
        <Button type="submit" className="px-8">
          Find
        </Button>
      </form>
      <Spinner />
    </div>
  );
};

export default SearchForm;
