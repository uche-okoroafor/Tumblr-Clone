const nav = Vue.createApp({
data() {
    return {
  isActive:false,      
activeSectionList:[{isActive:true,id:1},{isActive:false,id:2},{isActive:false,id:3},{isActive:false,id:4},{isActive:false,id:5},{isActive:false,id:6}],


    }
},

methods: {
    
activeSection(list){
this.isActive =!this.isActive
this.activeSectionList.forEach(activeList => {
 activeList.isActive=false
});
list.isActive=!list.isActive


console.log(this.activeSectionList);
}

},





})

nav.mount('#nav')
