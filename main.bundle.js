webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
//tokens etc bör lagras någon annanstans
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

//Connectr API
AppSettings.CONNECTR_API = 'https://gaialab-connectr-api.azurewebsites.net/api/message';
AppSettings.CONNECTR_API_SCRAPER = 'https://gaialab-connectr-api.azurewebsites.net/api/scrape?url=';
//Instagram
AppSettings.INSTA_CLIENT_ID = '8c4b1ae71cad49f68d61857c09d74abe';
AppSettings.INSTA_SECRET = '09c69c47c89f4f59bd4540fe8a925ecd';
AppSettings.INSTA_TOKEN = '244708219.8c4b1ae.f289fe48ff4442da954949b123a1160a'; //Genererad med instagramtoken.com
AppSettings.INSTA_API = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + AppSettings.INSTA_TOKEN;
//Facebook
AppSettings.FB_APP_ID = '1313615112020840';
AppSettings.FB_APP_SECRET = '759c96192fc551ab2ec64e1cd7b3d5b1';
//Går att generera med https://developers.facebook.com/tools/debug/accesstoken/ och räcker i 60 dagar.
// En metod för att hämta access tokens behövs
AppSettings.FB_TOKEN = 'EAASqudofo2gBANcgR2IhVgf83Qsn5O5xCM4SZCdnmJ0wujnuBL3BNnsNtv4HdY01EVfHzJJHsdzPBQ9wO31yXlHnMvWMaSer5TA5pSwehCDuGW4UYuEsB8e4UNX4VTFkuVAqlYOtkxs0EZBNcjtQRyzSa12ob5DhHfNygD4QZDZD';
AppSettings.FB_FIELDS = 'created_time,message,link,caption,description,name,place,source,status_type,type,object_id';
//Hämtar från https://www.facebook.com/gaiadigital/
AppSettings.FB_API = 'https://graph.facebook.com/v2.9/168933561226/posts?fields='
    + AppSettings.FB_FIELDS + '&access_token=' + AppSettings.FB_TOKEN;
//maxlängd på titel i ett item
AppSettings.MAXLENGTH_TITLE = 55;
AppSettings.MAXLENGTH_MSG = 220;
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-grid></app-grid>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_grid_component__ = __webpack_require__("../../../../../src/app/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grid_item_window_ref_service__ = __webpack_require__("../../../../../src/app/grid-item/window-ref.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__grid_grid_component__["a" /* GridComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__grid_item_window_ref_service__["a" /* WindowRefService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/connectr/connectr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_item_grid_item__ = __webpack_require__("../../../../../src/app/grid-item/grid-item.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectrService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConnectrService = (function () {
    function ConnectrService(http) {
        this.http = http;
        this.itemsUrl = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].CONNECTR_API; // URL to web API
    }
    ConnectrService.prototype.getItems = function () {
        var _this = this;
        return this.http.get(this.itemsUrl)
            .map(this.extractData)
            .map(function (items) {
            var cnctrGridItems = []; //create empty array of grid-items
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var entry = items_1[_i];
                cnctrGridItems.push(_this.formatCrItem(entry));
            }
            console.log(cnctrGridItems);
            return cnctrGridItems; //return grid-items (observable)
        })
            .catch(this.handleError);
    };
    ConnectrService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json(); //parses the response data to json
        return body || {};
    };
    ConnectrService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            /*const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;*/
            errMsg = error.toString();
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ConnectrService.prototype.formatCrItem = function (cnctrMsg) {
        var gridItem = new __WEBPACK_IMPORTED_MODULE_6__grid_item_grid_item__["a" /* GridItem */]();
        gridItem.type = 'Connectr';
        gridItem.date = new Date(cnctrMsg.createdDate);
        gridItem.tags = cnctrMsg.tags.split(','); //comma separated tags to array
        gridItem.title = cnctrMsg.title;
        gridItem.message = cnctrMsg.message;
        gridItem.imgOrientation = cnctrMsg.imgOrientation;
        console.log(gridItem.imgOrientation);
        if (cnctrMsg.urls[0] != null) {
            if (cnctrMsg.urls[0].indexOf('.jpg') >= 0
                || cnctrMsg.urls[0].indexOf('.JPG') >= 0
                || cnctrMsg.urls[0].indexOf('.png') >= 0
                || cnctrMsg.urls[0].indexOf('.PNG') >= 0) {
                gridItem.photoUrl = cnctrMsg.urls[0];
                // (<any>window).loadImage(gridItem.photoUrl, function (data) {     //funkar tydligen ej med URLer..
                //   console.log(data);
                //   var orientation = 0;
                //   if (data.exif) {
                //     orientation = data.exif.get('Orientation');
                //     console.log(orientation);
                //   };
                // });
            }
            else
                gridItem.videoUrl = cnctrMsg.urls[0];
        }
        return gridItem;
    };
    return ConnectrService;
}());
ConnectrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ConnectrService);

