import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/6_shared/components/ui/table"
import { useAppSelector } from "@/6_shared/hooks/redux.hooks"


const ResultsPage = () => {
  const {questions} = useAppSelector(state => state.search)
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-6 text-foreground">Search Results</h1>
      <Table>
      <TableCaption>A list of your search results.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Author</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Answers</TableHead>
          <TableHead className="text-right">Tags</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {questions.map((item) => (
          <TableRow key={item.question_id}>
            <TableCell className="font-medium">{item.owner.display_name}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.answer_count}</TableCell>
            <TableCell className="text-right">{item.tags}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </div>
  )
}

export default ResultsPage  