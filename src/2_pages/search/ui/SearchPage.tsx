import { SearchForm } from "@/4_features/search-form"

const SearchPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">
        StackOverflow Viewer
      </h1>
        <SearchForm />
    </div>
  )
}

export default SearchPage