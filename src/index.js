import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // テキストボックス初期化
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "incomplete-task";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグの子要素にdivを設定
  li.appendChild(div);

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;

    // TODO内容テキスト取得
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    // div以下初期化
    addTarget.textContent = null;

    // test: li生成
    const li = document.createElement("li");
    li.className = "complete-task";

    // test: div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // test: liタグの子要素にdivを設定
    li.appendChild(div);

    // p生成
    const p = document.createElement("p");
    p.innerText = text;

    // button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // test: divタグの子要素にpを設定
    div.appendChild(p);
    div.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
