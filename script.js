const Container = Vue.createApp({
data() {
    return {
      
indicatorList:[{isActive:"activeindicator",id:"#login",linkId:'0'},
{isActive:false,id:"#About",linkId:'1'},{isActive:false,id:"#Blogs",linkId:'2'},
{isActive:false,id:"#workflow",linkId:'3'},{isActive:false,id:"#media",linkId:'4'},
{isActive:false,id:'#footer',linkId:'5'}],


    }

},

mounted () {
  document.getElementById('container').addEventListener('scroll', ()=>this.onScroll(this.$refs));

  },
  beforeUnmount() {
  document.getElementById('container').removeEventListener('scroll',()=> this.onScroll(this.$refs));
  },

      
methods: {

onScroll(ref){
this.isElementInViewport(ref.login) && (this.activeIndicator(this.indicatorList[0]))
this.isElementInViewport(ref.About) && (this.activeIndicator(this.indicatorList[1]));
this.isElementInViewport(ref.Blogs) && (this.activeIndicator(this.indicatorList[2]))
this.isElementInViewport(ref.workflow) && (this.activeIndicator(this.indicatorList[3]))
this.isElementInViewport(ref.media) && (this.activeIndicator(this.indicatorList[4]))
this.isElementInViewport(ref.footer) && (this.activeIndicator(this.indicatorList[5]))
},




isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },



activeIndicator(indicator){
this.indicatorList.forEach(indicator => {
 indicator.isActive=false
});
indicator.isActive="activeindicator"; 
this.iconsShow(this.indicatorList);

},


iconsShow(indicator){
if(indicator[1].isActive.length){setTimeout(()=>{this.$refs.tumblrIcon.style="opacity:1;transition:linear 0.3s;font-size:10rem"
this.$refs.plusIcon.style ="opacity:1;transition:ease-out 1.2s;right:46%"
},500)}
this.$refs.tumblrIcon.style="opacity:0"
this.$refs.plusIcon.style ="opacity:0;right:0"


}



}

})

Container.mount('#container')
