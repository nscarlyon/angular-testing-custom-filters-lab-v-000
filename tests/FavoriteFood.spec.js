describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on favorite food correctly', function() {
		var mockedList = [{
		name: 'Ashley',
		favoriteFood: 'ice cream'
 		},{
		name: 'John',
		favoriteFood: 'corn'
	}];

		var results = $filter('favoriteFood')(mockedList, 'corn');

		expect(results[0].favoriteFood).toBe('corn')
	})
});
