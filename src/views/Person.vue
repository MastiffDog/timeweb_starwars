<template>
  <div>
    <div class="md-layout md-gutter" v-show="showPersonInfo">
      <div class="md-layout-item">
        <Person />
      </div>
      <div class="md-layout-item">
        <div class="back-link">
          <router-link :to="{ path: this.path }"> Back to list </router-link>
        </div>
      </div>
    </div>
    <div class="person-loading" v-show="!showPersonInfo">
      <h1>Loading...</h1>
    </div>
  </div>
</template>


<script>
import Person from "../components/Person";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  components: { Person },
  computed: mapGetters(["getPerson"]),
  data() {
    return {
      showPersonInfo: false,
      path: "",
      person: {},
    };
  },
  mounted() {
    if (this.getPerson.id) {
      this.path = this.getPerson.pagePath;
      this.showPersonInfo = true;
    } else {
      let id = +this.$route.params.id;
      let page = Math.floor(id / 10);
      if (id - page * 10 !== 0) page++;
      this.path = "/page/" + page;
      axios
        .get("http://swapi.dev/api/people/" + this.$route.params.id)
        .then((res) => {
          this.person = res.data;
          this.$store.dispatch("setNewPerson", this.person);
          this.showPersonInfo = true;
        })
        .catch((err) => {
          throw err;
        });
    }
  },
};
</script>

<style scoped>
.person-loading {
  text-align: center;
  margin-top: 100px;
}
.back-link {
  font-weight: bold;
  font-size: large;
  margin-top: 100px;
}
</style>