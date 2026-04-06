type priority = 'low' | 'medium' | 'high'
const Priority = {
    LOW: 'low' as priority,
    MEDIUM: 'medium' as priority,
    HIGH: 'high' as priority
};

type status = 'active' | 'inactive'
const Status = {
    ACTIVE: 'active' as status,
    INACTIVE: 'inactive' as status
}

type todo = {
    todo: string,
    priority: priority
}

type User = {
    name: string,
    status: status,
    todos: todo[],
    changeStatus: (newStatus: status) => void,
    addTodo: (todo:string, priority?: priority) => void,
    displayTodos: () => void,
    displayActiveTodos: () => void,
}

const user: User = {
    name: '', 
    status: Status.ACTIVE,
    todos: [],

    changeStatus(newStatus: status) {
        if (Object.values(Status).includes(newStatus)) {
            this.status = newStatus;
            console.log(`User status changed to ${newStatus}`);
        } else {
            console.error('Invalid status');
        }
    },

    addTodo(todo: string, priority = Priority.MEDIUM){
        this.todos.push({ todo , priority });
        console.log(`Todo added: ${todo} (Priority: ${priority})`);
    },

    displayTodos() {
        console.log(`Todos for ${this.name}:`);
        this.todos.forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));
    },

    displayActiveTodos() {
        console.log(`Active Todos for ${this.name}:`);
        this.todos
        .filter(todo => todo.priority !== Priority.HIGH)
        .forEach(todo => console.log(`${todo.todo} (Priority: ${todo.priority})`));
 }
};

user.name = 'John';
user.changeStatus(Status.ACTIVE);
user.addTodo('take delivery', Priority.HIGH);
user.addTodo('stocktaking', Priority.HIGH);
user.addTodo('collect the order');
user.addTodo('throw out the trash', Priority.LOW);
user.displayTodos();
user.displayActiveTodos();
user.changeStatus(Status.INACTIVE);