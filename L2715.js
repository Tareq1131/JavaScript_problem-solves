var cancellable = function(fn, args, t) {
    let timeoutId = setTimeout(() => fn(...args), t);
    
    const cancelFn = () => clearTimeout(timeoutId);
    
    return cancelFn;
};

/**
 * Example usage:
 *
 * const result = []
 * const fn = (x) => x * 5
 * const args = [2], t = 20, cancelT = 50
 *
 * const cancel = cancellable((x) => {
 *    result.push(fn(x))
 * }, args, t);
 *
 * setTimeout(() => {
 *    cancel()
 *    console.log(result) // After 50ms, result should be []
 * }, cancelT)
 */
