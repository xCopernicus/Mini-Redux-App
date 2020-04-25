let id = 0;

export const addToDo = text => ({
  type: "ADD_TO_DO",
  id: id++,
  text
});

export const removeToDo = idC => ({
  type: "REMOVE_TO_DO",
  idC: 2
});
