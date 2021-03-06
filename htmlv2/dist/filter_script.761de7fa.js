// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/filter_script.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function (event) {
  // var filtercategories = document.querySelectorAll('._li_filtercategory')
  // var filterlists = document.querySelectorAll('._ul_filters')
  // var singlefilters = document.querySelectorAll('._li_singlefilter')
  // var search = document.getElementById("filtersearch")
  // var toggleDisplays = function(activeIndex){
  //     filtercategories.forEach((val, index) => {
  //         if(index == activeIndex){
  //             val.classList.add('active')
  //         }else{
  //             val.classList.remove('active');
  //         }
  //     })
  //     filterlists.forEach((val, index) => {
  //         if(index == activeIndex){
  //             val.classList.remove('disabled')
  //         }else{
  //             val.classList.add('disabled')
  //         }
  //     })
  // }
  // var toggleClass = function(element,classname) {
  //     element.classList.toggle(classname)
  // }
  // var filterInputs = function(matchText){
  //     Array.from(singlefilters)
  //         .forEach(s => s.innerText.toLowerCase().includes(matchText.toLowerCase()) ? s.classList.remove('disabled') : s.classList.add('disabled') )        
  // }
  // filtercategories.forEach((val, index) => {
  //     val.addEventListener('click', function(){
  //         toggleDisplays(index)
  //     })
  // })
  // singlefilters.forEach((val) => {
  //     val.addEventListener('click', function(){
  //         toggleClass(val, 'active')
  //     })
  // })
  // search.addEventListener('keyup', function(){
  //     filterInputs(search.value)
  // })
  var filtersection = document.querySelector("._section_pagemeta");
  var filterbutton = document.querySelectorAll(".openfilters");
  var closebutton = document.getElementById("closefilters");
  var applybutton = document.getElementById("applyfilters");
  var filtercategories = document.querySelectorAll("._div_filtercategory");
  var catbuttons1 = document.querySelectorAll("._btn_cat");
  var catbuttons2 = document.querySelectorAll("._btn_cat2");

  var setClassInArray = function setClassInArray(arr, ind, classname) {
    arr.forEach(function (element, index) {
      if (index != ind && element.classList.contains(classname)) {
        element.classList.remove(classname);
      } else if (ind == index) {
        element.classList.add(classname);
      }
    });
  };

  var setSections = function setSections(actindex) {
    filtercategories.forEach(function (element, index) {
      if (index != actindex && !element.classList.contains("disabled")) {
        element.classList.add("disabled");
      } else if (index == actindex) {
        element.classList.remove("disabled");
      }
    });
  };

  var setMenu = function setMenu(actindex) {
    setClassInArray(catbuttons1, actindex, "active");
    setClassInArray(catbuttons2, actindex, "active");
  };

  catbuttons1.forEach(function (element, index) {
    element.addEventListener('click', function () {
      setSections(index);
      setMenu(index);
    });
  });
  catbuttons2.forEach(function (element, index) {
    element.addEventListener('click', function () {
      setSections(index);
      setMenu(index);
    });
  });
  filterbutton.forEach(function (e) {
    e.addEventListener('click', function () {
      if (filtersection.classList.contains("disabled")) {
        filtersection.classList.remove("disabled");
      }
    });
  });
  closebutton.addEventListener('click', function () {
    if (!filtersection.classList.contains("disabled")) {
      filtersection.classList.add("disabled");
    }
  });
  applybutton.addEventListener('click', function () {
    alert("Whats in the box");
  });
  var filtersearch = document.getElementById("filtersearch");
  var concfilters = document.querySelectorAll("._p_filterelement");
  var selectedfilters = Array.from(document.querySelectorAll(".selected")).map(function (e) {
    return e.innerText;
  });
  var selcont = document.getElementById("selectedFilters");

  var filterClick = function filterClick(element) {
    if (element.classList.contains("selected")) {
      selectedfilters = selectedfilters.filter(function (f) {
        return f != element.innerText;
      });
      Array.from(concfilters).filter(function (f) {
        return f.innerText == element.innerText;
      }).forEach(function (e) {
        e.classList.remove("selected");
      });
    } else {
      selectedfilters.push(element.innerText);
      element.classList.add("selected");
    }

    console.log(selectedfilters);
    updateSelectedUI();
  };

  var updateSelectedUI = function updateSelectedUI() {
    selcont.innerHTML = "";
    selectedfilters.forEach(function (f) {
      var p = document.createElement("p");
      p.classList.add("_p_info");
      p.classList.add("_p_filterelement");
      p.classList.add("selected");
      p.classList.add("immutable");
      p.textContent = f;
      p.addEventListener('click', function () {
        filterClick(p);
      });
      selcont.appendChild(p);
    });
  };

  concfilters.forEach(function (element) {
    element.addEventListener('click', function () {
      filterClick(element);
    });
  });
  filtersearch.addEventListener('keyup', function () {
    Array.from(concfilters).forEach(function (element) {
      if (element.classList.contains("immutable") == false && element.innerText.toLowerCase().includes(filtersearch.value.toLowerCase()) == false) {
        element.classList.add("hidden");
      } else {
        element.classList.remove("hidden");
      }
    });
  });
});
},{}],"../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35289" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","scripts/filter_script.js"], null)
//# sourceMappingURL=/filter_script.761de7fa.js.map