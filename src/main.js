// モーダルウィンドウに表示するデータ一覧
const worksArray = {
  teaoclock: {
    name: "Tea o'clock",
    imges_number: 5,
    discription: "aaahogeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    dev_env: "ruby Rails",
    production_url: "http://18.176.36.229/",
    github_url: "https://github.com/NaohiroMitsukuchi/teaoclock"
  },
  
  teaoclocker: {
    name: "Tea o'clocker",
    imges_number: 5,
    discription: "111hogeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    dev_env: "ruby Rails",
    production_url: "#",
    github_url: "#"
  },
  teaoclockist: {
    name: "Tea o'clockist",
    imges_number: 5,
    discription: "222hogeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    dev_env: "ruby Rails",
    production_url: "#",
    github_url: "#"
  }
}

// モーダウウィンドウの要素取得
const modal = document.getElementById('modal_layer');
const btnClose = document.getElementsByClassName('modal_close')[0];
const work_images = document.getElementsByClassName('work_images')[0];
const exibit_image = document.getElementsByClassName('exibit_image')[0];
const work_discription = document.getElementsByClassName('work_discription')[0];
const production_url = document.getElementById('production_url');
const github_url = document.getElementById('github_url');

// モーダルウィンドウを開く関数
function modalOpen(){
  modal.style.display = 'block';
}
// モーダル内にworkの説明文、開発環境、urlを配置する関数
function work_discription_build(name, discription, dev_env, production, github){
  work_discription.children[0].innerHTML = name
  work_discription.children[1].innerHTML = discription
  work_discription.children[3].innerHTML = dev_env
  production_url.setAttribute('href', `${production}`)
  github_url.setAttribute('href', `${github}`)
}

// モーダル内に画像を配置する関数
function work_images_build(workId, imges_number){
  let exibit_img_element = document.createElement('img');
  exibit_img_element.src = `img/works/${workId}/${workId}1.png`;
  exibit_img_element.id = 'exibit_image';
  exibit_image.append(exibit_img_element);
  for(let i = 0; i < imges_number; i++){
    let img_element = document.createElement('img');
    img_element.src = `img/works/${workId}/${workId}${i+1}.png`;
    img_element.className = 'mini_image';
    work_images.append(img_element);
  }
}

// worksクリック時の挙動
document.addEventListener('DOMContentLoaded', function(){
  const btnOpen = document.getElementsByClassName('modal_open_btn');

  for(let i = 0; i < btnOpen.length; i++ ){
    btnOpen[i].addEventListener('click', function(){
      let workId = btnOpen[i].getAttribute('id');
      let workArray = worksArray[workId];
      work_discription_build(workArray.name, workArray.discription, workArray.dev_env, workArray.production_url, workArray.github_url);
      work_images_build(workId, workArray.imges_number);
      modalOpen();
    })
  }
})

// モーダルウィンドウ閉じた際にモーダル内の要素を削除する関数
function rmvElement(){
  work_images.innerHTML = "";
  exibit_image.innerHTML = "";
}

// モーダルウィンドウを閉じる関数
function modalClose(){
  modal.style.display = 'none';
  rmvElement();
}
function outsideClose(e){
  if(e.target == modal){
    modalClose();
    rmvElement();
  }
}

// モーダルを閉じる挙動
btnClose.addEventListener('click', modalClose);
addEventListener('click', outsideClose);


// // モーダルウィンドウ内の画像入れ替え機能
//   function changeImage(){
    
//   }