var _a;
//# sourceMappingURL=connectr.service.js.map

/***/ }),

/***/ "../../../../../src/app/fb/fb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_item_grid_item__ = __webpack_require__("../../../../../src/app/grid-item/grid-item.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FbService = (function () {
    function FbService(http) {
        this.http = http;
        this.fbUrl = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].FB_API; // URL to web API
    }
    FbService.prototype.getItems = function () {
        var _this = this;
        return this.http.get(this.fbUrl)
            .map(this.extractData)
            .map(function (items) {
            var cnctrGridItems = []; //create empty array of grid-items
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var entry = items_1[_i];
                cnctrGridItems.push(_this.formatFbItem(entry));
            }
            //console.log(cnctrGridItems);
            return cnctrGridItems; //return grid-items (observable)
        })
            .catch(this.handleError);
    };
    FbService.prototype.getPhotoUrl = function (objId) {
        var url = 'https://graph.facebook.com/v2.9/' + objId + '?fields=images&access_token=' + __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].FB_TOKEN;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .map(function (object) {
            var photoUrl = "";
            photoUrl = object.images[0].source; //[0] is largest image in array
            return photoUrl;
        });
    };
    FbService.prototype.getLinkPhotoUrl = function (link) {
        var url = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].CONNECTR_API_SCRAPER + link;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .map(function (object) {
            var linkUrl = "";
            linkUrl = object.imageUrl; //[0] is largest image in array
            return linkUrl;
        });
    };
    FbService.prototype.extractData = function (res) {
        var body = res.json(); //parses the response data to json
        return body.data || {};
    };
    FbService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    FbService.prototype.formatFbItem = function (fbPost) {
        var gridItem = new __WEBPACK_IMPORTED_MODULE_6__grid_item_grid_item__["a" /* GridItem */]();
        gridItem.type = "Facebook";
        gridItem.date = new Date(fbPost.created_time);
        gridItem.createTitle(fbPost.message);
        if (fbPost.type == "link") {
            gridItem.linkUrl = fbPost.link;
            gridItem.linkCaption = fbPost.caption;
            gridItem.linkDescription = fbPost.description;
            gridItem.linkName = fbPost.name;
            this.getLinkPhotoUrl(gridItem.linkUrl).subscribe(//Hämta foto som tillhör länk
            function (photoUrl) {
                gridItem.photoUrl = photoUrl;
            });
        }
        else if (fbPost.type == "photo") {
            var object_id = fbPost.object_id;
            this.getPhotoUrl(object_id).subscribe(function (photoUrl) {
                gridItem.photoUrl = photoUrl;
            });
        }
        else if (fbPost.type == "video") {
            gridItem.videoUrl = fbPost.source;
            //console.log(fbPost.source);                             //hantera ej vimeo-länkar
        }
        return gridItem;
    };
    return FbService;
}());
FbService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], FbService);

var _a;
//# sourceMappingURL=fb.service.js.map

/***/ }),

/***/ "../../../../../src/app/grid-item/grid-item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_ref_service__ = __webpack_require__("../../../../../src/app/grid-item/window-ref.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridItemService = (function () {
    function GridItemService(windowRef) {
        this._window = windowRef.nativeWindow;
    }
    GridItemService.prototype.setPadding = function () {
        var height = this._window.screen.height;
        var width = this._window.screen.width;
        var itemsIncolumn = [];
        var inColumn = true;
        while (inColumn) {
            var offsetHeight = document.getElementById('grid-item').offsetHeight; //måste lägga till ett id
            console.log(offsetHeight);
        }
    };
    return GridItemService;
}());
GridItemService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__window_ref_service__["a" /* WindowRefService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__window_ref_service__["a" /* WindowRefService */]) === "function" && _a || Object])
], GridItemService);

