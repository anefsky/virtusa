app.component('navBar', {
	controller: function(navItems) {

		this.navItems = navItems;
	},
	template: `
		<ul class="nav-items">
			<li ng-repeat = "navItem in $ctrl.navItems">{{ navItem.label | uppercase }}</li>
		</ul>
	`
});