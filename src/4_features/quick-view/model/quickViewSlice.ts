import { instance } from "@/6_shared/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAuthorPosts = createAsyncThunk(
    'quickView/getAuthorPosts',
    async (id: number) => {
        try {
            const res = await instance.get(`/users/${id}/questions`, {
        params: {
          site: "stackoverflow",
        },
      });
            console.log(res.data)
            return res.data;
        } catch (e) {
            console.log('cant get posts',e)
        }
    }
)

const initialState = {
    authorPosts: [],
    isOpenedQuickView: false
}

export const quickViewSlice = createSlice({
    name: 'quickView',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAuthorPosts.fulfilled, (state, action) => {
            state.authorPosts = action.payload;
        })
    }
})

export const {} = quickViewSlice.actions;

export default quickViewSlice.reducer;