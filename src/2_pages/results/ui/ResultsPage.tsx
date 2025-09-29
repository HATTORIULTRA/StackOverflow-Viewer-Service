import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/6_shared/hooks/redux.hooks";
import { searchQuestions } from "@/4_features/search-form/model/searchSlice";
import { ResultsTable } from "@/4_features/results-table";
import { QuickView } from "@/4_features/quick-view";
import { Spinner } from "@/6_shared/components/ui/spinner";
import { getAuthorPosts } from "@/4_features/quick-view/model/quickViewSlice";

const ResultsPage = () => {
  const [openQuick, setOpenQuick] = useState(false);
  const [searchParams] = useSearchParams();
  const { questions, isLoading } = useAppSelector((state) => state.search);
  console.log(questions)
  const dispatch = useAppDispatch();

  const query = searchParams.get("q");

  const handleOpenQuick = (id: any) => {
    setOpenQuick((prev) => !prev);
    dispatch(getAuthorPosts(id))
  };

  useEffect(() => {
    if (!openQuick) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenQuick(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openQuick]);

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
        <ResultsTable openQuickView={handleOpenQuick} data={questions} />
      )}

      {openQuick && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpenQuick(false)}
          >
            <div
              className="fixed right-4 top-20 w-80 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <QuickView />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultsPage;
