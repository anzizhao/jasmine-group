(function() {
    var globals = [];
    window.suitList = {};
    var object, _i, suite;

    if (typeof global !== "undefined" && global !== null) {
        globals.push(global);
    }

    if (typeof window !== "undefined" && window !== null) {
        globals.push(window);
    }

    if (groupsConfig) {
        if (groupsConfig.length === 0) {
            for (_i = 0; _i < globals.length; _i++) {
                object = globals[_i];
                object['gdescribe'] = function(group, description, specDefinitions) {
                    suite = describe(description, specDefinitions);
                    return suite;
                }
            }
        } else {
            for (_i = 0; _i < globals.length; _i++) {
                object = globals[_i];
                object['gdescribe'] = function(group, description, specDefinitions) {
                    if (groupsConfig.indexOf(group) > -1) {
                        window.suitList[groupsConfig.indexOf(group)] = window.suitList[groupsConfig.indexOf(group)] || [];
                        window.suitList[groupsConfig.indexOf(group)].push({'description':description, 'specDefinitions':specDefinitions});
                    }
                }
            }
        }
        window['executeGroup'] = executeGroupsTest; 
    } else {
        console.warn('[Error] Failed to retrieve group settings');
    }

    function executeGroupsTest(){
        if (Object.keys(window.suitList).length != 0) {
            var _j, _k, suitObject;
            for(_j =0; _j< groupsConfig.length; _j++) {
                if (window.suitList.hasOwnProperty(_j)) {
                    for (_k = 0; _k < window.suitList[_j].length; _k++) {
                        suitObject = window.suitList[_j][_k];
                        if(suitObject != 'used'){
                            describe(suitObject.description, suitObject.specDefinitions);
                            window.suitList[_j][_k] = 'used';
                            //suitObject = 'used';
                        }
                    }
                }
            }
        }
    }
}).call(this);
