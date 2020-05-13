import React from 'react';
import { View, ViewStyle, StyleProp, ViewProps } from 'react-native';
import { Alignment } from './enums';

type flexVerticalAlignmentOptions =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between';

export interface ColProps extends ViewProps {
  /**
   * The relative size compared to other adjunct rows
   */
  size?: number;

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
   * Specify the row height in pt or %
   */
  height?: number | string;

  /**
   * Specify the row width in pt or %
   */
  width?: number | string;

  /**
   * Additional styles to add or override default ones
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * Align children using column layout
 */
const Col: React.FC<ColProps> = ({
  style,
  size = 1,
  reverse = false,
  width,
  height,
  verticalAlign = Alignment.Start,
  horizontalAlign = Alignment.Start,
  children,
  ...rest
}) => {
  const order = reverse ? 'column-reverse' : 'column';
  let verticalAlignmentStyle: flexVerticalAlignmentOptions = 'flex-start';
  if (verticalAlign === Alignment.Center) {
    verticalAlignmentStyle = 'center';
  } else if (
    (verticalAlign === Alignment.Start && !reverse) ||
    (verticalAlign === Alignment.End && reverse)
  ) {
    verticalAlignmentStyle = 'flex-start';
  } else if (
    (verticalAlign === Alignment.Start && reverse) ||
    (verticalAlign === Alignment.End && !reverse)
  ) {
    verticalAlignmentStyle = 'flex-end';
  } else if (verticalAlign === Alignment.SpaceAround) {
    verticalAlignmentStyle = 'space-around';
  } else if (verticalAlign === Alignment.SpaceBetween) {
    verticalAlignmentStyle = 'space-between';
  }

  let horizontalAlignmentStyle: 'center' | 'flex-start' | 'flex-end' =
    horizontalAlign === Alignment.Start
      ? 'flex-start'
      : horizontalAlign === Alignment.Center
      ? 'center'
      : 'flex-end';

  const alignStyles: Partial<ViewStyle> = {
    flex: size,
    flexDirection: order,
    justifyContent: verticalAlignmentStyle,
    alignItems: horizontalAlignmentStyle,
    width: width,
    height: height,
  };
  return (
    <View style={[alignStyles, style]} {...rest}>
      {children}
    </View>
  );
};

export default Col;
