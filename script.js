const nav = Vue.createApp({
data() {
    return {
  isActive:false,      
activeSectionList:[{activeSection:true},{activeSection:false},{activeSection:false},{activeSection:false},{activeSection:false},{activeSection:false}],


    }
},

methods: {
    
activeSection(){
this.isActive =!thisisActive
activeSectionList.forEach(activeList => {
 activeList.activeSection=false
});
console.log(activeSectionList)
}

},





})

nav.mount('#nav')