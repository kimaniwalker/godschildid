export async function generatecode(min, max) {
    try {
        return Math.round(Math.random() * (max - min) + min);
    } catch (error) {
        console.log(error)
    }
    
}


