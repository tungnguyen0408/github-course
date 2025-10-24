const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn Yogo", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: false, priority: "High" },
    { id: 3, name: "Learn Javascript", completed: false, priority: "Low" },
  ],
};

// mặc định khi khởi tạo một cái kho thì sẽ lấy các giá trị trên làm giá trị mặc định
const rootReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      return state;
  }
};

export default rootReducer;
