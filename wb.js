/*# TITLE: SUM OF ODD NUMBERS
# DESCRIPTION:
# Given the triangle of consecutive odd numbers:
#              1
#           3     5
#        7     9    11
#    13    15    17    19
# 21    23    25    27    29
# Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
# INPUT --> OUTPUT
# 1 -->  1
# 2 --> 3 + 5 = 8 */

const sumRow = idx => {
    numElem = 2*idx -1
    listElem = []
    _sum = 0
    for (let i = 1; i < 100; i+=2) {
        if (counter <= numElem) {
            counter++
            listElem.push(i)
        }
    }
    let newElem = listElem.slice(-idx, listElem.length)
    for (let item of newElem) {
        _sum += item
    }
    return _sum
}