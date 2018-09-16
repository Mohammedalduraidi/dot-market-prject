(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-employee/add-employ-modal.html":
/*!******************************************************!*\
  !*** ./src/app/admin-employee/add-employ-modal.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Employee</h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Employee Name\" [(ngModel)]=\"name\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Employee Nationality\" [(ngModel)]=\"Nationality\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Employee Job Title\" [(ngModel)]=\"jobTitle\">\r\n    </mat-form-field>\r\n    <br>\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"Cancel()\">Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"addEmployee(name , Nationality,jobTitle)\">Add</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-employee/admin-employee.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-employee/admin-employee.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .spacer {\r\n    flex: 100 1 ;\r\n  }\r\n  \r\n  .navButton {\r\n      left: 200px;\r\n      margin:5px;\r\n  }"

/***/ }),

/***/ "./src/app/admin-employee/admin-employee.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-employee/admin-employee.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\n  <a class=\"navbar-brand\" routerLink=\"/admin-equipment\">Manage Project</a>\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-nav\">\n\n      <a class=\"nav-item nav-link active\" routerLink=\"/admin-equipment\">Admin equipment</a>\n      <a class=\"nav-item nav-link active\" routerLink=\"/admin-employees\">Admin employees</a>\n      <a class=\"nav-item nav-link active\" routerLink=\"/admin-projects\">Admin projects</a>\n\n    </div>\n  </div>\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div class=\"navbar-brand\">\n      <a>\n        <mat-icon class=\"icon\" (click)=\"logout()\">logout</mat-icon>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <button button type=\"button\" class=\"btn btn-dark\" (click)=\"openAddEmployeeModal()\">Add Employee\n    <mat-icon aria-label=\"icon-button with a plus icon\">add</mat-icon>\n  </button>\n</div>\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 d-flex align-items-stretch\">\n\n      <div class=\"card\" *ngFor=\"let employee of employeesData\">\n        <div class=\"card-body\">\n\n          <h5 class=\"card-title\">Employee Name: {{employee.name}}</h5>\n          <h5 class=\"card-text\">Nationality: {{employee.Nationality}} </h5>\n          <h5 class=\"card-text\">Job Title: {{employee.jobTitle}} </h5>\n          <a (click)=\"deleteEmployee(employee._id)\">Delete\n            <mat-icon aria-label=\" icon-button with a heart icon\">delete</mat-icon>\n          </a>\n          <a (click)=\"openUpdateModal(employee._id)\"> Update\n            <mat-icon aria-label=\" icon-button with a heart icon\">update</mat-icon>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin-employee/admin-employee.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-employee/admin-employee.component.ts ***!
  \************************************************************/
/*! exports provided: AdminEmployeeComponent, addEmployeeModal, updateEmployeeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEmployeeComponent", function() { return AdminEmployeeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmployeeModal", function() { return addEmployeeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmployeeModal", function() { return updateEmployeeModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var employeeId = '';
var AdminEmployeeComponent = /** @class */ (function () {
    function AdminEmployeeComponent(router, dialog) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.employeesData = [];
        this.logout = function () {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/logout')
                .then(function () {
                _this.router.navigate(['user-project']);
            })
                .catch(function (err) {
                throw err;
            });
        };
        //opent the add employee modal
        this.openAddEmployeeModal = function () {
            _this.dialog.open(addEmployeeModal);
        };
        //open the update modal
        this.openUpdateModal = function (id) {
            employeeId = id;
            _this.dialog.open(updateEmployeeModal);
        };
        //fetching the employees data from data-base
        this.retrieveEmployeeData = function () {
            var that = _this;
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/retrieveEmployeeData')
                .then(function (response) {
                console.log(response);
                that.employeesData = response.data;
            })
                .catch(function (error) {
                console.log(error);
            });
        };
        //delete employee from data-base
        this.deleteEmployee = function (equipmentId) {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/deleteEmployee', { id: equipmentId })
                .then(function (response) {
                alert('the employee has been deleted');
                window.location.reload();
            })
                .catch(function (error) {
                console.log(error);
            });
        };
    }
    AdminEmployeeComponent.prototype.ngOnInit = function () {
        this.retrieveEmployeeData();
    };
    AdminEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-employee',
            template: __webpack_require__(/*! ./admin-employee.component.html */ "./src/app/admin-employee/admin-employee.component.html"),
            styles: [__webpack_require__(/*! ./admin-employee.component.css */ "./src/app/admin-employee/admin-employee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AdminEmployeeComponent);
    return AdminEmployeeComponent;
}());

var addEmployeeModal = /** @class */ (function () {
    function addEmployeeModal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        //add empolyee
        this.addEmployee = function (name, Nationality, jobTitle) {
            if (name === void 0) { name = ''; }
            if (Nationality === void 0) { Nationality = ''; }
            if (jobTitle === void 0) { jobTitle = ''; }
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/addEmployee', { name: name, Nationality: Nationality, jobTitle: jobTitle })
                .then(function (response) {
                window.location.reload();
            })
                .catch(function (error) {
                console.log(error);
            });
        };
    }
    addEmployeeModal.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    addEmployeeModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-employ-modal',
            template: __webpack_require__(/*! ./add-employ-modal.html */ "./src/app/admin-employee/add-employ-modal.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            addEmployeeModal])
    ], addEmployeeModal);
    return addEmployeeModal;
}());