var _a;
//# sourceMappingURL=grid-item.service.js.map

/***/ }),

/***/ "../../../../../src/app/grid-item/grid-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItem; });

var GridItem = (function () {
    function GridItem() {
    }
    GridItem.prototype.setRandomColor = function () {
        var selectColor = [
            //Starka färger + svagare
            ['#662C3E', '#ff5000', '#fffff', '#ffcab3'],
            ['#11376E', '#0fd8c5', '#fffff', '#b7f3ed'],
            ['#00615D', '#00eb67', '#fffff', '#b3f9d1'],
            ['#60237b', '#ff36b8', '#fffff', '#ffc3e9'],
            ['#FFFFFF', '#000000', '#000000', '#808080'],
        ];
        //medelstarka färger
        /*['#946B78', '#FFA780', '#fffff'],         //vinröd
          ['#587399', '#87EBE2', '#fffff'],         //mörkblå
          ['#00615D', '#80F5B3', '#fffff'],         //blågrön
          ['#9065A2', '#FF9ADB', '#fffff'],         //lila
          ['#FFFFFF', '#000000', '#000000'],        //vit
          ];*/
        //svaga färger
        /*  ['#B2959E', '#FFA780', '#fffff'],       //vinröd
            ['#587399', '#87EBE2', '#fffff'],       //mörkblå
            ['#4D908D', '#80F5B3', '#fffff'],       //blågrön
            ['#CFBDD7', '#FF9ADB', '#fffff'],       //lila
            ['#FFFFFF', '#000000', '#000000'],      //vit
        ];*/
        //svagare färger
        /*['#d1c0c5', '#ffcab3', '#fffff'],         //vinröd
          ['#b8c3d3', '#b7f3ed', '#fffff'],         //mörkblå
          ['#b3cfce', '#b3f9d1', '#fffff'],         //blågrön
          ['#cfbdd7', '#ffc3e9', '#fffff'],         //lila
          ['#FFFFFF', '#000000', '#000000'],        //vit
          ];*/
        var numberOfColors = selectColor.length;
        this.color = selectColor[Math.floor(Math.random() * numberOfColors)];
    };
    GridItem.prototype.createTitle = function (msg) {
        var message, title;
        message = msg;
        if (message.length <= 55) {
            this.title = message;
            this.message = "";
        }
        else {
            var trimmedString = void 0, titleEnd = void 0;
            trimmedString = message.substr(0, __WEBPACK_IMPORTED_MODULE_0__app_settings__["a" /* AppSettings */].MAXLENGTH_TITLE);
            //console.log(trimmedString);
            if (trimmedString.length < 55) {
                titleEnd = trimmedString.length;
            }
            else if (trimmedString.indexOf(". ") > -1) {
                titleEnd = trimmedString.lastIndexOf(".");
                //console.log("has .");
            }
            else if (trimmedString.indexOf("!") > -1) {
                titleEnd = trimmedString.lastIndexOf("!");
                //console.log("has !");
            }
            else if (trimmedString.indexOf("?") > -1) {
                titleEnd = trimmedString.lastIndexOf("?");
                //console.log("has ?");
            }
            else if (trimmedString.indexOf("\n") > -1) {
                titleEnd = trimmedString.lastIndexOf("\n");
                //console.log("has linebreak");
            }
            else {
                titleEnd = Math.min(trimmedString.length, trimmedString.lastIndexOf(" "));
            }
            this.title = trimmedString.substr(0, titleEnd + 1);
            if (message.substr(titleEnd + 1).length > __WEBPACK_IMPORTED_MODULE_0__app_settings__["a" /* AppSettings */].MAXLENGTH_MSG)
                this.message = message.substr(titleEnd + 1, __WEBPACK_IMPORTED_MODULE_0__app_settings__["a" /* AppSettings */].MAXLENGTH_MSG) + "... Läs mer på " + this.type + ".";
            else
                this.message = message.substr(titleEnd + 1);
        }
    };
    return GridItem;
}());

//# sourceMappingURL=grid-item.js.map

/***/ }),

/***/ "../../../../../src/app/grid-item/window-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function getWindow() {
    return window;
}
var WindowRefService = (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRefService;
}());
WindowRefService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], WindowRefService);

//# sourceMappingURL=window-ref.service.js.map

