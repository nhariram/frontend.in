// View.js - index.html listing for users
// -------
define(["jquery", "backbone", "models/Model", "views/DisplayCssView", "text!templates/listButtons.html"],

    function($, Backbone, Model, DisplayCssView, template){

        var ButtonView = Backbone.View.extend({
            // The DOM Element associated with this view
            el: ".page",

            // View constructor
            initialize: function() {
                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {
                "click .btn" : "showPopUp"
            },

            //Show the modal popup for styles code
            showPopUp: function(ev) {
                var _id = "51275e34ac63810c0c000001" ; //$(ev.currentTarget).attr('id');
                console.log("ButtonView.js "+_id);
                var popup = new DisplayCssView({"id": _id});
                popup.render().showModal();
            },

            // Renders the view's template to the UI
            render: function() {
                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});
                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);
                // Maintains chainability
                return this;
            }
        });
        // Returns the View class
        return ButtonView;
    }

);