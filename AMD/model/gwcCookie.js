//购物车数量增加模块;
define(["jquery"],function(){
    // console.log($);
    //gwcCookie功能;
    function gwcCookie(){
    }
    gwcCookie.prototype = {
        constructor:gwcCookie,
        init(selector,value_selector){
            this.btn = $(selector)
            if(!this.btn) return ;
            this.btn.on("click.toggle",$.proxy(this.toggle,this))

            if(value_selector){
                this.value = $(value_selector);
                this.btn.on("click.writeEle",$.proxy(this.writeEle,this))
            }   
        }
    }
    return new gwcCookie();
})