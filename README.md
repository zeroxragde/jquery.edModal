# jquery.edModal
Plugin de jquery para crear modales simples

Ejemplo:


	$("#winModal").edModal({
        title:"Modal",
        drag:true,
        modal:true,
        theme:'',
        background:"brown",
        position:{top:'',left:''},
        onClose:function(){},
        onOpen:function(){},
        beforeShow:function(){},
        buttons:[
                       {
                         text:"Aceptar",
                         iconClass:"fas fa-bell",
                         type:"s",//s,w,e, i
                         click:function(){alert("Holita mundo");}
                       },

                       {
                         text:"Cancelar",
                         iconClass:"fab fa-apple",
                         type:"w",//s,w,e, i
                         click:function(){
                            $("#wModal").edModal("close");
                         }
                       }
                     ]
		}
	});
