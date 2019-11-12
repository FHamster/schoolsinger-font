<template>
    <!--<h1>这个页面报名</h1>-->
    <div v-if="isVis" style="width: 800px" class="MyLabel">
        <div>唱响青春中国梦，红色歌曲展演活动</div>
        <div>有梦你就唱，有胆你就来</div>
        <div style="color: #681630;" @click="isVis=!isVis">马上加入</div>
    </div>
    <div v-else>
        <div class="register-border">

            <el-form :model="reg" status-icon :rules="rules" label-width="80px" ref="regForm" class="flex-setting">
                <div class="flex-setting items">
                    <!--   <el-form-item label="昵称" prop="uAccountnumber">
                           <el-input v-model="reg.uAccountnumber" autocomplete="off" type="text"
                                     prefix-icon="el-icon-user"
                                     class="register_input_broder"
                                     placeholder="请输入易班帐号"
                                     show-word-limit
                                     clearable>
                               &lt;!&ndash;                                              maxlength="20"&ndash;&gt;
                           </el-input>
                       </el-form-item>-->
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
                                action="http://localhost:8081/AvatarUpload/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                            <el-image style="width: 176px; height: 176px"
                                      v-if="picUrl"
                                      fit="fill"
                                      :src="picUrl"></el-image>
                            <i v-else class="el-icon-plus avatar-uploader-icon">
                                <div>jpg格式</div>
                                <div>1:1比例最佳</div>
                                <div>不超过2MB</div>
                            </i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="清唱作品" prop="musicUrl" style="width: 280px">
                        <el-upload
                                class="upload-demo"
                                action="http://localhost:8081/MusicUpload/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :on-success="handleMusicSuccess"
                                :before-remove="beforeRemove"
                                :before-upload="beforeMusicUpload"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="musicFileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">MP3格式，不超过10MB，限制3个</div>
                        </el-upload>
                    </el-form-item>
                </div>
            </el-form>
            <!--            <el-button @click="test">test</el-button>-->
            <el-button type="warning" :round="true" class="register_btn" @click="registerUser">报名</el-button>
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
                picUrl: "",
                musicFileList: [],
                isVis: true,
                //注册表单
                reg: {
                    // uAccountnumber: '',
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
                    /*   uAccountnumber: [
                           {required: true, message: '请输入易班账号', trigger: 'blur'},
                           // {min: 6, max: 20, message: '帐号长度应在6到20位', trigger: 'blur'},
                           // {pattern: '^[a-zA-Z]\\w{5,19}$', message: '以字母开头 只包含字母 数字和下划线'},
                           // {required: true, validator: validateAcc, trigger: 'blur'}
                       ],*/
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
                    ],
                    picUrl: [
                        {required: true, message: '上传宣传照片才能让大家更好的记住你', trigger: 'blur'}
                    ],
                    musicUrl: [
                        {required: true, message: '需要上传作品才能参赛哦', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm() {

                return false;
            },
            registerUser() {
                this.$refs.regForm
                    .validate()
                    .then((res) => {
                        this.musicFileList.forEach(value => {
                            console.log(value.response);

                            axios.post('api/authUsers', {
                                picUrl: this.picUrl,
                                // yibanAcc: this.reg.uAccountnumber,
                                stuNum: this.reg.stuNo,
                                musicUrl: value.response,
                                tel: this.reg.phone,
                                stuName: this.reg.name,
                            }).then(res => {

                            }).catch(err => {
                                this.$message.error('服务器异常');
                            });
                        });
                        this.$message.success('报名成功啦');
                        this.$refs.regForm.resetFields();
                    })
                    .catch(err => {
                        this.$message.error('报名失败，检查一下报名信息吧');
                    });

            },
            //音乐上传部分=====================================
            handleMusicSuccess(res, file, fileList) {
                this.musicFileList = fileList;
                // console.log(res);
                // console.log(file);
                // console.log(fileList);
            },
            handleRemove(file, fileList) {
                this.musicFileList = fileList;
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$message.warning(`${file.name}已经删除`);
            },
            beforeMusicUpload(file) {
                console.log(file);
                const isMP3 = file.type === 'audio/mpeg';
                const isLt2M = file.size / 1024 / 1024 < 100;
                if (!isMP3) {
                    this.$message.error('上传音乐只能是 MP3 格式!');
                }

                if (!isLt2M) {
                    this.$message.error('上传音乐大小不能超过 10MB!');
                }
                return isMP3 && isLt2M;
            },
            //音乐上传部分=====================================
            //头像上传部分=====================================
            handleAvatarSuccess(res, file) {
                // console.log(res);
                // console.log(file);
                // this.imageUrl = URL.createObjectURL(file.raw);
                this.picUrl = res;
            },
            beforeAvatarUpload(file) {
                console.log(file);
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 20;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
            //头像上传部分=====================================
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
        width: 176px;
        height: 176px;
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
