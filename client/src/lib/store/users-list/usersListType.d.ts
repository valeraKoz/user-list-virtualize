import {UserType} from "@Types/user";

export interface UsersState {
    entities: { [id: number]: UserType };
    ids: number[];
    currentPage: number;
    status: 'idle' | 'loading' | 'success' | 'failed';
    error: string | null;
    totalPage: number;
    hasMore: boolean;
}