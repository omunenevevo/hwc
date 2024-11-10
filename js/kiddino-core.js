/*

[Main Script]

Project: Kiddino
Version: 1.0
Author : vecurosoft.com

*/
; (function ($) {
    "use strict";

    jQuery(window).on('elementor/frontend/init', function () {
        // console.log( elementorFrontend);
        if (typeof elementor != "undefined" && typeof elementor.settings.page != "undefined") {

            elementor.settings.page.addChangeCallback('kiddino_header_style', function (newValue) {
                if (newValue == 'prebuilt') {
                    elementor.saver.update({
                        onSuccess: function () {
                            elementor.reloadPreview();
                            elementor.once('preview:loaded', function () {
                                elementor.getPanelView().setPage('page_settings').activateTab('settings');
                            });
                        }
                    });
                }
            });


            elementor.settings.page.addChangeCallback('kiddino_header_builder_option', function (newValue) {
                elementor.saver.update({
                    onSuccess: function () {
                        elementor.reloadPreview();
                        elementor.once('preview:loaded', function () {
                            elementor.getPanelView().setPage('page_settings').activateTab('settings');
                        });
                    }
                });
            });

            elementor.settings.page.addChangeCallback('kiddino_footer_style', kiddinoFooterStyle);
            function kiddinoFooterStyle(newValue) {
                elementor.saver.update({
                    onSuccess: function () {
                        elementor.reloadPreview();
                        elementor.once('preview:loaded', function () {
                            elementor.getPanelView().setPage('page_settings').activateTab('settings');
                        });
                    }
                });
            }
            elementor.settings.page.addChangeCallback('kiddino_footer_choice', kiddinoFooterChoice);
            function kiddinoFooterChoice(newValue) {
                elementor.saver.update({
                    onSuccess: function () {
                        elementor.reloadPreview();
                        elementor.once('preview:loaded', function () {
                            elementor.getPanelView().setPage('page_settings').activateTab('settings');
                        });
                    }
                });
            }

        }
    });

})(jQuery);