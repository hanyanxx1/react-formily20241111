//RawProxy.set(target, proxy) 普通对象=>代理对象
export const RawProxy = new WeakMap();
//ProxyRaw.set(proxy, target) 代理对象=>原生对象
export const ProxyRaw = new WeakMap();
export const RawReactionsMap = new WeakMap();
export const ReactionStack = [];
