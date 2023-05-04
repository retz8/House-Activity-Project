export function getHouseColor(houseName) {
  switch (houseName) {
    case "Albemarle":
      return "#FFCE30";
    case "Lambert":
      return "#55B0F9";
    case "Ettl":
      return "#8BC34A";
    case "Hobler":
      return "#E54E4E";
    default:
      return null;
  }
}
