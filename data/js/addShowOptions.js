$(document).ready(function () {

    $('#saveDefaultsButton').click(function () {
        var anyQualArray = [];
        var bestQualArray = [];
        $('#anyQualities option:selected').each(function (i, d) {anyQualArray.push($(d).val()); });
        $('#bestQualities option:selected').each(function (i, d) {bestQualArray.push($(d).val()); });

        $.get(sbRoot + '/config/general/saveAddShowDefaults', {defaultStatus: $('#statusSelect').val(),
                                                             anyQualities: anyQualArray.join(','),
                                                             bestQualities: bestQualArray.join(','),
<<<<<<< HEAD:gui/slick/js/addShowOptions.js
                                                             defaultFlattenFolders: $('#flatten_folders').prop('checked')},
                                                             subtitles: $('#subtitles').prop('checked')} );
                                                             
=======
                                                             defaultFlattenFolders: $('#flatten_folders').prop('checked')});
>>>>>>> parent of d66d512... Merge git://github.com/mr-orange/Sick-Beard into development:data/js/addShowOptions.js
        $(this).attr('disabled', true);
        $.pnotify({
            pnotify_title: 'Saved Defaults',
            pnotify_text: 'Your "add show" defaults have been set to your current selections.',
            pnotify_shadow: false
        });
    });

    $('#statusSelect, #qualityPreset, #flatten_folders, #anyQualities, #bestQualities').change(function () {
        $('#saveDefaultsButton').attr('disabled', false);
    });

});