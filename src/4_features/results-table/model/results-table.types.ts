import type { IQuestion } from "@/4_features/search-form/model/search.types";

export interface ResultsTableProps {
    data: IQuestion[];
    openQuickView: (id: number) => void;
  }