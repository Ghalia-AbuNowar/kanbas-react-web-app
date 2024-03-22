import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
    assignment: { title: "New assignment", points: 100, description: "Assignment Description" },
    

};
const assignmentSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            const newAssignment = {
                ...action.payload,
                _id: new Date().getTime().toString()
            };
            // Prepend the new assignment to the existing assignments array
            state.assignments = [newAssignment, ...state.assignments];
        },

        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (a) => a._id !== action.payload
            );
        },

        setAssignment: (state, action) => {
            const index = state.assignments.findIndex(a => a._id === action.payload._id);
            if (index !== -1) {
                state.assignments[index] = {
                    ...state.assignments[index],
                    ...action.payload.changes,
                };
            } else {
                console.log("Assignment with ID not found:", action.payload._id);
            }
        },

    },
});


export const { addAssignment, setAssignment, deleteAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;