(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "../EVA Design System/node_modules/brace/snippets/sqlserver.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/snippets/sqlserver\",[\"require\",\"exports\",\"module\"],function(e,t,n){\"use strict\";t.snippetText=\"# ISNULL\\nsnippet isnull\\n\tISNULL(${1:check_expression}, ${2:replacement_value})\\n# FORMAT\\nsnippet format\\n\tFORMAT(${1:value}, ${2:format})\\n# CAST\\nsnippet cast\\n\tCAST(${1:expression} AS ${2:data_type})\\n# CONVERT\\nsnippet convert\\n\tCONVERT(${1:data_type}, ${2:expression})\\n# DATEPART\\nsnippet datepart\\n\tDATEPART(${1:datepart}, ${2:date})\\n# DATEDIFF\\nsnippet datediff\\n\tDATEDIFF(${1:datepart}, ${2:startdate}, ${3:enddate})\\n# DATEADD\\nsnippet dateadd\\n\tDATEADD(${1:datepart}, ${2:number}, ${3:date})\\n# DATEFROMPARTS \\nsnippet datefromparts\\n\tDATEFROMPARTS(${1:year}, ${2:month}, ${3:day})\\n# OBJECT_DEFINITION\\nsnippet objectdef\\n\tSELECT OBJECT_DEFINITION(OBJECT_ID('${1:sys.server_permissions /*object name*/}'))\\n# STUFF XML\\nsnippet stuffxml\\n\tSTUFF((SELECT ', ' + ${1:ColumnName}\\n\t\tFROM ${2:TableName}\\n\t\tWHERE ${3:WhereClause}\\n\t\tFOR XML PATH('')), 1, 1, '') AS ${4:Alias}\\n\t${5:/*https://msdn.microsoft.com/en-us/library/ms188043.aspx*/}\\n# Create Procedure\\nsnippet createproc\\n\t-- =============================================\\n\t-- Author:\t\t${1:Author}\\n\t-- Create date: ${2:Date}\\n\t-- Description:\t${3:Description}\\n\t-- =============================================\\n\tCREATE PROCEDURE ${4:Procedure_Name}\\n\t\t${5:/*Add the parameters for the stored procedure here*/}\\n\tAS\\n\tBEGIN\\n\t\t-- SET NOCOUNT ON added to prevent extra result sets from interfering with SELECT statements.\\n\t\tSET NOCOUNT ON;\\n\t\t\\n\t\t${6:/*Add the T-SQL statements to compute the return value here*/}\\n\t\t\\n\tEND\\n\tGO\\n# Create Scalar Function\\nsnippet createfn\\n\t-- =============================================\\n\t-- Author:\t\t${1:Author}\\n\t-- Create date: ${2:Date}\\n\t-- Description:\t${3:Description}\\n\t-- =============================================\\n\tCREATE FUNCTION ${4:Scalar_Function_Name}\\n\t\t-- Add the parameters for the function here\\n\tRETURNS ${5:Function_Data_Type}\\n\tAS\\n\tBEGIN\\n\t\tDECLARE @Result ${5:Function_Data_Type}\\n\t\t\\n\t\t${6:/*Add the T-SQL statements to compute the return value here*/}\\n\t\t\\n\tEND\\n\tGO\",t.scope=\"sqlserver\"})\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/snippets/sqlserver.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI3MC5lNjZhYWYyODQ1NDYwYzM2YzI2Yy5jaHVuay5qcyIsInNvdXJjZVJvb3QiOiIifQ==