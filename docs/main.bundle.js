webpackJsonp([0,3],{

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(456);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VKService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VKService = (function () {
    function VKService() {
    }
    /**
     * @param - user id
     * @return - array of friends with brief data
     */
    VKService.getFriends = function (id) {
        return new Promise(function (resolve) {
            return VK.api('friends.get', {
                user_id: id,
                order: "hint",
                fields: "photo_50"
            }, function (r) {
                resolve(r.response.map(function (v) { return new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */](v.uid, v.first_name, v.last_name, v.photo_50); }));
            });
        });
    };
    /**
     * @param - current user id
     */
    VKService.getId = function () {
        return window.location.href.split('&').find(function (v) { return v.includes('viewer_id'); }).split('=')[1];
    };
    /**
     * @param - user id
     * @return - user
     */
    VKService.getUsers = function (id) {
        return new Promise(function (resolve) {
            return VK.api('users.get', {
                user_ids: id,
                fields: "photo_50"
            }, function (r) {
                resolve(new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */](r.response[0].uid, r.response[0].first_name, r.response[0].last_name, r.response[0].photo_50));
            });
        });
    };
    /**
     * @param - user id
     * @return - array of users
     */
    VKService.getSearch = function (query) {
        return new Promise(function (resolve) {
            return VK.api('users.search', {
                q: query,
                count: 10,
                fields: "photo_50"
            }, function (r) {
                resolve(r.response.slice(1).map(function (v) { return new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */](v.uid, v.first_name, v.last_name, v.photo_50); }));
            });
        });
    };
    VKService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], VKService);
    return VKService;
}());
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/vk.service.js.map

/***/ },

/***/ 339:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 339;


