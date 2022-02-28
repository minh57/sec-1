function soNguyenTo(n){
    let check = true;
 if (n < 2){
        check = false;
    }
    else{
        for (let i = 2; i < n; i++) {
            if (n % i == 0){
                check = false;
                break;
            }
        }
    }
if (check == true){
        return true;
    }
    else{
        return false;
    }
}
 
const btn = document.getElementById("btn")
btn.addEventListener('click',function(){
    let arr = [];
    let a = document.getElementById("st-num").value
      let b = document.getElementById("nd-num").value
      a = parseFloat(a)
      b = parseFloat(b)
    if( a<2 && b<2){
        document.getElementById("result").innerHTML = "Không có số nguyên tố nào trong khoảng"
    }else if(a==2 && b==2){
        document.getElementById("result").innerHTML = "Chỉ có 2 là số nguyên tố"
    }else {
        for(let i=a; i<=b; i++){
            if(soNguyenTo(i)==true){
                arr.push(i);
            }
        }
        document.getElementById('result').innerHTML = "Các số nguyên tố là" +arr.join(" ");
    }
})