
const initialState = {
    cards: [
        {id : "1" ,title: "Alex",  body: "Lorem ipsum dolar sit amet, concestetur adipiscing elit, sed do eiu amet."},
        {id : "2" ,title: "Willma",  body: "Lorem ipsum dolar sit amet, concestetur adipiscing elit, sed do eiu amet."},
        {id : "3" ,title: "Lütfullah",  body: "Lorem ipsum dolar sit amet, concestetur adipiscing elit, sed do eiu amet."}
    ]
}

const rootReducer = (state=initialState,action) => {
    return state;
}

export default rootReducer
