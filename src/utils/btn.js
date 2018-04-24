export function createObjByBtn(btn) {
    let obj = {};
    switch (btn) {
        case '导航栏':
            obj = {
                type: 'navgroup',
                template: 'image-text',
                items: [{
                        image: {
                            url: "https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg"
                        },
                        title: {
                            zh: "文本标题",
                            en: "English Title"
                        }
                    },
                    {
                        image: {
                            url: "https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg"
                        },
                        title: {
                            zh: "文本标题",
                            en: "English Title"
                        }
                    },
                    {
                        image: {
                            url: "https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-assets-1/images/06c55e8e-4e21-4a63-940f-9f1f5332538e-medium.jpg"
                        },
                        title: {
                            zh: "文本标题",
                            en: "English Title"
                        }
                    },
                ]

            };
            break;
        case '轮播图':
            obj = {
                type: 'banner',
                template: "swiper",
                items: [{
                    image: {
                        url: 'http://cdn.iciba.com/news/word/big_20180417b.jpg'
                    },
                    title: ''
                }, ]

            };
            break;
        case '标题':
            obj = {
                type: 'title',
                template: 'left',

                items: [{
                    title: {
                        zh: "文本标题",
                        en: "English Title"
                    },
                    subtitle: {
                        zh: "文本副标题",
                        en: "English Subtitle"
                    },
                    linkType: "product",
                    linkId: "...object-id..."
                }]


            };
            break;
        case '导航条':
            obj = {
                type: 'cell',
                data: {
                    left: '',
                    center: '',
                    right: '',
                    islink: true
                }
            };
            break;
        case '商品':
            obj = {
                type: 'productgroup',
                template: 'double',
                source: 'product',
                items: []
            };
            break;
        case '留空':
            obj = {
                type: 'spacer',

                height: 30,
                color: '#ddd'
            };
            break;
    }
    return obj;
}