import create from "zustand";

const dataStore = create((set) => ({
    inputData: "",
    updatedInputData: (inputInfo) => set((state) => ({
        inputData: state.inputData = inputInfo
    }))
}))

export default dataStore;