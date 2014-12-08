AutoForm.addInputType('bootstrap-switch', {
  template: 'afBootstrapSwitch',
  valueOut: function () {
    return this.is(':checked');
  }
});

Template.afBootstrapSwitch.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    delete atts.switchOptions;
    if (typeof atts.type === 'undefined') {
      atts.type = 'checkbox';
    }
    return atts;
  }
});

Template.afBootstrapSwitch.rendered = function () {
  var $input = this.$('input');
  var data = this.data;

  // instanciate bootstrapSwitch
  $input.bootstrapSwitch(data.atts.switchOptions);

  // set and reactively update values
  this.autorun(function () {
    var data = Template.currentData();

    // set field value
    if (typeof data.value !== 'undefined') {
      $input.bootstrapSwitch('state', data.value ? true : false);
    }
  });

};

Template.afBootstrapSwitch.destroyed = function () {
  this.$('input').bootstrapSwitch('destroy');
};
