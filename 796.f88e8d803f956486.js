"use strict";(self.webpackChunksimatInscripcionEnLinea=self.webpackChunksimatInscripcionEnLinea||[]).push([[796],{2796:(Q,g,c)=>{c.r(g),c.d(g,{OfficialsModule:()=>R});var r=c(9808),d=c(1196),l=c(2382),t=c(1223),u=c(8037);const m=function(e){return{"bg-color-blue-light":e}};function _(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"tr",22),t.TgZ(1,"td",23),t._uU(2),t.qZA(),t.TgZ(3,"td",24),t._uU(4),t.qZA(),t.TgZ(5,"td",25),t.TgZ(6,"button",26),t.NdJ("click",function(){const s=t.CHM(o).$implicit;return t.oxw(2).setRowSelected(s)}),t._uU(7,"Ver"),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=i.$implicit;t.Q6J("ngClass",t.VKq(3,m,i.index%2==0)),t.xp6(2),t.hij("",o.cod_dane_establecimiento," "),t.xp6(2),t.Oqu(o.nombre_establecimiento)}}const Z=function(e){return{active:e}};function h(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"li",27),t.TgZ(1,"a",28),t.NdJ("click",function(){const s=t.CHM(o).index;return t.oxw(2).setPage(s)}),t._uU(2),t.qZA(),t.qZA()}if(2&e){const o=i.$implicit,n=i.index,a=t.oxw(2);t.Q6J("ngClass",t.VKq(2,Z,n==a.currentPage)),t.xp6(2),t.Oqu(o)}}const p=function(e){return{disabled:e}};function v(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t._UZ(3,"span",5),t.TgZ(4,"input",6),t.NdJ("input",function(a){return t.CHM(o),t.oxw().onSearchChange(a)}),t.qZA(),t.TgZ(5,"a",7),t._UZ(6,"span",8),t.qZA(),t.qZA(),t.TgZ(7,"div",9),t.TgZ(8,"label"),t._uU(9),t.qZA(),t._UZ(10,"span",10),t._UZ(11,"span",11),t.qZA(),t.qZA(),t.TgZ(12,"table",12),t.TgZ(13,"thead"),t.TgZ(14,"tr",13),t.TgZ(15,"th",14),t._uU(16,"C\xf3digo DANE"),t.qZA(),t.TgZ(17,"th",14),t._uU(18,"Establecimiento Educativo"),t.qZA(),t._UZ(19,"th",14),t.qZA(),t.qZA(),t.TgZ(20,"tbody"),t.YNc(21,_,8,5,"tr",15),t.qZA(),t.qZA(),t.TgZ(22,"div",16),t.TgZ(23,"nav",17),t.TgZ(24,"ul",18),t.TgZ(25,"li",19),t.TgZ(26,"a",20),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return a.setPage(a.currentPage-1)}),t._uU(27,"Anterior"),t.qZA(),t.qZA(),t.YNc(28,h,3,4,"li",21),t.TgZ(29,"li",19),t.TgZ(30,"a",20),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return a.setPage(a.currentPage+1)}),t._uU(31,"Siguiente"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=t.oxw();t.xp6(9),t.AsE("",o.ROWS_PER_PAGE*(o.currentPage+1)," de ",o.inputData.length," resultados"),t.xp6(12),t.Q6J("ngForOf",o.currentPageItems),t.xp6(5),t.Q6J("ngClass",t.VKq(6,p,0==o.currentPage)),t.xp6(2),t.Q6J("ngForOf",o.totalPagesArray),t.xp6(2),t.Q6J("ngClass",t.VKq(8,p,o.currentPage==o.totalPages-1))}}function f(e,i){1&e&&(t.TgZ(0,"div",29),t._UZ(1,"div",30),t.TgZ(2,"p",31),t._uU(3,"Buscando registros..."),t.qZA(),t.qZA())}let T=(()=>{class e{constructor(){this._row_selected=new t.vpe,this.inputData=[],this.fixedData=[],this.totalPages=1,this.totalPagesArray=[],this.ROWS_PER_PAGE=10,this.currentPage=0,this.currentPageItems=[]}set _payload(o){o&&(this.paginateData(o),this.fixedData=o)}ngOnInit(){}setRowSelected(o){this._row_selected.emit(o)}pagination(o){return this.inputData.slice(this.ROWS_PER_PAGE*o,this.ROWS_PER_PAGE*o+this.ROWS_PER_PAGE)}setPage(o){this.currentPageItems=this.inputData.slice(this.ROWS_PER_PAGE*o,this.ROWS_PER_PAGE*o+this.ROWS_PER_PAGE),this.currentPage=o}onSearchChange(o){let n=o.target.value;this.currentPageItems=this.inputData.filter(a=>a.nombre_establecimiento&&a.nombre_establecimiento.toLowerCase().includes(n&&n.toLowerCase())||a.cod_dane_establecimiento&&a.cod_dane_establecimiento.includes(n)),this.paginateData(this.currentPageItems),n||(this.paginateData(this.fixedData),this.setPage(this.currentPage))}paginateData(o){this.inputData=o,this.setPage(0),this.totalPages=Math.ceil(o.length/this.ROWS_PER_PAGE);let n=[];for(let a=0;a<this.totalPages;a++)n.push(a+1);this.totalPagesArray=n}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-custom-data-table"]],inputs:{_payload:"_payload"},outputs:{_row_selected:"_row_selected"},decls:4,vars:2,consts:[[1,"col-12","table-pagination-govco","mt-3","mb-3"],[4,"ngIf","ngIfElse"],["loading",""],[1,"row","content-ctrls-table"],[1,"col-8","searchbar-sedes","inline-flex","mt-3"],[1,"govco-icon","govco-icon-plus","govco-icon-close"],["autocomplete","off","placeholder","Buscar por c\xf3digo o establecimiento","type","text",1,"search_input",3,"input"],["href","javascript:void(0);",1,"search_icon"],[1,"govco-icon","govco-icon-search-cn","size-2x"],[1,"col-2","dataTables_length"],[1,"govco-icon","govco-icon-head-arrow-left","size-1x"],[1,"govco-icon","govco-icon-head-arrow-right","size-1x"],["id","DataTables_Table_example",1,"table-govco","table-responsive-sm","table-responsive-md",2,"width","100%"],[1,"bg-color-marine"],[1,"text-white",2,"padding-inline","20px"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"content-footer-table"],["aria-label","Page navigation example",1,"pager-govco"],[1,"pagination"],[1,"page-item"],[1,"page-link",3,"ngClass","click"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"type-number",2,"padding-inline","20px"],[2,"padding-inline","20px"],[2,"padding","5px 0px 5px 20px"],["type","button","data-toggle","modal","data-target","#mdConfirmation",1,"btn","btn-round","btn-high","btn-sm",3,"click"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click"],[1,"loading"],["role","status",1,"spinner-border"],[1,"headline-s-govco"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0),t.YNc(1,v,32,10,"div",1),t.qZA(),t.YNc(2,f,4,0,"ng-template",null,2,t.W1O)),2&o){const a=t.MAs(3);t.xp6(1),t.Q6J("ngIf",n.inputData&&n.inputData.length)("ngIfElse",a)}},directives:[r.O5,r.sg,r.mk],styles:[".container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{padding-inline:20px}.btn-sm[_ngcontent-%COMP%]{padding:3px!important}.btn-round[_ngcontent-%COMP%]{min-width:50px!important}.loading[_ngcontent-%COMP%]{color:#004884;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:100px}.spinner-border[_ngcontent-%COMP%]{color:#004884}"]}),e})();var A=c(8368);const b=["myModal"];let q=(()=>{class e{constructor(o){this.el=o}set _submit(o){o&&console.log(o)}ngOnInit(){}ngAfterViewInit(){this.el.nativeElement.querySelector("#mdInscription"),this.myModal.nativeElement.addEventListener("shown.bs.modal",function(a){"#mdInscription"==a.target.id&&function n(){console.log("test"),alert("The modal is fully shown.")}()})}scrollToFirstInvalidControl(){const o=this.el.nativeElement.querySelector("form .ng-invalid"),n=this.el.nativeElement.querySelector(".modal-body");n.scroll({top:o.getBoundingClientRect().top+n.scrollTop-190,left:0,behavior:"smooth"})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.SBq))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-inscripcion"]],viewQuery:function(o,n){if(1&o&&t.Gf(b,5),2&o){let a;t.iGM(a=t.CRH())&&(n.myModal=a.first)}},inputs:{_submit:"_submit"},decls:13,vars:1,consts:[["data-keyboard","false","data-backdrop","static","id","mdInscription","tabindex","-1","role","dialog","aria-labelledby","mdExampleLabel","aria-hidden","true",1,"modal","fade"],["myModal",""],["role","document",1,"modal-dialog","gov-co-modal","gov-co-modal-confirmation"],[1,"modal-content"],[1,"modal-header"],[1,"gov-co-modal-type"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true",2,"font-size","30px"],[1,"modal-body","modal-info","scroll-light-govco","cdn-scroll-dark"],[3,"isRector","submit"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0,1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"h4"),t._uU(7,"Complete los siguientes datos para realizar a inscripci\xf3n del cupo escolar para el a\xf1o "),t.qZA(),t.qZA(),t.TgZ(8,"button",6),t.TgZ(9,"span",7),t._uU(10,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",8),t.TgZ(12,"app-solicitar-inscripcion",9),t.NdJ("submit",function(){return n.scrollToFirstInvalidControl()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(12),t.Q6J("isRector",!0))},directives:[A.X],styles:[".modal-dialog.gov-co-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{max-width:1320px;max-height:calc(100vh - 100px);overflow:auto;padding:30px}.modal-dialog.gov-co-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto}.modal-header[_ngcontent-%COMP%]{padding:0}"]}),e})();function x(e,i){if(1&e&&(t.TgZ(0,"div",14),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Nombre instituci\xf3n"),t.qZA(),t.qZA(),t._UZ(4,"input",17),t.qZA()),2&e){const o=t.oxw();t.xp6(4),t.Q6J("value",o.dataSchool.nombre_establecimiento)}}function C(e,i){if(1&e&&(t.TgZ(0,"div",14),t.TgZ(1,"div",15),t.TgZ(2,"label",18),t._uU(3,"C\xf3digo DANE"),t.qZA(),t.qZA(),t._UZ(4,"input",19),t.qZA()),2&e){const o=t.oxw();t.xp6(4),t.Q6J("value",o.dataSchool.cod_dane_establecimiento)}}function P(e,i){if(1&e&&(t.TgZ(0,"div",14),t.TgZ(1,"div",15),t.TgZ(2,"label",18),t._uU(3,"ID Establecimiento"),t.qZA(),t.qZA(),t._UZ(4,"input",19),t.qZA()),2&e){const o=t.oxw();t.xp6(4),t.Q6J("value",o.dataSchool.id_establecimiento)}}function y(e,i){if(1&e&&(t.TgZ(0,"div",14),t.TgZ(1,"div",15),t.TgZ(2,"label",18),t._uU(3,"Direccion establecimiento"),t.qZA(),t.qZA(),t._UZ(4,"input",19),t.qZA()),2&e){const o=t.oxw();t.xp6(4),t.Q6J("value",o.dataSchool.direccion_establecimiento)}}function U(e,i){if(1&e&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.Q6J("value",o.id_grado),t.xp6(1),t.hij(" ",o.nom_grado,"")}}function E(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div",20),t.TgZ(1,"div",21),t.TgZ(2,"div",15),t.TgZ(3,"label"),t._uU(4,"Grado"),t.qZA(),t.qZA(),t.TgZ(5,"select",22),t.NdJ("change",function(a){return t.CHM(o),t.oxw().setModels(a)}),t.TgZ(6,"option"),t._uU(7,"ELEGIR"),t.qZA(),t.YNc(8,U,2,2,"option",23),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=t.oxw();t.xp6(8),t.Q6J("ngForOf",o.dataSchool.grados)}}function O(e,i){if(1&e&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.Q6J("value",o.id_metodologia),t.xp6(1),t.hij(" ",o.nom_metodologia,"")}}function w(e,i){if(1&e&&(t.TgZ(0,"div",20),t.TgZ(1,"div",21),t.TgZ(2,"div",15),t.TgZ(3,"label"),t._uU(4,"Modelo educativo"),t.qZA(),t.qZA(),t.TgZ(5,"select",25),t.TgZ(6,"option"),t._uU(7,"ELEGIR"),t.qZA(),t.YNc(8,O,2,2,"option",23),t.qZA(),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(8),t.Q6J("ngForOf",o.dataSchoolModels)}}function S(e,i){if(1&e&&(t.TgZ(0,"tr",46),t.TgZ(1,"td",47),t._uU(2),t.qZA(),t.TgZ(3,"td",48),t._uU(4),t.qZA(),t.TgZ(5,"td",48),t._uU(6),t.qZA(),t.TgZ(7,"td",48),t._uU(8),t.qZA(),t.TgZ(9,"td",49),t.TgZ(10,"button",50),t._uU(11,"Inscribir"),t.qZA(),t.qZA(),t.qZA()),2&e){const o=i.$implicit;t.xp6(2),t.Oqu(o.apellidos),t.xp6(2),t.Oqu(o.nombres),t.xp6(2),t.Oqu(o.documento),t.xp6(2),t.Oqu(o.tipoDoc)}}function M(e,i){if(1&e&&(t.TgZ(0,"div",26),t.TgZ(1,"div",27),t.TgZ(2,"h4"),t._uU(3,"B\xfasque y seleccione el estudiante al que desea realizar el traslado"),t.qZA(),t.TgZ(4,"div",28),t._UZ(5,"span",29),t._UZ(6,"input",30),t.TgZ(7,"a",31),t._UZ(8,"span",32),t.qZA(),t.qZA(),t.TgZ(9,"div",33),t.TgZ(10,"label"),t._uU(11,"10 de 46 resultados"),t.qZA(),t._UZ(12,"span",34),t._UZ(13,"span",35),t.qZA(),t.qZA(),t.TgZ(14,"table",36),t.TgZ(15,"thead"),t.TgZ(16,"tr",37),t.TgZ(17,"th",38),t._uU(18,"Apellidos"),t.qZA(),t.TgZ(19,"th",38),t._uU(20,"Nombres"),t.qZA(),t.TgZ(21,"th",38),t._uU(22,"Documento"),t.qZA(),t.TgZ(23,"th",38),t._uU(24,"Tipo de documento"),t.qZA(),t._UZ(25,"th",38),t.qZA(),t.qZA(),t.TgZ(26,"tbody"),t.YNc(27,S,12,4,"tr",39),t.qZA(),t.qZA(),t.TgZ(28,"div",40),t.TgZ(29,"nav",41),t.TgZ(30,"ul",42),t.TgZ(31,"li",43),t.TgZ(32,"a",44),t._uU(33,"Anterior"),t.qZA(),t.qZA(),t.TgZ(34,"li",43),t.TgZ(35,"a",44),t._uU(36,"1"),t.qZA(),t.qZA(),t.TgZ(37,"li",43),t.TgZ(38,"a",44),t._uU(39,"2"),t.qZA(),t.qZA(),t.TgZ(40,"li",43),t.TgZ(41,"a",44),t._uU(42,"3"),t.qZA(),t.qZA(),t.TgZ(43,"li",43),t.TgZ(44,"a",44),t._uU(45,"4"),t.qZA(),t.qZA(),t.TgZ(46,"li",43),t.TgZ(47,"a",45),t._uU(48,"..."),t.qZA(),t.qZA(),t.TgZ(49,"li",43),t.TgZ(50,"a",44),t._uU(51,"20"),t.qZA(),t.qZA(),t.TgZ(52,"li",43),t.TgZ(53,"a",44),t._uU(54,"Siguiente"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(27),t.Q6J("ngForOf",o.students)}}let I=(()=>{class e{constructor(o){this.cdr=o,this.dataSchoolModels=[],this.students=[]}ngOnInit(){}setModels(o){this.dataSchoolModels=this.dataSchool&&this.dataSchool.grados.filter(n=>n.id_grado==o.target.value)[0].metodologia,console.log(this.dataSchoolModels)}findStudents(){this.students=[{apellidos:"Trujillo Garcia",nombres:"Laura Cecilia",documento:"221548775",tipoDoc:"TI"},{apellidos:"Trujillo Garcia",nombres:"Laura Cecilia",documento:"221548775",tipoDoc:"TI"}]}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-estudiantes"]],inputs:{dataSchool:"dataSchool"},decls:23,vars:7,consts:[["data-keyboard","false","data-backdrop","static","id","mdConfirmation","tabindex","-1","role","dialog","aria-labelledby","mdExampleLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","gov-co-modal","gov-co-modal-confirmation"],[1,"modal-content"],[1,"modal-header"],[1,"gov-co-modal-type"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true",2,"font-size","30px"],[1,"modal-body","modal-info","scroll-light-govco","cdn-scroll-dark"],["ng","",1,"row","g-3","p-3","bg-color-white"],["class","col-6 form-group gov-co-form-group inactive",4,"ngIf"],["class","form-group gov-co-form-group col-4",4,"ngIf"],[1,"form-group","gov-co-form-group","col-4","mt-4"],["type","button","data-toggle","modal",1,"btn","btn-round","btn-high",3,"click"],["class","col-12 table-pagination-govco mt-3 mb-3",4,"ngIf"],[1,"col-6","form-group","gov-co-form-group","inactive"],[1,"gov-co-label-counter"],["for","nombreInstitucion"],["type","text","id","nombreInstitucion","placeholder","Ej: Ortiz","required","true",1,"form-control","gov-co-form-control",3,"value"],["for","codigoDane"],["type","text","id","codigoDane","placeholder","Ej: Ortiz","required","true",1,"form-control","gov-co-form-control",3,"value"],[1,"form-group","gov-co-form-group","col-4"],[1,"gov-co-dropdown"],["id","selector-simple","title","Escoger",1,"gov-co-form-control","form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["id","selector-simple","title","Escoger",1,"form-control"],[1,"col-12","table-pagination-govco","mt-3","mb-3"],[1,"row","content-ctrls-table"],[1,"col-4","searchbar-sedes","inline-flex","mt-2"],[1,"govco-icon","govco-icon-plus","govco-icon-close"],["autocomplete","off","placeholder","Buscar estudiante","type","text",1,"search_input"],["href","javascript:void(0);",1,"search_icon"],[1,"govco-icon","govco-icon-search-cn","size-2x"],[1,"col-2","dataTables_length"],[1,"govco-icon","govco-icon-head-arrow-left","size-1x"],[1,"govco-icon","govco-icon-head-arrow-right","size-1x"],["id","DataTables_Table_example",1,"table-govco","table-responsive-sm","table-responsive-md",2,"width","100%"],[1,"bg-color-marine"],[1,"text-white",2,"padding-inline","20px"],["class","bg-color-blue-light",4,"ngFor","ngForOf"],[1,"content-footer-table"],["aria-label","Page navigation example",1,"pager-govco"],[1,"pagination"],[1,"page-item"],["href","#",1,"page-link"],["href","#",1,"page-link","link-points"],[1,"bg-color-blue-light"],[1,"type-number",2,"padding-inline","20px"],[2,"padding-inline","20px"],[1,"table-check",2,"padding-inline","20px"],["type","button","data-toggle","modal","data-target","#mdInscription",1,"btn","btn-sm","btn-round","btn-high","btn-sm"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3"),t._uU(6,"Seleccione el grado y el modelo educativo"),t.qZA(),t.qZA(),t.TgZ(7,"button",5),t.TgZ(8,"span",6),t._uU(9,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",7),t.TgZ(11,"form",8),t.YNc(12,x,5,1,"div",9),t.YNc(13,C,5,1,"div",9),t.YNc(14,P,5,1,"div",9),t.YNc(15,y,5,1,"div",9),t.YNc(16,E,9,1,"div",10),t.YNc(17,w,9,1,"div",10),t.TgZ(18,"div",11),t.TgZ(19,"button",12),t.NdJ("click",function(){return n.findStudents()}),t._uU(20,"Buscar"),t.qZA(),t.qZA(),t.qZA(),t.YNc(21,M,55,1,"div",13),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(22,"app-inscripcion")),2&o&&(t.xp6(12),t.Q6J("ngIf",n.dataSchool),t.xp6(1),t.Q6J("ngIf",n.dataSchool),t.xp6(1),t.Q6J("ngIf",n.dataSchool),t.xp6(1),t.Q6J("ngIf",n.dataSchool),t.xp6(1),t.Q6J("ngIf",n.dataSchool),t.xp6(1),t.Q6J("ngIf",n.dataSchoolModels.length),t.xp6(4),t.Q6J("ngIf",n.students.length))},directives:[l._Y,l.JL,l.F,r.O5,q,l.YN,l.Kr,r.sg],styles:[".modal-dialog.gov-co-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{max-width:1024px;max-height:calc(100vh - 100px);overflow:auto;padding:30px}.btn-sm[_ngcontent-%COMP%]{padding:3px!important}.modal-dialog.gov-co-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto}.modal-header[_ngcontent-%COMP%]{padding:0}"]}),e})();const D=[{path:"",component:(()=>{class e{constructor(o,n){this.simatService=o,this._Activatedroute=n,this.formularioTraslado=new l.cw({}),this.schools=[]}ngOnInit(){this.username=this._Activatedroute.snapshot.paramMap.get("username"),this.getSchools(this.username)}getSchools(o){this.simatService.getSchoolsByLogin(o).subscribe(n=>this.schools=n,n=>console.log(n))}setRowSelected(o){this.dataSchool=o}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.X),t.Y36(d.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:8,vars:2,consts:[[1,"bg-color-white"],[1,"container"],[1,"headline-l-govco"],[1,"col-12","headline-s-govco"],[3,"_payload","_row_selected"],[3,"dataSchool"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3," Revisi\xf3n y aprobaci\xf3n de inscripci\xf3n "),t.qZA(),t.TgZ(4,"div",3),t._uU(5," B\xfasque y seleccione la instituci\xf3n para la aprobaci\xf3n de inscripciones "),t.qZA(),t.TgZ(6,"app-custom-data-table",4),t.NdJ("_row_selected",function(s){return n.setRowSelected(s)}),t.qZA(),t.qZA(),t.qZA(),t._UZ(7,"app-estudiantes",5)),2&o&&(t.xp6(6),t.Q6J("_payload",n.schools),t.xp6(1),t.Q6J("dataSchool",n.dataSchool))},directives:[T,I],styles:[""]}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(D)],d.Bz]}),e})();var J=c(2271);let R=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[F,l.u5,r.ez,l.UX,J.m]]}),e})()}}]);