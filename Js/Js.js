window.onload = function(){
    var phone = document.getElementById("phone");   //获取手机号
    var info = document.getElementById("info");     //获取验证码
    var password = document.getElementById("password"); //获取密码
    var pass_error = document.getElementById("pass_error"); //获取密码
    // 获取单选按钮
    var radio = document.getElementById("checkbox");
    // 绑定提交按钮
    var submit = document.getElementById("submit");
    submit.onclick = function(){
        var iconfont = document.getElementsByClassName("iconfont");     //获取输入框元素
        var ul_ = document.getElementsByTagName("ul")[0];
        var grade = document.getElementsByClassName("grade");           //获取安全等级元素
        if(radio.checked !== true){
            alert("请勾选协议!");
        }else{
            if(/^\w{6,10}$/.test(password.value)){
                ul_.style.display = "block";
                if ((/[A-z]+/.test(password.value))&&(/[0-9]+/.test(password.value))&&(/_+/.test(password.value))&&(/\w{10}/.test(password.value))) {
                    grade[0].style.display = "block";
                    grade[1].style.display = "block";
                    grade[2].style.display = "block";
                } else if (/\w{10}/.test(password.value)||((/[A-z]+/.test(password.value))&&(/[0-9]+/.test(password.value))&&(/_+/.test(password.value)))) {
                    grade[0].style.display = "block";
                    grade[1].style.display = "block";
                    grade[2].style.display = "none";
                } else{
                    grade[0].style.display = "block";
                    grade[1].style.display = "none";
                    grade[2].style.display = "none";
                }
            }else{
                ul_.style.display = "none";
            }
            if((/^1(\d){10}$/.test(phone.value))&&(/^[0-9]{6}$/.test(info.value))&&(/\w{6,10}$/.test(password.value))&&(/\w{6,10}$/.test(pass_error.value))&&(password.value === pass_error.value)){
                iconfont[0].innerHTML = "手机号格式正确";
                iconfont[1].innerHTML = "验明证正确";
                iconfont[2].innerHTML = "密码格式正确";
                iconfont[3].innerHTML = "密码正确";
                for(var i=0;i<=3;i++){
                    iconfont[i].className = "iconfont iconcheck-item-filling";
                    iconfont[i].style.color = "green";
                }
                alert("恭喜您注册成功！");
            }else{
                if(/^1(\d){10}$/.test(phone.value)){
                    iconfont[0].className = "iconfont iconcheck-item-filling";
                    iconfont[0].innerHTML = "手机号格式正确";
                    iconfont[0].style.color = "green";
                }else{
                    iconfont[0].className = "iconfont icondelete-filling";
                    iconfont[0].innerHTML = "手机号格式错误，请重新输入";
                    iconfont[0].style.color = "red";
                }
                if(/^[0-9]{6}$/.test(info.value)){
                    iconfont[1].className = "iconfont iconcheck-item-filling";
                    iconfont[1].innerHTML = "验明证正确";
                    iconfont[1].style.color = "green";
                }else{
                    iconfont[1].className = "iconfont icondelete-filling";
                    iconfont[1].innerHTML = "验证码错误，请重新输入";
                    iconfont[1].style.color = "red";
                }
                if(/^\w{6,10}$/.test(password.value)){
                    iconfont[2].className = "iconfont iconcheck-item-filling";
                    iconfont[2].innerHTML = "密码格式正确";
                    iconfont[2].style.color = "green";
                }else{
                    iconfont[2].className = "iconfont icondelete-filling";
                    iconfont[2].innerHTML = "密码为任意字母、数字、下划线";
                    iconfont[2].style.color = "red";
                }
                if((password.value === pass_error.value)&&(/^\w{6,10}$/.test(pass_error.value))){
                    iconfont[3].className = "iconfont iconcheck-item-filling";
                    iconfont[3].innerHTML = "密码正确";
                    iconfont[3].style.color = "green";
                }else{
                    iconfont[3].className = "iconfont icondelete-filling";
                    iconfont[3].innerHTML = "密码不一致，请重新输入";
                    iconfont[3].style.color = "red";
                }
            }
        }
    }
}