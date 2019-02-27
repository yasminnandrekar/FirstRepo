<template>
  <div class="nodeExample" style="margin:100px;">
    id:<input type="text" name="" value=" " v-model='id'>
    <button type="button" name="button" @click="display">submit</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'nodeExample',
  data () {
    return {
      id:''
    }
  },
  methods:{
    display(){
      return axios.get(`http://localhost:8082/student?id=${this.id}`)
      .then((res)=>{
        console.log("id",this.id);
      })
      .catch((err)=>{
        console.log('error',JSON.stringify(err));
      })

    }
  }
}
</script>

<style scoped>

</style>
