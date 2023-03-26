import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/counter/counterSlice";

export function storeToken(token) {
    const dispatch = useDispatch();
    dispatch(setToken(token));
}