module.exports = class NeoxrApi {
   baseUrl = 'https://api.neoxr.my.id/api'
   apiKey = null

   constructor(apiKey) {
      this.apiKey = apiKey || ''
   }
   
   check = async () => {
      let json = await Func.fetchJson(this.baseUrl + '/check/QTnyev')
      return json
   }
   
   podcast = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/podcast?url=' + url + '&apikey=QTnyev')
      return json
   }
   
   fb = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/fb?url=' + encodeURIComponent(url) + '&apikey=QTnyev')
      return json
   }

   ig = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/ig?url=' + url + '&apikey=QTnyev')
      return json
   }

   igs = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/igstory?url=' + url + '&apikey=QTnyev')
      return json
   }
   
   igh = async (str) => {
      let json = await Func.fetchJson(this.baseUrl + '/igh?url=' + str + '&apikey=QTnyev')
      return json
   }
   
   line = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/line?url=' + url + '&apikey=QTnyev')
      return json
   }

   pin = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/pin?url=' + url + '&apikey=QTnyev')
      return json
   }

   mediafire = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/mediafire?url=' + url + '&apikey=QTnyev')
      return json
   }

   tiktok = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/tiktok?url=' + url + '&apikey=QTnyev')
      return json
   }

   twitter = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/twitter?url=' + url + '&apikey=QTnyev')
      return json
   }

   soundcloud = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/soundcloud?url=' + url + '&apikey=QTnyev')
      return json
   }
   
   rexdl = async (str) => {
      let json = str.match('rexdl.com') ? await Func.fetchJson(this.baseUrl + '/rexdl-get?url=' + str + '&apikey=QTnyev') : await Func.fetchJson(this.baseUrl + '/rexdl?q=' + encodeURIComponent(str) + '&apikey=QTnyev')
      return json
   }
   
   pinterest = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/pinterest?q=' + query + '&apikey=QTnyev')
      return json
   }
   
   soundcloud = async (str) => {
      let json = str.match('soundcloud.com') ? await Func.fetchJson(this.baseUrl + '/soundcloud?url=' + str + '&apikey=QTnyev') : await Func.fetchJson(this.baseUrl + '/soundcloud-search?q=' + str + '&apikey=QTnyev')
      return json
   }
   
   apk = async (query, no) => {
      if (query && no) {
         let json = await Func.fetchJson(this.baseUrl + '/apk?q=' + query + '&no=' + no + '&apikey=QTnyev')
         return json
      } else if (query) {
         let json = await Func.fetchJson(this.baseUrl + '/apk?q=' + query + '&apikey=QTnyev')
         return json
      }
   }
   
   emojimix = async (emoticon) => {
  	let json = await Func.fetchJson(this.baseUrl + '/emoji?q=' + encodeURI(emoticon) + '&apikey=QTnyev')
      return json
   }
   
   wallpaper = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/wallpaper2?q=' + query + '&apikey=QTnyev')
      return json
   }
   
   sticker = async (str) => {
      let json = str.match('getstickerpack.com') ? await Func.fetchJson(this.baseUrl + '/sticker-get?url=' + str + '&apikey=QTnyev') : await Func.fetchJson(this.baseUrl + '/sticker?q=' + encodeURIComponent(str) + '&apikey=QTnyev')
      return json
   }
   
   tm = (style, text) => {  
      return this.baseUrl + '/' + style + '?text=' + text + '&apikey=QTnyev'
   }
   
   ie = (style, image) => {
      return this.baseUrl + '/effect?style=' + style + '&image=' + image + '&apikey=QTnyev'
   }
   
   nobg = async (image) => {
      let json = await Func.fetchJson(this.baseUrl + '/nobg?image=' + image + '&apikey=QTnyev')
      return json
   }
   
   ocr = async (image) => {
      let json = await Func.fetchJson(this.baseUrl + '/ocr?image=' + image + '&apikey=QTnyev')
      return json
   }
   
   brainly = async (query, lang) => {
  	let json = await Func.fetchJson(this.baseUrl + '/brainly?q=' + query + '&iso=' + lang + '&apikey=QTnyev')
      return json
   }
   
   sholat = async (city) => {
      let json = await Func.fetchJson(this.baseUrl + '/sholat?q=' + city + '&apikey=QTnyev')
      return json
   }
   
   kbbg = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/kbbg?q=' + query + '&apikey=QTnyev')
      return json
   }
   
   chord = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/chord?q=' + query + '&apikey=QTnyev')
      return json
   }
   
   lyric = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/lyric?q=' + query + '&apikey=QTnyev')
      return json
   }
   
   igstalk = async (username) => {
      let json = await Func.fetchJson(this.baseUrl + '/igstalk?username=' + username + '&apikey=QTnyev')
      return json
   }
   
   google = async (query, image = false) => {
      let json = await Func.fetchJson(this.baseUrl + '/' + (image ? 'goimg' : 'google') + '?q=' + query + '&apikey=QTnyev')
      return json
   }
   
   nama = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/artinama?nama=' + query + '&apikey=QTnyev')
      return json
   }
   
   cerpen = async (category) => {
      let json = await Func.fetchJson(this.baseUrl + '/cerpen?category=' + category + '&apikey=QTnyev')
      return json
   }

   cerpenList = async (category) => {
      let json = await Func.fetchJson(this.baseUrl + '/cerpen-list?category=' + category + '&apikey=QTnyev')
      return json
   }
   
   cerpenFetch = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/cerpen-get?url=' + url + '&apikey=QTnyev')
      return json
   }
   
   cnn = async (url) => {
      let json = url ? await Func.fetchJson(this.baseUrl + '/cnn?url=' + url + '&apikey=QTnyev') : await Func.fetchJson(this.baseUrl + '/cnn?apikey=QTnyev')
      return json
   }
   
   gempa = async () => {
      let json = await Func.fetchJson(this.baseUrl + '/gempa?apikey=QTnyev')
      return json
   }
   
   asahotak = async () => {
      let json = await Func.fetchJson(this.baseUrl + '/asahotak?apikey=QTnyev')
      return json
   }
   
   whoami = async () => {
      let json = await Func.fetchJson(this.baseUrl + '/whoami?apikey=QTnyev')
      return json
   }
   
   whatword = async () => {
      let json = await Func.fetchJson(this.baseUrl + '/whatword?apikey=QTnyev')
      return json
   }
   
   whatflag = async () => {
      let json = await Func.fetchJson(this.baseUrl + '/whatflag?apikey=QTnyev')
      return json
   }
   
   whatsong = async () => {
      let json = await Func.fetchJson(this.baseUrl + '/whatsong?apikey=QTnyev')
      return json
   }
   
   tekateki = async () => {
      let json = await Func.fetchJson(this.baseUrl + '/tekateki?apikey=QTnyev')
      return json
   }
   
   toAnime = async url => {
      let json = await Func.fetchJson('https://qq.indocoder.dev/?url=' + url)
      return json
   }
   
   spotify = async (url) => {
      let json = await Func.fetchJson(this.baseUrl + '/spotify?url=' + url + '&apikey=QTnyev')
      return json
   }
   
   play = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/play?q=' + query + '&apikey=QTnyev')
      return json
   }
   
   remini = async (image) => {
      let json = await Func.fetchJson(this.baseUrl + '/remini?image=' + image + '&apikey=QTnyev')
      return json
   }
   
   ageDetector = async (image) => {
      let json = await Func.fetchJson(this.baseUrl + '/age?image=' + image + '&apikey=QTnyev')
      return json
   }
   
   diffusion = async (query) => {
      let json = await Func.fetchJson(this.baseUrl + '/diffusion?q=' + query + '&apikey=QTnyev')
      return json
   }
}