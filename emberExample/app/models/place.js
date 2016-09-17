import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
   city: DS.attr(),
   type: DS.attr(),
   image: DS.attr()
});
