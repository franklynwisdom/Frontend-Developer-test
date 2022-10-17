const mockResponse = {
    data : {
        data:[
            {
                title: "Starry Night and the Astronauts",
                id: "129884",
                artist_title: "",
                timestamp: "2022-10-15T23:09:45-05:00"               

            }

        ]
             
    }
}

export default{
    get: jest.fn().mockResolvedValue(mockResponse)
}