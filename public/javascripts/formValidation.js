
$.validator.setDefaults({
    
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },

    errorElement: 'span',
    errorClass: 'myFavNoveltiesFormClass',
    errorPlacement: function(error, element) {
        $( element )
            .closest( "form" )
                .find( "label[for='" + element.attr( "id" ) + "']" )
                    .append( error );
    },
    submitHandler: function() {
        submitForm();
    }
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


$(document).ready(function() {
    $('.selectpicker').selectpicker();

    $("#myFavNoveltiesForm").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            city: "required",
            state: "required",
            favNovelties: "required"
        },
        messages: {
            firstName: "  ( required )",
            lastName: "  ( required )",
            city: "  ( required )",
            state: "  ( required )",
            favNovelties: "  ( required )"
        }
    });


    var frm = document.getElementById("myFavNoveltiesForm");


    $('.clrFavForm').click(function(event) {
        if ( frm != null ) {
            frm.reset();
            $("#state").val('').trigger('change');
            $("#favNovelties").val('').trigger('change');
            $(frm).find(".form-group").removeClass("has-error"); 
            $(frm).data('validator').resetForm(); 
        }
        if ( this.id == 'cancelFormBtn' || this.id == 'navbarBrandBtn') {
            window.location.href= '/';
        }
    });
});






