<template>
  <div id="container">
    <b-container>
      <b-row>
        <b-col md="3" sm="6" v-for="(item, index) in items" :key="index">
          <b-col class="card" @click="changePath(item.id,item)">
            <b-row>
              <b-col cols="12">
                <label class="card-title">{{item.title}}</label>
              </b-col >
              <b-col cols="12" style="padding: 0" >
                <label class="card-body">{{item.body}}</label>
              </b-col>
            </b-row>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import api from "../api/index.js"
export default {
  name: "mainPage",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getInformation()
  },
  methods:{
    getInformation(){
      api.getInformationList().then((resp)=>{
        this.items = resp;
      })
    },
    changePath(id,item){
      this.$store.commit('SET_INFORMATION',item)
      this.$router.push({ name: 'detailPage' })
    }
  }
}
</script>

<style scoped>
#container{
  margin-top: 2rem;
}
.card {
  margin-bottom: 1rem;
  padding: 5px 10px 5px 10px;
  height: 170px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.2s;
}
.card:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-color: transparent;
  transform: translateY(-9px);

}
.card-title{
  font-size: 12px;
  font-family: Prompt;
  font-weight: 400;
}
.card-body{
  font-size: 10px;
  font-family: Prompt;
  font-weight: 300;
}
</style>