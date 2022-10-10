import create from "zustand";

const dataStore = create((set) => ({
    inputData: "",
    apiData: "",
    filteredData: "",
    updatedInputData: (inputInfo) => set((state) => ({
        inputData: state.inputData = inputInfo
    })),
    updatedApiData: (calledData) => set((state) => ({
        apiData: state.apiData = calledData
    })),
    updatedFilteredData: (newData) => set((state) => ({
        filteredData: state.filteredData = newData
    }))

}))

export default dataStore;