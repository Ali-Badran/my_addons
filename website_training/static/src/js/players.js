const properties = [
    'name',
    'wins',
    'draws',
    'losses',
    'total',
];

console.log('Pascal')
let $table = $('.table-content');
let rows = $table.find('.table-row').get();
rows.forEach(function (row, index) {
    $(row.lastElementChild).click(function (event) {
        event.preventDefault();
        // let $allTable = $('.table-content');
        // let allRows = $allTable.find('.table-row').get();
        // console.log('INd ', index)
        // allRows.splice(index, 1);
        // $.each(allRows, function (index, row) {
        //     $allTable.append(row);
        // });
        // console.log('Table', rows)
        console.log('Click me');
        console.log('$this', $(row));
        $(row).addClass('hidden-block');
        return false
    });
});

properties.forEach(function(val, i ) {
    let orderClass = '';

    $("#" + val).click( async function (e) {
        e.preventDefault();
        $('.filter__link.filter__link--active').not(this).removeClass('filter__link--active');
        $(this).toggleClass('filter__link--active');
        $('.filter__link').removeClass('asc desc');

        if (orderClass == 'desc' || orderClass == '') {
            $(this).addClass('asc');
            orderClass = 'asc';
        } else {
            $(this).addClass('desc');
            orderClass = 'desc';
        }

        const parent = $(this).closest('.header__item');
        const index = $(".header__item").index(parent);
        let $table = $('.table-content');
        const rows = $table.find('.table-row').get();
        const isSelected = $(this).hasClass('filter__link--active');
        const isNumber = $(this).hasClass('filter__link--number');

        rows.sort(function (a, b) {
            let x = $(a).find('.table-data').eq(index).text();
            let y = $(b).find('.table-data').eq(index).text();

            if (isNumber == true) {
                if (isSelected) {
                    return x - y;
                } else {
                    return y - x;
                }
            } else {
                if (isSelected) {
                    if (x < y) return -1;
                    if (x > y) return 1;
                    return 0;
                } else {
                    if (x > y) return -1;
                    if (x < y) return 1;
                    return 0;
                }
            }
        });
        // rows.splice(0, 1);
        // $table[0].childNodes = []
        // delete rows[0]
        // $.each(rows, function (index, row) {
        //     $tableChildNodes.splice;
        // });
        //
        // let $tableChildNodes = $table[0].childNodes

        console.log('Child2 ', $table.children())
        console.log('Child3 ', $table.children('table-data, div'))
        console.log('Child3 ', $table.children(':last-child').remove())
        // let div = document.createElement("div")
        // $table.children(rows[0]).remove();
        // $.each(rows, function (index, row) {
        //     $table.append(row);
        // });

        return false;
    });

});
