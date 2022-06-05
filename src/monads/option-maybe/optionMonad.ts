export declare const none: Option<never>

// Wrapper Type
export interface Option<T> {
    value: T
}

// Wrapper Function
export function some<T>(value: T): Option<T> {
    return {
        value,
    }
}

// Run function
export function run(
    input: Option<any>,
    transform: (_: any) => Option<any>
): Option<any> {
    if (input === none) return some(none)
    return transform(input.value)
}
