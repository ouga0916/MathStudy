//変数の宣言
//１つ目の式
let x = 0; //x
let y = 0; //y
let ctx = 0; //xの係数
let cty = 0; //yの係数

//２つ目の式
let _ctx = 0; //xの係数
let _cty = 0; //yの係数

//ユーザー情報
let user = [];
MakeQ();

//正答率etc.
let qNum = 0; //問題数
let answerRate = 0; //正答率
let crtAnswer = 0; //正解数

//element取得
const ans_x = document.getElementById("ans-x");
const ans_y = document.getElementById("ans-y");
const ansBtn = document.getElementById("check-btn");

//イベントリスナー
ansBtn.addEventListener("click", AnsCheck);

function MakeQ(){
  x = Random(-5,5);
  y = Random(-5,5);
  ctx = Random(-5,5);
  cty = Random(-5,5);
  _ctx = Random(-5,5);
  _cty = Random(-5,5);
  while(ctx * _cty - cty * _ctx === 0){
    _ctx = Random(-5,5);
    _cty = Random(-5,5);
}
  let UIx = FormatTerm(ctx,"x");
  let UIy = FormatTerm(cty,"y");
  let _UIx = FormatTerm(_ctx,"x");
  let _UIy = FormatTerm(_cty,"y");

  console.log(ctx + "x + " + cty + "y = " + (ctx * x + cty * y));
  console.log(_ctx + "x + " + _cty + "y = " + (_ctx * x + _cty * y));

  document.getElementById("eq1").textContent = (UIx + " " + UIy + " = " + (ctx * x + cty * y));
  document.getElementById("eq2").textContent = (_UIx + " " + _UIy + " = " + (_ctx * x + _cty * y));
}

function FormatTerm(chef, variable){
    if (variable == "x"){
        if(chef === 1) return variable;
        if(chef === -1) return "-" + variable;
        return chef + variable;
    }else{
        if(chef === 1) return "+ " + variable;
        if(chef === -1) return "- " + variable;
        if(chef < 0) return "- " + Math.abs(chef) + variable;
      return "+ " + chef + variable;
    }
}

function Random(min,max){
  let num = 0;
  while(num === 0){
    num = Math.floor(Math.random () * (max - min + 1)) + min;
  }
  return num;
}

function AnsCheck(){
        if (Number(ans_x.value) === x && Number(ans_y.value) === y){
            alert("正解です！");
            NextQ(true);
        }else{
            alert("不正解！\nx = " + x + ",y = " + y);
            NextQ(false);
        }
}

function NextQ(crt){
    ans_x.value = 0;
    ans_y.value = 0;
    qNum++;
    if(crt) crtAnswer++;
    answerRate = Math.floor(crtAnswer / qNum * 100);

    document.getElementById("total-cnt").textContent = qNum;
    document.getElementById("correct-cnt").textContent = crtAnswer;
    document.getElementById("accuracy").textContent = answerRate + "%";

    MakeQ();
}
