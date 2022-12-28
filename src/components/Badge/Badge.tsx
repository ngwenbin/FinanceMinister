import { Text, TextStyle, View, ViewStyle } from "react-native";
import { Colors } from "@constants/Colors";
import { getFont } from "@utils";
import { testIds } from "@utils/tests/testIds";

type BadgeVariant = "green" | "blue" | "red" | "yellow";

const badgeVariants: Record<BadgeVariant, ViewStyle & TextStyle> = {
  green: {
    color: Colors.success[700],
    backgroundColor: Colors.success[100],
  },
  blue: {
    color: Colors.info[700],
    backgroundColor: Colors.info[100],
  },
  red: {
    color: Colors.error[700],
    backgroundColor: Colors.error[100],
  },
  yellow: {
    color: Colors.warning[700],
    backgroundColor: Colors.warning[100],
  },
};

interface BadgeProps {
  label: string;
  variant: BadgeVariant;
  rounded?: boolean;
}

const Badge = ({ label, variant, rounded = true }: BadgeProps) => {
  return (
    <View
      testID={testIds.sharedComponents.badge.badgeContainer}
      style={{
        backgroundColor: badgeVariants[variant].backgroundColor,
        borderRadius: rounded ? 12 : 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
      }}
    >
      <Text
        testID={testIds.sharedComponents.badge.badgeLabel}
        style={{
          color: badgeVariants[variant].color,
          ...getFont("medium", "xs"),
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default Badge;
