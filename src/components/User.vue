<template>
  <div>
    <div id="studentDetails" style="margin:100px;">
      <div class="container">
        <div class="column">
          <div class="column is-8">
            <div class="">
              <div class>
              <h1 class="title is-8 has-text-centered">Stuent Information</h1>
              </div>
              <b-field label="First Name">
                <b-input v-model="firstName"></b-input>
              </b-field>
              <b-field label="LastName">
                <b-input v-model="lastName"></b-input>
              </b-field>
              </b-field>
              <button type="button" name="button" class="button is-link" @click="save">Submit</button>
              </b-field>
              </b-field>
              <button type="button" name="button" class="button is-link" @click="displayDetails">Display</button>
              </b-field>
            </div>
        <table class="table is-responsive" >
            <thead>
              <tr>
                <th>ID</th>
                <th>First name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(obj,index) in displaydata">
                <td>{{index+1}}</td>
                <td>{{obj.firstName}}</td>
                <td>{{obj.lastName}}</td>
                  <td>
                  <button type="button" name="button" class="button is-link" @click="deleteStud(obj.id)">Delete</button>
                </td>
                <td>
                  <a class="button is-info">
                    <span>Edit</span>
                    <span class="icon is-small">
                      <i class="fa fa-edit"></i>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
      <router-view/>
 </div>
</template>
<script>
import stores from '@/stores'
import axios from 'axios'

export default {
  name: 'user_module',
  data() {
    return {
      firstName: '',
      lastName: '',
      displaydata:[],
      savedUser: {
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    // method ofsave data in database
    save() {
      return stores.user.setUser({
          firstName: this.firstName,
          lastName: this.lastName
        })
        .then(() => {
          this.displayDetails()
          return this.$toast.open({
          message: `User saved Successfully`,
          position: 'is-top',
           type: 'is-success'
          })
        })
        .catch(DBException => {
          return this.$toast.open({
            message: `${DBException}`,
            position: 'is-top',
            type: 'is-warning'
          })
        })
    },
    // method of display student details
    displayDetails(){
      return stores.user.getUser()
      .then(result=>{
        this.displaydata=result;
        console.log(this.displaydata);
      })
    },
    //method of delete record
    deleteStud: function(id){
      return stores.user.removeStud(id)
      .then((result)=>{
        this.displayDetails()
        return this.$toast.open({
          message: `User Successfully deleted`,
          position: 'is-top',
          type: 'is-success'
        })
      })
    },
  }
}
</script>
