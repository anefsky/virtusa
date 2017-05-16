app.component('weekTotals', {
	controller: function($scope, hours) {
		this.showModal = function() {
			$scope.$emit('showModal');
		}

		this.hours = hours;
	},

	template: 
	`<div class="add-project">
		<div class="choose-project">
			<div class="label">
				Add a project or task
			</div>
			<div class="input-holder" ng-click="$ctrl.showModal()">
				<input class="show-modal"/>
			</div>
		</div>
	</div>
	<ul class="hours">
		<li ng-repeat="hour in $ctrl.hours">
			<div class="day">{{ hour.day }}</div>
			<div class="entered-hours-holder"  ng-class="hour.status">
				<input class="entered-hours" value="{{ hour.hours}}"/>
			</div>
		</li>

	<ul>`
})