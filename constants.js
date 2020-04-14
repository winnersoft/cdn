var CONTEXT_ROOT="/jsfiedle";
var USER_COGU="";
var USER_BON="";
var USER_PART="";
var USER_ORGANIZATION="";
var USER_PERSONALID=" ";
var USER_DATE=function() {
    var now=new Date();
    return""+(now.getFullYear())+((now.getMonth()+1<10?"0":"")+(now.getMonth()+1))+((now.getDate()<10?"0":"")+now.getDate());
    };
var USER_TIME=function() {
    var now=new Date();
    return""+((now.getHours()<10?"0":"")+now.getHours())+((now.getMinutes()<10?"0":"")+now.getMinutes())+((now.getSeconds()<10?"0":"")+now.getSeconds());
    };
var USER_YEAR=function(){ 
    return parseInt(USER_DATE().substring(0,4),10);
    };
var USER_MONTH=function(){
    return parseInt(USER_DATE().substring(0,6),10);
    };
var USER_FORMID="TEST_FORM";
var USER_KEYSTR="3)C_HFYGIxR0ENSPq8ls6hn1UdabVQeDgtoL7ZJiBprkcjTvK4yzOw2MA5W9uf(Xm";
var USER_AUTH="admin";
var USER_PERSONALNAME="admin";
var USER_USERID="admin";
var USER_IPADDR="203.142.64.124";
var USER_LANGUAGE="kor";
var USER_MESSAGE="";
var USER_SEQ=0;
var USER_VALUE1="";
var USER_VALUE2="";
var USER_VALUE3="";
var USER_VALUE4="";
var USER_VALUE5="";
var USER_VALUE6="";
var USER_VALUE7="";
var USER_VALUE8="";
var USER_ADDAUTH1="__AddAuth1__";
var USER_ADDAUTH2="__AddAuth2__";
var USER_ADDAUTH3="__AddAuth3__";
var USER_ADDAUTH4="__AddAuth4__";
var USER_ADDAUTH5="__AddAuth5__";
var CALL_COMMAND="";
var TEST_MODE=false;
var USE_FILE_SUFFIX=true;