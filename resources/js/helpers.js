/**
 * Define some global functions
 */

export const HELPERS = {
    showNotification: function(from, align, message, type) {
        $.notify({
            icon: "add_alert",
            message: message
    
        },{
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }
};