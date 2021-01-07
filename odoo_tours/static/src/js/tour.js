odoo.define('odoo_tours.example_tour', function(require) {
    "use strict";

    var core = require('web.core');
    var tour = require('web_tour.tour')

    var _t = core._t

    tour.register('example_tour', {
        url: "/web",
    }, [tour.STEPS.SHOW_APPS_MENU_ITEM, {
        trigger: '.o_app[data-menu-xmlid="contacts.menu_contacts"]',
        content: _t('Want to manage your contacts? It starts here.'),
        position: 'bottom',
    }, {
        trigger: '.o-kanban-button-new',
        extra_trigger: '.o_res_partner_kanban',
        content: _t('Let\'s create your first contact by clicking on create.'),
        position: 'bottom',
        width: 200,
    }, {
        trigger: 'input[placeholder="Name"]',
        extra_trigger: '.o_form_editable',
        content: _t('Fill in the name of the contact.'),
        run: 'text James Cook',
        position: 'right',
    }, {
        trigger: '.o_form_button_save',
        extra_trigger: '.oe_avatar',
        content: _t('Click on save to save your new contact.'),
        position: 'bottom',
    }]);
});