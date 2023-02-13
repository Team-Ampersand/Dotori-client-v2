export const dateRegex = (date:string) => (
    date.replace(/(-0|-)/g,'. ')
)