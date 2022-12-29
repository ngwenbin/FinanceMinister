import { PixelRatio, Dimensions } from "react-native";

const ratio = PixelRatio.get();

const normalize = (size: number): number => {
  const { width, height } = Dimensions.get("window");

  if (ratio >= 2 && ratio < 3) {
    if (width < 360) {
      // scale
    } else if (height < 667) {
      // scale
    } else if (height >= 667 && height <= 735) {
      // scale
    }

    // scale
  } else if (ratio >= 3 && ratio < 3.5) {
    if (width < 360) {
      // scale
    } else if (height < 667) {
      // scale
    } else if (height >= 667 && height <= 735) {
      // scale
    }

    // scale
  } else if (ratio >= 3.5) {
    if (width < 360) {
      // scale
    } else if (height < 667) {
      // scale
    } else if (height >= 667 && height <= 735) {
      // scale
    }

    // scale
  }

  return size;
};

export default normalize;
