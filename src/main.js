// ナビゲーションクリック時の挙動
document.addEventListener('DOMContentLoaded', function(){
  const navContents = document.querySelectorAll('.nav_content');
  for(let i = 0; i < navContents.length; i++){
    navContents[i].addEventListener('click', function(){
      // 現在座標から要素までの距離を取得
      let contentName = navContents[i].getAttribute('id').slice(0, -4);
      let contentOffsetY = document.getElementById(`${contentName}`).getBoundingClientRect().y;
      // ブラウザの現在座標を取得
      let coordY = window.pageYOffset
      window.scrollTo(0, coordY + contentOffsetY - 70);
    })
  }
})

// モーダルウィンドウに関する記述
  // モーダルウィンドウに表示するデータ一覧
  const worksArray = {
    teaoclock: {
      name: "Tea o'clock",
      images_number: 6,
      discription: "紅茶は蒸らし時間が変わるだけで風味や渋さが大きく変わります。茶葉の種類や大きさによっても最適な蒸らす時間が異なります。いつも美味しい紅茶を飲むために、紅茶タイマーアプリを作りました。紅茶を登録でき、飲む人数や飲み方、種類(ティーバック/リーフ)などの条件を入力することで必要な湯量や茶葉の量を算出します。タイマー終了時には、紅茶を淹れた条件や飲んだ感想をメモしログとして登録できます。<br><br>下記のアカウントですでにデータが入った物を確認できます<br>e-mail: sample@sample.com<br>password: sample2022sample",
      dev_env: "Ruby/ Ruby on Rails / MySQL / Github / AWS",
      production_url: "http://18.176.36.229/",
      github_url: "https://github.com/NaohiroMitsukuchi/teaoclock"
    },
    this_site: {
      name: "This Site",
      images_number: 3,
      discription: "このサイトです。誕生月が11月なので秋らしい色を意識しました。これまでjQueryを使った実装が多かったため、このサイトでは素のjavascriptを使いました。サイト内のhistoryの項目では、学生時代のことや大学院を中途退学した理由を書きましたので、私の人物像の理解に役立てていただければと思います。",
      dev_env: "HTML/ SCSS / Javascript",
      production_url: "https://naohiromitsukuchi.github.io/MyPortfolioSite/",
      github_url: "https://github.com/NaohiroMitsukuchi/MyPortfolioSite"
    },
    fleamarket: {
      name: "Flea Market",
      images_number: 4,
      discription: "スクールで作製したフリマアプリです。4人でチームを組んでアジャイル型開発を経験しました。複数人でのアプリ開発が初めてだったので、githubでブランチをmergeする際のconflictの解消や他者のコードをレビューする貴重な経験が得られました。また細かい情報共有の重要性や仲間の進捗を気にしながら開発を行う難しさを学びました。個人的な実装担当箇所としては、DB設計やデプロイ、商品出品機能、ユーザー登録機能、マイページの実装を行いました。(現在アプリ停止中)",
      dev_env: "Ruby/ Ruby on Rails / MySQL / Github / AWS",
      production_url: null,
      github_url: "https://github.com/NaohiroMitsukuchi/fleamarket_sample_78a"
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
    if(production == null){
      production_url.style.display = 'none';
    }else{
      production_url.setAttribute('href', `${production}`)
    }
    github_url.setAttribute('href', `${github}`)
  }

  // モーダル内に画像を配置する関数
  function work_images_build(workId, images_number){
    let exibit_img_element = document.createElement('img');
    exibit_img_element.src = `img/works/${workId}/${workId}1.png`;
    exibit_img_element.id = 'exibit_image';
    exibit_image.append(exibit_img_element);
    for(let i = 0; i < images_number; i++){
      let img_element = document.createElement('img');
      img_element.src = `img/works/${workId}/${workId}${i+1}.png`;
      img_element.className = 'mini_image';
      img_element.setAttribute('data-index',`${i+1}`)
      work_images.append(img_element);
      // モーダル内の画像クリックでメイン画像入れ替え機能
      img_element.addEventListener('click', function(){
        exibit_img_element.src = `img/works/${workId}/${workId}${i+1}.png`
      })
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
        work_images_build(workId, workArray.images_number);
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
    production_url.style.display = "flex";
    rmvElement();
  }
  function outsideClose(e){
    if(e.target == modal){
      modalClose();
      production_url.style.display = "flex";
      rmvElement();
    }
  }

  // モーダルを閉じる挙動
  btnClose.addEventListener('click', modalClose);
  addEventListener('click', outsideClose);

