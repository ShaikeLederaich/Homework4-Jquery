import { UI } from './ui.js';

$(function() {
  getJsonInformation();

  getProducts();
});

let categorySet = new Set();

function getJsonInformation() {
  let objects = [];
  $.ajax({
    type: 'GET',
    url: 'product_data.json',
    dataType: 'json'
  }).done(function(arrOfData) {
    $.each(arrOfData, function(indexInArray, valueOfElement) {
      //%---Create Set Of Categories From 'JSON' Data File
      //%---'new Set ()' Its meaning - Appends the value to the 'Set' only if it does not already appear in it;
      categorySet.add(valueOfElement.category);
    });
    for (let item of categorySet.values()) {
      //%---Append 'Option' to 'select' for all Values in the Set
      UI.appendOptionToSelect(item);
    }
  });
}

function getProducts() {
  $('select#category').change(function(e) {
    let tempArr = [];
    console.clear();
    $('#result').empty();
    $.ajax({
      type: 'GET',
      url: 'product_data.json',
      dataType: 'json',
      success: function(arrOfData) {
        $.each(arrOfData, function(indexInArray, valueOfElement) {
          let item = valueOfElement;
          if (valueOfElement.category == e.target.value) {
            UI.showProducts(
              item.productName,
              item.description,
              item.picName,
              item.price,
              item.productId
            );
            tempArr.push(item.productName);
          }
        });
        UI.showTotalItems(tempArr.length);
      }
    });

    e.preventDefault();
  });
}
