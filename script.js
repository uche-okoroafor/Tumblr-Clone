const Container = Vue.createApp({
data() {
    return {
      
indicatorList:[
{isActive:"activeindicator",id:"#login",linkId:'0'},
{isActive:false,id:"#About",linkId:'1'},{isActive:false,id:"#Blogs",linkId:'2'},
{isActive:false,id:"#workflow",linkId:'3'},{isActive:false,id:"#media",linkId:'4'},
{isActive:false,id:'#footer',linkId:'5'}],

blogs:[
{name:"uche",url:"assets/walkinman.webp",avatar:"assets/artb.jpg",notes:2500},
{name:"uche",url:"assets/avatar.jpg",avatar:"assets/artb.jpg",notes:2500},
{name:"uche",url:"assets/artbylgg.jpg",avatar:"assets/artbylgg.jpg",notes:'2500'},
{name:"uche",url:"assets/artbylittl.jpg",avatar:"assets/artbylittl.jpg",notes:'2500'},
{name:"uche",url:"assets/artb.jpg",avatar:"assets/artb.jpg",notes:'2500'},
{name:"uche",url:"assets/artb.jpg",avatar:"assets/artb.jpg",notes:'2500'},
{name:"uche",url:"assets/artb.jpg",avatar:"assets/artb.jpg",notes:'2500'},
{name:"uche",url:"assets/artb.jpg",avatar:"assets/artb.jpg",notes:'2500'},
{name:"uche",url:"assets/artb.jpg",avatar:"assets/artb.jpg",notes:'2500'},
{name:"uche",url:"assets/artb.jpg",avatar:"assets/artb.jpg",notes:'2500'},
],



    }},

mounted () {
  document.getElementById('container').addEventListener('scroll', ()=>this.onScroll(this.$refs));
// ()=>this.handleBackgroundImage(this.blogs);

  },
  beforeUnmount() {
  document.getElementById('container').removeEventListener('scroll',()=> this.onScroll(this.$refs));
  },

      
methods: {

onScroll(ref){
this.isElementInViewport(ref.login) && this.activeIndicator(this.indicatorList[0])
this.isElementInViewport(ref.About) && this.activeIndicator(this.indicatorList[1]);
this.isElementInViewport(ref.Blogs) && this.activeIndicator(this.indicatorList[2])
this.isElementInViewport(ref.workflow) && this.activeIndicator(this.indicatorList[3])
this.isElementInViewport(ref.media) && this.activeIndicator(this.indicatorList[4])
this.isElementInViewport(ref.footer) && this.activeIndicator(this.indicatorList[5])
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
this.showBlogs(this.indicatorList);
this.handleSlidingPosts(this.indicatorList)
this.handleMediaIconPop(this.indicatorList)
},


iconsShow(indicator){
if(indicator[1].isActive.length){setTimeout(()=>{
this.$refs.tumblrIcon.style="opacity:1;transition:linear 0.3s;font-size:10rem"
this.$refs.plusIcon.style ="opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:46%"
this.$refs.plusIconBig.style ="opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:54%;bottom:50%"
this.$refs.heartSmall.style ="opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:52%;bottom:41%"
this.$refs.plusIconTwo.style ="opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:42%;bottom:90%"
this.$refs.heartBig.style ="opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:48%;bottom:78%"
this.$refs.heartSmaller.style ="opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:65%;bottom:45%"
},500)}
else{this.$refs.tumblrIcon.style="opacity:0"
this.$refs.plusIcon.style ="opacity:0;right:0"
this.$refs.plusIconBig.style ="opacity:0;right:100%;bottom:0"
this.$refs.heartSmall.style ="opacity:0;right:100%;bottom:0"
this.$refs.plusIconTwo.style ="opacity:0;right:0"
this.$refs.heartBig.style ="opacity:0;right:50%;bottom:100%"
this.$refs.heartSmaller.style ="opacity:0;right:100%"}
},

showBlogs(indicator){
this.handleLoadingDots(false);
this.$refs.loading.style="display:flex";
this.$refs.blogs.style="display:none";

setTimeout(() => {
  if(indicator[2].isActive.length){
this.handleLoadingDots(true);
this.$refs.loading.style="display:none";
this.$refs.blogs.style="display:block";
this.$refs.Blog.style="margin-top:0rem;transition:cubic-bezier(.165,.84,.44,1) 1s";
}
else
{this.$refs.Blog.style="margin-top:25rem";}

},2000);



},


handleLoadingDots(clearInterVal){
const interVal = setInterval(() => {
this.$refs.loadOne.style=" transform: scale(1,1.5);background-color:#b2b7c5;transition: all  0.5s" 
setTimeout(() => {
 this.$refs.loadTwo.style="transform: scale(1,1.5);background-color:#b2b7c5;transition: all 0.5s"  
}, 125);
this.$refs.loadThree.style="transform: scale(1,1);background-color:#ffffff;transition: all 0.5s" 
setTimeout(() => {
 this.$refs.loadOne.style="transform: scale(1,1);background-color:#ffffff;transition: all  0.5s" 
setTimeout(() => {
 this.$refs.loadTwo.style="transform: scale(1,1);background-color:#ffffff;transition: all  0.5s"  
},125);
this.$refs.loadThree.style="transform: scale(1,1.5);background-color:#b2b7c5;transition: all  0.5s" 
},250);

},500);

clearInterVal && clearInterval(interVal);

},

handleSlidingPosts(indicator){
if(indicator[3].isActive.length){
this.$refs.sleepyBox.style="margin-top:0;opacity:1 ;transition: all ease-out 0.5s"
setTimeout(() => {
  this.$refs.postiforward.style="margin-top:0;opacity:1 ;transition: all ease-out 0.5s"
}, 200);
}
else{
this.$refs.sleepyBox.style="margin-top:40rem" 
  this.$refs.postiforward.style="margin-top:40rem;transition: all  0.5s"
}


},

handleMediaIconPop(indicator){
let timer = 0;
if(indicator[4].isActive.length){
document.querySelectorAll('.iconContainer').forEach(icon => {
setTimeout(()=>{
icon.style="opacity:1;transform:scale(1,1);transition: transform 1s cubic-bezier(.165,.84,.44,1);"
},timer+=150) });
}
else{
document.querySelectorAll('.iconContainer').forEach(icon => {
icon.style="opacity:0;transform:scale(0.5,0.5)"; 
})

}
},

// handleBackgroundImage=(blogs)=>{
// 		let num = Math.floor(Math.random() *blogs.length);
// // this.$refs.login.style ='background-image:url'+(blogs[num].url);
// // this.$refs.footer.style ='background-image: url'('+    +);'background-position: center; background-repeat: no-repeat;background-size: cover; position: relative;'
// console.log(blogs[num].url)
// }




}})

Container.mount('#container')
