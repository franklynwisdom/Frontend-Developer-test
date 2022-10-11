import create from "zustand";

const dataStore = create((set) => ({
    inputData: "",
    apiData: "",
    filteredData: "",
    // formattedDate:"",
    updatedInputData: (inputInfo) => set((state) => ({
        inputData: state.inputData = inputInfo
    })),
    updatedApiData: (calledData) => set((state) => ({
        apiData: state.apiData = calledData
    })),
    updatedFilteredData: (newData) => set((state) => ({
        filteredData: state.filteredData = newData
    })),
    // updatedFormattedDate: (newDate) => set((state) => ({
    //     formattedDate: state.formattedDate = newDate
    // }))

}))

export default dataStore;