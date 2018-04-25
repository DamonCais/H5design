export function createObjByBtn(btn) {
    let obj = {};
    switch (btn) {
        case '导航栏':
            obj = {
                type: 'navgroup',
                template: 'image-text',
                items: [{
                        image: {
                            url: "https://img.yzcdn.cn/public_files/2018/01/30/585dae8447d80013ef9344adc973c6ee.png?imageView2/2/w/520/h/0/q/75/format/webp"
                        },
                        title: {
                            zh: "文本标题",
                            en: "English Title"
                        }
                    },
                    {
                        image: {
                            url: "https://img.yzcdn.cn/public_files/2018/01/30/585dae8447d80013ef9344adc973c6ee.png?imageView2/2/w/520/h/0/q/75/format/webp"
                        },
                        title: {
                            zh: "文本标题",
                            en: "English Title"
                        }
                    },
                    {
                        image: {
                            url: "https://img.yzcdn.cn/public_files/2018/01/30/585dae8447d80013ef9344adc973c6ee.png?imageView2/2/w/520/h/0/q/75/format/webp"
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
                        url: 'https://img.yzcdn.cn/public_files/2018/01/30/585dae8447d80013ef9344adc973c6ee.png?imageView2/2/w/520/h/0/q/75/format/webp'
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