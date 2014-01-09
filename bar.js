'use strict';

angular.module("nsnChartBar", [])
    .directive('nsnBarchart', function () {
        return {
            restrict: 'E',
            scope: {
                alignment: '@',
                idchart: '@'
            },
            templateUrl: 'templates/barChart.html',
//            require: '^nsnTable',
            controller: ['$scope', function ($scope) {

                var typeChart;

                // verificar se valor de aligment esta correcto
                // verificar se valor de idChart sao diferentes

                if ($scope.alignment == "vertical") {
                    typeChart = "bar";
                }
                else if ($scope.alignment == "horizontal") {
                    typeChart = "column";
                }

                window.chart = new Highcharts.Chart({
                    chart: {
                        renderTo: "chartBar",
                        backgroundColor: 'rgba(0,0,0,0)',
                        type: typeChart,
                        marginLeft: 150,
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        borderWidth: 0,
                        plotBackgroundImage: 'images/plot-background.png'
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: ''
                    },
                    colors: [
                        '#FFCC00', // Yellow 2
                        '#FF9900', // Orange 2
                        '#660066', // Purple 2
                        '#999999', // Gray 2
                        '#666666', // Gray 3
                        '#333333', // Gray 4
                        '#97233F', // Red 2
                        '#33CC33', // Green 2
                        '#FFE066', // Yellow 1
                        '#FFC266', // Orange 1
                        '#A366A3', // Purple 1
                        '#C2C2C2', // Gray 1
                        '#C17B8C', // Red 1
                        '#85E085', // Green 1
                        '#FFF0B2', // Yellow 0
                        '#FFE0B2', // Orange 0
                        '#D1B2D1', // Purple 0
                        '#E0E0E0', // Gray 0
                        '#E0BDC5', // Red 0
                        '#C1F0C1'  // Green 0
                    ],
                    xAxis: {
                        labels: {
                            align: 'left',
                            x: -130,
                            style: {
                                fontFamily: 'Museo Sans 300',
                                fontSize: '14px'
                            }
                        },
                        tickColor: 'rgba(0,0,0,0)',
                        offset: 20,
                        lineWidth: 0,
                        categories: [
                            'iPhone 3',
                            'Nokia N9',
                            'Blackberry',
                            'iPhone 4',
                            'HTC Desire'
                        ]
                    },
                    yAxis: {
                        tickWidth: 1,
                        tickLength: 20,
                        tickColor: '#c0c0c0',
                        tickPosition: 'inside',
                        tickInterval: 1,
                        endOnTick: false,
                        max: 7,
                        title: {
                            text: null
                        },
                        labels: {
                            style: {
                                fontFamily: 'Museo Sans 300',
                                fontSize: '14px'
                            },
                            y: 20
                        },
                        offset: 20,
                        stackLabels: {
                            enabled: true,
                            align: 'left',
                            textAlign: 'right',
                            verticalAlign: 'middle',
                            x: -25,
                            style: {
                                fontFamily: 'Museo Sans 300',
                                fontSize: '14px'
                            },
                            formatter: function () {
                                var n = (this.total.toFixed(1) + '').split('.');
                                return n.join(',') + '%'
                            }
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return this.series.name + " <strong>" + Highcharts.numberFormat(this.y, 2, ',', '.') + "%</strong>"
                        },
                        backgroundColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#666666'],
                                [1, '#000000']
                            ]
                        },
                        borderWidth: 0,
                        style: {
                            color: '#ffffff',
                            fontFamily: "Museo Sans 300",
                            fontSize: '14px',
                            padding: '10px',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0,
                        margin: 30,
                        y: -20,
                        itemStyle: {
                            fontSize: '14px',
                            fontFamily: "Museo Sans 300",
                            color: '#666666',
                            padding: //                                ($.browser.msie && parseInt($.browser.version) < 9) ? 0 :
                                '15px 0'
                        },
                        itemHoverStyle: {
                            fontSize: '14px',
                            fontFamily: "Museo Sans 300",
                            color: '#666666',
                            padding: //                                ($.browser.msie && parseInt($.browser.version) < 9) ? 0 :
                                '15px 0',
                            cursor: 'auto'
                        },
                        symbolPadding: 15
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal',
                            events: {
                                legendItemClick: function () {
                                    // Disable legend toggle functionality
                                    return false;
                                }
                            }
                        },
                        bar: {
                            animation: false,
                            borderColor: '#ffffff',
                            borderWidth: 0,
//                    borderRadius: 8, // torna-os todos arredondados.. so queremos nas "pontas"..
                            shadow: false,
//                    pointWidth: 44, // faz o grafico sair da "caixa"...
                            point: {
                                events: {
                                }
                            }
                        }
                    },
                    series: [
                        {
                            name: 'Data',
                            data: [4, 1.8, 3.8, 1.4, 1.8],
                            color: window.Charts.gradients[0 % window.Charts.gradients.length]
                        },
                        {
                            name: 'SMS',
                            data: [1, 1.8, 1.7, 0.2, 0.6],
                            color: window.Charts.gradients[1 % window.Charts.gradients.length]
                        },
                        {
                            name: 'Voice',
                            data: [1.35, 2, 0.2, 2.7, 0.8],
                            color: window.Charts.gradients[2 % window.Charts.gradients.length]
                        }
                    ]
                });
            }],
            link: function linkFn($scope,  element, attrs) {

                $scope.handleInputInfo = function() {



                }

                $scope.align = $scope.alignment;
                $scope.idcharts = $scope.idchart;
            }
        };
    })
