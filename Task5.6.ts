interface Container<T> {
    value: T
}

function getValue<T>(value: Container<T>){
    return value.value
}




