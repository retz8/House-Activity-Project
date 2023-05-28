import { verticalScale } from "./responsiveSize";

export function getBarHeight(place) {
  switch (place) {
    case 1:
      return verticalScale(270);
    case 2:
      return verticalScale(230);
    case 3:
      return verticalScale(190);
    case 4:
      return verticalScale(150);
    default:
      return null;
  }
}
