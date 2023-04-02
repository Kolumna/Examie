export const objectToArrayWithId = (obj) => {
  const newArray = [];
  for (const key in obj) {
    newArray.push({
      _id: key,
      ...obj[key],
    });
  }
  return newArray;
};
