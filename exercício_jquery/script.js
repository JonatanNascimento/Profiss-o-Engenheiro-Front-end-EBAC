$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const novaTarefa = $("#nome-tarefa").val();
    if (novaTarefa.trim() !== "") {
      $("<li></li>").text(novaTarefa).appendTo("ol");
      $("#nome-tarefa").val("");
    }
  });

  $("#apagar-lista").on("click", function (e) {
    e.preventDefault();
    $("ol").empty();
  });

  $("ol").on("click", "li", function () {
    $(this).toggleClass("riscado");
  });
});
