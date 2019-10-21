<template>
    <!--<h1>这个页面报名</h1>-->
    <div class="register-border">
        <el-form :model="reg" status-icon :rules="rules" label-width="80px" ref="regForm">
            <el-form-item label="易班帐号" prop="uAccountnumber">
                <el-input v-model="reg.uAccountnumber" autocomplete="off" type="text"
                          prefix-icon="el-icon-user"
                          class="register_input_broder"
                          placeholder="注册帐号"

                          show-word-limit
                          clearable>
                    <!--                                              maxlength="20"-->
                </el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="uPsw">
                <el-input v-model="reg.uPsw" autocomplete="off" type="text"
                          prefix-icon="el-icon-unlock"
                          class="register_input_broder"
                          placeholder="请输入密码"
                          show-password
                          clearable>
                </el-input>
            </el-form-item>
            <el-form-item label="重复密码" prop="uRePsw">
                <el-input v-model="reg.uRePsw" autocomplete="off" type="text"
                          prefix-icon="el-icon-unlock"
                          class="register_input_broder"
                          placeholder="请重复密码"
                          show-password
                          clearable>
                </el-input>
            </el-form-item>
            <el-form-item label="绑定手机" prop="phone">
                <el-input v-model="reg.phone" autocomplete="off" type="text"
                          prefix-icon="el-icon-mobile-phone"
                          class="register_input_broder"
                          placeholder="请输入手机号">

                </el-input>
            </el-form-item>
            <el-form-item label="学生姓名" prop="name">
                <el-input v-model="reg.name" autocomplete="off" type="text"
                          prefix-icon="el-icon-user"
                          class="register_input_broder"
                          placeholder="请输入邮箱">
                </el-input>
            </el-form-item>
            <el-form-item label="学生学号" prop="stuNo">
                <el-input v-model="reg.stuNo" autocomplete="off" type="text"
                          prefix-icon="el-icon-user"
                          class="register_input_broder"
                          placeholder="请输入邮箱">
                </el-input>
            </el-form-item>
            <el-form-item label="参赛照片" prop="stuNo">
                <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="清唱作品" prop="stuNo">
                <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
        </el-form>
        <el-button type="warning" :round="true" class="register_btn" @click="registerUser">注册</el-button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "SignUp",
        data() {
            //重复登录密码校验规则
            const validateRePsw = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.reg.uPsw) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            //校验用户名重复
            /*const validateAcc = (rule, value, callback) => {
                axios.get('api/User/UserAccisUnique', {
                    params: {
                        acc: this.reg.uAccountnumber
                    }
                })
                    .then(res => {
                        // console.log(res.data)
                        if (res.data) {
                            callback();
                        } else {
                            callback(new Error('重复的用户名'))
                        }
                    })
            };*/
            return {
                //注册表单
                reg: {
                    uAccountnumber: '',
                    uPsw: '',
                    uRePsw: '',
                    phone: '',
                    mail: '',
                    name: '',
                    stuNo: '',
                    imageUrl: ''
                },
                rules: {
                    uAccountnumber: [
                        {required: true, message: '请输入易班账号', trigger: 'blur'},
                        // {min: 6, max: 20, message: '帐号长度应在6到20位', trigger: 'blur'},
                        // {pattern: '^[a-zA-Z]\\w{5,19}$', message: '以字母开头 只包含字母 数字和下划线'},
                        // {required: true, validator: validateAcc, trigger: 'blur'}
                    ],
                    uPsw: [
                        {required: true, message: '请输入登录密码', trigger: 'blur'},
                        {min: 6, max: 20, message: '密码长度应在6到20位', trigger: 'blur'},
                        {pattern: '^[a-zA-Z]\\w{5,19}$', message: '以字母开头 只包含字母 数字和下划线'}],
                    uRePsw: [
                        {required: true, validator: validateRePsw, trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, message: '请输入手机号码', trigger: 'blur'},
                        {
                            pattern: '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$',
                            message: '不合法的手机号'
                        }],
                    name: [{required: true, message: '校园歌手可不能没有名字呢', trigger: 'blur'},],
                    stuNo: [{required: true, message: '没有学号可没法确定你是谁', trigger: 'blur'},]
                }
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped>
    .register_input_broder {
        width: 90%;
    }

    .register-border {

        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .register_btn {
        width: 50%;
        font-size: 20px;
        align-self: center;
    }

    .avatar-uploader {
        width: 178px;
        height: 178px;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
</style>
