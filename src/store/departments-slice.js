import { createSlice } from "@reduxjs/toolkit";

const departmentsSlice = createSlice({
    name: "allDepartments",
    initialState: {
        departments: [],
        engineers: [],
    },
    reducers: {
        getDepartments(state, action) {
            state.departments = action.payload;
        },
        getEngineersOfDepartment(state, action) {
            state.departments.filter((department) => {
                if (department.name === action.payload) {
                    state.engineers = department.engineers;
                }
            });
        }
    },
});

export const { getDepartments, getEngineersOfDepartment } = departmentsSlice.actions;
export default departmentsSlice.reducer;