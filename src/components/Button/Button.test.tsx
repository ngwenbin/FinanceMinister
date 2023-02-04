import "@testing-library/jest-native/extend-expect";
import { render, screen } from "@testing-library/react-native";
import { testIds } from "@utils/tests/testIds";
import { Text } from "react-native";
import Button from "./Button";

const buttonTitle = "Test button";
const buttonTitleTestId = testIds.sharedComponents.button.buttonTitle;
const buttonAdornmentTestId =
  testIds.sharedComponents.button.buttonAdornmentContainer;

describe("<Button>", () => {
  describe("as default", () => {
    // const onPressCallback = jest.fn(() => null);
    // const onLongPressCallback = jest.fn(() => null);

    test("Renders successfully", () => {
      const activeButton = render(<Button title={buttonTitle} />);
      expect(activeButton).toBeDefined();
    });

    test("Renders correctly", () => {
      const activeButton = render(<Button title={buttonTitle} />);
      expect(activeButton.toJSON()).toMatchSnapshot();
    });

    test("Outputs the correct text", () => {
      render(<Button title={buttonTitle} />);
      expect(screen.getByTestId(buttonTitleTestId)).toHaveTextContent(
        buttonTitle
      );
    });

    test(`Does not render an adornment`, () => {
      render(<Button title={buttonTitle} />);
      expect(screen.queryByTestId(buttonAdornmentTestId)).toBeNull();
    });

    test(`Renders an adornment`, () => {
      render(<Button title={buttonTitle} adornment={<Text>Hello</Text>} />);
      expect(screen.queryByTestId(buttonAdornmentTestId)).toBeDefined();
    });
  });
});
