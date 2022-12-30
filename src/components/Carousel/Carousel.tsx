import {
  Dimensions,
  FlatList,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatListProps,
  ViewStyle,
  ColorValue,
} from "react-native";
import { memo, useCallback, useRef, useState } from "react";
import { ArrayElement } from "@utils/tsHelpers";
import { isEqual } from "lodash";
import { scaledStylesheet } from "@utils";
import { Colors } from "@constants/Colors";

const { width: windowWidth } = Dimensions.get("window");

interface PaginationProps<T> {
  data: Array<T>;
  index: number;
  style?: ViewStyle;
  activeColor?: ColorValue;
  inActiveColor?: ColorValue;
}

interface CarouselProps<T> {
  data: Array<T & { id: string }>;
  containerContent: (item: T) => JSX.Element;
  initialNumToRender?: number;
  maxToRenderPerBatch?: number;
  windowSize?: number;
  showPagination?: boolean;
  containerStyle?: ViewStyle;
  paginationStyle?: ViewStyle;
  activePaginationColor?: ColorValue;
  inActivePaginationColor?: ColorValue;
}

const Pagination = <T,>({
  data,
  index,
  style,
  activeColor = Colors.gray[700],
  inActiveColor = Colors.gray[300],
}: PaginationProps<T>) => {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {data.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              {
                backgroundColor: index === i ? activeColor : inActiveColor,
              },
              style,
            ]}
          />
        );
      })}
    </View>
  );
};

const memoEqualityCheck = (prev: any, next: any) => isEqual(prev, next);

const Slider = memo(
  ({ item, renderer }: { item: any; renderer: (data: any) => JSX.Element }) => {
    return renderer(item);
  },
  memoEqualityCheck
);

const Carousel = <T,>({
  data,
  containerContent,
  initialNumToRender = 0,
  maxToRenderPerBatch = 1,
  windowSize = 2,
  showPagination = true,
  containerStyle,
  paginationStyle,
  activePaginationColor,
  inActivePaginationColor,
}: CarouselProps<T>) => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);

      const distance = Math.abs(roundIndex - index);
      const isNoMansLand = distance > 0.4;

      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
      }
    },
    []
  );

  const flatListOptimizationProps: Partial<
    FlatListProps<ArrayElement<typeof data>>
  > = {
    initialNumToRender,
    maxToRenderPerBatch,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize,
    keyExtractor: useCallback(
      (item: ArrayElement<typeof data>) => String(item.id),
      []
    ),
    getItemLayout: useCallback(
      (_: any, index: number) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  return (
    <View style={containerStyle}>
      <FlatList
        data={data}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <Slider item={item} renderer={containerContent} />
        )}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      {showPagination ? (
        <Pagination
          data={data}
          index={index}
          style={paginationStyle}
          activeColor={activePaginationColor}
          inActiveColor={inActivePaginationColor}
        />
      ) : null}
    </View>
  );
};

export default Carousel;

const styles = scaledStylesheet({
  pagination: {
    paddingVertical: 2,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 10,
    marginHorizontal: 2,
  },
});
