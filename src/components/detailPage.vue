<template>
  <div id="container">
    <b-container>
      <b-row>
        <b-col cols="12">
          <button class="btn-back" @click="btnBack">
            <b-icon class="icon-back" icon="arrow-left-circle" font-scale="2" ></b-icon>
          </button>
        </b-col>
        <b-col cols="12" class="d-flex justify-content-center">
          <img class="images" :src="image">
        </b-col>
      </b-row>


      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="6">
          <label class="label-title">{{items.title}}</label>
          <label class="label-body">{{items.body}}</label>
          <label class="label-title">{{items.title}}</label>
          <label class="label-body">{{items.body}}</label>
        </b-col>
        <b-col cols="3"></b-col>
      </b-row>


    </b-container>
  </div>
</template>

<script>
export default {
  name: "detailPage",
  data() {
    return {
      items: {},
      image: ('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')
    };
  },
  mounted() {
    this.items = this.$store.getters.getInformation
  },
  methods:{
    btnBack(){
      this.$router.push({ name: 'mainPage' })
      this.$store.commit('DELETE_INFORMATION')
    }
  }
}
</script>

<style scoped>
#container{
  margin-top: 2rem;
}
.btn-back{
  background-color: white;
  color: grey;
  border: none;
  border-radius: 18px;
  height: 36px;
  width: 36px;
  font-family: Prompt;
  font-size: 12px;
  transition: all 0.2s;
}
.btn-back:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transform: translateY(-5px);
}
.label-title{
  font-size: 28px;
  font-family: Prompt;
  font-weight: 600;
  margin-top: 1rem;
}
.label-body{
  font-size: 24px;
  font-family: Prompt;
  font-weight: 300;
  margin-top: 1rem;
}
.images{
  height: 450px;
  object-fit: contain;
  max-width: 100%;
}
</style>