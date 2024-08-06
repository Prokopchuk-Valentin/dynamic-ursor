/** @format */

import { elementTypes } from '../constants/constants';

interface Params {
  id: string;
  elementType: string;
}

export function showWarn({ id, elementType }: Partial<Params>) {
  if (id) {
    const ids = [...document.querySelectorAll('[id]')]
      .map((el) => el.id)

    const errorMessage = `Указан неверный id: ${id}.\n  Укажите верный id!\n  Список всех id на странице: [${ids}].`;

    console.warn(`[${new Date().toISOString()}] Error: ${errorMessage}`);
    return;
  }

  if (elementType) {
    const errorMessage = `Указан недопустимый тип элемента: ${elementType}.\n  Допустимые символы: [${elementTypes}]`;
    console.warn(`[${new Date().toISOString()}] Error: ${errorMessage}`);
  }
}
