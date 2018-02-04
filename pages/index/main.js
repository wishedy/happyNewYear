Page({
    onReady:function(){
        var t = this;
        this.popup = this.selectComponent("#popup");

    },
    data: {
        inputName: '',
        loading:false,
        errorStr:""
    },
    showLoading:function(){
      this.setData({
          loading:true
      });
    },
    hideLoading:function(){
      this.setData({
          loading:false
      });

    },
    showPopup:function(){
        this.popup.showPopup();
    },
    hidePopup:function(){
        this.popup.hidePopup();
    },
    popupInit:function(txt){
        this.showPopup();
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
            t.popupInit("请输入您的名字");
        }else{
            t.showLoading();
        }
    }
});