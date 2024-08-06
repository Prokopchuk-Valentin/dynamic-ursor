/** @format */

export function createClassName(className: string) {
  const style = document.createElement('style');

  style.textContent = `
  .${className} {
    transition: font-weight 0.04s ease;
  }
`;

  document.head.append(style);
}
