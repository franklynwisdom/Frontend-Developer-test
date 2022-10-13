import create from "zustand";

const dataStore = create((set) => ({
    inputData: "",
    apiData: "",
    filteredData: "",
    showMoreData: "",
    pageValue: 2,
    showMoreEventTarget: "",
    searchEventTarget: "",
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
    updateShowMoreData: (newShoreMoreData) => set((state) => ({
        showMoreData: state.showMoreData = newShoreMoreData
    })),
    updatePageValue: (newPageValue) => set((state) => ({
        pageValue: state.pageValue = newPageValue
    })),
    updateShowMoreEventTarget: (newShowMoreEventTarget) => set((state) => ({
        showMoreEventTarget: state.showMoreEventTarget = newShowMoreEventTarget
    })),
    updateSearchEventTarget: (newSearchEventTarget) => set((state) => ({
        searchEventTarget: state.searchEventTarget = newSearchEventTarget
    })),
    // updatedFormattedDate: (newDate) => set((state) => ({
    //     formattedDate: state.formattedDate = newDate
    // }))

}))

export default dataStore;