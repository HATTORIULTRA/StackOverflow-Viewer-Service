export interface IQuestion {
    question_id: number;
    title: string;
    owner: {
        display_name: string;
        user_id: number;
        profile_image: string;
        account_id: number;
    };
    answer_count: number;
    tags: string[];
    score: number;
}

export interface IUserQuestion {
    question_id: number;
    title: string;
    answer_count: number;
    tags: string[];
    score: number;
}

export interface SearchState {
    query: string;
    questions: IQuestion[];
    quickView: {
        type: "user" | "tag" | null;
        data: IUserQuestion[];
        userId: number | null;
        tag: string | null;
    };
    status: string;
    error: string | null;
}

export interface ISearchSlice {
    isLoading: boolean;
    questions: IQuestion[];
    error: unknown;
}