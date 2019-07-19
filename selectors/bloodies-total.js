export default (bloodies) => {
    return bloodies
        .map((bloody) => bloody.price)
        .reduce((sum, value) => sum + value, 0);
};