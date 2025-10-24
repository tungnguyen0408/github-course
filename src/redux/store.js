import { createStore } from "redux";
import rootReducer from "./reducer";
const store = createStore(rootReducer);
//nhận vào 3 tham số: đó chính là rootReducer() quản lý các state trong kho chung và nó nhận vào action để làm biến đổi các state, initValue (nếu có),enhancer
export default store;
