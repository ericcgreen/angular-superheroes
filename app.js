let supersignalData = [
  {name:"Wonder Woman", phone_number:"111", comic:"DC", photo:"https://jennyhansenauthor.files.wordpress.com/2015/12/wonder-woman-flying.jpg?w=300"},
  {name:"Green Lantern", phone_number:"222", comic:"DC", photo:"https://secure.polyvoreimg.com/cgi/img-thing/size/l/tid/62250467.jpg"},
  {name:"Captain Marvel", phone_number:"333", comic:"Marvel", photo:"http://fr.ubergizmo.com/wp-content/uploads/2016/04/captain-marvel-300x300.jpg"},
  {name:"Batman", phone_number:"444", comic:"DC", photo:"http://media.gunaxin.com/wp-content/uploads/2012/05/batman-thumb.jpg"},
  {name:"Nightwing", phone_number:"555", comic:"DC", photo:"http://www.honcho-sfx.com/blog/wp-content/uploads/2017/02/Nightwing-300x300.jpg"},
]


angular
  .module('supersingleApp', [])
  .controller('supersingleCtrl', [supersignalController])

  function supersignalController() {
    this.supersignals = supersignalData
    this.addSuperSignal = function(){
      let supersignal = {name: this.newSuperSignalName, phone_number: this.newSuperSignalPhone, comic: this.newSuperSignalComic, photo: this.newSuperSigalPhoto}
      this.supersignals.push(supersignal)
    }
  }
