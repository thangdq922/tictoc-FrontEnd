"use strict";(self.webpackChunktiktok=self.webpackChunktiktok||[]).push([[550],{7569:function(e,s,i){var l=i(1084),n=i(3418);s.Z=function(){return(0,n.D)({mutationFn:function(e){return(0,l.f7)(e)},onSuccess:function(e){localStorage.setItem("user",JSON.stringify(e)),window.location.reload()}})}},5550:function(e,s,i){i.r(s),i.d(s,{default:function(){return Ee}});var l=i(1413),n=i(4165),a=i(5861),r=i(9439),t=i(2791),o=i(7689),c=i(1087),d=i(7692),_=i(6355),u=i(2917),f=i(3853),m=i(6652),h="Profile_wrapper__Hj+I-",v="Profile_header__yyJ-z",x="Profile_info__GmLpV",j="Profile_avatar__p3gZ3",p="Profile_title_container__WeYK5",N="Profile_user_title__d4g8X",P="Profile_verify__w6pkL",g="Profile_user_fullname__rz4s7",b="Profile_button_container__21sjy",w="Profile_button__DifZb",y="Profile_button_follow__Vph+U",Z="Profile_followed_container__b0jrr",k="Profile_unfollow__Owhtk",E="Profile_count_info__+lb36",C="Profile_number_container__RvNuY",L="Profile_span__TGUF3",S="Profile_bio__6TYqW",U="Profile_list_video_wrapper__rL1RK",F="Profile_title_wrapper__yHNBy",I="Profile_title__9To4C",M="Profile_list_video_container__MsnQ6",Y="Profile_list_video__Leekf",D="Profile_link__YklfI",O="Profile_video_container__JzWNL",R="Profile_video__oydYj",z="Profile_video_desc__DIkU0",V="Profile_cardFooter__q3eSN",q="Profile_viewCount__XU-2-",B=i(3673),H=i(193),K=i(2790),G=i(4944),J=i(5338),T=i(1084),W=i(5986),A=i(3346),Q=i(2918),X=i(71),$=i(7425),ee=i(1134),se=i(8859),ie="EditProfile_container__x15Pv",le="EditProfile_section__qIqad",ne="EditProfile_dialog__reCBE",ae="EditProfile_header__m9EQz",re="EditProfile_H1Header__89eXQ",te="EditProfile_close-button__a5og3",oe="EditProfile_content__nMLOF",ce="EditProfile_itemContainer__7IrNG",de="EditProfile_label__SjBWg",_e="EditProfile_editAvatar__7ad6U",ue="EditProfile_divContainer__lYgUY",fe="EditProfile_avatarContainer__CIc8v",me="EditProfile_img__TCYg7",he="EditProfile_editIcon__M9KMo",ve="EditProfile_input__ocXyG",xe="EditProfile_inputContainer__nv2Fx",je="EditProfile_link__NiQS9",pe="EditProfile_tip__Mg5ni",Ne="EditProfile_textCount__dsWGF",Pe="EditProfile_footer__Rwa2t",ge="EditProfile_cancel__DzPDR",be="EditProfile_save__Vbdi2",we=i(5605),ye=i(7569),Ze=i(184);var ke=function(e){var s,i,n=e.open,a=e.close,o=(0,t.useState)(""),c=(0,r.Z)(o,2),d=c[0],_=c[1],u=(0,t.useState)(""),f=(0,r.Z)(u,2),m=f[0],h=f[1],v=null===(s=(0,A.PR)())||void 0===s?void 0:s.data,x={userName:null===v||void 0===v?void 0:v.userName,name:null===v||void 0===v?void 0:v.name,bio:null===v||void 0===v?void 0:v.bio},j=(0,t.useState)(null===(i=x.bio)||void 0===i?void 0:i.length),p=(0,r.Z)(j,2),N=p[0],P=p[1],g=(0,ye.Z)(),b=(0,ee.cI)({defaultValues:x}),w=b.register,y=b.handleSubmit,Z=b.formState.isDirty;return(0,Ze.jsx)(se.Z,{type:"profile",isOpen:n,children:(0,Ze.jsx)("div",{className:ie,children:(0,Ze.jsx)("section",{className:le,children:(0,Ze.jsx)("div",{className:ne,children:(0,Ze.jsxs)("form",{onSubmit:y((function(e){var s=new FormData;s.append("user",new Blob([JSON.stringify(e)],{type:"application/json"})),s.append("upAvatar",m),g.mutate(s)})),children:[(0,Ze.jsxs)("div",{className:ae,children:[(0,Ze.jsx)("h1",{className:re,children:"Edit profile"}),(0,Ze.jsx)("div",{className:te,onClick:a,children:(0,Ze.jsx)(X.bjh,{size:24})})]}),(0,Ze.jsxs)("div",{className:oe,children:[(0,Ze.jsxs)("div",{className:ce,children:[(0,Ze.jsx)("div",{className:de,children:"Profile photo"}),(0,Ze.jsxs)("label",{htmlFor:"file",className:_e,children:[(0,Ze.jsx)("div",{className:ue,children:(0,Ze.jsx)("span",{className:fe,children:(0,Ze.jsx)(we.Z,{alt:"",src:d,className:me})})}),(0,Ze.jsxs)("div",{"aria-label":"Profile photo",role:"button",className:he,children:[(0,Ze.jsx)($.HuK,{}),(0,Ze.jsx)("input",{tabIndex:"-1",id:"file",type:"file",crossOrigin:"anonymous",accept:".jpg,.jpeg,.png,.tiff,.heic,.webp",className:ve,onChange:function(e){var s=URL.createObjectURL(e.target.files[0]);_(s),h(e.target.files[0])},name:"upload_file"})]})]})]}),(0,Ze.jsxs)("div",{className:ce,children:[(0,Ze.jsx)("div",{className:de,children:"Username"}),(0,Ze.jsxs)("div",{className:xe,children:[(0,Ze.jsx)("input",(0,l.Z)({placeholder:"Username",className:ve,defaultValue:x.userName},w("userName"))),(0,Ze.jsx)("p",{className:je,children:"www.tiktok.com/@jakiedo922"}),(0,Ze.jsx)("p",{className:pe,children:"Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link."})]})]}),(0,Ze.jsxs)("div",{className:ce,children:[(0,Ze.jsx)("div",{className:de,children:"Name"}),(0,Ze.jsxs)("div",{className:xe,children:[(0,Ze.jsx)("input",(0,l.Z)({placeholder:"Name",className:ve,defaultValue:x.name},w("name"))),(0,Ze.jsx)("p",{className:pe,children:"Your userName can only be changed once every 7 days."})]})]}),(0,Ze.jsxs)("div",{className:ce,style:{borderBottom:"none"},children:[(0,Ze.jsx)("div",{className:de,children:"Bio"}),(0,Ze.jsxs)("div",{className:xe,children:[(0,Ze.jsx)("textarea",(0,l.Z)({placeholder:"Bio",defaultValue:x.bio,className:ve,style:{height:100,resize:"none"}},w("bio",{onChange:function(e){P(e.target.value.length)}}))),(0,Ze.jsxs)("div",{className:Ne,children:[(0,Ze.jsxs)("span",{children:[N,"/"]}),"80"]})]})]})]}),(0,Ze.jsxs)("div",{className:Pe,children:[(0,Ze.jsx)("button",{className:ge,type:"reset",children:"Cancel"}),(0,Ze.jsx)("button",{className:be,disabled:g.isLoading||!Z&&!d,type:"submit",children:"Save"})]})]})})})})})};var Ee=function(){var e,s,i=(0,t.useState)({}),X=(0,r.Z)(i,2),$=X[0],ee=X[1],se=(0,o.UO)(),ie=(0,o.s0)(),le=(0,Q.Z)(),ne=le.isOpen,ae=le.toggle,re=null===(e=(0,A.PR)())||void 0===e?void 0:e.data,te=se.userName,oe=(0,u.a)({queryKey:["userProfile",te],queryFn:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.EA(te);case 2:return s=e.sent,ee(s),e.abrupt("return",$);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),ce=function(e){e.target.play()},de=function(e){e.target.pause(),e.target.currentTime=0},_e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(re){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,J.Z)($);case 4:s=e.sent,ee((function(e){return(0,l.Z)((0,l.Z)({},e),{},{followed:s})}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.h8($.id);case 2:return e.abrupt("return",ie("/"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return oe.isLoading?(0,Ze.jsx)(K.Z,{}):(0,Ze.jsxs)(Ze.Fragment,{children:[re&&(0,Ze.jsx)(ke,{open:ne,close:ae}),(0,Ze.jsxs)("div",{className:h,children:[(0,Ze.jsxs)("div",{className:v,children:[(0,Ze.jsxs)("div",{className:x,children:[(0,Ze.jsx)(B.Z,{src:$.avatar,width:116,height:116,className:j}),(0,Ze.jsxs)("div",{className:p,children:[(0,Ze.jsxs)("h2",{className:N,children:[$.userName,$.tick&&(0,Ze.jsx)(d.qHY,{className:P})]}),(0,Ze.jsx)("h4",{className:g,children:$.name}),(null===re||void 0===re?void 0:re.id)===(null===$||void 0===$?void 0:$.id)?(0,Ze.jsx)("div",{className:b,children:(0,Ze.jsx)(H.Z,{text:!0,leftIcon:(0,Ze.jsx)(_.ffH,{}),onClick:ae,children:"Edit profile"})}):(0,Ze.jsx)(G.Z,{children:(0,Ze.jsx)("div",{className:b,children:1===(null===re||void 0===re?void 0:re.id)?(0,Ze.jsxs)("div",{className:Z,children:[(0,Ze.jsx)(H.Z,{className:w,outline:!0,large:!0,children:"Messenges"}),(0,Ze.jsx)(m.ZP,{content:"Delete",placement:"bottom",children:(0,Ze.jsx)("div",{className:k,onClick:ue,children:(0,Ze.jsx)(d.N__,{})})})]}):$.followed?(0,Ze.jsxs)("div",{className:Z,children:[(0,Ze.jsx)(H.Z,{className:w,outline:!0,large:!0,children:"Messenges"}),(0,Ze.jsx)(m.ZP,{content:"Unfollow",placement:"bottom",children:(0,Ze.jsx)("div",{className:k,onClick:_e,children:(0,Ze.jsx)(d.yf9,{})})})]}):(0,Ze.jsx)(H.Z,{large:!0,className:y,onClick:_e,children:"Follow"})})})]})]}),(0,Ze.jsxs)("h2",{className:E,children:[(0,Ze.jsxs)("div",{className:C,children:[(0,Ze.jsx)("strong",{children:$.followingsCount}),(0,Ze.jsx)("span",{className:L,children:" Followings"})]}),(0,Ze.jsxs)("div",{className:C,children:[$.followersCount,(0,Ze.jsx)("span",{className:L,children:" Follower"})]}),(0,Ze.jsxs)("div",{className:C,children:[(0,Ze.jsx)("strong",{children:$.likesCount}),(0,Ze.jsx)("span",{className:L,children:"Likes"})]})]}),(0,Ze.jsx)("h2",{className:S,children:$.bio||"No bio yet."})]}),(0,Ze.jsxs)("div",{className:U,children:[(0,Ze.jsxs)("div",{className:F,children:[(0,Ze.jsx)("p",{className:I,children:(0,Ze.jsx)("span",{children:"Videos"})}),(0,Ze.jsxs)("p",{className:I,children:[(0,Ze.jsx)(d.tJj,{size:20}),(0,Ze.jsx)("span",{style:{marginLeft:6},children:"Liked"})]})]}),(0,Ze.jsx)("div",{className:M,children:(0,Ze.jsx)("div",{className:Y,children:null===$||void 0===$||null===(s=$.videos)||void 0===s?void 0:s.map((function(e){return(0,Ze.jsxs)(c.rU,{to:W.Z.videoLink(e),state:{videoDetail:!0,video:e,prevPath:window.location.pathname,openModel:!0},className:D,children:[(0,Ze.jsxs)("div",{className:O,children:[(0,Ze.jsx)("video",{className:R,src:e.fileUrl,muted:!0,loop:!0,onMouseEnter:ce,onMouseLeave:de,poster:e.thumb_url}),(0,Ze.jsx)("div",{className:z,children:(0,Ze.jsx)("p",{children:e.caption})})]}),(0,Ze.jsxs)("div",{className:V,children:[(0,Ze.jsx)(f.KCr,{style:{verticalAlign:"middle",marginRight:4,color:"white"}}),(0,Ze.jsx)("strong",{className:q,children:e.viewsCount})]})]},e.id)}))})})]})]})]})}}}]);
//# sourceMappingURL=550.00c23c34.chunk.js.map