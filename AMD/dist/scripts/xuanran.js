// console.log(json);
function rendering(json,root){
    //根据json去渲染页面;
    var dataList,//商品列表;
        item,    //每一条商品;
        frag,     //文档容器;
        //html结构;
        button,
        div,
        a,
        span,
        img,
        li;

    dataList = json.list;
    // console.log(dataList)
    frag = document.createDocumentFragment();
    for(var i = 0 ; i < dataList.length ; i++){
        item = dataList[i];

        //创建结构;
        li = cE("li");
        a = cE("a");
        
        img = cE("img");
        h3 = cE("h3");
        span = cE("span");
        a2 = cE("a");
        button = cE("button");
       button.className="a2";

        li.appendChild(a);
        a.appendChild(img);
        li.appendChild(h3);
        li.appendChild(span);
        li.appendChild(a2);
        a2.appendChild(button);
       

        // 改变结构内容;
        li.className = "item";
        img.src = item.img;
        h3.innerHTML = item.grende;
       span.innerHTML = item.price;
        button.innerHTML = "加入购物车";   
        button.setAttribute("data-id",item.id);
        // console.log(li);
        frag.appendChild(li);
    }
    // console.log(frag)
    console.log(root)
    root.appendChild(frag);
}

function cE(tag){ //创建元素的方法;
    return document.createElement(tag);
}
var oWrap = document.getElementById("data-list");
rendering(json,oWrap);
