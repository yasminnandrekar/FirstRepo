export default class User {
  constructor (db) {
    this.db = db
  }
  setUser (user_data) {
    console.log(user_data);
    return this.db.student.add(user_data)
  }
  getUser () {
    return this.db.student.toArray()
    .then((result)=>{
      console.log(result);
      return Promise.resolve(result)
    })
      }
    removeStud(id){
      return this.db.student.delete(id)
      .then(()=>{
        return Promise.resolve()
      })
    }


}
