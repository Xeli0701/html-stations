async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  console.log("Promise 3 seconds...")
  const result = await test(userList)
  return await result
}

let test = (userList) => new Promise(function(resolve){
  setTimeout(function() {
    console.log("waited 3 seconds... return full_name added userList");
    resolve();
  },3000);
}).then(() => {
  return userList.map(buildFullName);
});

function buildFullName(data) {
  data.full_name = data.family_name + " " +data.first_name
  return data;
}