/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(451);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/main.js.map

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ActiveUsersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActiveUsersListComponent = (function () {
    function ActiveUsersListComponent() {
        this.deleteUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ActiveUsersListComponent.prototype, "users", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], ActiveUsersListComponent.prototype, "deleteUser", void 0);
    ActiveUsersListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'active-users-list',
            template: "\n    <h4>\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435:</h4>\n    <users-list \n      class=\"users-list\"\n      iconClass=\"glyphicon glyphicon-minus\"\n      [users]=users \n      (buttonClick)=\"deleteUser.emit($event)\">\n    </users-list>\n  ",
            styles: ["\n    h4{\n      color: #337ab7;\n    }\n    .users-list::-webkit-scrollbar\n    {\n      width: 6px;\n      background-color: #FFFFFF;\n    }\n\n    .users-list::-webkit-scrollbar-thumb\n    {\n      border-radius: 3px;\n      background-color: #E8F4FF;\n      opacity: 0.25;\n    }\n\n    .users-list{\n      width: 100%;\n      height: 750px;\n      float: left;\n      overflow-y: hidden;\n    }    \n    .users-list:hover{\n      overflow-y: auto;\n    }    \n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ActiveUsersListComponent);
    return ActiveUsersListComponent;
}());
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/active-users-list.component.js.map

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vk_service__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.users = [];
        this.selectedUsers = [];
        /**
         * Move user to the Array of seletec users
         * @param - User to select
         */
        this.selectUser = function (user) { return _this.swapUser(_this.users, _this.selectedUsers, user); };
        /**
         * Move user to the main Array
         * @param - User to move
         */
        this.deleteUser = function (user) { return _this.swapUser(_this.selectedUsers, _this.users, user); };
    }
    /**
     * @param - source Array
     * @param - target Array
     * @param - User which should be swaped
     */
    AppComponent.prototype.swapUser = function (arr1, arr2, obj) {
        arr1.splice(arr1.indexOf(obj), 1);
        if (arr2.findIndex(function (user) { return obj.id == user.id; }) == -1)
            arr2.push(obj);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //requests friends of the user
        __WEBPACK_IMPORTED_MODULE_1__vk_service__["a" /* VKService */].getFriends(__WEBPACK_IMPORTED_MODULE_1__vk_service__["a" /* VKService */].getId()).then(function (v) {
            _this.users = v;
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: "\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <user-input           class=\"col-sm-4\" [users]=\"users\"           (selectUser)=\"selectUser($event)\"  ></user-input>\n        <active-users-list    class=\"col-sm-4\" [users]=\"selectedUsers\"   (deleteUser)=\"deleteUser($event)\"  ></active-users-list>\n        <friends-intersection class=\"col-sm-4\" [(users)]=\"users\"         [(selectedUsers)]=\"selectedUsers\"  ></friends-intersection>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/app.component.js.map

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vk_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_input_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__friends_intersection_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__active_users_list_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_list_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filter_users_pipe__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sort_users_pipe__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_input_component__["a" /* UserInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__friends_intersection_component__["a" /* FriendsIntersectionComponent */],
                __WEBPACK_IMPORTED_MODULE_8__active_users_list_component__["a" /* ActiveUsersListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__users_list_component__["a" /* UsersListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__filter_users_pipe__["a" /* FilterUsersPipe */],
                __WEBPACK_IMPORTED_MODULE_11__sort_users_pipe__["a" /* SortUsersPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__vk_service__["a" /* VKService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/app.module.js.map

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FilterUsersPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterUsersPipe = (function () {
    function FilterUsersPipe() {
        this.transform = function (value, input) { return value.filter(function (v) {
            return (v.id + '').toLowerCase().includes(input) ||
                (v.firstName + " " + v.lastName).toLowerCase().includes(input) ||
                (v.lastName + " " + v.firstName).toLowerCase().includes(input);
        }); };
    }
    FilterUsersPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'filterUsers',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FilterUsersPipe);
    return FilterUsersPipe;
}());
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/filter-users.pipe.js.map

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vk_service__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FriendsIntersectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendsIntersectionComponent = (function () {
    function FriendsIntersectionComponent() {
        var _this = this;
        this.oldUsersLength = 0;
        /**
         * Add user to the Array of selected users
         * Remove user from the main Array if needed
         * @param - User
         */
        this.addUser = function (user) {
            if (_this.users.findIndex(function (v) { return (v.id == user.id); }) != -1)
                _this.users.splice(_this.users.indexOf(user), 1);
            if (_this.selectedUsers.findIndex(function (selectedUser) { return selectedUser.id == user.id; }) == -1)
                _this.selectedUsers.push(user);
        };
    }
    FriendsIntersectionComponent.prototype.ngDoCheck = function () {
        //check if array length is changed
        if (this.selectedUsers.length != this.oldUsersLength) {
            if (this.selectedUsers.length > 1)
                this.upDateCommonFriends();
            else
                this.commonFriends = [];
            this.oldUsersLength = this.selectedUsers.length;
        }
    };
    /**
     * Requests friends and identifes commun ones
     */
    FriendsIntersectionComponent.prototype.upDateCommonFriends = function () {
        var _this = this;
        this.getFriendsRecursively(this.selectedUsers.slice(), function (friendsMatrix) {
            if (friendsMatrix.length > 0)
                _this.commonFriends = friendsMatrix.reduce(function (arr1, arr2) { return arr1.filter(function (userArr1) { return arr2.findIndex(function (userArr2) { return userArr1.id == userArr2.id; }) != -1 ? true : false; }); });
        });
    };
    /**
     * Recursively load User friends and
     * push the two dimensoanal array to callbakc
     * @param - Array of users which friends have to be requested
     * @param - Function for processing of the "friends' matrix"
     */
    FriendsIntersectionComponent.prototype.getFriendsRecursively = function (users, callbakc) {
        function getFriends(users, accum) {
            if (users.length > 0)
                __WEBPACK_IMPORTED_MODULE_1__vk_service__["a" /* VKService */].getFriends(users.shift().id).then(function (response) {
                    getFriends(users, accum.concat([response]));
                });
            else
                callbakc(accum);
        }
        getFriends(users, []);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], FriendsIntersectionComponent.prototype, "users", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], FriendsIntersectionComponent.prototype, "selectedUsers", void 0);
    FriendsIntersectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'friends-intersection',
            template: "\n    <h4>\u041E\u0431\u0449\u0438\u0435:</h4>\n    <users-list \n      class=\"users-list\" \n      iconClass=\"glyphicon glyphicon-plus\"\n      [users]=commonFriends \n      (buttonClick)=\"addUser($event)\">\n    </users-list>'\n  ",
            styles: ["\n    h4{\n      color: #337ab7;\n    }\n    .users-list::-webkit-scrollbar\n    {\n      width: 6px;\n      background-color: #FFFFFF;\n    }\n\n    .users-list::-webkit-scrollbar-thumb\n    {\n      border-radius: 3px;\n      background-color: #E8F4FF;\n      opacity: 0.25;\n    }\n    .users-list{\n      width: 100%;\n      height: 750px;\n      float: left;\n      overflow-y: hidden;\n    }    \n    .users-list:hover{\n      overflow-y: auto;\n    }    \n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], FriendsIntersectionComponent);
    return FriendsIntersectionComponent;
}());
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/friends-intersection.component.js.map

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SortUsersPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortUsersPipe = (function () {
    function SortUsersPipe() {
        this.transform = function (users) { return users.sort(function (a, b) { return a.firstName + a.lastName > b.firstName + b.lastName ? 1 : -1; }); };
    }
    SortUsersPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'sortUsers',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], SortUsersPipe);
    return SortUsersPipe;
}());
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/sort-users.pipe.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vk_service__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInputComponent = (function () {
    function UserInputComponent() {
        this.selectUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.searchResult = [];
        this.onUpdate = false;
        this.inputString = "";
    }
    /**
     * Handles global search in VK based on input string
     * @param - input
     */
    UserInputComponent.prototype.searchUsers = function (input) {
        var _this = this;
        if (input.length > 0) {
            if (!this.onUpdate) {
                __WEBPACK_IMPORTED_MODULE_1__vk_service__["a" /* VKService */].getSearch(input).then(function (response) {
                    return _this.searchResult = response.filter(function (user) { return _this.users.findIndex(function (newUser) { return user.id == newUser.id; }) == -1; });
                });
                this.onUpdate = true;
                setTimeout(function () { return _this.onUpdate = false; }, 500);
            }
        }
        else {
            this.searchResult = [];
            this.onUpdate = false;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], UserInputComponent.prototype, "users", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], UserInputComponent.prototype, "selectUser", void 0);
    UserInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'user-input',
            template: "\n    <input type=\"text\" class=input [(ngModel)]=\"inputString\" (keyup)=searchUsers(inputString)/>\n    <br/>\n    <div class=\"users-list\">\n      <users-list \n        [users]=\"users  | sortUsers | filterUsers : inputString.toLowerCase()\" \n        iconClass =\"glyphicon glyphicon-plus\" \n        (buttonClick)=\"selectUser.emit($event)\">\n      </users-list> \n      <users-list \n        [users]=\"searchResult\" \n        iconClass =\"glyphicon glyphicon-plus\" \n        (buttonClick)=\"selectUser.emit($event)\">\n      </users-list>  \n    </div>\n  ",
            styles: ["\n    .users-list::-webkit-scrollbar\n    {\n      width: 6px;\n      background-color: #FFFFFF;\n    }\n\n    .users-list::-webkit-scrollbar-thumb\n    {\n      border-radius: 3px;\n      background-color: #E8F4FF;\n      opacity: 0.25;\n    }\n\n    .users-list{\n      width: 100%;\n      height: 750px;\n      float: left;\n      overflow-y: hidden;\n    }\n    .users-list:hover{\n      overflow-y: auto;\n    }\n\n    .input {\n      width: 100%;\n    }\n    \n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], UserInputComponent);
    return UserInputComponent;
}());
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/user-input.component.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User(id, firstName, lastName, photoUrl) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.photoUrl = photoUrl;
    }
    return User;
}());
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/user.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersListComponent = (function () {
    function UsersListComponent() {
        this.buttonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], UsersListComponent.prototype, "users", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], UsersListComponent.prototype, "iconClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], UsersListComponent.prototype, "buttonClick", void 0);
    UsersListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'users-list',
            template: "\n    <table class=\"usersTable\">\n      <tr class=\"user\" *ngFor=\"let user of users\" >\n        <th>\n          <a target=\"_blank\" href=\"http://vk.com/id{{user.id}}\">\n            <img src=\"{{user.photoUrl}}\"/>\n            <span class=name>{{\" \" + user.firstName + \" \" + user.lastName}}</span>\n          </a>\n        </th>\n        <th><span class=\"{{iconClass}}\" style=\"cursor: pointer\" aria-hidden=\"true\" (click)=\"buttonClick.emit(user)\"></span></th>\n      </tr> \n    </table>   \n  ",
            styles: ["\n    .usersTable{\n      width: 95%;\n      margin-left: 2.5%;\n    }\n    .user:hover{\n      background-color: #EDF3FF;\n    }   \n    a{ \n      text-decoration:none; \n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersListComponent);
    return UsersListComponent;
}());
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/users-list.component.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true
};
//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/environment.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/alexey/Documents/commonFriends/src/polyfills.js.map

/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(340);


/***/ }

},[624]);
//# sourceMappingURL=main.bundle.map