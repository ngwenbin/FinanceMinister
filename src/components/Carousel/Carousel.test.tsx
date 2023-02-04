import { render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";

import Carousel from "./Carousel";
import { Text, View } from "react-native";

interface CarouselListData {
  id: string;
  title: string;
  subtitle: string;
}

const carouselListLength = 10;

const carouselList: Array<CarouselListData> = Array.from({
  length: carouselListLength,
}).map((_, i) => {
  return {
    id: `${i}`,
    title: `This is the title ${i + 1}!`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

const carouselContentLayout = (item: CarouselListData) => {
  return (
    <View
      testID={`carouselItem_${item.id}`}
      style={{
        width: 300,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%", height: 100 }} />
      <Text>{item.title}</Text>
      <Text>{item.subtitle}</Text>
    </View>
  );
};

describe("<Carousel>", () => {
  describe("as default", () => {
    test("Renders successfully", () => {
      const activeCarousel = render(
        <Carousel
          data={carouselList}
          contentRenderer={(item) => carouselContentLayout(item)}
          containerStyle={{ height: 400 }}
        />
      );
      expect(activeCarousel).toBeDefined();
    });

    test("Renders correctly", () => {
      const activeCarousel = render(
        <Carousel
          data={carouselList}
          contentRenderer={(item) => carouselContentLayout(item)}
          containerStyle={{ height: 400 }}
        />
      );
      expect(activeCarousel.toJSON()).toMatchSnapshot();
    });

    test("Outputs all child items", async () => {
      render(
        <Carousel
          data={carouselList}
          contentRenderer={(item) => carouselContentLayout(item)}
          containerStyle={{ height: 400 }}
          maxToRenderPerBatch={carouselListLength}
          initialNumToRender={carouselListLength}
        />
      );
      const items = await screen.findAllByTestId("carouselItem_", {
        exact: false,
      });
      expect(items).toHaveLength(carouselListLength);
    });
  });
});
