import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/6_shared/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/6_shared/hooks/redux.hooks";
import { useSearchParams } from "react-router";
import { useEffect } from "react";
import { searchQuestions } from "@/4_features/search-form/model/searchSlice";

const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const { questions } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  
  const query = searchParams.get("q");

  useEffect(() => {
    if (query) {
      dispatch(searchQuestions(query));
    }
  }, []);

  return (
    <div className="flex flex-col mb-6">
      <h1 className="ml-auto mr-auto text-3xl font-bold mt-8 mb-2 text-foreground">
        Search Results
      </h1>
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
              <TableCell className="font-medium">
                {item.owner.display_name}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.answer_count}</TableCell>
              <TableCell className="text-right">{item.tags[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultsPage;
