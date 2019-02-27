<template>
  <div id="studentDetails" style="margin:100px;">
    <div class="container">
      <div class="column">
        <div class="column is-8">
          <div class="">
          <h1 class="title is-5 has-text-centered">Stuent Information</h1>
          </div>
        <b-field label="First Name">
            <b-input v-model="firstName"></b-input>
        </b-field>
        <b-field label="LastName">
            <b-input v-model="lastName"></b-input>
        </b-field>
        <b-field label="Department">
            <b-input v-model="department"></b-input>
        </b-field>
        <b-field label="Department">
          <button type="button" name="button" class="button is-link">Submit</button>
        </b-field>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'studentDetails'

}
</script>

<style>

</style>
