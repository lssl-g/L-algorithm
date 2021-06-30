class MaxHeap {
  constructor (heapSize) {
    this.heapSize = heapSize
    this.realSize = 0
    this.maxHeap = new Array(heapSize + 1)
    this.maxHeap[0] = 0
  }

  add (element) {
    this.realSize++
    if (this.realSize > this.heapSize) {
      console.log('add too many elements')
      this.realSize--
    }
    this.maxHeap[this.realSize] = element
    let index = this.realSize
    let parent = Math.floor(index / 2)
    while (this.maxHeap[index] > this.maxHeap[parent] && index > 1) {
      const temp = this.maxHeap[index]
      this.maxHeap[index] = this.maxHeap[parent]
      this.maxHeap[parent] = temp
      index = parent
      parent = Math.floor(index / 2)
    }
  }

  peek () {
    return this.maxHeap[1]
  }

  pop () {
    if (this.realSize < 1) {
      console.log('dont have any element')
      return null
    } else {
      const removeElement = this.maxHeap[1]
      this.maxHeap[1] = this.maxHeap[this.realSize]
      this.realSize--
      let index = 1
      while (index < this.realSize && index <= Math.floor(this.realSize / 2)) {
        const left = index * 2
        const right = index * 2 + 1
        if (this.maxHeap[index] < this.maxHeap[left] || this.maxHeap[index] < this.maxHeap[right]) {
          if (this.maxHeap[left] > this.maxHeap[right]) {
            const temp = this.maxHeap[left]
            this.maxHeap[left] = this.maxHeap[index]
            this.maxHeap[index] = temp
            index = left
          } else {
            const temp = this.maxHeap[right]
            this.maxHeap[right] = this.maxHeap[index]
            this.maxHeap[index] = temp
            index = right
          }
        } else {
          break
        }
      }
      return removeElement
    }
  }

  size () {
    return this.realSize
  }

  toString () {
    if (this.realSize === 0) return 'No element!'
    else {
      return '[' + this.maxHeap.join(',') + ']'
    }
  }
}

const maxHeap = new MaxHeap(5)
maxHeap.add(1)
maxHeap.add(2)
maxHeap.add(3)
console.log(maxHeap.toString())
console.log(maxHeap.peek())
console.log(maxHeap.pop())
console.log(maxHeap.pop())
console.log(maxHeap.pop())
console.log(maxHeap.toString())
maxHeap.add(4)
maxHeap.add(5)
console.log(maxHeap.toString())
