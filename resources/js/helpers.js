/**
 * Define some global functions
 */

export const HELPERS = {
    showNotification: function(from, align, message, type) {
        $.notify({
            icon: "",
            message: message
    
        },{
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    },
    initClassicEditor: function(element_id) {
        ClassicEditor
            .create( document.querySelector( element_id ) )
            .then( editor => {
                return editor;
            } )
            .catch( error => {
                console.error( error );
            } );
    }
};