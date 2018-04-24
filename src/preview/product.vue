<template>
	<div>
		<div v-if="data.items.length===0" class="product" :class="[data.css.fillType,data.css.listStyle]">
			<div  v-for="i in 3" :key="i" class="item">
						<div class="img" :style="'background-image:url('+imgsrc+')'">
						</div>
					<div class="info">
						<h5 class="title">此处显示商品名称</h5>
						<h6 class="price">￥999.00</h6>
					</div>
			</div>
		</div>
		<div v-else   class="product" :class="[data.css.fillType,data.css.listStyle]">
			<div  v-for="(item,i) in data.items" :key="i" class="item">
					<div class="img" :style="'background-image:url('+item.imgsrc+')'">
					</div>
				<div class="info">
					<h5 class="title">{{item.name}}</h5>
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
	data(){
		return{
			imgsrc:'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg',
		}
	}
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
		.img{
      flex-basis: 50%;
      position: relative;
      height: 0;
      padding-bottom: 100%;
			background-size:cover;
			background-position: center center;
			background-repeat: no-repeat;
			img{
				width: 100%;
			}
		}
		h5{
			margin:3px;
		}
		h6{
			color:red;
			font-size:14px;
			margin:3px 0;
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
.single{
	:nth-child(n){
		flex-basis: 100%;
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
	:nth-child(n){
		flex-basis: 50%;
	}
	:nth-child(3n+1){
		flex-basis: 100%;
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
