import L from 'leaflet'
import appComponent from '../app/app-component.vue'

export default {
    data() {
        return {
            selectedUser: {}
        }
    },
    mounted() {
        this.initMap()
        this.initEventBusListeners()
    },
    methods: {
        initMap() {
            const mapboxToken = 'pk.eyJ1Ijoicm9yb3ciLCJhIjoiY2puN3NpOTJoMGlxajNwbXNpc3Bsa3JlYiJ9.15MarEm6aXiaAxcyrdtJMA'    //it's the public one. No need to be hidden.

            this.map = L.map('map')

            this.goToLocation([40.730610, -73.935242])

            L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapboxToken}`, {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.satellite',
                accessToken: mapboxToken
            }).addTo(this.map)
        },
        initEventBusListeners() {
            appComponent.eventBus.$on('user-selected', selectedUser => {
                this.selectedUser = selectedUser

                this.goToLocation(this.selectedUser.location, 4, true)
            })
        },
        goToLocation(coordinates, zoomLevel, drawMarker) {
            this.map.setView(coordinates, zoomLevel || 11)

            if (drawMarker) {
                if (!this.userMapMarker)
                    this.userMapMarker = L.marker(coordinates).addTo(this.map)
                else
                    this.userMapMarker.setLatLng(coordinates)
            }
        }
    },
    map: null,
    userMapMarker: null
}