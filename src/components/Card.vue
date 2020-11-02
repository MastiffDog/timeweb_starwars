<template>
  <div>
    <div>
      <md-card md-with-hover class="md-primary">
        <md-ripple v-show="dataIsLoaded">
          <md-card-header>
            <div class="md-title">{{ person.name }}</div>
          </md-card-header>
          <md-card-content class="content">
            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <p>
                  Gender: <span class="card-content">{{ person.gender }}</span>
                </p>
                <p>
                  Height: <span class="card-content">{{ person.height }}</span>
                </p>
                <p>
                  Mass: <span class="card-content">{{ person.mass }}</span>
                </p>
              </div>
              <div class="md-layout-item">
                <p>Starships:</p>
                <p v-show="!exists" class="noShip">I have no starships</p>
                <div
                  class="personShips"
                  v-show="exists"
                  v-for="item in starships"
                  :key="item.id"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </md-card-content>
          <hr />
          <md-card-actions>
            <router-link :to="{ path: '/people/' + person.id }">
              <md-button
                class="md-raised md-primary"
                v-on:click="dispatchPath()"
                mddisabled="personDataReady"
                >See more person info</md-button
              >
            </router-link>
          </md-card-actions>
        </md-ripple>
        <md-ripple v-show="!dataIsLoaded">
          <md-card-header>
            <div class="md-title">Loading...</div>
          </md-card-header>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Card",
  props: {
    dataIsLoaded: {
      type: Boolean,
      default: false,
    },
    person: {},
  },
  data: () => {
    return {
      starships: [],
      exists: false,
    };
  },
  methods: {
    dispatchPath() {
      this.$store.dispatch("setNewPerson", this.person);
    },
  },
  mounted() {
    if (this.person.starships.length > 0) {
      this.exists = true;
      let urlPromise = [];
      this.person.starships.forEach((url) => {
        urlPromise.push(axios.get(url));
      });
      Promise.all(urlPromise)
        .then((values) => {
          values.forEach((ship) => this.starships.push(ship.data.name));
        })
        .catch((err) => {
          throw err;
        });
    }
  },
};
</script>


<style lang="scss" scoped>
.link-page {
  color: red;
}
.md-card {
  width: 600px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.content {
  height: 200px;
}
.card-content {
  font-weight: bold;
}
.noShip {
  width: 200px;
  border: 1px, solid, black;
  border-radius: 2px;
  padding-left: 4px;
  background-color: lightseagreen;
  color: white;
  font-weight: bold;
}
.personShips {
  border: 1px, solid, grey;
  font-weight: bold;
  color: rgb(141, 46, 204);
  background-color: rgb(54, 214, 219);
  border-radius: 5px;
  margin: 3px;
  padding-left: 10px;
}
</style>
