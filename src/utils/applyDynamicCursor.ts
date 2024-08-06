export const applyDynamicCursor = (
  className: string,
  fontWeightDelta: number,
  animationSpeed: number,
  cursorRadius: number,
  minFontWeight: number,
  maxFontWeight: number
) => {
  const elements = document.querySelectorAll<HTMLElement>(`.${className}`);
  if (elements.length === 0) return;

  const updateFontWeight = (
    element: HTMLElement,
    currentFontWeight: number,
    targetFontWeight: number
  ) => {
    if (Math.abs(currentFontWeight - targetFontWeight) > 1) {
      const newFontWeight =
        currentFontWeight +
        (targetFontWeight - currentFontWeight) * animationSpeed;
      element.style.fontWeight = `${newFontWeight}`;
      requestAnimationFrame(() =>
        updateFontWeight(element, newFontWeight, targetFontWeight)
      );
    }
  };

  let animationFrame: number;
  const onMouseMove = (event: MouseEvent) => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }

    animationFrame = requestAnimationFrame(() => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = Math.abs(event.clientX - rect.left - rect.width / 2);
        const y = Math.abs(event.clientY - rect.top - rect.height / 2);
        const distance = Math.sqrt(x * x + y * y);
        const del = cursorRadius - Math.min(distance / 0.3, cursorRadius - 100);
        const targetFontWeight = Math.min(Math.max(del, minFontWeight), maxFontWeight);
        const currentFontWeight = parseFloat(element.style.fontWeight) || minFontWeight;

        if (Math.abs(targetFontWeight - currentFontWeight) > fontWeightDelta) {
          updateFontWeight(element, currentFontWeight, targetFontWeight);
        }
      });
    });
  };

  document.addEventListener('mousemove', onMouseMove);
};