/***/ }),

/***/ "../../../../../src/app/grid/grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300|Montserrat:light|Droid+Serif);", ""]);

// module
exports.push([module.i, "* {\r\n  box-sizing: border-box;\r\n}\r\nhtml{\r\n  background-color: #F4F4F4;\r\n}\r\n\r\n.container {\r\n  background-color: #F4F4F4;\r\n  padding: 3px;\r\n   max-width: 100vw; \r\n   position: fixed; \r\n  top: 0;\r\n  left: 0;\r\n   height: 100vh; \r\n  display: -webkit-box; \r\n  display: -ms-flexbox; \r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;   /* Kan ersättas med flex-flow: column wrap;  */\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;          /* Kan ersättas med flex-flow: column wrap;  */\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n   overflow: hidden;   \r\n}\r\n#qr-item{\r\n  font-size: medium;\r\n  text-align: center;\r\n  color: black;\r\n}\r\n.item {\r\n\r\n  -webkit-box-flex: 1;\r\n\r\n      -ms-flex: 1;\r\n\r\n          flex: 1;\r\n  padding: 15px 10px 0 10px;\r\n  position: relative;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -ms-flex-negative: 1;\r\n      flex-shrink: 1;\r\n  -ms-flex-preferred-size: auto;\r\n      flex-basis: auto;\r\n  border: 3px solid #F4F4F4;\r\n  box-sizing: border-box;\r\n  width: 12.5%;                           /* bestämmer bredden på varje kolmun och därmed hur många kolumner */        \r\n  font-family: 'Montserrat', sans-serif;\r\n  background-color: white;          /*skrivs över sen*/\r\n  color: white;                     /*skrivs ev. över sen*/\r\n\r\n  /* -webkit-box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.75);\r\n  -moz-box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.75);\r\n  box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.75);*/ /*blir fult eftersom border används som kant, kanske hadfe varit snyggt annars, testa senare*/\r\n} \r\n@media (orientation: portrait) {\r\n    .item{\r\n      width: 25%; /*om skärmen är avlång, visa 4 kolumner*/\r\n      /*width: 20%;*/ /*om skärmen är avlång, visa 5 kolumner*/\r\n    }\r\n    \r\n  }\r\n@media only screen and (max-width: 768px) {\r\n    .item{\r\n      width: 100%;\r\n      \r\n    }\r\n    .container{\r\n       overflow: visible;\r\n       height: 100%;\r\n       position: static;\r\n    }\r\n    \r\n  }\r\n.title{\r\n  text-transform: uppercase;\r\n  font-size: 0.8rem;\r\n  margin: 14px 5px 5px 5px;\r\n}\r\n.message{\r\n  font-size: 0.7rem;\r\n  margin: 0 5px 15px 5px;\r\n}\r\n.tag-container{\r\n/*hur får jag texten till nedre högra hörnet på diven??*/\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;     /* föräldern måste ha position: relative;*/\r\n\r\n  \r\n  margin: 10px 3px 3px 3px;\r\n}\r\n.tags{\r\n\r\n  display: inline;\r\n \r\n  font-size: 0.6rem;\r\n}\r\n\r\n.photo-item{\r\n  max-width: 100%;\r\n  image-orientation: from-image; /*Only works in firefox*/\r\n}\r\n.video-item{\r\n  max-width: 100%}\r\n\r\n.rotate6{\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n.mockup-item{\r\n    height: 150px;\r\n    background-color: #60237b;\r\n}\r\n.mockup-item:nth-child(2) {\r\n  background-color: #0FD8C5;\r\n  height: 250px;\r\n}\r\n.mockup-item:nth-child(3) {\r\n  height: 190px;\r\n}\r\n.mockup-item:nth-child(4) {\r\n  background-color: #11376E;\r\n  height: 220px;\r\n}\r\n.mockup-item:nth-child(5) {\r\n  background-color: #0FD8C5;\r\n  height: 300px;\r\n}\r\n\r\n.mockup-item:nth-child(6) {\r\n  background-color: #0FD8C5;\r\n  height: 400px;\r\n}\r\n.mockup-item:nth-child(7) {\r\n  background-color: #11376E;\r\n  height: 150px;\r\n}\r\n.mockup-item:nth-child(8) {\r\n  background-color: #11376E;\r\n  height: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@gridAnimation]=\"gItemsCurrent.length\" #mainScreen>\n \n   <div id=\"qr-item\" class=\"item\">\n     <a href=\"http://gaialab-connectr-api.azurewebsites.net/\">\n    <img class=\"photo-item\" src=\"assets/qrcode.png\">\n    </a>\n    <h3>Gör ett inlägg!</h3>\n  </div> \n\n  <div class=\"item\"  *ngFor=\"let gItem of gItemsCurrent\" [style.background-color]=\"gItem.color[0]\" [attr.data-date]=\"gItem.date\">\n    <!--<img class=\"photo-item rotate6\" *ngIf=\"gItem.photoUrl && gItem.imgOrientation\" [src]=\"gItem.photoUrl\" > -->\n    <img class=\"photo-item\" *ngIf=\"gItem.photoUrl\" [src]=\"gItem.photoUrl\">  <!--   && !gItem.imgOrientation -->\n    <img class=\"photo-item\" *ngIf=\"gItem.videoUrl && (gItem.videoUrl.indexOf('vimeo') !== -1)\" src=\"assets/logo.PNG\">\n    <!-- temporär-->\n    <!-- <iframe id=\"player1\" *ngIf=\"gItem.videoUrl && (gItem.videoUrl.indexOf('vimeo') !== -1)\"\n      [src]=\"gItem.videoUrl\" frameborder=\"0\">\n    </iframe> funkar ej pga säkerhetsskäl, se länk https://angular.io/guide/security#xss -->\n    <video class=\"video-item\"  autoplay loop muted onloadedmetadata=\"this.muted = true\" *ngIf=\"gItem.videoUrl  && (gItem.videoUrl.indexOf('vimeo') == -1)\">\n      <source [src]=\"gItem.videoUrl\" type=\"video/mp4\">\n    </video>\n    <h3 class=\"title\" [style.color]=\"gItem.color[1]\">{{gItem.title}}</h3>    \n    <p class=\"message\" [style.color]=\"gItem.color[2]\">{{gItem.message}}</p>\n    <div class=\"tag-container\" *ngIf=\"gItem.tags\">\n      <p class=\"tags\" [style.color]=\"gItem.color[3]\" *ngFor=\"let tag of gItem.tags\">\n        {{tag}}</p>\n    </div>\n  </div>\n\n  <!--<div class=\"item mockup-item\">Mockup-item</div>-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectr_connectr_service__ = __webpack_require__("../../../../../src/app/connectr/connectr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insta_insta_service__ = __webpack_require__("../../../../../src/app/insta/insta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fb_fb_service__ = __webpack_require__("../../../../../src/app/fb/fb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_item_grid_item_service__ = __webpack_require__("../../../../../src/app/grid-item/grid-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GridComponent = (function () {
    function GridComponent(cnctrService, instaService, fbService, giService) {
        this.cnctrService = cnctrService;
        this.instaService = instaService;
        this.fbService = fbService;
        this.giService = giService;
        this.gItemsCurrent = [];
        this.gItemsNew = [];
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].timer(2000, 15000); //kolla efter ny data var 15:e sekund
        timer.subscribe(function () { return _this.getGridItems(); });
    };
    GridComponent.prototype.ngAfterViewInit = function () {
        //console.log("afterViewInit");
    };
    GridComponent.prototype.ngAfterViewChecked = function () {
        //console.log("afterviewchecked");
    };
    GridComponent.prototype.getGridItems = function () {
        //Observable.interval(15000).switchMap(()=>
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].forkJoin(this.cnctrService.getItems(), this.fbService.getItems(), this.instaService.getItems())
            .subscribe(function (res) {
            _this.gItemsNew = _this.gItemsNew
                .concat(res[0])
                .concat(res[1])
                .concat(res[2]); //lägg ihop resultatet från de olika källorna
            _this.gItemsNew.sort(function (a, b) { return new Date(b.date).getTime() - new Date(a.date).getTime(); });
            if (_this.gItemsCurrent.length == 0) {
                _this.gItemsCurrent = _this.gItemsNew;
                for (var _i = 0, _a = _this.gItemsCurrent; _i < _a.length; _i++) {
                    var i = _a[_i];
                    i.setRandomColor();
                }
            }
            else if (_this.gItemsCurrent[0].date.getTime() != _this.gItemsNew[0].date.getTime()) {
                _this.gItemsCurrent = _this.gItemsNew;
                for (var _b = 0, _c = _this.gItemsCurrent; _b < _c.length; _b++) {
                    var i = _c[_b];
                    i.setRandomColor();
                }
            }
            _this.gItemsNew = [];
        }, function (err) { return console.error(err); });
    };
    return GridComponent;
}());
GridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-grid',
        template: __webpack_require__("../../../../../src/app/grid/grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grid/grid.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* trigger */])('gridAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["j" /* transition */])('* => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["k" /* query */])(':enter', [
                        //flygandes nerifrån och upp
                        // style({transform: 'translateY(+500%)'}),
                        // stagger(300, [
                        //   animate('0.5s', style({transform: 'translateY(0%)'}))
                        // ])
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* style */])({ transform: 'rotateX(-90deg)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["l" /* stagger */])(300, [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["m" /* animate */])('0.5s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* style */])({ transform: 'rotateX(0deg)' }))
                        ])
                    ], { optional: true })
                ])
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__grid_item_grid_item_service__["a" /* GridItemService */], __WEBPACK_IMPORTED_MODULE_1__connectr_connectr_service__["a" /* ConnectrService */], __WEBPACK_IMPORTED_MODULE_2__insta_insta_service__["a" /* InstaService */], __WEBPACK_IMPORTED_MODULE_3__fb_fb_service__["a" /* FbService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__connectr_connectr_service__["a" /* ConnectrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__connectr_connectr_service__["a" /* ConnectrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__insta_insta_service__["a" /* InstaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__insta_insta_service__["a" /* InstaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__fb_fb_service__["a" /* FbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__fb_fb_service__["a" /* FbService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__grid_item_grid_item_service__["a" /* GridItemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__grid_item_grid_item_service__["a" /* GridItemService */]) === "function" && _d || Object])
], GridComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/insta/insta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_item_grid_item__ = __webpack_require__("../../../../../src/app/grid-item/grid-item.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InstaService = (function () {
    function InstaService(jsonp) {
        this.jsonp = jsonp;
        this.instaUrl = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].INSTA_API + '&callback=JSONP_CALLBACK'; // URL to web API
    }
    InstaService.prototype.getItems = function () {
        var _this = this;
        return this.jsonp.get(this.instaUrl)
            .map(this.extractData)
            .map(function (items) {
            var gridItems = []; //create empty array of grid-items
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var entry = items_1[_i];
                gridItems.push(_this.formatInstaItem(entry));
            }
            //console.log(gridItems);
            return gridItems; //return grid-items (observable)
        });
        /* .catch(this.handleError); funkar ej */
    };
    InstaService.prototype.extractData = function (res) {
        var body = res.json(); //parses the response data to json
        if (body.meta.hasOwnProperty('error_type')) {
            var errMsg = JSON.stringify(body);
            console.error(errMsg);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
        }
        else {
            body = body.data; //We only want the data part of the respone 
            return body || {};
        }
    };
    InstaService.prototype.formatInstaItem = function (instaPost) {
        var gridItem = new __WEBPACK_IMPORTED_MODULE_6__grid_item_grid_item__["a" /* GridItem */]();
        gridItem.type = 'Instagram';
        gridItem.date = new Date(instaPost.created_time * 1000);
        gridItem.message = instaPost.caption.text;
        gridItem.tags = instaPost.tags;
        gridItem.createTitle(instaPost.caption.text);
        //gridItem.location = instaPost.location && instaPost.location.name || null; works?
        if (instaPost.location != null)
            gridItem.location = instaPost.location.name;
        if (instaPost.type == 'image')
            gridItem.photoUrl = instaPost.images.standard_resolution.url;
        else if (instaPost.type == 'video')
            gridItem.videoUrl = instaPost.videos.standard_resolution.url;
        else if (instaPost.type == 'carousel')
            //no support for multiple media yet
            if (instaPost.carousel_media[0].type == 'image')
                gridItem.photoUrl = instaPost.carousel_media[0].images.standard_resolution.url; //use first image
            else
                gridItem.photoUrl = instaPost.carousel_media[0].videos.standard_resolution.url; //use first video
        return gridItem;
    };
    return InstaService;
}());
InstaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */]) === "function" && _a || Object])
], InstaService);

var _a;
//# sourceMappingURL=insta.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map