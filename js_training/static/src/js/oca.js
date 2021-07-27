odoo.define('js_training.Oca', function (require) {
    'use strict';

    const AbastractAction = require('web.AbstractAction');
    const core = require('web.core');

    const OurAction = AbastractAction.extend({
        template: 'js_training.ClientAction',
        info: 'This message comes from JS',

        events: {
            'mousedown #myPics': '_onMouseDownMyPics',
            // 'mouseup #myPics': '_onMouseUpMyPics',
            // 'mousemove #myPics': '_onMouseMoveMyPics',
        },

        init: function (parent, params) {
            this._super.apply(this, arguments);
            this.x = 0;
            this.y = 0;
            this.isDrawing = false;
        },

        start: function () {
            const $canvas = this.$el[0].children[1];
            this.canvasContext = $canvas.getContext('2d');

            return this._super.apply(this, arguments);
        },

        _onMouseDownMyPics: function (event) {
            console.log('Mouse Down');
            this.x = event.originalEvent.x;
            this.y = event.originalEvent.y;
            this.isDrawing = true;
            console.log('Pascal ', event);
        },

        _onMouseUpMyPics: function () {
            console.log('Mouse Up');
            this._drawLine(this.x, this.y, 300, 150);
            this.x = 0;
            this.y = 0;
            this.isDrawing = false;
        },

        _onMouseMoveMyPics: function (event) {
            console.log('Mouse Move');
            if (this.isDrawing === true) {
                const currentXPoint = event.originalEvent.x;
                const currentYPoint = event.originalEvent.y;
                console.log('Moving ', this.x, this.y, currentXPoint, currentYPoint);

                this.x = currentXPoint;
                this.y = currentYPoint;
            }
        },

        _drawLine: function (startXPoint, startYPoint, endXPoint, endYPoint) {
            this.canvasContext.beginPath();
            this.canvasContext.strokeStpyle = 'black';
            this.canvasContext.lineWidth = 1;
            this.canvasContext.moveTo(startXPoint, startYPoint);
            this.canvasContext.lineTo(endXPoint, endYPoint);
            this.canvasContext.stroke();
            this.canvasContext.closePath();
        }
    });

    core.action_registry.add('oca.action', OurAction);
});


//var $canvas = self.$signatureField.find('canvas');
//                 var context = $canvas[0].getContext('2d');
//ar canvas = document.createElement('canvas'),
//         ctx = canvas.getContext('2d'),