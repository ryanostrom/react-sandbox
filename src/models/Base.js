import { Record } from 'immutable'

const defaultValues = {
  loading: false,
  errorMessage: null,
  data: Record(),
}

export default class Base extends Record(defaultValues, Base) {
  constructor(values) {
    super({
      ...values,
    })
  }
}
