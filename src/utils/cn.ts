import { isset } from "./guards";

export const cn = <T>(...classNames: Array<T>): string =>
  classNames
    .filter((value: T) => isset(value))
    .join(' ');
