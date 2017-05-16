app.component('modalProject', {
	controller: function($scope, projects) {
		this.projects = projects;

		this.hideModal = function() {
			$scope.$emit("hideModal");
		}

		this.showQty = function() {
			var projects = document.querySelector('.modal-project');
			var list = projects.querySelectorAll('li');
			this.qty = list.length;
		}
	},
	template: `
	<div class="add-project">
		<div class="choose-project">
			<div class="label">
				Add a project or task
			</div>
			<div class="input-holder" ng-click="$ctrl.showModal()">
				<input class="show-modal" ng-model="searchFor" ng-keyup="$ctrl.showQty()"/>
			</div>
			<div class="number-shown">
				{{ $ctrl.qty }} projects shown
			</div>
			<ul class="projects-list">
				<li ng-repeat="project in $ctrl.projects | filter:searchFor"  ng-init="$ctrl.showQty()">
					{{ project.label }}
				</li>
			</ul>

		</div>
	    <div class="close-modal" ng-click="$ctrl.hideModal()">x</div>
	 </div>
	`
});