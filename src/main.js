import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping, faDumbbell, faSpa } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPlay, faRightLong, faClock } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faCartShopping)
library.add(faMagnifyingGlass, faRightLong, faClock, faDumbbell, faSpa)
library.add(faPlay)
library.add(faYoutube)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
