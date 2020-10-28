
$('#NavMenuBar').click(function(){
    sideMenuOpenClose()
 })
 
 $('#ContentOverlayId').click(function(){
     sideMenuOpenClose()
 })
 
 function sideMenuOpenClose(){
     let SideNavId=$('#SideNavId')
     let ContentOverlayId=$('#ContentOverlayId')
     let menu_text=$('.menu_text')
     if(SideNavId.hasClass('sideNavClose')){
         SideNavId.removeClass('sideNavClose')
         SideNavId.addClass('sideNavOpen')
         ContentOverlayId.removeClass('ContentOverlayClose')
         ContentOverlayId.addClass('ContentOverlayOpen')
         menu_text.removeClass('d-none')
     }else{
         SideNavId.removeClass('sideNavOpen')
         SideNavId.addClass('sideNavClose')
         ContentOverlayId.removeClass('ContentOverlayOpen')
         ContentOverlayId.addClass('ContentOverlayClose')
         menu_text.addClass('d-none')
     } 
 }