Page({
    onReady:function(){
     console.log("加载出来");

    },
    data: {
        inputName: '',
        loading:false,
        errorDes:true,
        errorStr:""
    },
    popup:function(txt){
        this.setData({
            errorStr: txt
        })
    },
    nameInput:function(e){
        this.setData({
            inputName: e.detail.value
        })
    },
    createMyDes:function(){
        var t = this;
        if(t.data.inputName.length){
            t.popup("请输入您的名字");
        }else{

        }
    }
});