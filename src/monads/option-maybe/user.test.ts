import { none, Option, run } from './optionMonad'
import { getCurrentUser, getFirstName, User } from './user'

describe('Option monad', () => {
    test('get user firstName', () => {
        const user: Option<User> = getCurrentUser()
        const firstName: Option<string> = run(user, getFirstName)
        expect(firstName.value).toBe('Red')
    })

    test('get firstName of non-existing user', () => {
        const user = none
        const firstName: Option<string> = run(user, getFirstName)
        expect(firstName.value).not.toBeDefined()
    })
})
