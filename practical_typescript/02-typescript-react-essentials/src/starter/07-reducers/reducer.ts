export type CounterState = {
  count: number;
  status: string;
};

type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};

type SetStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};

type CounterAction = UpdateCountAction | SetStatusAction;

export const initialState: CounterState = {
  count: 0,
  status: "Pending",
};

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "setStatus":
      return { ...state, status: action.payload };
    default:
      const unhandledActionType: never | CounterAction = action;
      console.log(unhandledActionType);
      throw new Error(`message ${JSON.stringify(unhandledActionType)}`);
  }
};
