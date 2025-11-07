import type { IQuestion } from "@/4_features/search-form/model/search.types";

export interface ResultsTableProps {
    data: IQuestion[];
    handleOpenQuick: (id: number) => void;
  }