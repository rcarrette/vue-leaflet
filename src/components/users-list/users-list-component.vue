<template>
    <ul>
        <li v-for="user in users" :key="user.name" class="user-card" v-on:click="onUserSelected(user)">
            <b>{{ user.name }}</b> aka. <i>{{ user.username }}</i>
        </li>
    </ul>
</template>

<style src="./users-list-component.css"></style>
<script src="./users-list-component.js"></script>