export function square(x: number): number {
	return x * x;
}

export function addOne(x: number): number {
	return x + 1;
}

export interface NumberWithLogs {
	result: number;
	logs: string[];
}

export function wrapWithLogs(
	value: number,
	logs: string[] = []
): NumberWithLogs {
	return {
		result: value,
		logs: logs,
	};
}

export function squareWithLogs(x: number): NumberWithLogs {
	const value = square(x);
	return wrapWithLogs(value, [`squared ${x} to get ${value}`]);
}

export function addOneWithLogs(x: number): NumberWithLogs {
	const value = addOne(x);
	return wrapWithLogs(value, [`add one to ${x} to get ${value}`]);
}

export function runWithLogs(
	input: NumberWithLogs,
	transform: (x: number) => NumberWithLogs
): NumberWithLogs {
	const output = transform(input.result);

	return {
		result: output.result,
		logs: [...input.logs, ...output.logs],
	};
}
