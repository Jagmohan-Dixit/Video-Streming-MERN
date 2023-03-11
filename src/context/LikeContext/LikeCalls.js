import { DecLikeStart, IncLikeComplete, IncLikeStart, DecLikeComplete } from './LikeAction'

export default function LikeCalls(data, dispatch, isLiked, id) {
    if(!isLiked) {
        dispatch(IncLikeStart());

        data[id-1].likes += 1;
        data[id-1].isLiked = true;

        dispatch(IncLikeComplete(data));

    }
    else {
        dispatch(DecLikeStart());

        data[id-1].likes -= 1;
        data[id-1].isLiked = false;

        dispatch(DecLikeComplete(data));
    }
}
