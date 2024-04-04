<template>
    <div class="flex flex-wrap gap-8 dark:bg-slate-800 py-20">
    

<div class="" v-for="(user, index) in users" :key="index">
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <img v-if="user.image" :src="user.image" alt="" class="rounded-full w-40 h-40">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ user.name }} - {{ user.email }}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">{{ user.phone }} - {{ user.department }} - {{ user.idNo }}</p>
    
    </a>
</div>
    </div>
</template>

<script>
import { QuerySnapshot, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import db from '@/plugins/firebase'
import { uploadBytesResumable } from 'firebase/storage';

export default {
    setup () {
        

        return {}
    },
    data() {
        return {
            users: [],
            image: "",
        }
    },
    methods: {
        async getDetails() {
            try {
                const querySnapshot = await getDocs(collection(db, 'users'));

                querySnapshot.forEach((doc) => {
                    this.users.push(doc.data());
                });
                console.log(this.users)
                return users;
            } catch (error) {
            console.error('Error fetching users: ', error);
            }
        },
    },
    
    mounted () {
        this.getDetails();;
    },
}
</script>

<style lang="scss" scoped>

</style>