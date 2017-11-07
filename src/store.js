import createStore from 'redux-zero'
let Boards = [
    {
        id: 0,
        name: 'Rita'
    },
    {
        id: 1,
        name: 'Melania'
    },
    {
        id: 2,
        name: 'Haidy'
    },
    {
        id: 3,
        name: 'Rita'
    },
    {
        id: 4,
        name: 'Melania'
    },
    {
        id: 5,
        name: 'Haidy'
    },
    {
        id: 6,
        name: 'Melania'
    },
    {
        id: 7,
        name: 'Melania'
    },
    {
        id: 8,
        name: 'Haidy'
    },
    {
        id: 9,
        name: 'Melania'
    },
    {
        id: 10,
        name: 'Melania'
    }
]

let task = [
	{
		id :0,
		content : "Holi",

	}
]


const initialState = {
    mainBoards: Boards,
    selectedItem : -1, 
}

const store = createStore(initialState)
export default store