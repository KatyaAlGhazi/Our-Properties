// document.querySelectorAll('.button').forEach(function(button) {
//   button.addEventListener('click', function() {
//     this.closest('tr').nextElementSibling.classList.toggle('invisible');
//   });
// });

//  Jquery||start
$(document).ready(function () {
  $("button").click(function () {
    $(this).closest("tr").next().toggleClass("invisible");
  });
});
// Jquery||end

window.onload = function () {
  document.getElementById("myForm").style.display = "none";
};

function myFunction() {
  var x = document.getElementById("myForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

// $(document).ready(function () {
//   document.querySelector(".continue").addEventListener("click", function () {
//     var isSelected = false;
//     var properties = document.querySelectorAll(".property");
//     for (var i = 0; i < properties.length; i++) {
//       if (properties[i].checked) {
//         isSelected = true;
//         break;
//       }
//     }
//     if (!isSelected) {
//       alert("الرجاء اختيار عقار قبل المتابعة");
//       document.querySelector("#myForm").style.display = "none";
//     } else {
//       document.querySelector("#myForm").style.display = "block";
//     }
//   });
// });

//  Jquery||start
$(document).ready(function () {
  $(".continue").click(function () {
    var isSelected = false;
    $(".property").each(function () {
      if ($(this).prop("checked")) {
        isSelected = true;
        return false; // break the loop
      }
    });
    if (!isSelected) {
      alert("الرجاء اختيار عقار قبل المتابعة");
      $("#myForm").hide();
    } else {
      $("#myForm").show();
    }
  });
});
//  Jquery||end

$(document).ready(function () {
  document.getElementById("myForm").addEventListener("submit", function (event) {
      var name = document.getElementById("full-name").value.trim();
      var arabic = /^[\u0600-\u06FF\s]+$/;
      var number = document.getElementById("phone-number").value.trim();
      var email = document.getElementById("email").value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var nationalNum = document.getElementById("national-number").value.trim();
      var day = document.getElementById("day").value.trim();
      var month = document.getElementById("month").value.trim();
      var year = document.getElementById("year").value.trim();
      var datePattern = /^\d{2}$/;
      var yearPattern = /^\d{4}$/;

      if (!arabic.test(name)) {
        alert("يرجى إدخال الاسم باللغة العربية");
        event.preventDefault();
        return false;
      }
      if (!name.includes(" ")) {
        alert("يجب أن يحتوي الاسم الكامل على الاسم والكنية");
        event.preventDefault();
        return false;
      }
      if (!["093", "094", "095", "096", "098", "099"].includes(number.substring(0, 3))) {
        alert("يجب أن يطابق رقم الموبايل أرقام شبكتي Syriatel أو MTN ويحتوي على أرقام فقط");
        event.preventDefault();
        return false;
      }
      if (number.length !== 10 || !/^\d+$/.test(number)) {
        alert("رقم الموبايل غير صحيح يجب أن يحتوي 10 خانات");
        event.preventDefault();
        return false;
      }
      if (!emailPattern.test(email)) {
        alert("يرجى إدخال بريد إلكتروني صحيح");
        document.getElementById("email").focus();
        event.preventDefault();
        return false;
      }
      if (!["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"].includes(nationalNum.substring(0, 2))) {
        alert("يجب أن يبدأ الرقم الوطني برمز المحافظة 01، 02، 03، 04، 05، 06، 07، 08، 09، 10، 11، 12، 13، 14");
        event.preventDefault();
        return false;
      }
      if (nationalNum.length !== 11 || !/^\d+$/.test(nationalNum)) {
        alert("يرجى إدخال الرقم الوطني المكون من 11 خانة ويحتوي على أرقام فقط");
        event.preventDefault();
        return false;
      }
      if (day < 1 || day > 31) {
        alert("الرجاء إدخال قيمة اليوم بين 01 و 31");
        event.preventDefault();
        return false;
      }
      if (month < 1 || month > 12) {
        alert("الرجاء إدخال قيمة الشهر بين 01 و 12");
        event.preventDefault();
        return false;
      }
      if (year < 1800 || year > 2024) {
        alert("الرجاء إدخال قيمة السنة بين 1800 و 2024");
        event.preventDefault();
        return false;
      }
      if (!datePattern.test(day) || !datePattern.test(month) || !yearPattern.test(year)) {
        alert("يرجى إدخال تاريخ ميلاد صحيح بصيغة يوم/شهر/سنة");
        event.preventDefault();
        return false;
      }

      var selectedProperty = document.querySelector('input[name="property"]:checked');
      if (selectedProperty) {
        var row = selectedProperty.parentNode.parentNode;
        var infoRow = row.nextElementSibling;
        var infoElements = infoRow.querySelectorAll('p');
        var infoText = '';
        infoElements.forEach(function(p) {
          infoText += p.textContent + '\n';
        });
        alert( "لقد إخترت العقار التالي:" + '\n' + infoText);
      };
    });
});