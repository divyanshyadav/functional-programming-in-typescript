import { Option, some } from './optionMonad'

export interface User {
    id: string
    firstName: string
    lastName: string
}

export function getCurrentUser(): Option<User> {
    return some({ id: '1', firstName: 'Red', lastName: 'John' })
}

export function getFirstName(user: User): Option<string> {
    return some(user.firstName)
}
