var variant;
export const success = () => {
   variant = {
    type:"success",
    mainColor: "#EDFEEE",
    secondaryColor: "#5CB660",
    symbol: "check_circle",
    title: "Success: ",
    text: "L'opération à été effectué avec success",
  }
  return variant;
}
export const error = () => {
  variant = {
    type:"error",
    mainColor: "#FDEDED",
    secondaryColor: "#F16360",
    symbol: "error",
    title: "Error: ",
    text: "Il y a eu une erreur dans l'opération",
  }
  return variant;
}
