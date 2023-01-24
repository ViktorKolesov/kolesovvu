export function getMessage(value) {
    console.log(value)
    if(value < 0) {
        return "Invalid number"
    } 
    if(value === 0) {
        return "You don't have any items in your shopping"
    }
    if(value === 1) {
        return "You have one item in your shopping list"
    }
    return "You have more than one item in your shopping"
}  