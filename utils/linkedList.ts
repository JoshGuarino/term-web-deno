export class ListNode {
    data: string
    next: ListNode | null
    prev: ListNode | null

    constructor(data: string) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

export class LinkedList {
    head: ListNode
    tail: ListNode
    current: ListNode | null

    constructor(headData: string) {
        this.head = new ListNode(headData)
        this.tail = this.head
        this.current = this.head
    }
    
    addNode(data: string): void {
        const node = new ListNode(data)
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        this.current = node
    }

    traverseBack(): void {
        this.current = this.current !== this.head ? this.current!.prev : this.head
    }

    traverseForward(): void {
        this.current = this.current !== this.tail ? this.current!.next : this.tail
    }
}