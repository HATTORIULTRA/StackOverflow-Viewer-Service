import { Button } from "@/6_shared/components/ui/button"
import { Input } from "@/6_shared/components/ui/input"


const SearchForm = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8 text-foreground">StackOverflow Viewer</h1>
      <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input placeholder="Search..." className="flex-1"/>
        <Button type="submit" className="px-8">Find</Button>
      </form>
    </div>
  )
}

export default SearchForm