// Update Modal Component
var updateEmployeeModal = /** @class */ (function () {
    function updateEmployeeModal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        //Update Employee 
        this.updateEmployee = function (name, Nationality, jobTitle) {
            if (name === void 0) { name = ''; }
            if (Nationality === void 0) { Nationality = ''; }
            if (jobTitle === void 0) { jobTitle = ''; }
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/updateEmployee', { name: name, Nationality: Nationality, jobTitle: jobTitle, id: employeeId })
                .then(function (response) {
                alert('the employee has been updated');
                window.location.reload();
            })
                .catch(function (error) {
                console.log(error);
            });
        };
    }
    updateEmployeeModal.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    updateEmployeeModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'update-employee-modal',
            template: __webpack_require__(/*! ./update-employee-modal.html */ "./src/app/admin-employee/update-employee-modal.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            updateEmployeeModal])
    ], updateEmployeeModal);
    return updateEmployeeModal;
}());



/***/ }),

/***/ "./src/app/admin-employee/update-employee-modal.html":
/*!***********************************************************!*\
  !*** ./src/app/admin-employee/update-employee-modal.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Update Employee</h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Employee Name\" [(ngModel)]=\"name\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Employee Nationality\" [(ngModel)]=\"Nationality\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Employee Job Title\" [(ngModel)]=\"jobTitle\">\r\n    </mat-form-field>\r\n    <br>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"Cancel()\">Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"updateEmployee(name,Nationality,jobTitle)\">Update</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-equipment/add-modal.html":
/*!************************************************!*\
  !*** ./src/app/admin-equipment/add-modal.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Equipment</h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Equipment Name\" [(ngModel)]=\"name\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Equipment serial-number\" [(ngModel)]=\"serialNumber\">\r\n    </mat-form-field>\r\n    <br>\r\n\r\n    <input type=\"file\" placeholder=\"equipment attachment\" (change)=\"uploadImage($event)\">\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"Cancel()\">Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"addEquiepment(name , serialNumber)\">Add</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-equipment/admin-equipment.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-equipment/admin-equipment.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .spacer {\r\n    flex: 100 1 ;\r\n  }\r\n  \r\n  .navButton {\r\n      left: 200px;\r\n      margin:5px;\r\n  }\r\n  \r\n  .img{\r\n   width:150px;\r\n   height: 100px;\r\n }"

/***/ }),

