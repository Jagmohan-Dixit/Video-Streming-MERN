const LikeReducer = (state, action) =>{

    switch(action.type) {
        case "INC_LIKE_START":
            return {
                item: null,
            };
        case "INC_LIKE_COMPLETE":
            return {
                item: action.payload
            };
        case "DEC_LIKE_START":
            return {
                item: null,
            };
        case "DEC_LIKE_COMPLETE":
            return {
                item: action.payload
            };
        default:
            return { ...state };
    }
}

export default LikeReducer;