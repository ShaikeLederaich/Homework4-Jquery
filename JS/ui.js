class UI {
  static appendOptionToSelect(item) {
    $('select#category').append(`<option value="${item}">${item}</option>`);
  }
  static showProducts(name, description, img, price, id) {
    $('#result').append(`<div id="cardDiv_${id}"></div>`);
    $(`div#cardDiv_${id}`).addClass('card bg-warning mr-3 text-center');
    $(`div#cardDiv_${id}`).css('width', '16rem');
    $('<img class="card-img-top">').appendTo(`div#cardDiv_${id}`);
    $(`div#cardDiv_${id}>img.card-img-top`).attr({
      src: img,
      alt: `Img Of ${name}`
    });
    $(`div#cardDiv_${id}>img.card-img-top`).after(
      '<div class="card-body"></div>'
    );
    $(`div#cardDiv_${id}>div.card-body`).prepend('<p></p>');
    $(`div#cardDiv_${id}>div.card-body`)
      .children('p')
      .addClass('card-text text-info');
    $(`div#cardDiv_${id}>div.card-body>p`).text(description);
    $(`div#cardDiv_${id}>div.card-body>p`).before(
      `<h5 class="card-title text-success">${name}</h5>`
    );
    $(`div#cardDiv_${id}>div.card-body`).append(
      `<span>&#8362; ${price}</span>`
    );
    $(`div#cardDiv_${id}>div.card-body>span`).css({
      color: 'rgb(194, 149, 214)',
      border: '4px double rgb(4, 37, 37)',
      'border-radius': '15px',
      'font-size': '2rem',
      padding: '4px',
      'background-color': 'rgb(11, 57, 184)'
    });
  }
  //%----Make The same sheet like 'showProducts()' In a different way
  static showProducts2(name, description, img, price) {
    let output = `
    <div class="card bg-warning mr-3 text-center" style="width: 16rem;">
      <img class="card-img-top" src="${img}" alt="Img Of ${name}">
      <div class="card-body">
        <h5 class="card-title text-success">${name}</h5>
        <p class="card-text text-info">${description}</p>
        <span>&#8362; ${price}</span>
      </div>
    </div>
    `;
    $('#result').append(output);
  }
  static showTotalItems(num) {
    $('#totalItems').html(
      `<p>Total Items:<span> ${num}</span></p>`
    )
      $('#totalItems').css({
        'color': 'rgb(130, 233, 236)',
        'text-align': 'center',
        'text-shadow': '3px 4px 3px rgb(29, 5, 54)',
        'border': '2px solid black',
        'border-radius': '15px',
        'padding': '2px',
        'margin-top': '10px',
        'font-size': '3rem',
        'background-color': 'rgb(206, 138, 13)'
      });
      $('#totalItems>p>span').css({
        'color': 'rgb(241, 11, 145)',
        'text-shadow': '-1px 3px 5px rgb(4, 12, 75)'
      })
  }
}

export { UI };