/***/ "./src/app/admin-equipment/admin-equipment.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-equipment/admin-equipment.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\n  <a class=\"navbar-brand\" routerLink=\"/admin-equipment\">Manage Project</a>\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-nav\">\n\n      <a class=\"nav-item nav-link active\" routerLink=\"/admin-equipment\">Admin equipment</a>\n      <a class=\"nav-item nav-link active\" routerLink=\"/admin-employees\">Admin employees</a>\n      <a class=\"nav-item nav-link active\" routerLink=\"/admin-projects\">Admin projects</a>\n\n    </div>\n  </div>\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div class=\"navbar-brand\">\n      <a>\n        <mat-icon class=\"icon\" (click)=\"logout()\">logout</mat-icon>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <button button type=\"button\" class=\"btn btn-dark\" (click)=\"openAddModal()\">Add Equipment\n    <mat-icon aria-label=\"icon-button with a plus icon\">add</mat-icon>\n  </button>\n</div>\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 d-flex align-items-stretch\">\n\n      <div class=\"card\" *ngFor=\"let equip of equipmentsData\">\n        <div class=\"card-body\">\n          <img class=\"card-img-top img\" src=\"{{equip.image}}\" alt='Equipment image'>\n          <h5 class=\"card-title\">Equipment Name: {{equip.name}}</h5>\n          <h5 class=\"card-text\">Serial-Sumbe: {{equip.serialNumber}} </h5>\n          <a (click)=\"deleteEquipment(equip._id)\">Delete\n            <mat-icon aria-label=\" icon-button with a heart icon\">delete</mat-icon>\n          </a>\n          <a (click)=\"openUpdateModal(equip._id)\"> Update\n            <mat-icon aria-label=\" icon-button with a heart icon\">update</mat-icon>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin-equipment/admin-equipment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-equipment/admin-equipment.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminEquipmentComponent, addModal, updateModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEquipmentComponent", function() { return AdminEquipmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addModal", function() { return addModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModal", function() { return updateModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var equipmentId = '';
var AdminEquipmentComponent = /** @class */ (function () {
    function AdminEquipmentComponent(router, dialog) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.equipmentsData = [];
        this.logout = function () {
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/logout')
                .then(function () {
                _this.router.navigate(['user-project']);
            })
                .catch(function (err) {
                throw err;
            });
        };
        //Open the add model
        this.openAddModal = function () {
            _this.dialog.open(addModal);
        };
        //open the update modal
        this.openUpdateModal = function (id) {
            equipmentId = id;
            _this.dialog.open(updateModal);
        };
        //fetching the equipments from data-base
        this.retrieveEquipment = function () {
            var that = _this;
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/retrieveEquipment')
                .then(function (response) {
                that.equipmentsData = response.data;
            })
                .catch(function (error) {
                console.log(error);
            });
        };
        //delete the equipment from data-base
        this.deleteEquipment = function (equipmentId) {
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/deleteEquipment', { id: equipmentId })
                .then(function (response) {
                alert('the equipment has been deleted');
                window.location.reload();
            })
                .catch(function (error) {
                console.log(error);
            });
        };
    }
    AdminEquipmentComponent.prototype.ngOnInit = function () {
        this.retrieveEquipment();
    };
    AdminEquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-equipment',
            template: __webpack_require__(/*! ./admin-equipment.component.html */ "./src/app/admin-equipment/admin-equipment.component.html"),
            styles: [__webpack_require__(/*! ./admin-equipment.component.css */ "./src/app/admin-equipment/admin-equipment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AdminEquipmentComponent);
    return AdminEquipmentComponent;
}());

// Add Modal component
var addModal = /** @class */ (function () {
    function addModal(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.uploadImage = function (event) {
            var photo = event.target.files[0];
            var that = _this;
            var fileReader = new FileReader();
            fileReader.readAsDataURL(photo);
            fileReader.onload = function (e) {
                that.selectedImage = e.target.result;
            };
        };
        this.addEquiepment = function (name, serialNumber) {
            if (name === void 0) { name = ''; }
            if (serialNumber === void 0) { serialNumber = ''; }
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/addEquiepment', { name: name, serialNumber: serialNumber, image: _this.selectedImage })
                .then(function (response) {
                window.location.reload();
            })
                .catch(function (error) {
                console.log(error);
            });
        };
    }
    addModal.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    addModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-modal',
            template: __webpack_require__(/*! ./add-modal.html */ "./src/app/admin-equipment/add-modal.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            addModal])
    ], addModal);
    return addModal;
}());

// Update Modal Component
var updateModal = /** @class */ (function () {
    function updateModal(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.uploadImage = function (event) {
            var photo = event.target.files[0];
            var that = _this;
            var fileReader = new FileReader();
            fileReader.readAsDataURL(photo);
            fileReader.onload = function (e) {
                that.selectedImage = e.target.result;
            };
        };
        //update the equipment
        this.updateEquipment = function (name, serialNumber) {
            if (name === void 0) { name = ''; }
            if (serialNumber === void 0) { serialNumber = ''; }
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.put('/updateEquipment', { name: name, serialNumber: serialNumber, image: _this.selectedImage, id: equipmentId })
                .then(function (response) {
                alert('the equipment has been updated');
                window.location.reload();
            })
                .catch(function (error) {
                console.log(error);
            });
        };
    }
    updateModal.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    updateModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'update-modal',
            template: __webpack_require__(/*! ./update-modal.html */ "./src/app/admin-equipment/update-modal.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            updateModal])
    ], updateModal);
    return updateModal;
}());



/***/ }),

