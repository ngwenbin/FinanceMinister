import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";

import Badge from "./Badge";
import { testIds } from "@utils/tests/testIds";

const badgeContent = "This is a text";
const badgeLabelTestId = testIds.sharedComponents.badge.badgeLabel;

describe("<Badge>", () => {
  describe("as default", () => {
    test("Renders successfully", () => {
      const activeText = render(<Badge label={badgeContent} variant="blue" />);
      expect(activeText).toBeDefined();
    });

    test("Renders correctly", () => {
      const activeText = render(<Badge label={badgeContent} variant="blue" />);
      expect(activeText.toJSON()).toMatchSnapshot();
    });

    test("Outputs the correct text", () => {
      render(<Badge label={badgeContent} variant="blue" />);
      expect(screen.getByTestId(badgeLabelTestId)).toHaveTextContent(
        badgeContent
      );
    });
  });
});
