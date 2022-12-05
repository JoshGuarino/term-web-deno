export class ListNode {
    data: string
    prev: ListNode | null
    next: ListNode | null
    

    constructor(data: string) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

export class LinkedList {
    head: ListNode
    tail: ListNode
    current: ListNode

    constructor(head: ListNode) {
        this.head = head
        this.tail = head
        this.current = head
    }

    addNode(): void {
    }

    traverseBackOne(): void {
    }

    traverseforwardOne(): void {
    }
}