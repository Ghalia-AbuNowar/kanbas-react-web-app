import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";


const initialState = {
    modules: modules,
    module: { name: "New Module", description: "New Description" },
};


const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, action) => {
            state.modules = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.modules,
            ];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
 
        updateModule: (state, action) => {
            const index = state.modules.findIndex(a => a._id === action.payload._id);
            if (index !== -1) {
                state.modules[index] = {
                    ...state.modules[index],
                    ...action.payload.changes,
                };
            } else {
                console.log("modul with ID not found:", action.payload._id);
            }
        },


        setModule: (state, action) => {
            state.module = action.payload;
        },
    },
});


export const { addModule, deleteModule,
    updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;
