import I from "immutable";
import List from "immutable";

function reducer(state = I.Map(), action) {
  switch (action.type) {
    case "ADD_CURRENT_INPUT":
      return state.set("currentInput", action.data);
      
    case "EXAMPLE_TASK_TO_HOMEWORK-1":
      /*

       You will need to use ARRAY to add tasks because you will have multiple tasks and manage them.
       Of course we are using IMMUTABLE data structures for store operations.
       So, you will need immutable arrays which is called "List" on immutable js.

       The documentation is here to make add and delete operations for immutable arrays:
       https://facebook.github.io/immutable-js/docs/#/List

       Helpful examples for immutable js here:
       https://gist.github.com/singhshivam/b05d4611eadae780d2a008de61191c1d

      */
    default:
      return state;
  }
}

export default reducer;