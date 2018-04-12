export const max_number = (numbers) => {
    return numbers.length > 0 ? (numbers.reduce((a,b) => b = a.id >= b.id ? a : b).id) : 0;
}