import React from 'react';
import { View, ViewStyle, StyleProp, ViewProps } from 'react-native';
import { Alignment } from './enums';

type flexHorizontalAlignmentOptions =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between';

export interface RowProps extends ViewProps {
  /**
   * The relative size compared to other adjunct rows
   */
  size?: number;

  /**
   * Specify the row height in pt or %
   */
  height?: number | string;

  /**
   * Specify the row width in pt or %
   */
  width?: number | string;

  /**
   * Determine the order of the childrens of the row
   */
  reverse?: boolean;

  /**
   * Determine the vertical alignment of the children
   */
  verticalAlign?: Alignment;

  /**
   * Determine the horizontal alignment of the children
   */
  horizontalAlign?: Alignment;

  /**
   * Additional styles to add or override default ones
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * Align children using row layout
 */
const Row: React.FC<RowProps> = ({
  style,
  size = 1,
  height,
  width,
  reverse = false,
  horizontalAlign = Alignment.Start,
  verticalAlign = Alignment.Start,
  children,
  ...rest
}) => {
  const order = reverse ? 'row-reverse' : 'row';
  let horizontalAlignmentStyle: flexHorizontalAlignmentOptions = 'flex-start';
  if (horizontalAlign === Alignment.Center) {
    horizontalAlignmentStyle = 'center';
  } else if (
    (horizontalAlign === Alignment.Start && !reverse) ||
    (horizontalAlign === Alignment.End && reverse)
  ) {
    horizontalAlignmentStyle = 'flex-start';
  } else if (
    (horizontalAlign === Alignment.Start && reverse) ||
    (horizontalAlign === Alignment.End && !reverse)
  ) {
    horizontalAlignmentStyle = 'flex-end';
  } else if (horizontalAlign === Alignment.SpaceAround) {
    horizontalAlignmentStyle = 'space-around';
  } else if ((horizontalAlign = Alignment.SpaceBetween)) {
    horizontalAlignmentStyle = 'space-between';
  }

  let verticalAlignmentStyle: 'flex-start' | 'flex-end' | 'center' =
    'flex-start';
  if (verticalAlign === Alignment.Start) {
    verticalAlignmentStyle = 'flex-start';
  } else if (verticalAlign === Alignment.End) {
    verticalAlignmentStyle = 'flex-end';
  } else if (verticalAlign === Alignment.Center) {
    verticalAlignmentStyle = 'center';
  }

  const alignStyles: Partial<ViewStyle> = {
    flex: height ? undefined : size,
    height: height,
    flexDirection: order,
    justifyContent: horizontalAlignmentStyle,
    alignItems: verticalAlignmentStyle,
    width: width,
  };

  return (
    <View style={[alignStyles, style]} {...rest}>
      {children}
    </View>
  );
};

export default Row;
