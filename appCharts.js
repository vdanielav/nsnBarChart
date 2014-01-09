'use strict';

window.Charts =
{
    gradients: [
        ['#670167', '#843284', '#975297', '#b07bb0'], // Purple
        ['#ff9901', '#ffad32', '#ffba52', '#ffcb7d'], // Orange
        ['#ffcc01', '#ffd632', '#ffdc52', '#ffe57b'], // Yellow
        ['#999999', '#adadad', '#bababa', '#cacaca'], // Gray 0
        ['#676767', '#7f7f7f', '#939393', '#a7a7a7'], // Gray 1
        ['#343434', '#4c4c4c', '#686868', '#7c7c7c'], // Gray 2
        ['#972440', '#ac4e65', '#b86a7d', '#c98e9c'], // Red
        ['#34cc34', '#5bd65b', '#74dc74', '#96e596']  // Green
    ]
        .map(function (colors) {
            return {
                linearGradient: (
                {
                    x1: 0,
                    y1: 0,
                    x2: 1,
                    y2: 0
                }
                    ),
                stops: [
                    [0, colors[0]],
                    [0.5, colors[1]],
                    [0.5, colors[2]],
                    [1, colors[3]]
                ]
            }
        })
};

