import User from './user'
import Dexie from 'dexie'

Dexie.debug = true
let db = new Dexie('vuejs-demo')
db.version(1).stores({
  student: '++id,firstName,lastName'
})

let stores = null
if (!stores) {
  stores = {
    user: new User(db)
  }
}
export default stores
