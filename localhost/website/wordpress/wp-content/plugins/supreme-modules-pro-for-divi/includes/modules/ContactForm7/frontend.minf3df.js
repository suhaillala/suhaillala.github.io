jQuery(function(t){t(".dsm_contact_form_7_btn_icon").length&&t(".dsm_contact_form_7_btn_icon").each(function(n,c){var o=t(this).attr("data-dsm-btn-icon");t(this).find(".wpcf7-submit").addClass("et_pb_custom_button_icon"),t(this).find(".wpcf7-submit").attr("data-icon",o)}),t(".dsm_contact_form_7").length&&t(".dsm_contact_form_7").each(function(n,c){document.addEventListener("wpcf7invalid",function(n){t(".wpcf7-response-output").addClass("wpcf7-validation-errors")},!1),document.addEventListener("wpcf7mailsent",function(n){t(".wpcf7-response-output").addClass("wpcf7-mail-sent-ok")},!1)})});