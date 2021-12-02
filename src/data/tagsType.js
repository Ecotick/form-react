import { v4 as uuidv4 } from "uuid";

export const selectTagBox = [];

export const initialChoixTag = () => {
  return {
    tag: "",
    tempId: uuidv4(),
  };
};
