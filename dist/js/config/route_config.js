/*
 * 路由配置文件
 * 1.配置路由地址和对应的View&Controller
 */
spaApp.config(function ($routeProvider, $locationProvider) {
    //防止路由地址出现感叹号和乱码
    $locationProvider.hashPrefix('');

    //当锚点为toOne时，ng-view加载pageOne.html和pageOneCtrl
    //当锚点为toTwo时，ng-view加载pageTwo.html和pageTwoCtrl
    //其余情况重定向到toOne
    $routeProvider
        .when(
            '/toOne',
            {
                templateUrl: 'view/pageOne.html',
                controller: 'pageOneCtrl'
            }
        ).when(
            '/toTwo',
            {
                templateUrl: 'view/pageTwo.html',
                controller: 'pageTwoCtrl'
            }
        ).otherwise(
            {
                redirectTo: '/toOne'
            }
        )
});