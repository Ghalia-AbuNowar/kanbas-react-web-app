import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentReducer from "../Courses/Assignments/reducer";
export interface KanbasState {
    modulesReducer: {
        modules: any[];
        module: any;
    };
    // assignments: {
    //     assignments: any[]; // Update this type based on the actual data structure
    //     assignment: any; // Update this type based on the actual data structure
    // };
}


const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentReducer: assignmentReducer,

    }
});


export default store;