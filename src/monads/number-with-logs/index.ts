import { NumberWithLogs, wrapWithLogs } from './numberWithLogsMonad'

export function square(x: number): number {
    return x * x
}

export function addOne(x: number): number {
    return x + 1
}

export function squareWithLogs(x: number): NumberWithLogs {
    const value = square(x)
    return wrapWithLogs(value, [`squared ${x} to get ${value}`])
}

export function addOneWithLogs(x: number): NumberWithLogs {
    const value = addOne(x)
    return wrapWithLogs(value, [`add one to ${x} to get ${value}`])
}
