import appComponent from '../app/app-component.vue'

export default {
    data() {
        return {
            selectedUser: {}
        }
    },
    mounted() {
        appComponent.eventBus.$on('onUserSelected', selectedUser => {
            this.selectedUser = selectedUser
        })
    }
}