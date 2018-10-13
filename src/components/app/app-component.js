import Vue from '../../../node_modules/vue'
import welcomeComponent from '../welcome/welcome-component.vue'
import usersListComponent from '../users-list/users-list-component.vue'
import mapComponent from '../map/map-component.vue'

export default {
    data() {
        return {}
    },
    components: {
        'welcome-component': welcomeComponent,
        'users-list-component': usersListComponent,
        'map-component': mapComponent
    },
    eventBus: new Vue()
}