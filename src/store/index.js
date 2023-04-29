import { configureStore } from "@reduxjs/toolkit";
import departmentsSlice from "./departments-slice";

const store = configureStore({
    reducer: {
        allDepartments: departmentsSlice,
    },
});

export default store;