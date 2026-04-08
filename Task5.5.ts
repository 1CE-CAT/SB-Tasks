class Stack<T> {
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[0];
    }

    print(): void {
        console.log(this.items);
    }
}

class HanoiTower {
     
    from?: string = 'First';
    to?: string = 'Second';
    aux?: string = 'Third';
    disks: Array<number | string> = [];
    
    constructor(from?: string, to?: string, aux?: string) {
        this.from = from;
        this.to = to;
        this.aux = aux;
    }

    addDisks(newDisks: Array<number | string>): void {
        this.disks = newDisks;
    }

    solve(): void {
        const moveDisk = (n: Array<number | string>, from: string, to: string, aux: string) => {
            const stack = new Stack<number | string>();
            for (let i = n.length; i > 0; i--) { stack.push(n[i - 1]); }
            if (stack.peek() === 'string') {

            } 
            if (stack.peek() === 'number') {
                let n: number = this.disks.length
                if (n === 1) {
                    console.log(`Move disk 1 from ${from} to ${to}`);
                    return;
                }
                moveDisk(n - 1, from, aux, to);
                console.log(`Переместить диск ${n} с ${from} на ${to}`);
                moveDisk(n - 1, aux, to, from);
            }
        };
    }
}