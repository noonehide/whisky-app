## 接口上传格式说明

```javascript

{
    sdk: {
        version: '1.0.1',
        type: 'js', //js,wx,app
        appid: ''
    },
    user: {
        uuid: 'xxxx',  //自定义或者自动生成
        project:'', // 工程
    },
    env: {
        os: 'ios 11.x.x',
        browser: 'chrome 14.1',
        network: 'wifi'
    },
    event_id: '',
    headers: {
        ua: '',
        referer:''
    },
    event: {
        url: '', //当前url
        title:'',//当前title
        type: '', //ajax,jsError,performance
        params: {

        }
    },
    breadcrumbs: [
        {
            category: "xhr",//ui.click,navigaion
            level: "info",
            message: "Download the Vue Devtools extension for a better development experience:↵https://github.com/vuejs/vue-devtools",
            data: { //xhr才有
                method: "GET"
                status_code: 0
                url: "https://localhost:8080/sockjs-node/info?t=1592828250294"
            },
            navigation: { // navigation才有
                from: '/risk-h5-app/punish#/detail/212222238560820',
                to: '/risk-h5-app/punish#/detail/212222238560820'
            }
            timestamp: 1592828250.282
        }
    ],
    exceptions: [{
        type: "ReferenceError",
        value: "b is not defined",
        stacktrace: {
            frames: [
                {
                    colno: 6417,
                    filename: "https://b.yzcdn.cn/libs/ravenjs/raven-3.17.0.min.js",
                    function: "d",
                    lineno: 2,
                }
            ]
        }
    }]

}


```
