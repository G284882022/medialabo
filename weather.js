let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log('緯度: '+data.coord.lon);
console.log('経度: '+data.coord.lat);
console.log('天気: '+data.weather[0].description);
console.log('最低気温: '+data.main.temp_max);
console.log('最高気温: '+data.main.temp_min);
console.log('湿度: '+data.main.humidity);
console.log('風速: '+data.wind.speed);
console.log('風向: '+data.wind.deg);
console.log('都市名: '+data.name);

//hyoujiボタンが押された時のイベントハンドラ
let b1 = document.querySelector('button#hyouji');
b1.addEventListener('click',B1);


//表示ボタンが押された時の処理
function B1(){
  let i = document.querySelector('input[name="kuni"]')
  let kunimei = i.value;
  console.log(kunimei);
}

//ここから下はHTMLを書き換えるJS
let div = document.querySelector('div#result');
//CSSの設定を削除したかったができなかった
// div.style.borderr='';
// div.style.backgroundColor='';
// div.style.margin='';
// div.style.padding='';
// div.style.color='';

let h1 = document.createElement('h1'); 
h1.textContent='世界の天気（検索結果1件）';
div.insertAdjacentElement('afterend', h1);

div.remove();

let divL =document.createElement('div');
divL.textContent='緯度: '+data.coord.lon;
h1.insertAdjacentElement('afterend', divL);

let pL =document.createElement('p');
pL.textContent='経度: '+data.coord.lat;
divL.insertAdjacentElement('beforeend', pL);

let divW =document.createElement('div');
divW.textContent='天気: '+data.weather[0].description;
divL.insertAdjacentElement('afterend', divW);

let divT =document.createElement('div');
divT.setAttribute('class','T');         //ここ以外クラスの指定をしていないから必要になったら適宜
let pLT =document.createElement('p');
pLT.textContent='最低気温: '+data.main.temp_max;
divT.insertAdjacentElement('beforeend', pLT);
let pHT =document.createElement('p');
pHT.textContent='最高気温: '+data.main.temp_min;
divT.insertAdjacentElement('beforeend', pHT);
divW.insertAdjacentElement('afterend', divT);

let divH =document.createElement('div');
divH.textContent='湿度: '+data.main.humidity;
divT.insertAdjacentElement('afterend', divH);

let divWind =document.createElement('div');
let pWs =document.createElement('p');
pWs.textContent='風速: '+data.wind.speed;
divWind.insertAdjacentElement('beforeend', pWs);
let pWd =document.createElement('p');
pWd.textContent='風向: '+data.wind.deg;
divWind.insertAdjacentElement('beforeend', pWd);
divH.insertAdjacentElement('afterend', divWind);

let divC =document.createElement('div');
divC.textContent='都市名: '+data.name;
divWind.insertAdjacentElement('afterend', divC);