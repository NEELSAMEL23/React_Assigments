import { useMemo } from "react";

function useSum(a: number, b: number): number {
  const sum = useMemo(() => a + b, [a, b]);
  return sum;
}

export default useSum;
