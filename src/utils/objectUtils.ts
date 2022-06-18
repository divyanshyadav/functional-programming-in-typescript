type anyObject = {
    [key: string]: any
}

export const prop = (name: string) => (object: anyObject) => object[name]
