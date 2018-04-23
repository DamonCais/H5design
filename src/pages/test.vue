<template>
	    <div class="slide-box">
        <div class="slide-item"></div>
        <div class="slide-item"></div>
        <div class="slide-item"></div>
        <div class="slide-item"></div>
        <div class="slide-item"></div>
    </div>
</template>

<script>
export default {

}
</script>

    <style lang="scss" scoped>
        .slide-box{
            margin-top: 200px;
            display: -webkit-box;
            overflow-x: scroll;
            -webkit-overflow-scrolling:touch;
        }
        .slide-item{
            width: 200px;
            height: 200px;
            border:1px solid #ccc;
            margin-right: 30px;
        }
    </style>