;(function($){

	

  var consola=console.log;
 
 
  var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element
  
  
 var dynamic_style=function(el,idEl){
	 

	var top=0,left=0;
	
	if(typeof el.Config.position.top === "undefined"){
		 var PadreHHijoH=$(document).height()-el.outerHeight();
		 var mitadDeH=(PadreHHijoH/2)+$(document).scrollTop();
		 top=mitadDeH+"px;";
	}else{
		 top=el.Config.position.top+";";
	}
	


	
	
	if(typeof el.Config.position.left === "undefined"){
		var PadreWHijoW=($(document).width()/2)+(el.outerWidth()/2);
		var mitadDeW=PadreWHijoW-(el.outerWidth()/2);
		var correccionScrollW=mitadDeW-$(document).scrollLeft();
		    left=correccionScrollW+"px;";
	}else{
		left=el.Config.position.left+";";
	}

	
	

	  
	 // console.log($(document).height(),el.outerHeight(),$(document).scrollTop());
	 
      var style_modal_container=".modal_"+idEl+"{"+
									  "position: absolute;"+
									  "z-index: 9997;"+
									  "top: "+top+
									  "left: "+left+
	 
                                "}";
								
		$("#modal_style_"+idEl).remove();	
        $('<style id="modal_style_'+idEl+'">').text(style_modal_container).appendTo('head');
 };
  


  var drag_init=function(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
   };
   // Will be called when user dragging an element
  var move_element=function(e){
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
		selected.style.position="absolute";
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
  };
  // Destroy the object when we are done
  var drag_destroy=function(){
	  selected = null;
  }


  var style_btn=".edmodal_btn{"+
  "display: inline-block;"+
  "font-weight: 400;"+
  "color: #fff;"+
  "text-align: center;"+
  "vertical-align: middle;"+
  "-webkit-user-select: none;"+
  "-moz-user-select: none;"+
  "-ms-user-select: none;"+
  "user-select: none;"+
  "background-color: transparent;"+
 "border: 1px solid transparent;"+
  "padding: 0.375rem 0.75rem;"+
  "font-size: 0.9375rem;"+
  "line-height: 1.5;"+
  "border-radius: 0.25rem;"+
  "-webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;"+
  "transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;"+
  "transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;"+
  "transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;"+
"}"+

".edmodal_btn:hover {"+
  "color: #fff;"+
  "text-decoration: none;"+
"}"+

".edmodal_btn:focus, .btn.focus {"+
  "outline: 0;"+
  "-webkit-box-shadow: 0 0 0 0.2rem rgba(55, 90, 127, 0.25);"+
          "box-shadow: 0 0 0 0.2rem rgba(55, 90, 127, 0.25);"+
"}"+
".edmodal_btn.disabled, .edmodal_btn:disabled {"+
  "opacity: 0.65;"+
"}";



var style_danger=".edmodal_btn-danger {"+
"  color: #fff;"+
"  background-color: #E74C3C;"+
"  border-color: #E74C3C;"+
"}"+
".edmodal_btn-danger:hover {"+
"  color: #fff;"+
"  background-color: #e12e1c;"+
"  border-color: #d62c1a;"+
"}"+
".btn-danger:focus, .btn-danger.focus {"+
"  -webkit-box-shadow: 0 0 0 0.2rem rgba(235, 103, 89, 0.5);"+
"          box-shadow: 0 0 0 0.2rem rgba(235, 103, 89, 0.5);"+
"}"+
".edmodal_btn-danger.disabled, .btn-danger:disabled {"+
"  color: #fff;"+
"  background-color: #E74C3C;"+
"  border-color: #E74C3C;"+
"}"+
".edmodal_btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,"+
".show > .btn-danger.dropdown-toggle {"+
"  color: #fff;"+
"  background-color: #d62c1a;"+
"  border-color: #ca2a19;"+
"}"+
".edmodal_btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,"+
".show > .btn-danger.dropdown-toggle:focus {"+
"  -webkit-box-shadow: 0 0 0 0.2rem rgba(235, 103, 89, 0.5);"+
"          box-shadow: 0 0 0 0.2rem rgba(235, 103, 89, 0.5);"+
"}";

var style_info=".btn-info {"+
"  color: #fff;"+
"  background-color: #3498DB;"+
"  border-color: #3498DB;"+
"}"+
".btn-info:hover {"+
"  color: #fff;"+
"  background-color: #2384c6;"+
"  border-color: #217dbb;"+
"}"+
".btn-info:focus, .btn-info.focus {"+
"  -webkit-box-shadow: 0 0 0 0.2rem rgba(82, 167, 224, 0.5);"+
"          box-shadow: 0 0 0 0.2rem rgba(82, 167, 224, 0.5);"+
"}"+
".btn-info.disabled, .btn-info:disabled {"+
"  color: #fff;"+
"  background-color: #3498DB;"+
"  border-color: #3498DB;"+
"}"+
".btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,"+
".show > .btn-info.dropdown-toggle {"+
"  color: #fff;"+
"  background-color: #217dbb;"+
"  border-color: #1f76b0;"+
"}"+
".btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,"+
".show > .btn-info.dropdown-toggle:focus {"+
"  -webkit-box-shadow: 0 0 0 0.2rem rgba(82, 167, 224, 0.5);"+
"          box-shadow: 0 0 0 0.2rem rgba(82, 167, 224, 0.5);"+
"}";

var style_warning=".edmodal_btn-w {"+
  "color: #fff;"+
  "background-color: #F39C12;"+
  "border-color: #F39C12;"+
"}"+

".edmodal_btn-w:hover {"+
  "color: #fff;"+
  "background-color: #d4860b;"+
  "border-color: #c87f0a;"+
"}"+

".edmodal_btn-w:focus, .edmodal_btn-w.focus {"+
  "-webkit-box-whadow: 0 0 0 0.2rem rgba(245, 171, 54, 0.5);"+
          "box-whadow: 0 0 0 0.2rem rgba(245, 171, 54, 0.5);"+
"}"+

".edmodal_btn-w.disabled, .edmodal_btn-w:disabled {"+
  "color: #fff;"+
 "background-color: #F39C12;"+
  "border-color: #F39C12;"+
"}"+

".edmodal_btn-w:not(:disabled):not(.disabled):active, .edmodal_btn-w:not(:disabled):not(.disabled).active,"+
".show > .edmodal_btn-w.dropdown-toggle {"+
 "color: #fff;"+
  "background-color: #008966;"+
  "border-color: #007c5d;"+
"}"+

".edmodal_btn-w:not(:disabled):not(.disabled):active:focus, .edmodal_btn-w:not(:disabled):not(.disabled).active:focus,"+
".show > .edmodal_btn-w.dropdown-toggle:focus {"+
  "-webkit-box-whadow: 0 0 0 0.2rem rgba(245, 171, 54, 0.5);"+
         " box-whadow: 0 0 0 0.2rem rgba(245, 171, 54, 0.5);"+
"}";
    
    
   
var style_success=".edmodal_btn-s {"+
  "color: #fff;"+
  "background-color: #00bc8c;"+
  "border-color: #00bc8c;"+
"}"+

".edmodal_btn-s:hover {"+
  "color: #fff;"+
  "background-color: #009670;"+
  "border-color: #008966;"+
"}"+

".edmodal_btn-s:focus, .edmodal_btn-s.focus {"+
  "-webkit-box-shadow: 0 0 0 0.2rem rgba(38, 198, 157, 0.5);"+
          "box-shadow: 0 0 0 0.2rem rgba(38, 198, 157, 0.5);"+
"}"+

".edmodal_btn-s.disabled, .edmodal_btn-s:disabled {"+
  "color: #fff;"+
 "background-color: #00bc8c;"+
  "border-color: #00bc8c;"+
"}"+

".edmodal_btn-s:not(:disabled):not(.disabled):active, .edmodal_btn-s:not(:disabled):not(.disabled).active,"+
".show > .edmodal_btn-s.dropdown-toggle {"+
 "color: #fff;"+
  "background-color: #008966;"+
  "border-color: #007c5d;"+
"}"+

".edmodal_btn-s:not(:disabled):not(.disabled):active:focus, .edmodal_btn-s:not(:disabled):not(.disabled).active:focus,"+
".show > .edmodal_btn-s.dropdown-toggle:focus {"+
  "-webkit-box-shadow: 0 0 0 0.2rem rgba(38, 198, 157, 0.5);"+
         " box-shadow: 0 0 0 0.2rem rgba(38, 198, 157, 0.5);"+
"}";
  
  
  var style_close="float: right;"+
                  "padding-right: 28px;"+
                  "font-size: 12px;"+
                  "position: relative;"+
                  "bottom: 2px;"+
                  "padding-bottom:10px;"+
                  "padding-top:10px;"+
                  "text-shadow: 0 0 10px #FFFFFF;"+
                  "font-family:Arial;"+
                  "cursor: pointer";
    

                  
                  
  var style_block_modal=".edmodal_modal_block{"+
                          "background: #0000004a;"+
                          "position:absolute;"+
                          "top:0px;"+
                          "z-index: 9996;"+
                          "width: 100%;"+
                          "height:{alto}px;"+
                          "display: none;"+
                         "}";
  
  
  var style_titulo= "background: cadetblue;"+
                    "position: absolute;"+
                    "color:white;"+
                    "left:0%;"+
                    "width:100%;"+
                    " -webkit-user-select: none;"+
                    "-moz-user-select: none;"+
                    "-khtml-user-select: none;"+
                    "-ms-user-select:none;"+
                    "top:0%;"+
                    "z-index:9999;"+
                    "padding-left: 10px;"+
                    "text-shadow: 2px 2px 4px #000000;"+
                    "border-top-right-radius: 26px;"+
                    "border-top-left-radius: 21px;"+
                    "background: -moz-linear-gradient(268deg, rgba(0,0,255,1) 0%, rgba(0,0,0,1) 100%);"+
                    "background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0,0,255,1)), color-stop(100%, rgba(0,0,0,1)));"+
                    "background: -webkit-linear-gradient(268deg, rgba(0,0,255,1) 0%, rgba(0,0,0,1) 100%);"+
                    "background: -o-linear-gradient(268deg, rgba(0,0,255,1) 0%, rgba(0,0,0,1) 100%);"+
                    "background: -ms-linear-gradient(268deg, rgba(0,0,255,1) 0%, rgba(0,0,0,1) 100%);"+
                    "background: linear-gradient(182deg, rgba(0,0,255,1) 0%, rgba(0,0,0,1) 100%);"+
                    "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0000ff', endColorstr='#000000',GradientType=0 );";
      
   
  var htmlEstructuraJUI="<div id='{id}' class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-front'>"+
                       "<div class='titulo ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix'>"+
                               "<b class='ui-dialog-title' style='position: relative;top: 8px;'>"+
                                " <b class='modal_title' style='padding-left: 15px;'>{titulo}</b>"+
                                "</b>"+
                                "<span class='close_modal '>x</span>"+
                                
                          "</div>"+
                          "<br/>"+
                          "<div id='modal_body' style='padding-bottom: 40px;' class='ui-dialog-content ui-widget-content'>"+
                          "{modal_body}"+
                          "</div>"+
                          "{footer}"+
                      "</div>";
	
	
  var htmlEstructura="<div id='{id}'>"+
                       "<div class='titulo'>"+
                               "<b style='position: relative;top: 8px;'>"+
                                " <b class='modal_title' style='padding-left: 15px;'>{titulo}</b>"+
                                "</b>"+
                                "<span class='close_modal '>x</span>"+
                                
                          "</div>"+
                          "<br/>"+
                          "<div id='modal_body' style='padding-bottom: 40px;'>"+
                          "{modal_body}"+
                          "</div>"+
                          "{footer}"+
                      "</div>";
                      
                      
                      

	
	var methods = {
      close:function(myel){
      
        if(myel===null){
          $.error("No se a creado ninguna modal");
        }else{
          var opt=myel.Config;
          if(opt.modal){
             $("#edmodal_block_"+myel[0].id).css("display","none");
          }
          myel.hide();
        }
      },
      show:function(myel){
       
		  
		  if(myel===null){
             $.error("No se creo una modal aun");
		  }else{
			
			 var opt=myel.Config;
			  
			  opt.onOpen();

			  if(opt.modal){//Mostramos la capa de fondo
				 $("#edmodal_block_"+myel[0].id).show();
			  }
			  var idEl=myel.id;
		     
			 myel.show();//Mostramos la capa

            
			
			 
        }
      },
      modal_opt:function(opt){	
      

		
        
      var el=this;
           
	  var style_modal=
					  "background: {color_modal_fondo};"+
					  "padding: 36px;"+
					  "border-top-left-radius: 30px;"+
					  "border-top-right-radius: 30px;"+
					  "margin-right: -50%;"+
					  "transform: translate(-50%, -50%);"+
					  "border-style: double;"+
					  "border-color: black;"+
					  "border-width: 6px;";  
        
       
        var idEl=$(el).attr("id");
        var bhtml=$(el).html();
        var alto= $(document).height();
     
	      var estructura=htmlEstructura.replace("{id}","edModal_"+idEl);
	     if(opt.theme!==""){
			 switch(opt.theme){
				 case "jqueryui":
						if (typeof jQuery.ui === 'undefined') {
						  $.error("Debes tener instalado JQUERY UI");
							return false;
						}
					 estructura=htmlEstructuraJUI.replace("{id}","edModal_"+idEl);
				 break;
				 default:
					estructura=htmlEstructura.replace("{id}","edModal_"+idEl); 
			 }
			  
		 } 
       
        
            estructura=estructura.replace("{titulo}",opt.title).replace("{modal_body}",bhtml);
            
            if(opt.buttons.length>0){
              var htmlButtonEnd="<table style='width:100%;position:absolute;bottom:0;left:0px;padding-bottom: 8px;padding-right: 4px;'><tr>{botones}</tr></table>";
              var btnTm="";
              var new_arr = opt.buttons.reverse();
              for(var idboton in new_arr){
              
                var boton=opt.buttons[idboton];
                var texto=boton.text;
                var style="edmodal_btn-"+boton.type;
                var idHtml="btn_edmodal_"+idboton+"_"+idEl;
                var icon=boton.iconClass;
                
                    btnTm+="<td style='float:right;'><button id='"+idHtml+"' class='edmodal_btn "+style+"'><span class='"+icon+"'></span> "+texto+"</button></td>";
                    $(document).on("click","#"+idHtml,boton.click);
              
              }
              
              htmlButtonEnd=htmlButtonEnd.replace("{botones}",btnTm);
              estructura=estructura.replace("{footer}",htmlButtonEnd);
            }else{
              estructura=estructura.replace("{footer}","");
            }	 
	 
	 
		  
		  
        el.html(estructura);
		$("edmodal_block_"+idEl).remove();
        $('body').append("<div id='edmodal_block_"+idEl+"' class='edmodal_modal_block'></div>");
		
		dynamic_style(el,idEl);
	 
	 
	 
	 
	 
 /*CREACION DE STYLE´s */ 	 

   
        $('<style>').text('.edmodal_titulo_'+idEl+'{'+style_titulo+'}').appendTo('head'); 
        style_modal=style_modal.replace("{color_modal_fondo}",opt.background);
        $('<style>').text('.edmodal_'+idEl+'{'+style_modal+'}').appendTo('head');
        $('<style>').text('.close_modal {'+style_close+'}').appendTo('head');
		
        style_block_modal=style_block_modal.replace("{alto}",alto);
        $('<style>').text(style_block_modal).appendTo('head');
        $('<style>').text(style_btn).appendTo('head');
        $('<style>').text(style_success).appendTo('head');
        $('<style>').text(style_warning).appendTo('head');
        $('<style>').text(style_info).appendTo('head');
        $('<style>').text(style_danger).appendTo('head');
       
/*FIN DE ESTILOS*/      
       
       
     

            
            



       
       
 /*/**********************/ 
 
 /*CONFIGURACION*/
        $("#edModal_"+idEl).addClass('edmodal_'+idEl);
        $("#edModal_"+idEl+" .titulo").addClass('edmodal_titulo_'+idEl).addClass("title_edmodal_"+idEl);
        $("#edModal_"+idEl+" .close_modal").addClass("close_button_edmodal_"+idEl);
        $("#"+idEl).addClass("modal_"+idEl);
        
         
      
         
 /*EVENTOS*/ 
   
		$(document).on("scroll",function(){
			 if(!$("#"+idEl).is(":visible")){
				  dynamic_style(el,idEl);
			 }
		});
    

    if(opt.drag){
        //Bind the functions...
		$(document).on("mousedown", ".title_edmodal_"+idEl, function(){
		   var obj=document.getElementById(idEl);
		     $(".title_edmodal_"+idEl).css({"cursor":"move"});
			 drag_init(obj);
		});
				document.onmousemove = move_element;
				document.onmouseup = function(){
					 $(".title_edmodal_"+idEl).css({"cursor":"default"});
					 drag_destroy();
				};
    }      

        


        $(document).on("click",".close_button_edmodal_"+idEl,function(){
          methods.close(el);
          opt.onClose();
        });
        
        
        

           return this;

      }
 };
        
        


$.fn.edModal=function(){

    var defaultConfig={
      title:"Modal",
      drag:true,
      modal:true,
	  theme:'',
      background:"brown",
	  position:{top:'',left:''},
      onClose:function(){},
      onOpen:function(){},
	  beforeShow:function(){},
      buttons:[]
    };

   var idEl=$(this).attr("id");
   var cantidad_argumentos=arguments.length;
   $(this).hide();
   
   if(cantidad_argumentos===0){//Sin argumentos
      return methods.modal.apply( this, this);
   }else{
      if(cantidad_argumentos===1){//Configuraciones
       
          switch(typeof arguments[0]){
            case "object"://Iniciando el modal
               $(this).data('edModal_'+idEl, this);
            //   consola(arguments[0]);
               $.extend( defaultConfig, arguments[0] );
               this.Config= defaultConfig;
            //   consola("INIT ",arguments[0]);
                return methods.modal_opt.call( this,defaultConfig);
            case "string"://Opciones
            
               var $el=$(this).data('edModal_'+idEl);

               switch(arguments[0]){
                 case "show":
					   $el.Config.beforeShow();
                    return methods.show.call(this,$el);
                 case "close":
                    return methods.close.call(this,$el);
               }
               
              
            break;
          }
            
      }else{
         $.error("Demasiados parametros solo debes colocar un objeto con las configuraciones $('div').edModal({})");
      }
   }
        
  
};
  

  

})(jQuery);
