export const requiredField = value => value ? undefined : 'This Field is Required, Guys :(';

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} symbols or less` : undefined

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'It is not email address' : undefined