/***/ "./src/app/admin-equipment/update-modal.html":
/*!***************************************************!*\
  !*** ./src/app/admin-equipment/update-modal.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Update Equipment</h1>\r\n<div mat-dialog-content>\r\n        <input type=\"file\" placeholder=\"update attachment\" (change)=\"uploadImage($event)\">\r\n    <mat-form-field class=\"example-full-width\">\r\n        <input matInput type=\"text\" placeholder=\"equipment name\" [(ngModel)]=\"name\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"example-full-width\">\r\n        <input matInput type=\"text\" placeholder=\"equipment serialNumber\" [(ngModel)]=\"serialNumber\">\r\n    </mat-form-field>\r\n    <br>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"Cancel()\">Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"updateEquipment(name,serialNumber)\">Update</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-project/add-project.html":
/*!************************************************!*\
  !*** ./src/app/admin-project/add-project.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Project</h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Project Name\" [(ngModel)]=\"name\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Project Type\" [(ngModel)]=\"type\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"From Date\" [(ngModel)]=\"fromDate\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"To date\" [(ngModel)]=\"toDate\">\r\n    </mat-form-field>\r\n    <br>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"Cancel()\">Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"addProject(name , type,fromDate, toDate)\">Add</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-project/admin-project.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-project/admin-project.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .spacer {\r\n    flex: 100 1 ;\r\n  }\r\n  \r\n  .navButton {\r\n      left: 200px;\r\n      margin:5px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/admin-project/admin-project.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-project/admin-project.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\n  <a class=\"navbar-brand\" routerLink=\"/admin-equipment\">Manage Project</a>\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-nav\">\n\n      <a class=\"nav-item nav-link active\" routerLink=\"/admin-equipment\">Admin equipment</a>\n      <a class=\"nav-item nav-link active\" routerLink=\"/admin-employees\">Admin employees</a>\n      <a class=\"nav-item nav-link active\" routerLink=\"/admin-projects\">Admin projects</a>\n\n    </div>\n  </div>\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div class=\"navbar-brand\">\n      <a>\n        <mat-icon class=\"icon\" (click)=\"logout()\">logout</mat-icon>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <button button type=\"button\" class=\"btn btn-dark\" (click)=\"openProjectModal()\">Add Project\n    <mat-icon aria-label=\"icon-button with a plus icon\">add</mat-icon>\n  </button>\n</div>\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 d-flex align-items-stretch\">\n\n      <div class=\"card\" *ngFor=\"let project of projectData\">\n        <div class=\"card-body\">\n\n          <h5 class=\"card-title\">Project Name: {{project.name}}</h5>\n          <h5 class=\"card-text\">Project Type: {{project.type}} </h5>\n          <h5 class=\"card-text\">From date: {{project.fromDate}} </h5>\n          <h5 class=\"card-text\">To date: {{project.toDate}} </h5>\n          <a (click)=\"deleteProject(project._id)\">Delete\n            <mat-icon aria-label=\" icon-button with a heart icon\">delete</mat-icon>\n          </a>\n          <a (click)=\"openUpdateModal(project._id)\"> Update\n            <mat-icon aria-label=\" icon-button with a heart icon\">update</mat-icon>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin-project/admin-project.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-project/admin-project.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminProjectComponent, addProject, updateProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProjectComponent", function() { return AdminProjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return addProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProject", function() { return updateProject; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var projectID = '';
var AdminProjectComponent = /** @class */ (function () {
    function AdminProjectComponent(router, dialog) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.projectData = [];
        this.logout = function () {
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/logout')
                .then(function () {
                _this.router.navigate(['user-project']);
            })
                .catch(function (err) {
                throw err;
            });
        };
        //open the add prject modal
        this.openProjectModal = function () {
            _this.dialog.open(addProject);
        };
        //open the update modal
        this.openUpdateModal = function (id) {
            projectID = id;
            _this.dialog.open(updateProject);
        };
        //fetching the project data from data-base
        this.retrieveProjectData = function () {
            var that = _this;
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/retrieveProjectData')
                .then(function (response) {
                console.log(response);
                that.projectData = response.data;
            })
                .catch(function (error) {
                console.log(error);
            });
        };
        //delete project from data-base
        this.deleteProject = function (id) {
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/deleteProject', { id: id })
                .then(function (response) {
                alert('the employee has been deleted');
                window.location.reload();
            })
                .catch(function (error) {
                console.log(error);
            });
        };
    }
    AdminProjectComponent.prototype.ngOnInit = function () {
        this.retrieveProjectData();
    };
    AdminProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-project',
            template: __webpack_require__(/*! ./admin-project.component.html */ "./src/app/admin-project/admin-project.component.html"),
            styles: [__webpack_require__(/*! ./admin-project.component.css */ "./src/app/admin-project/admin-project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AdminProjectComponent);
    return AdminProjectComponent;
}());

// Add Modal component
var addProject = /** @class */ (function () {
    function addProject(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.addProject = function (name, type, fromDate, toDate) {
            if (name === void 0) { name = ''; }
            if (type === void 0) { type = ''; }
            if (fromDate === void 0) { fromDate = ''; }
            if (toDate === void 0) { toDate = ''; }
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/addProject', { name: name, type: type, fromDate: fromDate, toDate: toDate })
                .then(function (response) {
                window.location.reload();
            })
                .catch(function (error) {
                console.log(error);
            });
        };
    }
    addProject.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    addProject = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-project',
            template: __webpack_require__(/*! ./add-project.html */ "./src/app/admin-project/add-project.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            addProject])
    ], addProject);
    return addProject;
}());

