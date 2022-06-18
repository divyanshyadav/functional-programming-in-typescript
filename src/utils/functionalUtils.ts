export type MapFunction = (a: any) => any

export interface Mappable {
    map: MapFunction
}

export const map = (fn: MapFunction) => (anyFunctor: Mappable) =>
    anyFunctor.map(fn)
