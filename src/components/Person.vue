<template>
  <div>
    <div class="personalInfo"> 
        <div class="md-layout md-gutter">
            <div class="md-layout-item">
               <h1>{{getPerson.name}}</h1> 
            </div>
            <div class="md-layout-item">
               <md-button class="md-raised md-primary btn-personal" v-on:click="disablePerson()">Back to list</md-button>             
            </div>            
         </div> 
         <hr/>
      </div> 
      <div class="personalInfo md-layout md-gutter">
        <div class="md-layout-item personalTable">
          <p>Birth Year : <span class="card-content">{{getPerson.birth_year}}</span></p>
          <hr/>
          <p>Gender : <span class="card-content">{{getPerson.gender}}</span></p>
          <hr/>
          <p>Height : <span class="card-content">{{getPerson.height}}</span></p>
          <hr/>
          <p>Mass : <span class="card-content">{{getPerson.mass}}</span></p>
          <hr/>
          <p>Hair color : <span class="card-content">{{getPerson.hair_color}}</span></p>
          <hr/>
          <p>Skin color : <span class="card-content">{{getPerson.skin_color}}</span></p>
          <hr/>
          <p>Eye color : <span class="card-content">{{getPerson.eye_color}}</span></p>
        </div>
        <div class="md-layout-item">
            <div v-show="filmExisted"> 
              <h3>Films:</h3>
                <div v-for="item in getFilms" :key="item.id"> 
                   <span class="film-list"> {{item}} </span> 
                </div>
            </div>    
            <div v-show="!filmExisted"> 
                <h3>No films</h3>
            </div>
        </div>
    </div>
  </div>  
</template>


<script>
  import {mapGetters} from 'vuex'
  
  export default {
    name: 'Person',
    computed: mapGetters(['getPerson','getFilms']),
    data: ()=>{
        return {
            config: {
                url: "",
                method: "get",
                responseType: 'application/json',
                options: {}
            },
            filmExisted: false,
        }
    },
    methods: {
      disablePerson() {   
        this.$store.dispatch('setNewPersonState')
      }
    },
    updated () {
        if(this.getPerson.films.length>0) {
            this.filmExisted = true
            this.$store.dispatch('setFilms',this.getPerson.films)
         }
    }
  }
</script>


<style lang="scss" scoped>
  .personalInfo {
    width: 700px;
    margin: auto;
    margin-top: 40px;
  }
  .personalTable {
    width: 300px;
    margin-left: 10px;
    margin-top: 10px;
    border: 2px solid gray;
    border-radius: 10px;
    background-color: lightblue;
  }
  .personal-link {
    color:red;
  }
  .btn-personal {
    margin-top: 40px;
    margin-left: 200px;   
  }
  .film-list {
    color: lightslategray;
    font-weight: bold;
  }  
</style>
