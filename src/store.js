import createStore from 'redux-zero'
let littleBoards = [
    {
        id:0,
        Name: '',
        content:'',

    }
]


const initialState = {
    littleBoards: littleBoards,
    selectedItem : -1, 
}

const store = createStore(initialState)
export default store