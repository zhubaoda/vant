<style  scoped>
.anyi-uploade-file {
  width: 120px;
  height: 120px;
  border: 1px dashed #e7e7e7;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.anyi-uploade-file .file {
   position: absolute;
   height: 100%;
   width: 100%;
   top: 0;
   left: 0;
   opacity: 0;
   z-index: 99;
   cursor: pointer;
}
.anyi-uploade-file  .no-img-wrap {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}    
.anyi-uploade-file  .no-img-wrap  .tip {
      color: #838383;
      font-size: 28px;
}

.anyi-uploade-file  .progress {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
  .bge-img {
    width: 100%;
    z-index: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
  }
   .bge-img img {
      width: 100%;
    }
  .close {
    position: absolute;
    font-size: 24px;
    color: #ccc;
    top: -10px;
    right: -10px;
    z-index: 99;
    cursor: pointer;
  }
  .close:hover {
    color: red;
  }

.anyi-uploade-file:hover {
  border-color: #409eff;
}
</style>
<template>
  <div class="anyi-uploade-file">
    <input ref="imgInput" @change="previewImg" class="file" type="file" accept="image/png,image/jpeg,image/jpg,image/bmp">
    <div class="no-img-wrap flex center" v-if="showUploadeBtn || isMultShowUploadeBtn">
      <i class="tip el-icon-plus avatar-uploader-icon"></i>
    </div>
    <!-- 进度条 -->
    <div class="progress" v-if="upLoadIng">
    	  121
      <!--<el-progress :width="110" type="circle" :percentage="progressValue"></el-progress>-->
    </div>
    <div class="bge-img" v-show="(imgSrc && showImg) || value">
      <img :src="imgSrc || (value && '/ws_oss_service/storage/file_reader/' + value)">
    </div>
    <!-- 清除图片 -->
    <i v-if="(imgSrc && isClose) || (value && isClose)" @click="close" class="close el-icon-plus el-icon-circle-close-outline"></i>
  </div>
</template>
<script>
import { lrz } from "lrz";
export default {
  data() {
    return {
      imgSrc: null,
      progressValue: 0,
      upLoadIng: false,
      sendData: {}
    };
  },
  props: {
    //是否上传多张图片
    isMult: {
      type: Boolean,
      default: false
    },
    //是否显示关闭图标
    isClose: {
      type: Boolean,
      default: true
    },
    //是否显示背景图片
    showImg: {
      type: Boolean,
      default: true
    },
    value: "",
    maxSize: {
      type: Number,
      default: 10
    },
    compressSize: {
      //图片压缩开始值
      type: Number,
      default: 100
    },
    httpUrl: {
      //图片上传接口
      type: String,
//    default: "/ws_oss_service/storage/file_upload"
      default: "http://111.230.5.165:3000/file/upload"
    },
    formData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    //计算是否显示上传文字按钮
    showUploadeBtn() {
      if (this.value) return false;
      if (this.upLoadIng) return false;
      if (this.imgSrc) return false;
      return true;
    },
    //多张的时候是否显示+号
    isMultShowUploadeBtn() {
      if (this.upLoadIng) return false;
      return this.isMult;
    }
  },
  methods: {
    close() {
      //清除路径 并告诉父元素 我清除了路径 清除 input 的value值 让其可以重复上传一张图
      this.$emit("close", this.sendData);
      this.$emit("input", null);
      this.$refs.imgInput.value = null;
      this.imgSrc = null;
    },
    //预览图片
    previewImg(event) {
      var input = event.target;
      //判断input中有文件 并且第一个文件不为空
      if (input.files && input.files[0]) {
        this.imgSrc = null;
        this.$emit("input", null);

        //限制图片上传大小
        if (input.files[0].size > this.maxSize * 1024 * 1024) {
        	  console.log(1111)
//        this.$message({
//          message: "图片大小在" + this.maxSize + "M以内",
//          type: "warning"
//        });
        } else {
          if (input.files[0].size > this.compressSize * 1024) {
            // lrz 参数文档 https://github.com/think2011/localResizeIMG/wiki/2.-%E5%8F%82%E6%95%B0%E6%96%87%E6%A1%A3
            const that = this;
            // 必须用 window.lrz，不然会报错，我也很无奈
            try {
              window
                .lrz(input.files[0])
                .then(rst => {
                  //是否传入其他参数
                  for (var k in this.formData) {
                    rst.formData.append(k, this.formData[k]);
                  }
                  that.uploadImg(rst.formData);
                })
                .catch(function(err) {
                  input.value = null;
                  console.log(2222)
//                this.$message({
//                  message: "图片压缩异常，请上传图片文件",
//                  type: "warning"
//                });
                });
            } catch (e) {
              input.value = null;
              console.log(3333)
//            this.$message({
//              message: "图片压缩异常，请上传图片文件",
//              type: "warning"
//            });
            }
          } else {
            //以表单的形式上传
            var formData = new FormData();
            
            formData.append("file", input.files[0]);
            //是否传入其他参数
            for (var k in this.formData) {
              formData.append(k, this.formData[k]);
            }
            this.uploadImg(formData);
          }
        }
      }
    },
    //上传图片
    uploadImg(formData) {
      var xhr = new XMLHttpRequest();
      var url = this.httpUrl; //图片上传地址
      xhr.onreadystatechange = res => {
      	console.log(19, xhr.response)
        if (xhr.readyState === 4) {
          this.upLoadIng = false;
          if (xhr.status === 200) {
            var result = JSON.parse(xhr.response);
            if (result.code !== "0") {
            	  console.log(4444)
//            this.$message({
//              message: result.msg,
//              type: "warning"
//            });
            } else {
            	  console.log(8888)
              //获取 上传图片地址
              var url = "/ws_oss_service/storage/file_reader/" + result.data.id;
              this.imgSrc = url;
              this.sendData.id = result.data.id;
              this.sendData.url = url;
              //双向绑定
              this.$emit("input", this.sendData.id);
              //成功后通知父组件
              this.$emit("uploaded", result.data);

              //为上传多张图片做处理
              if (this.isMult) {
                this.imgSrc = "";
                this.sendData.id = "";
                this.sendData.url = "";
                this.$refs.imgInput.value = null;
              }
            }
          }
        }
      };
      xhr.open("POST", url, true);
      //监听上传进度
      xhr.upload.onprogress = event => {
        this.progressValue = event.loaded / event.total * 100;
      };
      xhr.send(formData);
      this.upLoadIng = true;
    }
  }
};
</script>

