<template>
	<div>
		<div class="product" :class="[data.css.fillType,data.css.listStyle]">
			<div v-for="(item,i) in data.items" :key="i" class="item">
				<img class="img" :src="item.imgsrc" alt="">
				<div class="info">
					<h5 class="title">{{item.title}}</h5>
					<h6 class="price">￥{{item.price}}</h6>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		data:{
			type:Object,
		}
	},
}
</script>

<style lang="scss" scoped>

.product{
	display: flex;
	flex-wrap:wrap;
	text-align: center;
	justify-content: flex-start;
	.item{
		margin-bottom: 5px;
		padding:0 5px;
		box-sizing: border-box;
		img{
			width: 100%;
		}
		h6{
			color:red;
			font-size:14px;
		}
	}
	.onspace{
		padding:0;
	}
}
.nospace{
	.item{
		padding:0;
	}
}
.double{
	:nth-child(n){
		flex-basis: 50%;
	}
}
.triple{
	:nth-child(n){
		flex-basis: 33.33%;
	}
}
.onebig{
	:first-child{
		flex-basis: 100%;
	}
	:not(:first-child){
		flex-basis:50%;
	}
}
.list{
	padding:10px 20px;
	.item{
		flex-basis: 100%;
		padding:0 70% 0 0;
		position: relative;
		.info{
			position: absolute;
			left:35%;
			top:0;
			bottom:0;
			right:0;
			padding:10px;
			text-align: left;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}
}

</style>
