import { object, minLength, maxLength, string, email } from 'valibot'

export const UserSchema = object({
  name: string('Name must be a string',
    [
      minLength(3, 'Name must be at least 3 characters'),
      maxLength(50, 'Name must be at most 50 characters')
    ]
  ),
  email: string('Email must be a string',
    [
      email('Invalid email format')
    ]
  ),
  password: string('Password must be a string',
    [
      minLength(8, 'Password must be at least 8 characters'),
      maxLength(100, 'Password must be at most 100 characters')
    ]
  )
})
