export const isEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

export const fullName = (e) => {
    return e.length >= 3;
}

export const streetAddress = (e) => {
    return e.length >= 5;
}

export const city = (e) => {
    return e.length >= 3;
}

export const zipCode = (e) => {
    return e.toString().length === 6;
}

export const userName = (e) => {
    return e.length >= 3;
}

export const password = (e) => {
    return e.length >= 6;
}

export const passwordMatch = (a, b) => {
    return a === b;
}