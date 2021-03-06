// View.js - index.html listing for users
// -------
define(["jquery", "backbone", "text!templates/listButtons.html"],

    function($, Backbone, template){

        var ButtonView = Backbone.View.extend({
            tagName: 'div',
            className: 'buttonArea',

            // View constructor
            initialize: function() {},
            
            // Renders the view's template to the UI
            render: function() {
               this.template = _.template(template, {stylesData: this.model});                                
               return this.$el.html( this.template );
            }
        });
        // Returns the View class
        return ButtonView;
    }

);