const welcomeComponent = require('../welcome/welcome-component.vue')
const usersListComponent = require('../users-list/users-list-component.vue')

export default {
    components: {
        'welcome-component': welcomeComponent,
        'users-list-component': usersListComponent
    },
    data() {
        return {}
    }
}