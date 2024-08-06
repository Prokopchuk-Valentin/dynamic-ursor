/**
 * Type guard function to check if a node is an HTMLElement.
 *
 * @format
 * @param {Node} node - The node to check.
 * @returns {node is HTMLElement} True if the node is an HTMLElement, false otherwise.
 */

import { LimitedHTMLElementTagNameMap } from '../types';

function isHTMLElement(node: Node): node is HTMLElement {
  return node.nodeType === Node.ELEMENT_NODE;
}

/**
 * Wraps each character of text nodes within the given HTML element
 * into individual elements with the specified class name and element type.
 *
 * @param {HTMLElement} element - The HTML element containing text nodes to be wrapped.
 * @param {string} className - The class name to assign to each newly created element.
 * @param {keyof HTMLElementTagNameMap} [elementType='span'] - The type of element to create for each character.
 *
 * @example
 * Given the following HTML:
 * <div id="example">Hello</div>
 * <script>
 *   const element = document.getElementById('example');
 *   wrapTextNodes(element, 'letter');
 * </script>
 * The resulting HTML will be:
 * <div id="example">
 *   <span class="letter">H</span>
 *   <span class="letter">e</span>
 *   <span class="letter">l</span>
 *   <span class="letter">l</span>
 *   <span class="letter">o</span>
 * </div>
 *
 * @example
 * Given the following HTML:
 * <div id="example">Hello</div>
 * <script>
 *   const element = document.getElementById('example');
 *   wrapTextNodes(element, 'letter', 'div');
 * </script>
 * The resulting HTML will be:
 * <div id="example">
 *   <div class="letter">H</div>
 *   <div class="letter">e</div>
 *   <div class="letter">l</div>
 *   <div class="letter">l</div>
 *   <div class="letter">o</div>
 * </div>
 */

export function wrapTextNodes(
  element: HTMLElement,
  className: string,
  elementType: LimitedHTMLElementTagNameMap = 'span'
) {
  for (const node of element.childNodes) {
    const { nodeType, textContent, parentNode } = node;

    if (isHTMLElement(node) && node.classList.contains(className)) {
      continue;
    }

    if (nodeType === Node.TEXT_NODE && textContent && parentNode) {
      const newElements = textContent.split('').map((char) => {
        const newElement = document.createElement(elementType);

        newElement.className = className;
        newElement.textContent = char;

        return newElement;
      });

      newElements.forEach((el) => parentNode.insertBefore(el, node));

      parentNode.removeChild(node);
    } else if (isHTMLElement(node)) {
      wrapTextNodes(node, className, elementType);
    }
  }
}
