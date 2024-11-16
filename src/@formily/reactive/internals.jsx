import { baseHandlers } from "./handlers";
import { isNormalType, isFn } from "./checkers";
import {
  ProxyRaw,
  RawProxy,
  MakeObservableSymbol,
  RawShallowProxy,
} from "./environment";
export const createObservable = (target, key, value, shallow) => {
  if (typeof value !== "object") return value;
  const raw = ProxyRaw.get(value);
  if (raw) {
    return value;
  }
  if (target) {
    const parentRaw = ProxyRaw.get(target) || target;
    const isShallowParent = RawShallowProxy.get(parentRaw);
    if (isShallowParent) {
      return value;
    }
  }
  if (shallow) {
    return createShallowProxy(value);
  }
  if (isNormalType(value)) return createNormalProxy(value);
  return value;
};

const createShallowProxy = (target) => {
  if (isNormalType(target)) {
    return createNormalProxy(target, true);
  }
};

const createNormalProxy = (target, shallow) => {
  const proxy = new Proxy(target, baseHandlers);
  ProxyRaw.set(proxy, target);
  if (shallow) {
    RawShallowProxy.set(target, proxy);
  } else {
    RawProxy.set(target, proxy);
  }
  return proxy;
};
export const createAnnotation = (maker) => {
  const annotation = (target) => {
    console.log("aaa");
  };
  if (isFn(maker)) {
    annotation[MakeObservableSymbol] = maker;
  }
  return annotation;
};

export const getObservableMaker = (target) => {
  if (target[MakeObservableSymbol]) {
    if (!target[MakeObservableSymbol][MakeObservableSymbol]) {
      return target[MakeObservableSymbol];
    }
    return getObservableMaker(target[MakeObservableSymbol]);
  }
};
