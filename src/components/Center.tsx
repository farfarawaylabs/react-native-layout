import React from 'react';
import { View, ViewStyle, StyleProp, ViewProps } from 'react-native';

export interface CenterProps extends ViewProps {
  /**
   * Additional styles to add or override default ones
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Specify the view height in pt or %
   */
  height?: number | string;

  /**
   * Should content should be centered vertically
   */
  vertical?: boolean;

  /**
   * Should content should be centered horizontaly
   */
  horizontal?: boolean;
}

/**
 * Centers children horizontaly and vertically
 */
const Center: React.FC<CenterProps> = ({
  style,
  height,
  vertical,
  horizontal,
  children,
  ...rest
}) => {
  const centerStyle: Partial<ViewStyle> = {
    flex: height ? undefined : 1,
    alignItems: horizontal ? 'center' : 'flex-start',
    justifyContent: vertical ? 'center' : 'flex-start',
  };

  return (
    <View style={[centerStyle, { height: height }, style]} {...rest}>
      {children}
    </View>
  );
};

export default Center;
