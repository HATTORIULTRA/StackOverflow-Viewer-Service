import { useSearchParams } from "react-router";
import {useEffect, useRef, useState} from "react";
import { useAppDispatch, useAppSelector } from "@/6_shared/hooks/redux.hooks";
import { searchQuestions } from "@/4_features/search-form/model/searchSlice";
import { ResultsTable } from "@/4_features/results-table";
import { QuickView } from "@/4_features/quick-view";
import { Spinner } from "@/6_shared/components/ui/spinner";
import { getAuthorPosts } from "@/4_features/quick-view/model/quickViewSlice";

const ResultsPage = () => {
  const dialogRef = useRef(null);

  const [searchParams] = useSearchParams();
  const [isOpened, setIsOpened] = useState(false)
  const { questions, isLoading } = useAppSelector((state) => state.search);
  console.log(questions)
  const dispatch = useAppDispatch();

  const query = searchParams.get("q");

  const handleOpenQuick = (id: number) => {
    dialogRef.current?.showModal()
    dispatch(getAuthorPosts(id))
  };

  const handleCloseOpenQuick = () => {
    dialogRef.current?.close()
  }

  useEffect(() => {
    if (query && query?.trim().length > 0) {
      dispatch(searchQuestions(query));
    }
  }, [query, dispatch]);

  return (
    <div className="flex flex-col mb-6 items-center">
      <h1 className="ml-auto mr-auto text-3xl font-bold mt-8 mb-4 text-foreground">
        Search Results
      </h1>
      {isLoading ? (
        <Spinner size="large" />
      ) : (
        <ResultsTable handleOpenQuick={handleOpenQuick} data={questions} />
      )}

          <dialog
             ref={dialogRef}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => handleCloseOpenQuick()}
          >
            <div
              className="fixed right-4 top-20 w-80 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <QuickView />
            </div>
          </dialog>
    </div>
  );
};

export default ResultsPage;
