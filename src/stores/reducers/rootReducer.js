const initState = {
    users: [
        { id: 1, name: 'Vo' },
        { id: 2, name: 'Phong' },
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>> run into delete user: ', action)
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }
        //Lấy lại object state ban đầu, thêm properties users vào object state, do đã có users nên users cũ sẽ bị ghi đè
        case 'ADD_USER':
            let user = {
                id: Math.floor(Math.random() * 101),
                name: `random - ${Math.floor(Math.random() * 101)}`
            }
            return {
                ...state, users: [...state.users, user]
            }
        //Spread nhỏ: Copy lại properties state.users ban đầu, thêm user vào nó, thành 1 users mới (đã có user)
        //Spread lớn: Copy lại object state ban đầu, giá trị properties users cũ được thay thành giá trị của Spread nhỏ
        default:
            return state
    }
}
export default rootReducer