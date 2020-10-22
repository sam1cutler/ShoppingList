// Define Function #1: addItemFunc
function addItemFunc() {

    $('form').submit(function(event) {
        event.preventDefault();

        // get submission data
        const newItem = $(this).find('input[name="shopping-list-entry"]').val();

        // .append(whole big thing)
        $('.shopping-list').append(`
            <li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                <span class="button-label">delete</span>
                </button>
            </div>
            </li>
        `);
        
        // clear input field
        $(this).find('input').val('');

    })

};


// Define Function #2: checkItemFunc
function checkItemFunc() {
    $('ul').on('click', '.shopping-item-toggle', function(event) {       
        const targetItem = $(this).parents('li').find('.shopping-item');
        targetItem.toggleClass('shopping-item__checked');
    });
};

// Define Function #3: deleteItemFunc
function deleteItemFunc() {
    $('ul').on('click', '.shopping-item-delete', function(event) {
        const targetItem = $(this).parents('li');
        targetItem.remove();
    })
};




// Define Function #4: runAllFuncs
function runAllFuncs() {
    addItemFunc();
    checkItemFunc();
    deleteItemFunc();
};

$(runAllFuncs);
