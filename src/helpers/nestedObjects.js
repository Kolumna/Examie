import { objectToArrayWithId } from "./objects";

export const nestedObjectToArray = (obj) => {
  const newArray = [];
  for (const element in obj) {
    newArray.push(
      objectToArrayWithId(obj[element])[0]
    );
  }
  return newArray;
};