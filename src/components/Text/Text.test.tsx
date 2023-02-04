import { Colors } from "@constants/Colors";
import "@testing-library/jest-native/extend-expect";
import { render, screen } from "@testing-library/react-native";
import { testIds } from "@utils/tests/testIds";
import Text from "./Text";

const textContent = "This is a text";
const textTestId = testIds.sharedComponents.text;

describe("<Text>", () => {
  describe("as default", () => {
    test("Renders successfully", () => {
      const activeText = render(<Text>{textContent}</Text>);
      expect(activeText).toBeDefined();
    });

    test("Renders correctly", () => {
      const activeText = render(<Text>{textContent}</Text>);
      expect(activeText.toJSON()).toMatchSnapshot();
    });

    test("Outputs the correct text", () => {
      render(<Text>{textContent}</Text>);
      expect(screen.getByTestId(textTestId)).toHaveTextContent(textContent);
    });

    test("Outputs the correct text color", () => {
      render(<Text color={Colors.primary[500]}>{textContent}</Text>);
      expect(screen.getByTestId(textTestId)).toHaveStyle({
        color: Colors.primary[500],
      });
    });

    test("Outputs the correct custom text style", () => {
      render(<Text style={{ color: Colors.primary[100] }}>{textContent}</Text>);
      expect(screen.getByTestId(textTestId)).toHaveStyle({
        color: Colors.primary[100],
      });
    });
  });
});
