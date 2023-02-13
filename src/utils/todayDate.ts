
export const todayDate = () => {
    let date = new Date();
    const year = String(date.getFullYear()).padStart(2, '0');
    const month = String(date.getMonth()+1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    return [year, month, day, hour, minute]
}