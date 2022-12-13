const initialState = {
    contact: [],
    keyword: "",
};
const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case "ADD_CONTACT":
            state.contact.push({
                name: payload.name,
                phone: payload.phone,
            });
            break;
        case "SEARCH":
            state.keyword = payload.keyword;
            break;
        default:
    }

    return { ...state };
};

export default reducer;