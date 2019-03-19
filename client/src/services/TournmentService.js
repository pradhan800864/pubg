import Api from '@/services/Api'

export default {
  savetournment (tournmentdata) {
    return Api().post('savetournment', tournmentdata)
  },
  show () {
    return Api().get('show')
  },
  showdetails (TournmentId) {
    return Api().get(`showdetails/${TournmentId}`)
  },
  registertournment (userid, tournmentid) {
    return Api().post(`registertournment/${userid}&${tournmentid}`)
  },
  check (userid, tournmentid) {
    return Api().get(`check/${userid}&${tournmentid}`)
  }
}
