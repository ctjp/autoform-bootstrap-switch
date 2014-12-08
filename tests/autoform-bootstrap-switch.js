Tinytest.add('afBootstrapSwitch - Defines', function (test) {
  // Instance
  test.equal(Template.afBootstrapSwitch instanceof Blaze.Template, true);
  test.equal(typeof Template.afBootstrapSwitch.rendered, 'function');
  test.equal(typeof Template.afBootstrapSwitch.destroyed, 'function');
});
