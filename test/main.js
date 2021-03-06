let TestVue = Vue.extend({
    el: '#app',
    data() {
        return {
            promotion: {
                columns: [
                    {title: '邀请码', key: 'invitationCode'},
                    {title: '链接', key: 'invitationUrl'},
                    {title: '二维码', key: 'invitationUrl',},
                ]
            },
            data: {
                "id": "2c93808e69dce6160169dd1664a30073",
                "code": "A000170",
                "name": "ceshi-xinchao",
                "shortName": "ceshi-xinchao",
                "mobile": "15711437739",
                "invitationCode": "563586",
                "incomeSourceCode": "invite",
                "doingOrderCount": 0,
                "doneOrderCount": 4,
                "incomeAmount": 30,
                "todoWithdrawAmount": 28,
                "doingWithdrawAmount": 5,
                "doneWithdrawAmount": 0,
                "shopCount": 1,
                "appUrl": "http://localhost:8082",
                "appId": "oAbfqH",
                "appSecret": "i8kJmV",
                "creatorId": "16",
                "createdTime": "2019-04-02 16:07:06",
                "modifiedTime": "2019-04-02 18:23:03",
                "invitationUrl": "https://cjtsh-test.au32.cn?invitationCode=563586",
                "incomeSourceName": "邀请店铺订单",
                "incomeRules": [{
                    "id": "2c93808e69dce6160169dd1664a80074",
                    "channelId": "2c93808e69dce6160169dd1664a30073",
                    "recyclerTypeCode": "bar",
                    "recyclerMinWeight": 0,
                    "ratio": 0.2,
                    "deleted": false,
                    "creatorId": "16",
                    "createdTime": "2019-04-02 16:07:06",
                    "modifiedTime": "2019-04-02 16:07:06",
                    "recyclerTypeName": "金条"
                }, {
                    "id": "2c93808e69dce6160169dd1664aa0075",
                    "channelId": "2c93808e69dce6160169dd1664a30073",
                    "recyclerTypeCode": "bar",
                    "recyclerMinWeight": 50000,
                    "ratio": 0.4,
                    "deleted": false,
                    "creatorId": "16",
                    "createdTime": "2019-04-02 16:07:06",
                    "modifiedTime": "2019-04-02 16:07:06",
                    "recyclerTypeName": "金条"
                }, {
                    "id": "2c93808e69dce6160169dd1664ac0076",
                    "channelId": "2c93808e69dce6160169dd1664a30073",
                    "recyclerTypeCode": "jewelry",
                    "recyclerMinWeight": 0,
                    "ratio": 0.2,
                    "deleted": false,
                    "creatorId": "16",
                    "createdTime": "2019-04-02 16:07:06",
                    "modifiedTime": "2019-04-02 16:07:06",
                    "recyclerTypeName": "首饰"
                }, {
                    "id": "2c93808e69dce6160169dd1664ae0077",
                    "channelId": "2c93808e69dce6160169dd1664a30073",
                    "recyclerTypeCode": "jewelry",
                    "recyclerMinWeight": 50000,
                    "ratio": 0.4,
                    "deleted": false,
                    "creatorId": "16",
                    "createdTime": "2019-04-02 16:07:06",
                    "modifiedTime": "2019-04-02 16:07:06",
                    "recyclerTypeName": "首饰"
                }],
                "logs": [{"id": "2c93808e69dce6160169dd1664b8007a", "moduleCode": "channel", "recordId": "2c93808e69dce6160169dd1664a30073", "operateCode": "add", "description": "添加渠道商", "creatorId": "存金通商户版", "createdTime": "2019-04-02 16:07:06"}],
                "promotions": [{"invitationCode": "563586", "invitationUrl": "https://cjtsh-test.au32.cn?invitationCode=563586"}]
            }
        }
    }
});