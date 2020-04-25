const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      return [...state, { id: action.id, text: action.text }];
    case "REMOVE_TO_DO":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default toDoReducer;
