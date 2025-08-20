import { useMemo } from "react"

const useSum = (a: number, b: number): number => {
    const sum: number = useMemo(() => a + b, [a, b])
    return sum
}


export default useSum