// Update Modal Component
var updateProject = /** @class */ (function () {
    function updateProject(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        //update the equipment
        this.updateProject = function (name, type, fromDate, toDate) {
            if (name === void 0) { name = ''; }
            if (type === void 0) { type = ''; }
            if (fromDate === void 0) { fromDate = ''; }
            if (toDate === void 0) { toDate = ''; }
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.put('/updateProject', { name: name, type: type, fromDate: fromDate, toDate: toDate, id: projectID })
                .then(function (response) {
                alert('the project has been updated');
                window.location.reload();
            })
                .catch(function (error) {
                console.log(error);
            });
        };
    }
    updateProject.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    updateProject = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'update-project',
            template: __webpack_require__(/*! ./update-project.html */ "./src/app/admin-project/update-project.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            updateProject])
    ], updateProject);
    return updateProject;
}());



/***/ }),

/***/ "./src/app/admin-project/update-project.html":
/*!***************************************************!*\
  !*** ./src/app/admin-project/update-project.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Update project</h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Project Name\" [(ngModel)]=\"name\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"Project Type\" [(ngModel)]=\"type\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"From Date\" [(ngModel)]=\"fromDate\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"text\" placeholder=\"To date\" [(ngModel)]=\"toDate\">\r\n    </mat-form-field>\r\n    <br>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"Cancel()\">Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"updateProject(name,type,fromDate,toDate)\">Update</button>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'manage-project';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ "./src/app/splash-screen/splash-screen.component.ts");
/* harmony import */ var _admin_employee_admin_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-employee/admin-employee.component */ "./src/app/admin-employee/admin-employee.component.ts");
/* harmony import */ var _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-equipment/admin-equipment.component */ "./src/app/admin-equipment/admin-equipment.component.ts");
/* harmony import */ var _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-project/admin-project.component */ "./src/app/admin-project/admin-project.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _user_project_user_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-project/user-project.component */ "./src/app/user-project/user-project.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-drag-drop */ "./node_modules/ng-drag-drop/index.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import angular routing

//import components







//import material-ui and other packeges












