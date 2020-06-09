// Survey result logic
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

// Jquery show and hide result logic
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

    const name = $("#name").val();

    let result = surveyResult(resultArray);

    // Adds name and removes extras
    $("#js-name-output").children("span").first().remove();
    $("#py-name-output").children("span").first().remove();
    $("#csharp-name-output").children("span").first().remove();
    $("#java-name-output").children("span").first().remove();
    $("#js-name-output").prepend(`<span>${name}</span>`);
    $("#py-name-output").prepend(`<span>${name}</span>`);
    $("#csharp-name-output").prepend(`<span>${name}</span>`);
    $("#java-name-output").prepend(`<span>${name}</span>`);

    //Shows and hides results based on result variable string
    if (result === "javascript") {
      $(".card-header").removeClass("bg-primary bg-csharp text-white bg-python bg-java").addClass("bg-javascript")
      $(".btn").removeClass("bg-primary bg-csharp text-white bg-java").addClass("bg-javascript text-white")
      $(".py.hide").hide();
      $(".csharp.hide").hide();
      $(".java.hide").hide();
      $(".js.hide").slideDown();
    }
    else if (result === "python") {
      $(".card-header").removeClass("bg-javascript bg-primary bg-csharp bg-java").addClass("bg-python text-white")
      $(".btn").removeClass("bg-javascript bg-primary bg-csharp bg-java").addClass("bg-python text-white")
      $(".js.hide").hide();
      $(".csharp.hide").hide();
      $(".java.hide").hide();
      $(".py.hide").slideDown();
    }
    else if (result === "java") {
      $(".card-header").removeClass("bg-javascript bg-primary bg-csharp bg-python text-white").addClass("bg-java text-white")
      $(".btn").removeClass("bg-javascript bg-primary bg-csharp").addClass("bg-java text-white")
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