mapboxgl.accessToken = 'pk.eyJ1IjoicHJha3kxNyIsImEiOiJjamR5aXF4Ynoyb2h6MzNwZG42MXVmM2RiIn0.qHCk65r0zyFJ8Wp-0ScJGw';

var chapters = {
    'part-0': {
        center: [88.634,21.553],
        zoom: 3.65,
        bearing: 0,
        pitch: 0,
    },

    'part-1': {
        center: [76.517, 35.880],
        zoom: 15,
        bearing: 320,
        pitch: 40,
    },
    'part-2': {
        center: [88.148, 27.703],
        zoom: 14.5,
        bearing: 0,         //0-180
        pitch: 0,          //0-60
    },
    'part-3': {
        center: [78.912627, 32.577831],
        zoom: 6.14,
        bearing: 40,
        pitch: 34,
    },
    'part-4': {
        center: [93.517944, 24.171225],
        zoom: 7.11,
        bearing: 0,
        pitch: 80,
    },
    'part-5': {
        center: [77.05, 10.16],
        zoom: 13.1,
        bearing: 100,
        pitch: 34,
    },
    'part-6': {
        center: [74.29, 15.52],
        zoom: 11.8,
        bearing: -50,
        pitch: 60,
    },
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/praky17/cjed0zu7551np2rp2rnrqe7o0',
        center: [88.634,21.553],
        zoom: 3.65,
        bearing: 0,
        pitch: 0,
    });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-0';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
