import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";

import TextInput from "./TextInput";
import { testIds } from "@utils/tests/testIds";
import { Colors } from "@constants/Colors";

const textInputLabel = "This is a text label";
const textSubtext = "This is a subtext";
const labelTestId = testIds.sharedComponents.textInput.label;
const labelAdornmentTestId = testIds.sharedComponents.textInput.labelAdornment;
const textinputfieldTestId = testIds.sharedComponents.textInput.input;
const subtextTestId = testIds.sharedComponents.textInput.subtext;

describe("<TextInput>", () => {
  describe("as default", () => {
    test("Renders successfully", () => {
      const activeText = render(<TextInput label={textInputLabel} />);
      expect(activeText).toBeDefined();
    });

    test("Renders correctly", () => {
      const activeText = render(
        <TextInput label={textInputLabel} subtext={textSubtext} />
      );
      expect(activeText.toJSON()).toMatchSnapshot();
    });

    test("Outputs the correct text", () => {
      render(<TextInput label={textInputLabel} subtext={textSubtext} />);
      expect(screen.getByTestId(labelTestId)).toHaveTextContent(textInputLabel);
      expect(screen.getByTestId(subtextTestId)).toHaveTextContent(textSubtext);
    });

    test("Outputs the correct subtext style", () => {
      render(
        <TextInput
          label={textInputLabel}
          subtext={textSubtext}
          subtextStyle={{ color: Colors.primary[500] }}
        />
      );
      expect(screen.getByTestId(subtextTestId)).toHaveStyle({
        color: Colors.primary[500],
      });
    });

    test("Outputs the correct global color overwrite", () => {
      render(
        <TextInput
          label={textInputLabel}
          subtext={textSubtext}
          subtextStyle={{ color: Colors.primary[500] }}
          globalColorOverwrite={Colors.error[500]}
        />
      );
      expect(screen.getByTestId(textinputfieldTestId)).toHaveStyle({
        color: Colors.error[500],
        borderColor: Colors.error[500],
      });
      expect(screen.getByTestId(subtextTestId)).toHaveStyle({
        color: Colors.error[500],
      });
    });

    test("Shows required adornment if enabled", () => {
      render(
        <TextInput label={textInputLabel} subtext={textSubtext} required />
      );
      expect(screen.queryByTestId(labelAdornmentTestId)).toBeDefined();
    });

    test("Hides required adornment if disabled", () => {
      render(<TextInput label={textInputLabel} subtext={textSubtext} />);
      expect(screen.queryByTestId(labelAdornmentTestId)).toBeNull();
    });
  });
});
