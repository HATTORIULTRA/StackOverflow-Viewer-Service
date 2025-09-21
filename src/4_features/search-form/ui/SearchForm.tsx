import { Button } from "@/6_shared/components/ui/button";
import { Input } from "@/6_shared/components/ui/input";
import React, { useState } from "react";
import { Spinner } from "@/6_shared/components/ui/spinner";
import { useNavigate } from "react-router";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if(!trimmedQuery) {
      return;
    };

    navigate(`results?q=${encodeURIComponent(query)}`);
    setQuery("");
  };

  return (
    <div className="text-center">
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
