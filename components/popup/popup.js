Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    data: {
        showPopup: false,
        animationData: {}
    },
    attached: function(){
        console.log("加载");
    },
    methods:{
      showPopup:function(){
          this.setData({
              showPopup: true
          })
      },
        hidePopup:function(){
            this.setData({
                showPopup: false
            })
        }
    },
    properties: {
        // 弹窗标题
        title: {            // 属性名
            type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
        }
    }
});