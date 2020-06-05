const surveyResult = (lst) => {
  let js = 0;
  let py = 0;
  let csharp = 0;
  let java = 0;

  for (i = 0; i < lst.length; i++) {
    if (lst[i] === "javascript") {
      js++;
    } else if (lst[i] === "python") {
      py++;
    } else if (lst[i] === "java") {
      java ++;
    } else {
      csharp++;
    }
  }

  if (csharp > js && csharp > py && csharp > java) {
    return "csharp";
  }
  else if (py > js && py > csharp && py > java) {
    return "python";
  }
  else if (java > js && java > py && java > csharp) {
    return "java";
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
      $(".card-header").removeClass("bg-primary bg-indigo text-white bg-java").addClass("bg-javascript")
      $(".btn").removeClass("bg-primary bg-indigo text-white bg-java").addClass("bg-javascript")
      $(".py.hide").hide();
      $(".csharp.hide").hide();
      $(".java.hide").hide();
      $(".js.hide").slideDown();
    }
    else if (result === "python") {
      $(".card-header").removeClass("bg-javascript bg-primary bg-indigo bg-java").addClass("bg-python text-white")
      $(".btn").removeClass("bg-javascript bg-primary bg-indigo bg-java").addClass("bg-python text-white")
      $(".js.hide").hide();
      $(".csharp.hide").hide();
      $(".java.hide").hide();
      $(".py.hide").slideDown();
    }
    else if (result === "java") {
      $(".card-header").removeClass("bg-javascript bg-primary bg-csharp bg-python text-white").addClass("bg-java text-white")
      $(".btn").removeClass("bg-javascript bg-primary bg-python").addClass("bg-java text-white")
      $(".js.hide").hide();
      $(".py.hide").hide();
      $(".csharp.hide").hide();
      $(".java.hide").slideDown();
    }
    else {
      $(".card-header").removeClass("bg-javascript bg-primary bg-python bg-java").addClass("bg-csharp text-white")
      $(".btn").removeClass("bg-javascript bg-primary bg-python bg-java").addClass("bg-csharp text-white")
      $(".js.hide").hide();
      $(".py.hide").hide();
      $(".java.hide").hide();
      $(".csharp.hide").slideDown();
    }
  });
});