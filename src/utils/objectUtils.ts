type AnyObject = {
    [key: string]: any
}

export const prop = (name: string) => (object: AnyObject) => object[name]
