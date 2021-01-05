/*
 * @author     Martin Høgh <mh@mapcentia.com>
 * @copyright  2013-2018 MapCentia ApS
 * @license    http://www.gnu.org/licenses/#AGPL  GNU AFFERO GENERAL PUBLIC LICENSE 3
 */

module.exports = {

    // ===============================================
    // Following settings are set under build/startup.
    // They can not be altered in run-time.
    // ===============================================


    // ========================================
    // Which back-end is used. "gc2" or "carto"
    // ONLY GC2 IS SUPPORTED
    // ========================================

    "backend": "gc2",


    // ==========================================
    // GC2 host. Both HTTP and HTTPS is supported
    // Carto is hardcoded to carto.com
    // ==========================================

    "gc2": {
        "host": "http://gc2"
    },


    // ===============================================================
    // Configuration of print templates.
    // Print templates must be enabled - look further down.
    // mapsizePx ~ is the pixel dimension of the map view
    // mapsizeMm ~ is actual size of the map view on the resulting PDF
    // ===============================================================

    "print": {
        "templates": {

            // ================================
            // The "print" template is build-in
            // ================================

            "print": {
                A4: {
                    l: {
                        mapsizePx: [1060, 730],
                        mapsizeMm: [280, 167]
                    },
                    p: {
                        mapsizePx: [730, 1060],
                        mapsizeMm: [167, 280]
                    }
                },
                A3: {
                    l: {
                        mapsizePx: [1525, 1065],
                        mapsizeMm: [403, 255]
                    },
                    p: {
                        mapsizePx: [1065, 1525],
                        mapsizeMm: [255, 403]
                    }
                },
                A2: {
                    l: {
                        mapsizePx: [2185, 1525],
                        mapsizeMm: [578, 376]
                    },
                    p: {
                        mapsizePx: [1525, 2185],
                        mapsizeMm: [376, 578]
                    }
                },
                A1: {
                    l: {
                        mapsizePx: [3120, 2185],
                        mapsizeMm: [826, 552]
                    },
                    p: {
                        mapsizePx: [2185, 3120],
                        mapsizeMm: [552, 826]
                    }
                },
                A0: {
                    l: {
                        mapsizePx: [4430, 3120],
                        mapsizeMm: [1172, 800]
                    },
                    p: {
                        mapsizePx: [3120, 4430],
                        mapsizeMm: [800, 1173]
                    }
                }
            },


            // ========================================================
            // Names starting with "_" will not appear in the Print tab
            // But can be used by other extensions.
            // Must not be enabled.
            // ========================================================

            "_conflictPrint": {
                "A4": {
                    "p": {
                        "mapsizePx": [700, 500],
                        "mapsizeMm": [190, 120]
                    }
                }
            }
        },


        // =====================
        // Pre-configured scales
        // =====================

        "scales": [100, 250, 500, 1000, 2000, 3000, 4000, 5000, 7500, 10000, 15000, 25000, 50000, 100000]
    },


    // =======================================================
    // Extensions are required in build-time, but not enabled.
    // Look further down about enabling of extensions
    // Extensions can be required both browser and server side
    // =======================================================

    "extensions": {
        "browser": [
            {"conflictSearch": ["index", "reportRender", "infoClick", "controller"]},
            {"streetView": ["index"]},
            {"coordinates": ["index"]},
            {"offlineMap": ["index"]},
            {"session": ["index"]},
            {"editor": ["index"]},
            {"embed": ["index"]},

        ],
        "server": [
            {"conflictSearch": ["index"]},
            {"session": ["index"]},
        ]
    },

    // ===========================================================
    // Search modules are required in build-time, but not enabled.
    // Look further down about enabling search modules
    // ===========================================================

    "searchModules": ["google", "danish"],


    //=============================================================================
    // An URL (or URLs) where configurations can be downloaded online for
    // overriding build-time configurations. Any HTTP(S) server can host config files
    // Example of a config:
    // https://github.com/mapcentia/mapcentia.github.io/blob/master/vidi.json
    // Can be used by adding ?config=vidi.json to the Vidi URL'en
    //=============================================================================

    "configUrl": "https://geosmeden.github.io/beredskabskort/geocloud_configs",

    // Database depend URLs

    //"configUrl": {
    //    "a_database": "https://mapcentia.github.io",
    //    "an_other_database": "https://example.github.io",
    //    "_default": "https://fall_back.github.io"
    //},


    // ==========================================================
    // With auto loading of configurations, Vidi will try to load
    // a config json file with the same name as the user name
    // (Database name in GC2 and account name in Carto)
    // ==========================================================

    "autoLoadingConfig": false,


    // ====================================================================================
    // A fallback config file. If no config is given in the URL or auto loading is disabled
    // OR URL / auto loading is returning a 404 or a invalid jSON file
    // ====================================================================================

    "defaultConfig": "vidi.json",


    // =============================================================
    // Below are configurations, which can be overridden in run-time
    // These can be placed in a online config JSON file
    // hosted at the "configUrl" setting
    // =============================================================

    // ===================================
    // Brand name for the default template
    // ===================================

    "brandName": "MapCentia ApS",


    // ===================================
    // About text for the default template
    // ===================================

    "aboutBox": "<p>My awesome web map</p>",


    // ===================================================
    // Enabling of extensions
    // Extensions are enabled both browser and server side
    // ===================================================

    "enabledExtensions": [
        "conflictSearch",
        "streetView",
        "session",
        "coordinates",
        "offlineMap",
        "editor",
        "embed",
    ],


    // ====================================
    // Set which template Vidi should use
    // default.tmpl is the build-in default
    // ====================================

    "template": "default.tmpl",


    // ===========================
    // Enabling of print templates
    // ===========================

    "enabledPrints": ["print"],


    // =====================================
    // Enabling of a search module
    // Only one search module can be enabled
    // =====================================

    "enabledSearch": "danish",


    // =================================
    // Configurations for search modules
    // =================================

    "searchConfig": {
        "komkode": ["851"] // Example of config for danish search
    },

    // =========================================================
    // Configurations for extension modules
    // An extension can read the whole config, but by convention,
    // its a good idea to put them inside this property
    // ==========================================================

    "extensionConfig": {
        "layerSearch": {
            "host": "localhost:9200"
        }
    },

    // ===================================================
    // Configuration of which base layers are available
    //
    // GC2 has the following pre-defined base layers
    //
    // osm
    // stamenToner
    // stamenTonerLite
    // googleStreets
    // googleHybrid
    // googleSatellite
    // dtkSkaermkort
    // dtkSkaermkortDaempet
    // hereNormalNightGrey
    // ===================================================

    "baseLayers": [
        {"id": "osm", "name": "OSM"},

        {"id": "hereNormalDay", "name": "HERE Normal Day"},
        {"id": "hereNormalDayGrey", "name": "HERE Normal Day Grey"},
        {"id": "hereNormalNightGrey", "name": "HERE Normal Night Grey"},
        {"id": "hereSatelliteDay", "name": "HERE Satellite Day"},
        {"id": "hereHybridDay", "name": "HERE Hybrid Day"},

        {"id": "bingRoad", "name": "Bing Road"},
        {"id": "bingAerial", "name": "Bing Aerial"},

        {"id": "googleStreets", "name": "Google Streets"},
        {"id": "googleHybrid", "name": "Google Hybrid"},
        {"id": "googleSatellite", "name": "Google Satellite"},
        {"id": "googleTerrain", "name": "Google Terrain"},

        {"id": "stamenTonerLite", "name": "Stamen Toner Light"},

        {
            "id": "geodk.bright",
            "name": "GeoDanmark kort, lavkon",
            "db": "baselayers",
            "host": "https://gc2.io",
            "config": {
                "maxZoom": 26,
                "maxNativeZoom": 19,
                "attribution": "&copy; SDFE & MapCentia ApS"
            }
        }, {
            "id": "geodk.terminal",
            "name": "GeoDanmark kort, terminal",
            "db": "baselayers",
            "host": "https://gc2.io",
            "config": {
                "maxZoom": 26,
                "maxNativeZoom": 19,
                "attribution": "&copy; SDFE & MapCentia ApS"
            }
        },
        {
            "id": "luftfotoserier.geodanmark_2018_12_5cm",
            "name": "Luftfoto 2018",
            "db": "baselayers",
            "host": "https://gc2.io",
            "config": {
                "maxZoom": 26,
                "maxNativeZoom": 20,
                "attribution": "&copy; SDFE"
            }
        },
        {
            "id": "luftfotoserier.geodanmark_2017_12_5cm",
            "name": "Luftfoto 2017",
            "db": "baselayers",
            "host": "https://gc2.io",
            "config": {
                "maxZoom": 26,
                "maxNativeZoom": 20,
                "attribution": "&copy; SDFE"
            }
        },
        {
            "id": "luftfotoserier.geodanmark_2016_12_5cm",
            "name": "Luftfoto 2016",
            "db": "baselayers",
            "host": "https://gc2.io",
            "config": {
                "maxZoom": 26,
                "maxNativeZoom": 20,
                "attribution": "&copy; SDFE"
            }
        },
        {
            "id": "kortforsyningen.dtk_lave_maalebordsblade",
            "name": "Lave målebordsblade",
            "db": "baselayers",
            "host": "https://gc2.io",
            "config": {
                "maxZoom": 26,
                "maxNativeZoom": 20,
                "attribution": "&copy; Kortforsyningen"
            }
        },
        {
            "id": "kortforsyningen.dtk_hoeje_maalebordsblade",
            "name": "Høje målebordsblade",
            "db": "baselayers",
            "host": "https://gc2.io",
            "config": {
                "maxZoom": 26,
                "maxNativeZoom": 20,
                "attribution": "&copy; Kortforsyningen"
            }
        },
        {
            "id": "kortforsyningen.topo25",
            "name": "Topografisk kort, 1:25.000",
            "db": "baselayers",
            "host": "https://gc2.io",
            "config": {
                "maxZoom": 26,
                "maxNativeZoom": 20,
                "attribution": "&copy; Kortforsyningen"
            }
        },



        {"id": "dtkSkaermkort", "name": "DTK Skærmkort"},
        {"id": "dtkSkaermkortDaempet", "name": "DTK Skærmkort, dæmpet"},
        {"id": "dtkSkaermkortGraa", "name": "DTK Skærmkort, grå"},

    ]
};
