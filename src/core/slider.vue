<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide style="height:100%" v-for="item,index in items" :key="index">
								<div>
                    <img :src="item.imgsrc" alt="">
                    <i >{{item.title}}</i>
								</div>
            </swiper-slide>
            <section class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        options: {
            type: Object,
            default() {
                return {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
										paginationClickable: true, 
                    notNextTick: false,
                }
            },
        },
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
    methods:{
        img:function(ext){
            if(ext){
                let e = ext;
                let s = `../../static/imgs/${e}`;
                return s;
            }else{
                return `../../asset/logo.png`
            }
        },
        path:function(id){
            let p = '/resource/'+id;
            let to={
                path:p,
            }
            return to;
        },
    },
    filters:{
        shortTitle:function(val){
            let reg=/《.*》/;
            return val.match(reg)[0].slice(1,-1);
        }
    }
}
</script>

<style lang="css">
/* D:\JDdemo\jd\node_modules\swiper\dist\css\swiper.css */
  @import "swiper/dist/css/swiper.css";

</style>
