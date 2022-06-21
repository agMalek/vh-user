export const SETTER_USER = "SETTER_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

export const setterUserAction = ({
  id,
  email,
  username,
  role,
  paymentDate,
  lastVideo,
  points,
  position,
  lastSignIn,
}) => ({
  type: SETTER_USER,
  payload: {
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
});

export const signOutAction = () => ({
  type: SIGN_OUT_USER,
});
