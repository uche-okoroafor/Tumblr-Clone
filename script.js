const Container = Vue.createApp({
data() {
    return {
      
indicatorList:[{isActive:'active-indicator',id:"#login"},{isActive:false,id:"#tumblricons"},{isActive:false,id:"#Blogs"},{isActive:false,id:"#workflow"},{isActive:false,id:"#media"},{isActive:false,id:'#footer'}],
  scrolled: false,

    }
},


// mounted() {
//             document.getElementById('container').addEventListener('scroll', this.handleScroll);
//             console.log('scrolling Injectesssssssssd');
//         },
//         beforeUnmount() {
//             document.getElementById('container').removeEventListener('scroll');
//             console.log('scrolling Destroyed');
    // },
  created () {
    window.addEventListener('scroll', this.handleScroll);
console.log('yesssssssssssss');
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
console.log('yesssssssssssss');
  },


methods: {
    
activeIndicator(indicator){
this.indicatorList.forEach(indicator => {
 indicator.isActive=false
});
indicator.isActive='active-indicator'
}

},

 handleScroll() {
      if (this.scrolled = window.scrollY > 0) {
               console.log('yesssssssssssss');
    }
console.log('nooooooooo');
 }
})

Container.mount('#container')
