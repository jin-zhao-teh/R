const xhr = new XMLHttpRequest();
var e =  {choiceList: [3, __ob__: Ct],clue: false,excerpts: 0,questionId: 10218028,reread: false,secondsTaken:8}
xhr.open("POST", "https://student.readingplus.com/seereader/api/sr/saveQuestion.json", true);

// Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8);

xhr.onreadystatechange = () => {
  // Call a function when the state changes.
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    // Request finished. Do processing here.
  }
};
xhr.send("foo=bar&lorem=ipsum");
// xhr.send(new Int8Array());
// xhr.send(document);