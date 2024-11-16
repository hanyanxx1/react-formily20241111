import { isAnnotation, isObservable } from "./externals";
import { getObservableMaker } from "./internals";

export function define(target, annotations) {
  if (isObservable(target)) {
    return target;
  }
  for (const key in annotations) {
    const annotation = annotations[key];
    if (isAnnotation(annotation)) {
      getObservableMaker(annotation)({ target, key });
    }
  }
}
