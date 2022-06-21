import { getFirestore } from "../../firebase";

const dailyLogin = 5;
const videoFinished = 20;
const db = getFirestore();

export async function assignPoints(event, user) {
  const previousPoints = user.points ? user.points : 0;
  let updatedPoints = previousPoints;
  let earnedPoints = 0;
  if (event === "Login") {
    let today = new Date();

    let lastSignIn = user.lastSignIn ? user.lastSignIn.toDate() : today;
    if (
      today > lastSignIn &&
      (today.getDate() > lastSignIn.getDate() ||
        today.getMonth() > lastSignIn.getMonth() ||
        today.getYear() > lastSignIn.getYear())
    ) {
      earnedPoints = dailyLogin;
    }
  }
  if (event === "Video") {
    earnedPoints = videoFinished;
  }
  updatedPoints = previousPoints + earnedPoints;
  if (updatedPoints > previousPoints) {
    try {
      await db
        .collection("users")
        .doc(user.id)
        .update({
          points: updatedPoints
        });
    } catch (error) {
      console.log(error);
    }
  }
  return { earnedPoints, updatedPoints };
}
