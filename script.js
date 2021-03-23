const Container = Vue.createApp({
  data() {
    return {

      indicatorList: [
        { isActive: "activeindicator", id: "#login", linkId: '0' },
        { isActive: false, id: "#About", linkId: '1' }, { isActive: false, id: "#Blogs", linkId: '2' },
        { isActive: false, id: "#workflow", linkId: '3' }, { isActive: false, id: "#media", linkId: '4' },
        { isActive: false, id: '#footer', linkId: '5' }],

      blogs: [
        { name: "kenta-nikki", url: "assets/background-image/kenta-nikki.jpg", avatar: "assets/avatar/kenta-nikki.jpg", notes: 2500,artimg:'' },
        { name: "bethfuller", url: "assets/background-image/bethfuller.png", avatar: "assets/avatar/bethfuller.jpg", notes: 2500,artimg:'' },
        { name: "artbylittlebug", url: "assets/background-image/artbylittlebug.jpg", avatar: "assets/avatar/artbylittlebug.jpg", notes: 2500,artimg:'' },
        { name: "instantreigen", url: "assets/background-image/instantreigen.jpg", avatar: "assets/avatar/instantreigen.jpg", notes: 2500,artimg:'' },
        { name: "Kpop", url: "assets/background-image/Kpop.jpg", avatar: "assets/avatar/Kpop.jpg", notes: 2500,artimg:'' },
        { name: "mathildejr", url: "assets/background-image/mathildejr.jpg", avatar: "assets/avatar/mathildejr.jpg", notes: 2500,artimg:'' },
        { name: "nooskadraws", url: "assets/background-image/nooskadraws.jpg", avatar: "assets/avatar/nooskadraws.jpg", notes: 2500,artimg:'' },
        { name: "onurilter", url: "assets/background-image/onurilter.jpg", avatar: "assets/avatar/onurilter.jpg", notes: 2500,artimg:'' },
        { name: "tvoom", url: "assets/background-image/tvoom.jpg", avatar: "assets/avatar/tvoom.jpg", notes: 2500,artimg:'' },
        { name: "terahsvent", url: "assets/background-image/terahsvent.jpg", avatar: "assets/avatar/terahsvent.jpg", notes: 2500,artimg:'' },
        { name: "michellekingdom", url: "assets/background-image/michellekingdom.jpg", avatar: "assets/avatar/michellekingdom.jpg", notes: 2500,artimg:'' },
        { name: "artofmaquenda", url: "assets/background-image/artofmaquenda.gif", avatar: "assets/avatar/artofmaquenda.jpg", notes: 2500,artimg:'' },
        { name: "outerspacebih", url: "assets/background-image/terahsvent.jpg", avatar: "assets/avatar/terahsvent.jpg", notes: 2500,artimg:'' },

      ],
postedBy:[
{
artistName:'user',
artistAvatar:'avatar',

}

]

    }
  },

  mounted() {
    document.getElementById('container').addEventListener('scroll', () => this.onScroll(this.$refs));
  this.handleBackgroundImage(this.blogs)


  },
  beforeUnmount() {
    document.getElementById('container').removeEventListener('scroll', () => this.onScroll(this.$refs));
  },


  methods: {

    onScroll(ref) {
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



    activeIndicator(indicator) {
      this.indicatorList.forEach(indicator => {
        indicator.isActive = false
      });
      indicator.isActive = "activeindicator";
      this.iconsShow(this.indicatorList);
      this.showBlogs(this.indicatorList);
      this.handleSlidingPosts(this.indicatorList)
      this.handleMediaIconPop(this.indicatorList)
    },

handleSearchInput(){
document.getElementsByClassName('searchInput').style='background-color: rgba(253, 254, 255,1);'
console.log(document.getElementsByClassName('searchInput'))
},

    iconsShow(indicator) {
      if (indicator[1].isActive.length) {
        setTimeout(() => {
          this.$refs.tumblrIcon.style = "opacity:1;transition:linear 0.3s;font-size:10rem"
          this.$refs.plusIcon.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:46%"
          this.$refs.plusIconBig.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:54%;bottom:48%"
          this.$refs.heartSmall.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:52%;bottom:41%"
          this.$refs.plusIconTwo.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:43%;bottom:90%"
          this.$refs.heartBig.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:48%;bottom:78%"
          this.$refs.heartSmaller.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:65%;bottom:47%"
          this.$refs.headPhoneBig.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:53%;bottom:72%"
          this.$refs.chatBig.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:41%;bottom:59%;"
          this.$refs.chatBigger.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:46%;bottom:88%;"
          this.$refs.chatBiggest.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:57%;bottom:38%;"
          this.$refs.photoSmall.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:38%;bottom:43%;"
          this.$refs.photoBig.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:61%;bottom:68%;"
          this.$refs.linkSmall.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:55%;bottom:57%;"
          this.$refs.linkBig.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:38%;bottom:79.5%;"
          this.$refs.quoteOne.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:33.5%;bottom:59.5%;"
          this.$refs.quoteTwo.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:63%;bottom:55%;"
          this.$refs.videoBig.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:34.5%;bottom:72%;"
          this.$refs.videoBigg.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:59%;bottom:86%;"
          this.$refs.retweetSmall.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:45.5%;bottom:36%;"
          this.$refs.retweetBig.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:52.2%;bottom:89%;"
         this.$refs.headPhoneSmall.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:32%;bottom:48%;"
          this.$refs.textBig.style = "opacity:1;transition:cubic-bezier(.165,.84,.44,1) 1.5s;right:41%;bottom:68.5%;"
        }, 500)
      }
      else {
          this.$refs.headPhoneBig.style = "opacity:0;right:100%;bottom:100%"
        this.$refs.tumblrIcon.style = "opacity:0"
        this.$refs.plusIcon.style = "opacity:0;right:0"
        this.$refs.plusIconBig.style = "opacity:0;right:100%;bottom:0"
        this.$refs.heartSmall.style = "opacity:0;right:130%;"
        this.$refs.plusIconTwo.style = "opacity:0;right:0"
        this.$refs.heartBig.style = "opacity:0;right:50%;bottom:100%"
        this.$refs.heartSmaller.style = "opacity:0;right:100%;bottom:37%"  
 this.$refs.chatBig.style = "opacity:0;right:0;"
   this.$refs.chatBigger.style = "opacity:0;bottom:120%"
   this.$refs.chatBiggest.style = "opacity:0;right:120%;bottom:0;"
 this.$refs.photoSmall.style = "opacity:0;right:30%;bottom:0;"
 this.$refs.photoBig.style = "opacity:0;right:120%;bottom:70%;"
 this.$refs.linkSmall.style = "opacity:0;right:120%;"
 this.$refs.linkBig.style = "opacity:0;right:20%;bottom:100%;"
 this.$refs.quoteOne.style = "opacity:0;right:0%;"
 this.$refs.quoteTwo.style = "opacity:0;right:120%;"
 this.$refs.videoBig.style = "opacity:0;right:0%;bottom:100%"
 this.$refs.videoBigg.style = "opacity:0;right:120%;bottom:100%"
 this.$refs.retweetSmall.style = "opacity:0;right:35%;bottom:0"
 this.$refs.retweetBig.style = "opacity:0;right:60%;bottom:100%"
 this.$refs.headPhoneSmall.style = "opacity:0;right:10%;bottom:0"
 this.$refs.textBig.style = "opacity:0;right:0%;bottom:80%"
      }
    },

    showBlogs(indicator) {
      this.handleLoadingDots(false);
      this.$refs.loading.style = "display:flex";
      this.$refs.blogs.style = "display:none";

      setTimeout(() => {
        if (indicator[2].isActive.length) {
          this.handleLoadingDots(true);
          this.$refs.loading.style = "display:none";
          this.$refs.blogs.style = "display:block";
          this.$refs.Blog.style = "margin-top:0rem;transition:cubic-bezier(.165,.84,.44,1) 1s";
        }
        else { this.$refs.Blog.style = "margin-top:25rem"; }

      }, 2000);



    },


    handleLoadingDots(clearInterVal) {
      const interVal = setInterval(() => {
        this.$refs.loadOne.style = " transform: scale(1,1.5);background-color:#b2b7c5;transition: all  0.5s"
        setTimeout(() => {
          this.$refs.loadTwo.style = "transform: scale(1,1.5);background-color:#b2b7c5;transition: all 0.5s"
        }, 125);
        this.$refs.loadThree.style = "transform: scale(1,1);background-color:#ffffff;transition: all 0.5s"
        setTimeout(() => {
          this.$refs.loadOne.style = "transform: scale(1,1);background-color:#ffffff;transition: all  0.5s"
          setTimeout(() => {
            this.$refs.loadTwo.style = "transform: scale(1,1);background-color:#ffffff;transition: all  0.5s"
          }, 125);
          this.$refs.loadThree.style = "transform: scale(1,1.5);background-color:#b2b7c5;transition: all  0.5s"
        }, 250);

      }, 500);

      clearInterVal && clearInterval(interVal);

    },

    handleSlidingPosts(indicator) {
      if (indicator[3].isActive.length) {
        this.$refs.sleepyBox.style = "margin-top:0;opacity:1 ;transition: all ease-out 0.5s"
        setTimeout(() => {
          this.$refs.postiforward.style = "margin-top:0;opacity:1 ;transition: all ease-out 0.5s"
        }, 200);
      }
      else {
        this.$refs.sleepyBox.style = "margin-top:40rem"
        this.$refs.postiforward.style = "margin-top:40rem;transition: all  0.5s"
      }


    },

    handleMediaIconPop(indicator) {
      let timer = 0;
      if (indicator[4].isActive.length) {
        document.querySelectorAll('.iconContainer').forEach(icon => {
          setTimeout(() => {
            icon.style = "opacity:1;transform:scale(1,1);transition: transform 1s cubic-bezier(.165,.84,.44,1);"
          }, timer += 150)
        });
      }
      else {
        document.querySelectorAll('.iconContainer').forEach(icon => {
          icon.style = "opacity:0;transform:scale(0.5,0.5)";
        })

      }
    },

    handleBackgroundImage(blogs) {
let num = Math.floor(Math.random() * blogs.length);
      this.$refs.login.style ='background-image:url(' + blogs[num].url + ')';
      this.$refs.footer.style ='background-image:url(' + blogs[num].url + ')';
this.postedBy[0].artistAvatar =blogs[num].avatar
this.postedBy[0].artistName =blogs[num].name
setInterval(() => { let num = Math.floor(Math.random() * blogs.length);
      this.$refs.login.style ='background-image:url(' + blogs[num].url + ')';
      this.$refs.footer.style ='background-image:url(' + blogs[num].url + ')';
  this.postedBy[0].artistAvatar =blogs[num].avatar
this.postedBy[0].artistName =blogs[num].name
},10000);
    },

shuffleBlogs(){
		let images = this.blogs;
		for (let i = images.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ images[i], images[j] ] = [ images[j], images[i] ];
		}
	
}




  }
})

Container.mount('#container')