var appRoutes = [
    {
        path: '',
        component: _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenComponent"]
    },
    {
        path: 'admin-equipment',
        component: _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_6__["AdminEquipmentComponent"]
    },
    {
        path: 'admin-employees',
        component: _admin_employee_admin_employee_component__WEBPACK_IMPORTED_MODULE_5__["AdminEmployeeComponent"]
    },
    {
        path: 'admin-projects',
        component: _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_7__["AdminProjectComponent"]
    },
    {
        path: 'user-project',
        component: _user_project_user_project_component__WEBPACK_IMPORTED_MODULE_9__["UserProjectComponent"]
    },
    {
        path: 'user-details',
        component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenComponent"],
                _admin_employee_admin_employee_component__WEBPACK_IMPORTED_MODULE_5__["AdminEmployeeComponent"],
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_6__["AdminEquipmentComponent"],
                _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_7__["AdminProjectComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"],
                _user_project_user_project_component__WEBPACK_IMPORTED_MODULE_9__["UserProjectComponent"],
                _user_project_user_project_component__WEBPACK_IMPORTED_MODULE_9__["LoginModal1"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["LoginModal2"],
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_6__["addModal"],
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_6__["updateModal"],
                _admin_employee_admin_employee_component__WEBPACK_IMPORTED_MODULE_5__["addEmployeeModal"],
                _admin_employee_admin_employee_component__WEBPACK_IMPORTED_MODULE_5__["updateEmployeeModal"],
                _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_7__["addProject"],
                _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_7__["updateProject"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_11__["NgDragDropModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"]
            ], entryComponents: [
                _user_project_user_project_component__WEBPACK_IMPORTED_MODULE_9__["LoginModal1"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["LoginModal2"],
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_6__["addModal"],
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_6__["updateModal"],
                _admin_employee_admin_employee_component__WEBPACK_IMPORTED_MODULE_5__["addEmployeeModal"],
                _admin_employee_admin_employee_component__WEBPACK_IMPORTED_MODULE_5__["updateEmployeeModal"],
                _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_7__["addProject"],
                _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_7__["updateProject"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.css":
/*!***********************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.html":
/*!************************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src='https://media.licdn.com/dms/image/C560BAQGrzdagbTuBmg/company-logo_200_200/0?e=1544659200&v=beta&t=hiDsFnIbA_WjGTDU1nOrL66DZP7VNgEHCJgtt1gcuz8'\n    alt='' class='img'>\n</div>"

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.component.ts ***!
  \**********************************************************/
/*! exports provided: SplashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function() { return SplashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplashScreenComponent = /** @class */ (function () {
    function SplashScreenComponent(router) {
        this.router = router;
    }
    SplashScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['user-project']);
        }, 3000);
    };
    SplashScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-splash-screen',
            template: __webpack_require__(/*! ./splash-screen.component.html */ "./src/app/splash-screen/splash-screen.component.html"),
            styles: [__webpack_require__(/*! ./splash-screen.component.css */ "./src/app/splash-screen/splash-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SplashScreenComponent);
    return SplashScreenComponent;
}());



/***/ }),

/***/ "./src/app/user-details/login-Modal2.html":
/*!************************************************!*\
  !*** ./src/app/user-details/login-Modal2.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Login as admin</h1>\r\n<div mat-dialog-content>\r\n\t <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Enter Admin Username\" [(ngModel)]=\"name\">\r\n  </mat-form-field>\r\n  <br>\r\n  \r\n <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"password\" placeholder=\"Enter Admin Password\" [(ngModel)]=\"password\" >\r\n  </mat-form-field>\r\n  <br>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"cancel()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"login(name,password)\">Submit</button>\r\n</div>"

/***/ }),

/***/ "./src/app/user-details/user-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-details/user-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .spacer {\r\n    flex: 100 1 ;\r\n  }\r\n  \r\n  .navButton {\r\n      left: 200px;\r\n      margin:5px;\r\n  }"

/***/ }),

/***/ "./src/app/user-details/user-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\n  <a class=\"navbar-brand\" routerLink=\"/user-project\">Manage Project</a>\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-nav\">\n\n      <a class=\"nav-item nav-link active\" routerLink=\"/user-project\">User Project</a>\n      <a class=\"nav-item nav-link active\" routerLink=\"/user-details\">User Details</a>\n    </div>\n  </div>\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div class=\"navbar-brand\">\n      <a (click)=\"openModal()\">Admin Login\n        <mat-icon class=\"icon\">person</mat-icon>\n      </a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent, LoginModal2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModal2", function() { return LoginModal2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(dialog) {
        var _this = this;
        this.dialog = dialog;
        this.ngOnInit = function () {
        };
        this.openModal = function () {
            _this.dialog.open(LoginModal2);
        };
    }
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());

