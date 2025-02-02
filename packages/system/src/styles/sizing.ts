import * as CSS from 'csstype'
import { style, themeGetter, compose } from '../style'
import { getPercent } from './units'
import { SystemProp, VariantsType, ITheme, Theme } from '../types'

// Getters

export type SizeGetter<T extends ITheme = Theme> = VariantsType<T['sizes']>
export const getSize = themeGetter({
  name: 'size',
  key: 'sizes',
  compose: getPercent,
})

// Styles

type WidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.Width,
  T
>
export interface WidthProps<T extends ITheme = Theme> {
  w?: WidthProp<T>
  motionSafeW?: WidthProp<T>
  motionReduceW?: WidthProp<T>
  firstW?: WidthProp<T>
  lastW?: WidthProp<T>
  oddW?: WidthProp<T>
  evenW?: WidthProp<T>
  visitedW?: WidthProp<T>
  checkedW?: WidthProp<T>
  focusWithinW?: WidthProp<T>
  hoverW?: WidthProp<T>
  focusW?: WidthProp<T>
  focusVisibleW?: WidthProp<T>
  activeW?: WidthProp<T>
  disabledW?: WidthProp<T>
  placeholderW?: WidthProp<T>
}
export const width = style({
  prop: 'w',
  cssProperty: 'width',
  themeGet: getSize,
})

type HeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.Height,
  T
>
export interface HeightProps<T extends ITheme = Theme> {
  h?: HeightProp<T>
  motionSafeH?: HeightProp<T>
  motionReduceH?: HeightProp<T>
  firstH?: HeightProp<T>
  lastH?: HeightProp<T>
  oddH?: HeightProp<T>
  evenH?: HeightProp<T>
  visitedH?: HeightProp<T>
  checkedH?: HeightProp<T>
  focusWithinH?: HeightProp<T>
  hoverH?: HeightProp<T>
  focusH?: HeightProp<T>
  focusVisibleH?: HeightProp<T>
  activeH?: HeightProp<T>
  disabledH?: HeightProp<T>
  placeholderH?: HeightProp<T>
}
export const height = style({
  prop: 'h',
  cssProperty: 'height',
  themeGet: getSize,
})

type MaxWidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MaxWidth,
  T
>
export interface MaxWidthProps<T extends ITheme = Theme> {
  // maxWidth
  maxWidth?: MaxWidthProp<T>
  motionSafeMaxWidth?: MaxWidthProp<T>
  motionReduceMaxWidth?: MaxWidthProp<T>
  firstMaxWidth?: MaxWidthProp<T>
  lastMaxWidth?: MaxWidthProp<T>
  oddMaxWidth?: MaxWidthProp<T>
  evenMaxWidth?: MaxWidthProp<T>
  visitedMaxWidth?: MaxWidthProp<T>
  checkedMaxWidth?: MaxWidthProp<T>
  focusWithinMaxWidth?: MaxWidthProp<T>
  hoverMaxWidth?: MaxWidthProp<T>
  focusMaxWidth?: MaxWidthProp<T>
  focusVisibleMaxWidth?: MaxWidthProp<T>
  activeMaxWidth?: MaxWidthProp<T>
  disabledMaxWidth?: MaxWidthProp<T>
  placeholderMaxWidth?: MaxWidthProp<T>

  // maxW
  maxW?: MaxWidthProp<T>
  motionSafeMaxW?: MaxWidthProp<T>
  motionReduceMaxW?: MaxWidthProp<T>
  firstMaxW?: MaxWidthProp<T>
  lastMaxW?: MaxWidthProp<T>
  oddMaxW?: MaxWidthProp<T>
  evenMaxW?: MaxWidthProp<T>
  visitedMaxW?: MaxWidthProp<T>
  checkedMaxW?: MaxWidthProp<T>
  focusWithinMaxW?: MaxWidthProp<T>
  hoverMaxW?: MaxWidthProp<T>
  focusMaxW?: MaxWidthProp<T>
  focusVisibleMaxW?: MaxWidthProp<T>
  activeMaxW?: MaxWidthProp<T>
  disabledMaxW?: MaxWidthProp<T>
  placeholderMaxW?: MaxWidthProp<T>
}
export const maxWidth = style({
  cssProperty: 'maxWidth',
  prop: ['maxWidth', 'maxW'],
  themeGet: getSize,
})

type MaxHeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MaxHeight,
  T
>
export interface MaxHeightProps<T extends ITheme = Theme> {
  // maxHeight
  maxHeight?: MaxHeightProp<T>
  motionSafeMaxHeight?: MaxHeightProp<T>
  motionReduceMaxHeight?: MaxHeightProp<T>
  firstMaxHeight?: MaxHeightProp<T>
  lastMaxHeight?: MaxHeightProp<T>
  oddMaxHeight?: MaxHeightProp<T>
  evenMaxHeight?: MaxHeightProp<T>
  visitedMaxHeight?: MaxHeightProp<T>
  checkedMaxHeight?: MaxHeightProp<T>
  focusWithinMaxHeight?: MaxHeightProp<T>
  hoverMaxHeight?: MaxHeightProp<T>
  focusMaxHeight?: MaxHeightProp<T>
  focusVisibleMaxHeight?: MaxHeightProp<T>
  activeMaxHeight?: MaxHeightProp<T>
  disabledMaxHeight?: MaxHeightProp<T>
  placeholderMaxHeight?: MaxHeightProp<T>

