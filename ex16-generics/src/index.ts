// Generics use to get a generic type for example for a function

// without generics

function logAndReturnString(val: string): string {
    console.log(val);
    return val
}

function logAndReturnNumber(val: number): number {
    console.log(val);
    return val
}

function logAndReturnBool(val: boolean): boolean {
    console.log(val);
    return val
}

// With generics

function logAndReturnValue<T>(val: T): T {
    console.log(val);
    return val
}

logAndReturnValue<string>('Daniel')
logAndReturnValue<number>(150)
logAndReturnValue<boolean>(true)