export const IncLikeStart = () => ({
    type: "INC_LIKE_START",
})

export const IncLikeComplete = (item) => ({
    type: "INC_LIKE_COMPLETE",
    payload: item,
})


export const DecLikeStart = () => ({
    type: "DEC_LIKE_START",
})

export const DecLikeComplete = (item) => ({
    type: "DEC_LIKE_COMPLETE",
    payload: item,
})
