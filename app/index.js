/**
 * Created by 于惠 on 2017/1/10.
 */

var myApp = angular.module('myApp',[])
    .service('productData' , function(){
        return [
            {
                id : 1111,
                name : 'ipad1',
                price : 1000
            },
            {
                id : 2222,
                name : 'iphone2',
                price : 2000
            },
            {
                id : 3333,
                name : 'ipod3',
                price : 3000
            },
            {
                id : 4444,
                name : 'Mp4',
                price : 4000
            }
        ]
    })
    .controller('firstController' , function($scope , productData){
        $scope.productData = productData;
        $scope.orderType = 'id';
        $scope.order = '-';
        $scope.changeOrder = function(type){
            $scope.orderType = type;
            if($scope.order ===''){
                $scope.order ='-'
            }else{
                $scope.order =''
            }
        }
    })

