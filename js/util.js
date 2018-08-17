/**
 * Created by Kai on 2017/4/10.
 */

var util={
    numberToUppercase: function(num){
            num = Number(num);
            var upperCaseNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿'];
            var length = String(num).length;
            if (length == 1) {
                return upperCaseNumber[num];
            } else if (length == 2) {
                if (num == 10) {
                    return upperCaseNumber[num];
                } else if (num > 10 && num < 20) {
                    return '十' + upperCaseNumber[String(num).charAt(1)];
                } else {
                    return upperCaseNumber[String(num).charAt(0)] + '十' + upperCaseNumber[String(num).charAt(1)].replace('零', '');
                }
            }

    },
    loadAudio:function(src, callback) {
        var audio = new Audio(src);
        audio.onloadedmetadata = callback;
        audio.src = src;
    },
    bindErge_Ci:function(dataZhi,dataCi){
            var zi = "";
            for(var i = 0; i < dataZhi.length; i++){
                if(dataZhi[i].ju_kai!==""){//句子开头
                    zi += "<span class='sentence'>"+dataZhi[i].zi;
                }else if(dataZhi[i].ju_jie!==""){//句子结尾
                    zi +=dataZhi[i].zi+"</span>";
                }else{
                    zi +=dataZhi[i].zi;
                }
            }
        for(var i = 0; i < dataCi.length; i++){
            var ci = dataCi[i].ci;
            console.log(ci)
                if(zi.indexOf(ci)!==-1) {
                    var words = "<span class=shengCi index=" + i + ">" + ci + "</span>";
                    zi = zi.replace(ci, words);
                }
        }
        $("#main").append(zi);
        $(".sentence").eq(0).css("margin-right","25px");
         },
    bindErge_Zhi:function(data,dataShengzi){
        var zi = "";
        var version=window.localStorage.getItem("version");
        if(version!=="infant"){
            if(dataShengzi){
                for(var i=0;i<dataShengzi.length;i++){
                    var theZi=dataShengzi[i].zi;
                    for(var j = 0;j < data.length; j++){
                        if(data[j].zi.split('')[0]==theZi){
                            data[j].y_n='y';
                            break;
                        }
                    }
                }
            }
        }

        for(var i = 0; i < data.length; i++){
                if(data[i].y_n=='y'&&data[i].ju_kai!=="") { //生字、句子开头
                    zi += "<span class='sentence'><i data-id='" + i + "'class='newWords ju_kai' ju_kai='"+data[i].ju_kai+"'>" + data[i].zi + "</i>";
                }else if(data[i].y_n=='y'&&data[i].ju_jie!==""){//生字、句子结尾
                    zi += "<i data-id='" + i + "'class='newWords ju_jie' ju_jie='"+data[i].ju_jie+"'>" + data[i].zi + "</i><em class='begin' onclick='on($(this))'><img src='../img/stop.png'/></em><em style='display: none' class='stop' onclick='off($(this))'><img src='../img/begin.png'/></em></span>";
                }else if(data[i].ju_kai!==""){//句子开头
                    zi += "<span class='sentence'><i data-id='" + i +"'class='ju_kai' ju_kai='"+data[i].ju_kai+"'>" + data[i].zi + "</i>"
                }else if(data[i].ju_jie!==""){//句子结尾
                    zi += "<i data-id='" + i +"'class='ju_jie' ju_jie='"+data[i].ju_jie+"'>" + data[i].zi + "</i><em class='begin' onclick='on($(this))'><img src='../img/stop.png'/></em><em style='display: none' class='stop' onclick='off($(this))'><img src='../img/begin.png'/></em></span>";
                }else if(data[i].y_n=='y'){//生字
                    zi += "<i data-id='"+i+"'class='newWords'>"+data[i].zi+"</i>";
                }else{
                    zi += "<i data-id='" + i +"'>" + data[i].zi + "</i>";
                }
            }
            $("#main").append(zi);
             $(".sentence").eq(0).css("margin-right","25px");
            if(dataShengzi){
                for(var i=0;i<dataShengzi.length;i++){
                    var theZi=dataShengzi[i].zi;
                    $("#main i").each(function(){
                        if(!$(this).attr('index')&&$(this).attr('class')=="newWords"){
                            if($(this).html().split('')[0]==theZi||$(this).html().split('')[1]==theZi){
                                $(this).attr('index',i)
                            }
                        }
                    })
                }
            }
         },
    bindErge_Zhi_ren:function(data,dataShengzi){
        var zi = "";
        var version=window.localStorage.getItem("version");
        if(version!=="infant"){
            if(dataShengzi){
                for(var i=0;i<dataShengzi.length;i++){
                    var theZi=dataShengzi[i].zi;
                    for(var j = 0;j < data.length; j++){
                        if(data[j].zi.split('')[0]==theZi){
                            data[j].y_n='y';
                            break;
                        }
                    }
                }
            }
        }

        for(var i = 0; i < data.length; i++){
                if(data[i].y_n=='y'&&data[i].ju_kai!=="") { //生字、句子开头
                    zi += "<span class='sentence'><i data-id='" + i + "'class='newWords ju_kai' ju_kai='"+data[i].ju_kai+"'>" + data[i].zi + "</i>";
                }else if(data[i].y_n=='y'&&data[i].ju_jie!==""){//生字、句子结尾
                    zi += "<i data-id='" + i + "'class='newWords ju_jie' ju_jie='"+data[i].ju_jie+"'>" + data[i].zi + "</i></span>";
                }else if(data[i].ju_kai!==""){//句子开头
                    zi += "<span class='sentence'><i data-id='" + i +"'class='ju_kai' ju_kai='"+data[i].ju_kai+"'>" + data[i].zi + "</i>"
                }else if(data[i].ju_jie!==""){//句子结尾
                    zi += "<i data-id='" + i +"'class='ju_jie' ju_jie='"+data[i].ju_jie+"'>" + data[i].zi + "</i></span>";
                }else if(data[i].y_n=='y'){//生字
                    zi += "<i data-id='"+i+"'class='newWords'>"+data[i].zi+"</i>";
                }else{
                    zi += "<i data-id='" + i +"'>" + data[i].zi + "</i>";
                }
            }
            $("#main").append(zi);
            $(".sentence").eq(0).css("margin-right","25px");
            if(dataShengzi){
                for(var i=0;i<dataShengzi.length;i++){
                    var theZi=dataShengzi[i].zi;
                    $("#main i").each(function(){
                        if(!$(this).attr('index')&&$(this).attr('class')&&$(this).attr('class').indexOf("newWords")>-1){
                            if($(this).html().split('')[0]==theZi||$(this).html().split('')[1]==theZi){
                                $(this).attr('index',i)
                            }
                        }
                    })
                }
            }
         },
    bingZi:function(data){
        var letters = "";//将每个字当做一个元素添加到DOM中
        for(var i = 0; i < data.length; i++){
            var zi = data[i].zi;
            if(data[i].zi/*&&data[i].lei=="1"*/&&((i+1)%5)==0){
                letters+= "<i class='marT' data-id="+i+">"+zi+"</i>";
            }else if(data[i].zi/*&&data[i].lei=="1"*/){
                letters+= "<i data-id="+i+">"+zi+"</i>";
            }
        }
        $(".read_list2").append(letters);
    },
    bingCi:function(data){
        var words = "";//将每个字当做一个元素添加到DOM中
        for(var i = 0; i < data.length; i++){
            var ci = data[i].ci;
            if(i==0){
                var firstCiArr=ci.split("");
                var firstCiStr='';
                /*firstCiArr.forEach(function(item,index){
                    firstCiStr+='<p>'+item+'</p>'
                });*/
                var theWidth=firstCiArr.length*200+'px';
                $(".temsCont").css("width",theWidth);

                words+= "<p class='ciLine'><i class='marT' data-id="+i+">"+ci+"</i>";
            }else if(i==data.length-1){
                words+= "<i data-id="+i+">"+ci+"</i></p>";
            }else if(data[i].ci&&((i+1)%3)==0){
                words+= "<i data-id="+i+">"+ci+"</i></p><p class='ciLine'>";
            }else if(data[i].zi){
                words+= "<i data-id="+i+">"+ci+"</i>";
            }
        }
        $(".temsCont").html(firstCiStr);

        $(".read_list").append(words);

        $(".ciLine").eq(2).append('<i></i>')
    },
    //当mp3播放的时候，根据读音使字变色
    readAll:function( audio, curData, element ){
    var top=0;
    var wordBox = $(element);
    var readInterval;
    clearInterval(readInterval);
    $("#main .sentence").removeClass("theSent");
    readInterval = setInterval(function(){
        curData.forEach(function(item,index){
            var kai = parseFloat(item.zi_kai);
            var jie = parseFloat(item.zi_jie);
            if(audio.currentTime >= kai && audio.currentTime <=jie){
                wordBox.find("i").removeClass("theFont");
                wordBox.find("i").eq(index).addClass("theFont");
              //console.log(wordBox.find("i").eq(index).offset().top);
                if(wordBox.find("i").eq(index).offset().top>450&&window.document.body.offsetHeight<870&&$('.sentence').length>=7){
                    top+=0.1;
                    $('.middleIn').scrollTop(top);
                }
            }
        });
        if(audio.ended){//音频播放完毕，停止计时器
            clearInterval(readInterval);
            $('.middleIn').scrollTop(0);
            wordBox.find("i").removeClass("theFont");
            $(".bofang span").text("跟读儿歌");
        }
    });
},
    //生成随机数组，且不重复
    randoms:function (count){
    var originalArray=new Array;//原数组
    //给原数组originalArray赋值
    for (var i=0;i<count;i++){
        originalArray[i]=i;
    }
    originalArray.sort(function(){ return 0.5 - Math.random(); });
    return originalArray;
},
    //点击之后随机变色的方法
    randomColor:function(arrayIndex,theObj,theClass,sentMaxNum,type){
        //console.log(arrayIndex);
        theObj.removeClass(theClass);
        theObj.eq(randomArray[arrayIndex]).addClass(theClass);
        theObj.eq(randomArray[arrayIndex]).find(theObj).addClass(theClass);
/*
        setTimeout(function(){
            theObj.eq(randomArray[arrayIndex]).removeClass(theClass);
            theObj.eq(randomArray[arrayIndex]).find(theObj).removeClass(theClass);
        },1500);
*/
        if(type == "sentence"){
            var sentNum=theObj.eq(randomArray[arrayIndex]).index();
        }else{
            var sentNum=theObj.eq(randomArray[arrayIndex]).parent().index();
        }
        if(sentNum>=sentMaxNum&&/*window.document.body.offsetHeight<870&&*/$('.sentence').length>=7){
            $('.middleIn').scrollTop(500);
        }else{
            $('.middleIn').scrollTop(0);
        }
}
};
