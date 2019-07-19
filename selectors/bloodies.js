//Get Visible expenses
export default (bloodies, { text }) => {
    return bloodies.filter((bloody) => {

        const textMatch = bloody.location.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    })
};