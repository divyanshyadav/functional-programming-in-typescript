export type MapFunction = (a: any) => any

export interface Mappable {
    map: MapFunction
}

export const map = (fn: MapFunction) => (anyFunctor: Mappable) =>
    anyFunctor.map(fn)

export const compose =
    (...fns: MapFunction[]) =>
    (...args: any[]) =>
        fns.reduceRight((acc: any, fn) => [fn.apply(null, acc)], args)[0]
