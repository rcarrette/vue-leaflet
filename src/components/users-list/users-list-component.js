import appComponent from '../app/app-component.vue'

//in a normal project, this should be in a dedicated service and using fetch/axios async.
//here, I started using Browserify instead of Webpack and then realised that Browserify doesn't support async... So, as this is a Vue training, I make it synchronous using the old data loading method.

//TODO use dedicated service + webpack
const getUsers = () => {
    var request = new XMLHttpRequest()

    request.open('GET', 'https://jsonplaceholder.typicode.com/users', false)
    request.send(null)

    if (request.status === 200) {
        var users = JSON.parse(request.response)

        return users.map(user => {
            return {
                name: user.name,
                username: user.username,
                location: [parseInt(user.address.geo.lat), parseInt(user.address.geo.lng)]
            }
        })
    }
}

export default {
    data() {
        return {
            users: getUsers()
        }
    },
    methods: {
        onUserSelected: (selectedUser) => appComponent.eventBus.$emit('user-selected', selectedUser)
    }
}