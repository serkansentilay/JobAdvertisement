import { configureStore } from "@reduxjs/toolkit";
import FavoritedSlice from "./FavoritedContext/FavoritedSlice";

export default store = configureStore({
    reducer: {
        favoritedJobs: FavoritedSlice
    }
})