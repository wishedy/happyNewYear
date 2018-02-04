var dictiContainer = require("../../components/blesswords/blessWords");
Page({
    data:{
      blessList:[],
        userName:""
    },
    onShareAppMessage: function () {
        return {
            title: '来自萤火虫的新年祝福',
            path: '/page/user?id=123'
        }
    },
    getUserInfo:function(){
        var t = this;
        wx.getUserInfo({
            success: function(res){
                // success
                console.log(res);
                t.setData({
                    userName:res.userInfo.nickName
                })
            },
            fail: function() {
                // fail
                console.log("获取失败！")
            },
            complete: function() {
                // complete
                console.log("获取用户信息完成！")
            }
        })
    },
    onReady:function(){
        //console.log(dicti)
        this.createBless();
        this.getUserInfo();
    },
    createBless:function(){
        function randomNum(minNum,maxNum){
            switch(arguments.length){
                case 1:
                    return parseInt(Math.random()*minNum+1,10);
                    break;
                case 2:
                    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                    break;
                default:
                    return 0;
                    break;
            }
        }
        var arr = [];
        for(var i = 0;i<4;i++){
            arr.push(dictiContainer.dicti[randomNum(i*15,(i+1)*15)])
        }
        this.setData({
            blessList:arr
        });
        return arr;
    }
});