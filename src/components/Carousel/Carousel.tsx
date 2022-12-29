import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatListProps,
} from "react-native";
import { useCallback, useRef, useState } from "react";
import { ArrayElement } from "@utils/tsHelpers";

const { width: windowWidth } = Dimensions.get("window");

interface PaginationProps<T> {
  data: Array<T>;
  index: number;
}

interface CarouselBaseData {
  id: number;
}

interface CarouselProps<T> {
  data: Array<T & CarouselBaseData>;
  slideContainer: (item: T) => JSX.Element;
  initialNumToRender?: number;
  showPagination?: boolean;
}

const Pagination = <T,>({ data, index }: PaginationProps<T>) => {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {data.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
};

// const Slider = memo(
//   ({ item, renderer }: { item: any; renderer: (data: any) => JSX.Element }) => {
//     return renderer(item);
//   }
// );

const Carousel = <T,>({
  data,
  slideContainer,
  initialNumToRender = 0,
  showPagination = true,
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
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
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

  const renderItem = useCallback((item: T) => {
    return slideContainer(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FlatList
        data={data}
        style={styles.carousel}
        renderItem={({ item }) => renderItem(item)}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      {showPagination ? <Pagination data={data} index={index} /> : null}
    </>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: { backgroundColor: "lightblue" },
  paginationDotInactive: { backgroundColor: "gray" },

  carousel: { flex: 1 },
});