var LoginModal2 = /** @class */ (function () {
    function LoginModal2(dialogRef, data, router) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.cancel = function () {
            _this.dialogRef.close();
        };
        this.login = function (name, password) {
            if (name === void 0) { name = ''; }
            if (password === void 0) { password = ''; }
            if (name.length === 0 && password.length === 0) {
                alert('please fill the inputs');
            }
            else {
                axios__WEBPACK_IMPORTED_MODULE_3___default()({
                    method: 'POST',
                    url: '/login',
                    data: { username: name, password: password }
                })
                    .then(function (res) {
                    _this.router.navigate(['admin-equipment']);
                })
                    .catch(function (err) {
                    alert('user not found');
                });
            }
        };
    }
    LoginModal2 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-Modal2',
            template: __webpack_require__(/*! ./login-Modal2.html */ "./src/app/user-details/login-Modal2.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            LoginModal2,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginModal2);
    return LoginModal2;
}());



/***/ }),

/***/ "./src/app/user-project/login-Modal1.html":
/*!************************************************!*\
  !*** ./src/app/user-project/login-Modal1.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Login as admin</h1>\r\n<div mat-dialog-content>\r\n\t <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Enter Admin Username\" [(ngModel)]=\"name\">\r\n  </mat-form-field>\r\n  <br>\r\n  \r\n <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"password\" placeholder=\"Enter Admin Password\" [(ngModel)]=\"password\" >\r\n  </mat-form-field>\r\n  <br>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"cancel()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"login(name,password)\">Submit</button>\r\n</div>"

/***/ }),

/***/ "./src/app/user-project/user-project.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-project/user-project.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .spacer {\r\n    flex: 100 1 ;\r\n  }\r\n  \r\n  .navButton {\r\n      left: 200px;\r\n      margin:5px;\r\n  }"

/***/ }),

/***/ "./src/app/user-project/user-project.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-project/user-project.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\r\n  <a class=\"navbar-brand\" routerLink=\"/user-project\">Manage Project</a>\r\n  <div class=\"navbar-expand mr-auto\">\r\n    <div class=\"navbar-nav\">\r\n\r\n      <a class=\"nav-item nav-link active\" routerLink=\"/user-project\">User Project</a>\r\n      <a class=\"nav-item nav-link active\" routerLink=\"/user-details\">User Details</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"navbar-expand ml-auto navbar-nav\">\r\n    <div class=\"navbar-brand\">\r\n      <a (click)=\"openModal()\">Admin Login\r\n        <mat-icon class=\"icon\">person</mat-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/user-project/user-project.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-project/user-project.component.ts ***!
  \********************************************************/
/*! exports provided: UserProjectComponent, LoginModal1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectComponent", function() { return UserProjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModal1", function() { return LoginModal1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var UserProjectComponent = /** @class */ (function () {
    function UserProjectComponent(dialog) {
        var _this = this;
        this.dialog = dialog;
        this.ngOnInit = function () {
        };
        this.openModal = function () {
            _this.dialog.open(LoginModal1);
        };
    }
    UserProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-project',
            template: __webpack_require__(/*! ./user-project.component.html */ "./src/app/user-project/user-project.component.html"),
            styles: [__webpack_require__(/*! ./user-project.component.css */ "./src/app/user-project/user-project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], UserProjectComponent);
    return UserProjectComponent;
}());

var LoginModal1 = /** @class */ (function () {
    function LoginModal1(dialogRef, data, router) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.cancel = function () {
            _this.dialogRef.close();
        };
        this.login = function (name, password) {
            if (name === void 0) { name = ''; }
            if (password === void 0) { password = ''; }
            if (name.length === 0 && password.length === 0) {
                alert('please fill the inputs');
            }
            else {
                axios__WEBPACK_IMPORTED_MODULE_3___default()({
                    method: 'POST',
                    url: '/login',
                    data: { username: name, password: password }
                })
                    .then(function (res) {
                    _this.router.navigate(['admin-equipment']);
                })
                    .catch(function (err) {
                    alert('user not found');
                });
            }
        };
    }
    LoginModal1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-Modal1',
            template: __webpack_require__(/*! ./login-Modal1.html */ "./src/app/user-project/login-Modal1.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            LoginModal1,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginModal1);
    return LoginModal1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eleimat\Desktop\dot-market-prject\manage-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map