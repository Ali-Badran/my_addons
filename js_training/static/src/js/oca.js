odoo.define('js_training.Oca', function (require) {
    'use strict';

    const AbastractAction = require('web.AbstractAction');
    const core = require('web.core');

    const OurAction = AbastractAction.extend({
        template: 'js_training.ClientAction',
        info: 'This message comes from JS',
    });

    core.action_registry.add('oca.action', OurAction);
});
