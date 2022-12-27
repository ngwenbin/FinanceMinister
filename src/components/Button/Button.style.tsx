import { StyleSheet } from "react-native";
import { Colors } from "@constants/Colors";
import { getFont } from "@utils";

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  xs: {
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 6,
    _flexGap: 4,
    ...getFont("medium", "xs"),
  },
  sm: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    _flexGap: 8,
    ...getFont("medium", "sm"),
  },
  md: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
    _flexGap: 8,
    ...getFont("medium", "md"),
  },
  lg: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    borderRadius: 8,
    _flexGap: 8,
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
  },
});
