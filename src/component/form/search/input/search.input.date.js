//-----------------------------------------------------------------------------------------------
//
//
//  针对input的封装
//
//
//-----------------------------------------------------------------------------------------------
angular.module('admin.component')
    .directive('uiSearchDate', function (UIDateService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                model: '=',
                change: '&',
                label: '@',
                name: '@',
                css: '@',
                placeholder: '@'
            },
            link: function (s, e, a) {
                new UIDateService(s, e, a);
            },
            template: `
                 <div class="input-inline search-item">
                    <div class="input-group">
                        <div ng-if="label" class="input-group-addon">{{label}}</div>
                        <input class="form-control" name="{{name}}" placeholder="{{placeholder}}" ng-model="model" ng-change="change()" readonly="true"/>
                    </div>
                </div>
            `
        }
    });