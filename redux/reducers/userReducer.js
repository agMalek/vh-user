import { SETTER_USER } from "../actions/userActions";
import { SIGN_OUT_USER } from "../actions/userActions";

const initialState = {
  user: {
    id: "",
    email: "",
    username: "",
    role: 0,
    paymentDate: "",
    lastVideo: 0,
    points: 0,
    position: 0,
    lastSignIn: "",
  },
};

export const userReducer = (state = initialState, action) => {
  if (action.type === SETTER_USER) {
    const id = action.payload.id ? action.payload.id : state.user.id;
    const email = action.payload.email
      ? action.payload.email
      : state.user.email;
    const username = action.payload.username
      ? action.payload.username
      : state.user.username;
    const role = action.payload.role ? action.payload.role : state.user.role;
    const paymentDate = action.payload.paymentDate
      ? action.payload.paymentDate
      : state.user.paymentDate;
    const lastVideo = action.payload.lastVideo
      ? action.payload.lastVideo
      : state.user.lastVideo;
    const points = action.payload.points
      ? action.payload.points
      : state.user.points;
    const position = action.payload.position
      ? action.payload.position
      : state.user.position;
    const lastSignIn = action.payload.lastSignIn
      ? action.payload.lastSignIn
      : state.user.lastSignIn
    return {
      ...state,
      user: {
        id,
        email,
        username,
        role,
        paymentDate,
        lastVideo,
        points,
        position,
        lastSignIn,
      },
    };
  }
  if (action.type === SIGN_OUT_USER) {
    // console.log("entree a redux");
    return initialState;
  }
  return state;
};
