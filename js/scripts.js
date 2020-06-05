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
      $(".card-header").removeClass("bg-primary bg-indigo text-white").addClass("bg-javascript")
      $(".btn").removeClass("bg-primary bg-indigo text-white").addClass("bg-javascript")
      $(".py.hide").hide();
      $(".csharp.hide").hide();
      $(".js.hide").slideDown();
    }
    else if (result === "python") {
      $(".card-header").removeClass("bg-javascript bg-primary bg-indigo").addClass("bg-python text-white")
      $(".btn").removeClass("bg-javascript bg-primary bg-indigo").addClass("bg-python text-white")
      $(".js.hide").hide();
      $(".csharp.hide").hide();
      $(".py.hide").slideDown();
    }
    else {
      $(".card-header").removeClass("bg-javascript bg-primary bg-python").addClass("bg-csharp text-white")
      $(".btn").removeClass("bg-javascript bg-primary bg-python").addClass("bg-csharp text-white")
      $(".js.hide").hide();
      $(".py.hide").hide();
      $(".csharp.hide").slideDown();
    }
  });
});