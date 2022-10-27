// モーダルウィンドウ
  const buttonOpen = document.getElementById('modal_open');
  const modal = document.getElementById('modal_layer');
  const buttonClose = document.getElementsByClassName('modal_close')[0];

  // 開く挙動
  buttonOpen.addEventListener('click', modalOpen);
  function modalOpen(){
    modal.style.display = 'block';
  }

  // 閉じる挙動
  buttonClose.addEventListener('click', modalClose);
  function modalClose(){
    modal.style.display = 'none';
  }
  addEventListener('click', outsideClose);
  function outsideClose(e){
    if(e.target == modal){
      modalClose();
    }
  }

// モーダルウィンドウ内の画像入れ替え機能
