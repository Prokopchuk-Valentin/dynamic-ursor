/** @format */

import { showWarn } from './utils/showWarn';
import { wrapTextNodes } from './utils/wrapTextNodes';

import { LimitedHTMLElementTagNameMap } from './types';
import { elementTypes } from './constants/constants';
import { createClassName } from './utils/createClassName';

import './style.css';
import { applyDynamicCursor } from './utils/applyDynamicCursor';

const setDynamicCursor = (
  id: string,
  className: string,
  elementType: LimitedHTMLElementTagNameMap = 'span',
  options?: {
    fontWeightDelta?: number;
    animationSpeed?: number;
    cursorRadius?: number;
    minFontWeight?: number;
    maxFontWeight?: number;
  }
) => {
  const element = document.getElementById(id);

  if (!element) {
    return showWarn({ id });
  }

  if (!elementTypes.includes(elementType)) {
    return showWarn({ elementType });
  }

  wrapTextNodes(element, className, elementType);

  createClassName(className);

  const {
    fontWeightDelta = 30,
    animationSpeed = 0.1,
    cursorRadius = 100,
    minFontWeight = 100,
    maxFontWeight = 700,
  } = options || {};

  applyDynamicCursor(
    className,
    fontWeightDelta,
    animationSpeed,
    cursorRadius,
    minFontWeight,
    maxFontWeight
  );
};

setDynamicCursor('app', 'letterInDynamicCursor', 'span', {
  fontWeightDelta: 1,
  animationSpeed: 1.5,
  cursorRadius: 850,
  minFontWeight: 200,
  maxFontWeight: 800,
});
