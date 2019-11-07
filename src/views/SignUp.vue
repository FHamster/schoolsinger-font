<template>
    <!--<h1>这个页面报名</h1>-->
    <div v-if="isVis" style="width: 800px" class="MyLabel">
        一所位于东京都千代田区的传统高校“音乃木阪学院”，因为入读的学生人数骤减，所以正面临着废校的危机。
        其中有九名少女想到一条妙计——<div style="color: #0ca0e9;" @click="isVis=!isVis">成为偶像</div>
    </div>
    <div v-else>
        <div class="register-border">

            <el-form :model="reg" status-icon :rules="rules" label-width="80px" ref="regForm" class="flex-setting">
                <div class="flex-setting items">
                    <el-form-item label="易班帐号" prop="uAccountnumber">
                        <el-input v-model="reg.uAccountnumber" autocomplete="off" type="text"
                                  prefix-icon="el-icon-user"
                                  class="register_input_broder"
                                  placeholder="请输入易班帐号"
                                  show-word-limit
                                  clearable>
                            <!--                                              maxlength="20"-->
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
                                  placeholder="请输入姓名">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="学生学号" prop="stuNo">
                        <el-input v-model="reg.stuNo" autocomplete="off" type="text"
                                  prefix-icon="el-icon-user"
                                  class="register_input_broder"
                                  placeholder="请输入学号">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="联系邮箱" prop="mail">
                        <el-input v-model="reg.mail" autocomplete="off" type="text"
                                  prefix-icon="el-icon-message"
                                  class="register_input_broder"
                                  placeholder="请输入联系邮箱">
                        </el-input>
                    </el-form-item>

                </div>
                <div class="flex-setting items">
                    <el-form-item label="参赛照片" prop="picUrl">
                        <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                            <img v-if="picUrl" :src="picUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="清唱作品" prop="musicUrl">
                        <el-upload
                                class="avatar-uploader"
                                action="http://localhost:8071/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                            <img v-if="musicUrl" :src="musicUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                </div>
            </el-form>
            <el-button type="warning" :round="true" class="register_btn" @click="registerUser">注册</el-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "SignUp",
        data() {

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
                isVis: true,
                //注册表单
                reg: {
                    uAccountnumber: '',
                    // uPsw: '',
                    // uRePsw: '',
                    phone: '',
                    name: '',
                    stuNo: '',
                    mail: '',
                    musicUrl: '',
                    picUrl: ''
                },
                rules: {
                    uAccountnumber: [
                        {required: true, message: '请输入易班账号', trigger: 'blur'},
                        // {min: 6, max: 20, message: '帐号长度应在6到20位', trigger: 'blur'},
                        // {pattern: '^[a-zA-Z]\\w{5,19}$', message: '以字母开头 只包含字母 数字和下划线'},
                        // {required: true, validator: validateAcc, trigger: 'blur'}
                    ],
                    /* uPsw: [
                         {required: true, message: '请输入登录密码', trigger: 'blur'},
                         {min: 6, max: 20, message: '密码长度应在6到20位', trigger: 'blur'},
                         {pattern: '^[a-zA-Z]\\w{5,19}$', message: '以字母开头 只包含字母 数字和下划线'}],
                     uRePsw: [
                         {required: true, validator: validateRePsw, trigger: 'blur'}
                     ],*/
                    phone: [
                        {required: true, message: '请输入手机号码', trigger: 'blur'},
                        {
                            pattern: '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$',
                            message: '不合法的手机号'
                        }],
                    name: [{required: true, message: '校园歌手可不能没有名字呢', trigger: 'blur'},],
                    stuNo: [{required: true, message: '没有学号可没法确定你是谁', trigger: 'blur'},],
                    mail: [
                        // {required: false, message: '请输入绑定邮箱', trigger: 'blur'},
                        {
                            pattern: '^[a-zA-Z_0-9]{1,}[0-9]{0,}@(([a-zA-z0-9]-*){1,}\\.){1,3}[a-zA-z\\-]{1,}$',
                            message: '不合法的邮箱'
                        }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                return this.$refs[formName].validate()
            },
            registerUser() {
                if (this.submitForm("regForm")) {
                    axios.post('api/authUsers', {
                        picUrl: "",
                        yibanAcc: this.reg.uAccountnumber,
                        stuNum: this.reg.stuNo,
                        musicUrl: "",
                        tel: this.reg.phone,
                        stuName: this.reg.name,
                    }).then(res => {
                        this.$message.success('注册成功啦');
                    }).catch(err => {
                        this.$message.error('服务器异常');
                    });
                } else {
                    this.resetForm("regForm");
                    this.$message.error('客户端异常');
                }
            },
            handleAvatarSuccess(res, file) {
                // this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 20;

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

    .flex-setting {
        display: flex;
    }

    .items {
        flex-direction: column;
        justify-content: space-between;
        margin-left: 8px;
    }

    .MyLabel {
        font-size: 32px;
    }
</style>
