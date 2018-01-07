/*
 * 全局配置文件
 * 1. 定义module
 * 2. 配置全局变量
 */
var spaApp = angular.module('spaApp', ['ngRoute']);

spaApp.run(['$rootScope', function($rootScope){
    //通过rootScope把全局使用的东西配置好，比如应用名
    $rootScope.APP_NAME = 'SPA搭建总结';
    $rootScope.DEVELOPER_NAME = '谢仲东';
}]);