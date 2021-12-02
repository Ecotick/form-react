import { v4 as uuidv4 } from "uuid";

export const selectInitiativeBox = [
  {value: "Beegift", label: "Beegift"},
  {value: "Chèque Ardennes Métropole", label: "Chèque Ardennes Métropole"},
  {value: "Chèque déjeuner", label: "Chèque déjeuner"},
  {value: "Chèque la Pointe", label: "Chèque la Pointe"},
  {value: "Chèque Lire", label: "Chèque Lire"},
  {value: "Chèque Shopping Pass", label: "Chèque Shopping Pass"},
  {value: "Jeun Est", label: "Jeun Est"},
  {value: "Mondial Relay", label: "Mondial Relay"},
  {value: "Pass Culture", label: "Pass Culture"},
  {value: "PickUp", label: "PickUp"},
  {value: "Ticket Restaurant", label: "Ticket Restaurant"},
  {value: "Titres Cado", label: "Titres Cado"},
  {value: "Vitrines de Charleville", label: "Vitrines de Charleville"},
];

export const initialChoixInitiative = () => {
  return {
    initiative: selectInitiativeBox[0].value,
    tempId: uuidv4(),
  };
};