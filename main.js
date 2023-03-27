function omikujihyouji(){
    var omikuji = new Array("大吉","末吉","吉","中吉","小吉","凶");

    var number1 = Math.random(); //0より上で1までのランダム
    var number2 = number1 * 6; //3倍するので0より上で3未満の数字になる
    var number = Math.floor(number2); //切り捨てるので0,1,2のどれかになる
    var message = omikuji[number]; //0,1,2番目のおみくじを表示

    var object1 = document.getElementById("omikuji"); //取得
    object1.innerText = message; //書き換え
}

function itemhyouji(){
    var item = new Array("付箋","お湯","ボールペン","蛍光ペン","PC","鍵","石鹸","椅子","修正液","切手","タオル","延長コード","シャツの襟","外付けHDD","情報カード","問題集","靴下","ロボット","時計","観葉植物","きっぷ","ボタン","冷蔵庫","説明書","カトラリー")

    var number3 = Math.random();
    var number4 = number3 * 25;
    var number5 = Math.floor(number4)
    var message = item[number5];

    var object2 = document.getElementById("item"); //取得
    object2.innerText = message; //書き換え
}