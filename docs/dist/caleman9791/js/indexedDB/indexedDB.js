// const request = window.indexedDB.open("toDoList", 4);

// function Ctor() {}
// Ctor.prototype = 3;
// console.log(Object.getPrototypeOf(new Ctor()) === Object.prototype); // true

function DB() {

}
DB.prototype.conn = (nombre) => {
	return window.indexedDB.open(nombre);
}


// IDBDatabase.close event
// IDBDatabase.versionchange event
// IDBOpenDBRequest.blocked event
// IDBOpenDBRequest.upgradeneeded event
// IDBRequest.error event
// IDBRequest.readyState
// IDBRequest.success event
// IDBTransaction.abort event
// IDBTransaction.complete event
// IDBTransaction.error event

// IDBVersionChangeEvent
// IDBVersionChangeEvent.constructor
// IDBVersionChangeEvent.newVersion
// IDBVersionChangeEvent.oldVersion

// DB.prototype.conn = (event) => {
// 	return window.indexedDB.open("toDoList", 4);
// }
// DB.prototype.conn = (event) => {
// 	return window.indexedDB.open("toDoList", 4);
// }
// DB.prototype.conn = (event) => {
// 	return window.indexedDB.open("toDoList", 4);
// }
// DB.prototype.conn = (event) => {
// 	return window.indexedDB.open("toDoList", 4);
// }
// DB.prototype.conn = (event) => {
// 	return window.indexedDB.open("toDoList", 4);
// }
// DB.prototype.conn = (event) => {
// 	return window.indexedDB.open("toDoList", 4);
// }
