<template>
    <div class="flex flex-wrap gap-8 dark:bg-slate-800 py-20 justify-center ">
    
        

            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form @submit.prevent="updateUser(index)" class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Change User</h5>
                    <div>
                        <input type="file"   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email" />
                    </div>
                    <div>
                        <input v-model="email" type="email"   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email" required />
                    </div>
                    <div>
                        <input v-model="name" type="text" placeholder="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <input v-model="phone" type="text" placeholder="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <input v-model="department" type="text" placeholder="department" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <input v-model="idNo" type="text" placeholder="ID No" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                     
                  
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Update User</button>
                    
                    
                </form>
            </div>



        <div v-for="(user, index) in users" :key="index" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <button @click="populate(user.name, user.email, user.department, user.phone, user.idNo, user.image)" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </button>
            <div class="flex flex-col items-center pb-10">
                <img v-if="user.image" class="mt-8 w-40 h-36 mb-3 rounded-full shadow-lg" :src="user.image" alt="Bonnie image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ user.name }}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ user.email }}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">Department - {{ user.department }}</span>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Phone - {{ user.phone }}</a>
                    <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ID - {{ user.idNo }}</a>
                </div>
            </div>
        </div>




    </div>
</template>

<script>
import { QuerySnapshot, collection, doc, getDoc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore';
import db from '@/plugins/firebase'
import { uploadBytesResumable } from 'firebase/storage';
import { update } from 'firebase/database';
import { onUnmounted } from 'vue';


export default {
    setup () {
        

        return {}
    },
    data() {
        return {
            users: [],
            image: "",
            name: "",
            email: "",
            department: "",
            phone: "",
            idNo: "",
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
        async snapDetails() {
            onSnapshot(collection(db, 'users'), (snap) => {
                snap.forEach((doc) => {
                    this.users.push(doc.data())
                })
                console.log(this.users)
            })
        },
        async populate(name, email, department, phone, idNo, image) {
            this.name = name 
            this.email = email
            this.department = department
            this.phone = phone
            this.idNo = idNo 
            this.image = image
        },
        async updateUser() {
            var id = this.email
            const userRef = doc(db, 'users', id)
            await updateDoc(userRef, {
                name: this.name,
                email: this.email,
                department: this.department,
                phone: this.phone,
                idNo: this.idNo,
                image: this.image
            })
            console.log("data successfully changed")
        }
    },
    
    mounted () {
        this.snapDetails();;
    },
}
</script>

<style lang="scss" scoped>

</style>