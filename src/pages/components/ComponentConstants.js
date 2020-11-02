export const safeClick = (event, callback) => {
    event.preventDefault();
    return callback;
}