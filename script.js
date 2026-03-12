function convert(){

  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  const reader = new FileReader();

  reader.onload = function(e){

    let text = e.target.result;

    // Convert headings
    text = text.replace(/^# (.*$)/gim, "<h2>$1</h2>");

    // Convert bullet lists
    text = text.replace(/^- (.*$)/gim, "<li>$1</li>");

    // Convert line breaks
    text = text.replace(/\n/g,"<br>");

    document.getElementById("output").innerHTML = text;
  };

  reader.readAsText(file);
}
