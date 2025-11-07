import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/6_shared/components/ui/table";
import type { ResultsTableProps } from "../model/results-table.types";


const ResultsTable = ({ data, handleOpenQuick }: ResultsTableProps) => {
    console.log('таблица перерес')
  
  return (
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
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <TableRow key={item.question_id}>
              <TableCell onClick={() => handleOpenQuick(item.owner?.account_id)} className="font-medium">
                {item.owner?.display_name ?? "Unknown"}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.answer_count}</TableCell>
              <TableCell className="text-right">
                {item.tags?.[0] ?? "-"}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={4}
              className="text-center text-muted-foreground"
            >
              + No results found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ResultsTable;
