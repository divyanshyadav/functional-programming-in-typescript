// Wrapper Type
export interface NumberWithLogs {
    result: number
    logs: string[]
}

// Wrapper Function
export function wrapWithLogs(
    value: number,
    logs: string[] = []
): NumberWithLogs {
    return {
        result: value,
        logs: logs,
    }
}

// Run function
export function runWithLogs(
    input: NumberWithLogs,
    transform: (x: number) => NumberWithLogs
): NumberWithLogs {
    const output = transform(input.result)

    return {
        result: output.result,
        logs: [...input.logs, ...output.logs],
    }
}
