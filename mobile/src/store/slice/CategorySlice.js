import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNavigation } from "../../services/request";

export const getCategories = createAsyncThunk("category/getCategories", async () => {
    const response = await getNavigation();
    return response.data;
});

const initialState = {
    categories: [],
    loading: true,
    selectedCategory: "",
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
            });
    }
});

export const { selectCategory } = categorySlice.actions;

export default categorySlice.reducer;