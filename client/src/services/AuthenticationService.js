import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  userregister (credentials) {
    return Api().post('userregister', credentials)
  },
  userlogin (credentials) {
    return Api().post('userlogin', credentials)
  }
}
