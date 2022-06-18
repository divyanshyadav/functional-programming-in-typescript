import Maybe from '../functor/Maybe'

type AnyObject = {
    [key: string]: any
}

export const prop = (name: string) => (object: AnyObject) => object[name]
export const safeProp = (name: string) => (object: AnyObject) =>
    new Maybe(object[name])
