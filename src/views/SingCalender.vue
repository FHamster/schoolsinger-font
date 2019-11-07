<template>
    <div>
        <el-calendar>
            <template
                    slot="dateCell"
                    slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">
                <span>
                    {{ data.day.split('-').slice(1).join('-') }} <!--{{ data.isSelected ? '✔️' : ''}}-->
                </span>
                    <span></span>
                </p>
            </template>
        </el-calendar>
    </div>
</template>

<script>
    export default {
        name: "SingCalender",
        data() {
            return {
                value: new Date()
            }
        }
    }
</script>

<style scoped>

</style>
