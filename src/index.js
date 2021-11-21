import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // テキストボックス初期化
  document.getElementById("add-text").value = "";

  // test: li生成
  const li = document.createElement("li");
  li.className = "incomplete-task";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // test: liタグの子要素にdivを設定
  li.appendChild(div);
  console.log(li);

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  var numOfTask = document.getElementsByClassName("incomplete-task").length;
  console.log(numOfTask);
  document
    .getElementsByClassName("incomplete-task")
    [numOfTask - 1].appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
