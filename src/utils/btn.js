
export function createObjByBtn(btn) {
	let obj = {};
	switch(btn){
		case '导航栏': obj={
					type: 'navgroup',
					data: {
						template:'default',
						items: [
							{ imgsrc: "https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg", title: '导航一' },
							{ imgsrc: "", title: '' },
							{ imgsrc: "", title: '' },
						]
					}
		};break;
		case '轮播图': obj={
					type: 'swiper',
					data: {
					css:{
						fillType:'nospace',
						listStyle:'double'
					},
						items: [
							{ imgsrc: 'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg', title: '' },
							{ imgsrc: 'http://cdn.iciba.com/news/word/big_20180417b.jpg', title: '' },
							{ imgsrc: 'http://cdn.iciba.com/news/word/big_201804-16b.jpg', title: '' }
						]
					}
		};break;
		case '标题': obj={
				type:'celltitle',
				data:{
					title:'标题',
					subtitle:'子标题',
					islink:true
				}
		};break;
		case '导航条': obj={
					type: 'cell',
					data: {
						left: '',
						center: '',
						right: '',
						islink: true
					}
		};break;
		case '商品': obj={
				type:'product',

				data:{
					css:{
						fillType:'nospace',
						listStyle:'double'
					},
					items:[
						{imgsrc:'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg',
							title:'商品一',
							price:'5.00'},
												{imgsrc:'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg',
							title:'商品二',
							price:'5.00'},
												{imgsrc:'https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg',
							title:'商品三',
							price:'5.00'},
					]
				}
		};break;
		case '留空':obj={
					type: 'spacer',
					data: {
						height: 30,
						color:'#ddd'
					}
		};break;
	}
	return obj;
}