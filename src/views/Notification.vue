<template>
    <div style="width: 1080px">
        <el-collapse v-model="activeNames" accordion @change="handleChange">
            <div :key="it.id" v-for="it in NotificationList">
                <el-collapse-item :title="it.title+'  '+it.time" :name="it.id">
                    <div>{{it.content}}</div>
                </el-collapse-item>
            </div>
        </el-collapse>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Notification",
        data() {
            return {
                activeNames: ['1'],
                NotificationList: []
            };
        },

        mounted() {
            this.getNotification()
        },

        methods: {
            getNotification() {
                axios.get("/api/notifications", {
                    params: {
                        page: 0,
                        size: 100,
                        sort: "time,desc"
                    }
                }).then(res => {
                    console.log(res.data._embedded.notifications);
                    this.NotificationList = res.data._embedded.notifications;
                });
            },

            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped>

</style>
