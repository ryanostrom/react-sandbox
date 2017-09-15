import { Record, List } from 'immutable'

const defaultValues = {
  id: null,
  firstName: '',
  lastName: '',
  emailAddress: '',
}

export default class User extends Record(defaultValues, User) {
  constructor(values) {
    super({
      ...values,
    })
  }

  getFullName() {
    return `${ this.get('firstName') } ${ this.get('lastName') }`
  }

  getEmailAddress() {
    return `${ this.get('emailAddress').toLowerCase() }`
  }
}
