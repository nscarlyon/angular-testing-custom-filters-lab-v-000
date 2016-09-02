describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels in string', function() {
		var results = $filter('removeAllVowels')('brown foxes')
		expect(results).toEqual('brwn fxs')
	})

});
