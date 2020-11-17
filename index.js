function largestSubarraySum(array) {
    let sequenceSum = 0
    let soFar = 0
    for (let i = 0; i < array.length; i++) {
        sequenceSum = sequenceSum + array[i]
        if (soFar < sequenceSum) {
            soFar = sequenceSum
        } else if (sequenceSum < 0) {
            sequenceSum = 0
        }
    }
    return soFar
}