  // maxH
  maxH?: MaxHeightProp<T>
  motionSafeMaxH?: MaxHeightProp<T>
  motionReduceMaxH?: MaxHeightProp<T>
  firstMaxH?: MaxHeightProp<T>
  lastMaxH?: MaxHeightProp<T>
  oddMaxH?: MaxHeightProp<T>
  evenMaxH?: MaxHeightProp<T>
  visitedMaxH?: MaxHeightProp<T>
  checkedMaxH?: MaxHeightProp<T>
  focusWithinMaxH?: MaxHeightProp<T>
  hoverMaxH?: MaxHeightProp<T>
  focusMaxH?: MaxHeightProp<T>
  focusVisibleMaxH?: MaxHeightProp<T>
  activeMaxH?: MaxHeightProp<T>
  disabledMaxH?: MaxHeightProp<T>
  placeholderMaxH?: MaxHeightProp<T>
}
export const maxHeight = style({
  cssProperty: 'maxHeight',
  prop: ['maxHeight', 'maxH'],
  themeGet: getSize,
})

type MinWidthProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MinWidth,
  T
>
export interface MinWidthProps<T extends ITheme = Theme> {
  // minWidth
  minWidth?: MinWidthProp<T>
  motionSafeMinWidth?: MinWidthProp<T>
  motionReduceMinWidth?: MinWidthProp<T>
  firstMinWidth?: MinWidthProp<T>
  lastMinWidth?: MinWidthProp<T>
  oddMinWidth?: MinWidthProp<T>
  evenMinWidth?: MinWidthProp<T>
  visitedMinWidth?: MinWidthProp<T>
  checkedMinWidth?: MinWidthProp<T>
  focusWithinMinWidth?: MinWidthProp<T>
  hoverMinWidth?: MinWidthProp<T>
  focusMinWidth?: MinWidthProp<T>
  focusVisibleMinWidth?: MinWidthProp<T>
  activeMinWidth?: MinWidthProp<T>
  disabledMinWidth?: MinWidthProp<T>
  placeholderMinWidth?: MinWidthProp<T>

  // minW
  minW?: MinWidthProp<T>
  motionSafeMinW?: MinWidthProp<T>
  motionReduceMinW?: MinWidthProp<T>
  firstMinW?: MinWidthProp<T>
  lastMinW?: MinWidthProp<T>
  oddMinW?: MinWidthProp<T>
  evenMinW?: MinWidthProp<T>
  visitedMinW?: MinWidthProp<T>
  checkedMinW?: MinWidthProp<T>
  focusWithinMinW?: MinWidthProp<T>
  hoverMinW?: MinWidthProp<T>
  focusMinW?: MinWidthProp<T>
  focusVisibleMinW?: MinWidthProp<T>
  activeMinW?: MinWidthProp<T>
  disabledMinW?: MinWidthProp<T>
  placeholderMinW?: MinWidthProp<T>
}
export const minWidth = style({
  cssProperty: 'minWidth',
  prop: ['minWidth', 'minW'],
  themeGet: getSize,
})

type MinHeightProp<T extends ITheme> = SystemProp<
  SizeGetter<T> | CSS.Property.MinHeight,
  T
>
export interface MinHeightProps<T extends ITheme = Theme> {
  // minHeight
  minHeight?: MinHeightProp<T>
  motionSafeMinHeight?: MinHeightProp<T>
  motionReduceMinHeight?: MinHeightProp<T>
  firstMinHeight?: MinHeightProp<T>
  lastMinHeight?: MinHeightProp<T>
  oddMinHeight?: MinHeightProp<T>
  evenMinHeight?: MinHeightProp<T>
  visitedMinHeight?: MinHeightProp<T>
  checkedMinHeight?: MinHeightProp<T>
  focusWithinMinHeight?: MinHeightProp<T>
  hoverMinHeight?: MinHeightProp<T>
  focusMinHeight?: MinHeightProp<T>
  focusVisibleMinHeight?: MinHeightProp<T>
  activeMinHeight?: MinHeightProp<T>
  disabledMinHeight?: MinHeightProp<T>
  placeholderMinHeight?: MinHeightProp<T>

  // minH
  minH?: MinHeightProp<T>
  motionSafeMinH?: MinHeightProp<T>
  motionReduceMinH?: MinHeightProp<T>
  firstMinH?: MinHeightProp<T>
  lastMinH?: MinHeightProp<T>
  oddMinH?: MinHeightProp<T>
  evenMinH?: MinHeightProp<T>
  visitedMinH?: MinHeightProp<T>
  checkedMinH?: MinHeightProp<T>
  focusWithinMinH?: MinHeightProp<T>
  hoverMinH?: MinHeightProp<T>
  focusMinH?: MinHeightProp<T>
  focusVisibleMinH?: MinHeightProp<T>
  activeMinH?: MinHeightProp<T>
  disabledMinH?: MinHeightProp<T>
  placeholderMinH?: MinHeightProp<T>
}
export const minHeight = style({
  cssProperty: 'minHeight',
  prop: ['minHeight', 'minH'],
  themeGet: getSize,
})

export interface SizingProps<T extends ITheme = Theme>
  extends WidthProps<T>,
    HeightProps<T>,
    MaxWidthProps<T>,
    MaxHeightProps<T>,
    MinWidthProps<T>,
    MinHeightProps<T> {}
export const sizing = compose(
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
)
