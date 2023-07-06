// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let b1 = document.querySelector('button#kaitou');
b1.addEventListener('click', hantei);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// hantei();


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei(event) {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="suuji"]')
  let yoso = i.value;
  
  let b1 = event.target;
  // let p1 = document.createElement('p');
  // p1.setAttribute('span','kaisu');
  // b1.insertAdjacentElement('afterend', p1);
  
  // kotae と yoso が一致するかどうか調べて結果を出力
  kaisu++;
  if(kaisu>3){
    let p = document.querySelectorAll('p');
    p[1].remove();
    let result = document.querySelector('p#result');
    result.textContent = '答えは'+ kotae+' でした．すでにゲームは終わっています';

  }else{
    let kaisuH = document.querySelector('span#kaisu');
    kaisuH.textContent =kaisu;
    let answerH = document.querySelector('span#answer');
    answerH.textContent = yoso;

    if(kotae===yoso){
      let result = document.querySelector('p#result');
      result.textContent = '正解です．おめでとう!';

    }else if(kotae>=yoso){
      let result = document.querySelector('p#result');
      result.textContent = 'まちがい．答えはもっと大きいですよ';

    }else{
      let result = document.querySelector('p#result');
      result.textContent = 'まちがい．答えはもっと小さいですよ';

    }
  }
  
}