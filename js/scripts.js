const surveyResult = (lst) => {
  let js = 0;
  let py = 0;
  let csharp = 0;

  for (i = 0; i < lst.length; i++) {
    if (lst[i] === "javascript") {
      js++;
    } else if (lst[i] === "python") {
      py++;
    } else {
      csharp++;
    }
  }

  if (csharp > js && csharp > py) {
    return "csharp";
  }
  else if (py > js && py > csharp) {
    return "python";
  }
  else {
    return "javascript";
  }
}


$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    let resultArray = [];
    resultArray.push($("input:radio[name=build]:checked").val());
    resultArray.push($("input:radio[name=color]:checked").val());
    resultArray.push($("input:radio[name=compiler]:checked").val());
    resultArray.push($("input:radio[name=animal]:checked").val());
    resultArray.push($("input:radio[name=zombie]:checked").val());
    resultArray.push($("input:radio[name=naming]:checked").val());

    let result = surveyResult(resultArray);

    if (result === "javascript") {
      $(".py.hide").hide();
      $(".csharp.hide").hide();
      $(".js.hide").show();
    }
    else if (result === "python") {
      $(".js.hide").hide();
      $(".csharp.hide").hide();
      $(".py.hide").show();
    }
    else {
      $(".js.hide").hide();
      $(".py.hide").hide();
      $(".csharp.hide").show();
    }

  });
});