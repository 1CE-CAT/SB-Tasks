interface User {
    id: number;
    readonly userName: string;
    surname: string;
    coins: number;
    age?: number;
    gender: string;
    addCoin(amount: number): void;
    removeCoin(amount: number): void;
    getCoins(): string;
}

interface Admin extends User {
    role: string;
}

class AnyClass implements Admin {
    id: number = 1;
    userName: string ='Ivan';
    surname: string = 'Ivanov';
    coins: number = 5;
    age: number = 25;
    gender: string= 'man';
    role: string= 'user';
    addCoin(amount: number): void {
        this.coins += amount;
    } 
    removeCoin(amount: number): void {
        this.coins -= amount;
    }

    getCoins(): string {
        return `Количество монет ${this.coins}`;
    }

    constructor() {}
}

const ivan: User = {
	id: 1,
	userName: "Ivan",
	surname: "Ivanov",
	coins: 5,
	age: 25,
    gender: "man",
	addCoin(amount: number): void {
		this.coins += amount;
	},
	removeCoin(amount: number): void {
		this.coins -= amount;
	},
	getCoins() {
		return `Количество монет ${this.coins}`;
	},
};

