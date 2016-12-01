webpackJsonp([3],{408:function(e,t,l){try{(function(){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(1),s=a(r),u=(l(17),l(19)),o=l(409),n=a(o),c=s.default.createClass({displayName:"OpenDataset",getInitialState:function(){return{modalShow:!1,resourceList:[],resourceEditID:-1,error:""}},handleSubmitPublish:function(e){e.preventDefault(),console.log("handleSubmitPublish");var t=[],l="";if(""==e.target.title.value&&t.push("Title"),""==e.target.publisher.value&&t.push("Publisher"),""==e.target.subject.value&&t.push("Subject"),""==e.target.description.value&&t.push("Description"),t.length>0){console.log("errors");for(var a=0;a<t.length;a++){var r=", ";0==a&&(r="",l+=r+t[a])}var s={errorType:"Publish Dataset",errorLocation:"Publish Dataset",errotCode:"008",errorMessage:"The following field(s) are required: "+l};this.setState({error:s})}else{var u={title:e.target.title.value,publisher:e.target.publisher.value,subject:e.target.subject.value,description:e.target.description.value,license:e.target.license.value,keywords:e.target.keywords.value,resourceList:this.state.resourceList};console.log(">>>>>>>>datapost to publish",u)}},getResource:function(e){console.log("getResource=======",e);var t=[];0==this.state.resourceList.length?t.push(e):(t=this.state.resourceList.slice(),t.push(e)),this.setState({resourceList:t,resourceEditID:-1}),console.log("new state=======",this.state.resourceList)},clearEditID:function(){console.log("set resourceEditID to -1"),this.setState({resourceEditID:-1}),console.log("set resourceEditID to -1")},changeEditID:function(e){console.log("///////",e.target.value),this.setState({modalShow:!0,resourceEditID:e.target.value})},generateResourceListTable:function(){var e=this,t="",t=s.default.createElement("div",null,s.default.createElement("label",{htmlFor:"Resources"},"Resources"),s.default.createElement(u.Table,{striped:!0,bordered:!0,condensed:!0,hover:!0},s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"Resource Name"),s.default.createElement("th",null,"Format"),s.default.createElement("th",null,"Language"),s.default.createElement("th",null,"File"),s.default.createElement("th",null,"Edit"),s.default.createElement("th",null,"Delete"))),s.default.createElement("tbody",null,this.state.resourceList.map(function(e,t){return s.default.createElement("tr",{key:t},s.default.createElement("td",null,e.resourceName),s.default.createElement("td",null,s.default.createElement("span",{className:"badge"},e.format)),s.default.createElement("td",null,e.language),s.default.createElement("td",null,e.fileName),s.default.createElement("td",null,s.default.createElement(u.Button,{value:t,bsStyle:"primary",onClick:this.changeEditID},"Edit")),s.default.createElement("td",null,s.default.createElement(u.Button,{value:"Delete",bsStyle:"danger"},"Delete")))},this),s.default.createElement("tr",{style:{textAlign:"center"}},s.default.createElement("td",{colSpan:"6",style:{textAlign:"center"}},s.default.createElement(u.Button,{value:"add",bsStyle:"warning",onClick:function(){return e.setState({modalShow:!0,resourceEditID:-1})}},"Add New Resource"))))));return t},getErrorDisplay:function(){return console.log("print error message",this.state.error),s.default.createElement("div",null,s.default.createElement("br",null),s.default.createElement("div",{className:"alert alert-danger",role:"alert"},s.default.createElement("span",{className:"glyphicon glyphicon-exclamation-sign","aria-hidden":"true"}),this.state.error.errorMessage))},render:function(){var e=this;console.log("this.state.resourceEditID",this.state.resourceEditID);var t=function(){return e.setState({modalShow:!1})};return s.default.createElement("div",{className:"faq-page",key:"faq"},s.default.createElement("div",{className:"page-header"},s.default.createElement("h1",null,"Publish Dataset")),s.default.createElement(u.Well,null,s.default.createElement("span",{className:"glyphicon glyphicon-info-sign","aria-hidden":"true"})," Welcome to publish Dataset page. Fill out each fields, add data resources below, and press submit to save."),s.default.createElement(u.Panel,{bsStyle:"primary",header:s.default.createElement("span",null,"Publish New Dataset")},s.default.createElement("form",{onSubmit:this.handleSubmitPublish},s.default.createElement("div",{className:"form-group"},s.default.createElement("label",null,"Title"),s.default.createElement("span",{className:"requiredField"},"*"),s.default.createElement("input",{type:"text",name:"title",className:"form-control",placeholder:"Title",required:!0})),s.default.createElement("div",{className:"form-group"},s.default.createElement("label",null,"Publisher"),s.default.createElement("span",{className:"requiredField"},"*"),s.default.createElement("input",{type:"text",name:"publisher",className:"form-control",placeholder:"Publisher",required:!0})),s.default.createElement("div",{className:"form-group"},s.default.createElement("label",null,"Subject"),s.default.createElement("span",{className:"requiredField"},"*"),s.default.createElement("input",{type:"text",name:"subject",className:"form-control",placeholder:"Subject",required:!0})),s.default.createElement("div",{className:"form-group"},s.default.createElement("label",null,"Description"),s.default.createElement("span",{className:"requiredField"},"*"),s.default.createElement("textarea",{className:"form-control",name:"description",rows:"5",id:"description",placeholder:"Description",required:!0})),s.default.createElement(u.Input,{type:"text",name:"license",label:"License",placeholder:"License",className:"underline"}),s.default.createElement(u.Input,{type:"text",name:"keywords",label:"Keywords",placeholder:"Enter keywords to help search the dataset. Seperate by comma.",className:"underline"}),this.generateResourceListTable(),"Publish Dataset"==this.state.error.errorLocation?this.getErrorDisplay():"",s.default.createElement(u.Row,{style:{textAlign:"center"}},s.default.createElement(u.Col,{md:6},s.default.createElement(u.Button,{value:"Submit",type:"submit",bsStyle:"success"},"Create")),s.default.createElement(u.Col,{md:6},s.default.createElement(u.Button,{value:"Cancel",bsStyle:"default"},"Cancel")))),s.default.createElement(n.default,{show:this.state.modalShow,onHide:t,submitResource:this.getResource,resource:this.state.resourceEditID>=0?this.state.resourceList[this.state.resourceEditID]:"",clearEditID:this.clearEditID})))}});t.default=c,e.exports=t.default}).call(this)}finally{}},409:function(e,t,l){try{(function(){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},s=l(1),u=a(s),o=(l(17),l(19)),n=u.default.createClass({displayName:"PublishDatasetModal",getInitialState:function(){return{status:"",error:""}},handleAdResource:function(e){e.preventDefault(),console.log("........Modal handleAdResource"),console.log("........Modal");var t=[],l="";if(""==e.target.resourceName.value&&t.push("Resource Name"),""==e.target.format.value&&t.push("File Format"),""==e.target.language.value&&t.push("Language"),""==e.target.uploadFile.value&&t.push("Upload File"),t.length>0){console.log("errors");for(var a=0;a<t.length;a++){var r=", ";0==a&&(r="",l+=r+t[a])}var s={errorType:"Add Resource",errorLocation:"Add Resource",errotCode:"008",errorMessage:"The following field(s) are required: "+l};this.setState({error:s})}else{console.log("........no error");var u=document.getElementById("uploadFile");alert("You selected "+u.value);var o=u.value.replace(/^.*[\\\/]/,"");console.log("ssss",o);var n={resourceName:e.target.resourceName.value,format:e.target.format.value,language:e.target.language.value,uploadFile:e.target.uploadFile.value,fileName:o};this.props.submitResource(n),this.setState({status:"sent",error:""}),console.log("handleAdResource, dataPost",n,JSON.stringify(n))}},handleClose:function(){this.props.clearEditID(),console.log("this.props.clearEditID();"),this.setState({status:"",error:""}),this.props.onHide()},getErrorDisplay:function(){return console.log("print error message",this.state.error),u.default.createElement("div",null,u.default.createElement("br",null),u.default.createElement("div",{className:"alert alert-danger",role:"alert"},u.default.createElement("span",{className:"glyphicon glyphicon-exclamation-sign","aria-hidden":"true"}),this.state.error.errorMessage))},createBody:function(){return"sent"==this.state.status?u.default.createElement("div",null,u.default.createElement(o.Modal.Body,null,u.default.createElement("p",null,"Resource is added to resource list.")),u.default.createElement(o.Modal.Footer,null,u.default.createElement(o.Button,{onClick:this.handleClose},"Close"))):u.default.createElement("div",null,u.default.createElement("form",{onSubmit:this.handleAdResource},u.default.createElement(o.Modal.Body,null,u.default.createElement("div",{className:"form-group"},u.default.createElement("label",null,"Resource Name"),u.default.createElement("span",{className:"requiredField"},"*"),u.default.createElement("input",{type:"text",name:"resourceName",className:"form-control",placeholder:"Resource Name",defaultValue:this.props.resource?this.props.resource.resourceName:"",required:!0})),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",null,"Format"),u.default.createElement("span",{className:"requiredField"},"*"),u.default.createElement("input",{type:"text",name:"format",className:"form-control",placeholder:"Format",defaultValue:this.props.resource?this.props.resource.format:"",required:!0})),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",null,"Language"),u.default.createElement("span",{className:"requiredField"},"*"),u.default.createElement("input",{type:"text",name:"language",className:"form-control",placeholder:"Language",defaultValue:this.props.resource?this.props.resource.language:"",required:!0})),u.default.createElement("div",{className:"form-group"},u.default.createElement("label",null,"Upload File (accept .xls, .xlsx, .json, .pdf, .csv)"),u.default.createElement("span",{className:"requiredField"},"*"),u.default.createElement("br",null),this.props.resource?"Uploaded file: "+this.props.resource.fileName+" (Click upload again to replace old file)":"",u.default.createElement("br",null),u.default.createElement("input",{type:"file",accept:".xls,.xlsx,.json,.pdf,.csv",id:"uploadFile",name:"uploadFile",className:"form-control",placeholder:"Upload File",required:!0})),"Add Resource"==this.state.error.errorLocation?this.getErrorDisplay():""),u.default.createElement(o.Modal.Footer,null,u.default.createElement(o.Button,{value:"Add",type:"submit",bsStyle:"primary"},"Add"),u.default.createElement(o.Button,{onClick:this.props.onHide},"Close"))))},render:function(){return console.log("resource is pass:",this.props.resource),u.default.createElement("div",null,u.default.createElement(o.Modal,r({},this.props,{"aria-labelledby":"contained-modal-title-sm"}),u.default.createElement(o.Modal.Header,{closeButton:!0},u.default.createElement(o.Modal.Title,{id:"contained-modal-title-sm"},"Add New Resource")),this.createBody()))}});t.default=n,e.exports=t.default}).call(this)}finally{}}});