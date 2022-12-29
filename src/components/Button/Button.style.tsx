import { StyleSheet } from "react-native";
import { Colors } from "@constants/Colors";
import { getFont, normalize } from "@utils";

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  xs: {
    paddingHorizontal: normalize(11),
    paddingVertical: normalize(7),
    borderRadius: normalize(6),
    _flexGap: normalize(4),
    ...getFont("medium", "xs"),
  },
  sm: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(8),
    borderRadius: normalize(6),
    _flexGap: normalize(8),
    ...getFont("medium", "sm"),
  },
  md: {
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(8),
    borderRadius: normalize(8),
    _flexGap: normalize(8),
    ...getFont("medium", "md"),
  },
  lg: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(9),
    borderRadius: normalize(8),
    _flexGap: normalize(8),
    ...getFont("medium", "lg"),
  },
  solid: {
    color: Colors.white,
    backgroundColor: Colors.primary[500],
    _before: {
      backgroundColor: Colors.primary[500],
    },
    _after: {
      backgroundColor: Colors.primary[700],
    },
    _disabled: {
      backgroundColor: Colors.primary[200],
    },
  },
  outline: {
    borderStyle: "solid",
    borderWidth: 1,
    color: Colors.primary[500],
    _before: {
      borderColor: Colors.primary[500],
    },
    _after: {
      borderColor: Colors.primary[500],
    },
    _disabled: {
      color: Colors.primary[200],
      borderColor: Colors.primary[100],
    },
  },
  white: {
    borderStyle: "solid",
    borderWidth: 1,
    color: Colors.gray[700],
    _before: {
      borderColor: Colors.gray[300],
    },
    _after: {
      borderColor: Colors.gray[300],
    },
    _disabled: {
      color: Colors.gray[400],
      backgroundColor: Colors.gray[100],
      borderColor: Colors.gray[100],
    },
  },
});
