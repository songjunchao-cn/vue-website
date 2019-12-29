// home
import logo from '../assets/images/logo.png'
import mail from '../assets/images/mail.png'
import smile from '../assets/images/smile.png'
import git from '../assets/images/git.png'
import glitch from '../assets/images/glitch.png'
import sup from '../assets/images/sup.png'
import readme from '../assets/images/readme.png'
import msg from '../assets/images/msg.png'
import setting from '../assets/images/setting.png'

// work
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import chick from '../assets/images/chicken.png'
import moneky from '../assets/images/moneky.png'
import game from '../assets/images/game.png'
import jquo from '../assets/images/jquo.png'
import pictring from '../assets/images/pictring.png'
// import vue from '../assets/images/Vue.png'
import reacts from '../assets/images/react.png'
// import blog from '../assets/images/Vue.png'
// blogs

// about
import imail from '../assets/images/mymail.png'
import igit from '../assets/images/mygit.png'
import icode from '../assets/images/mycode.png'
import iadd from '../assets/images/myadd.png'
import icity from '../assets/images/citybg.png'
// /citybg
import emjz from '../assets/images/emoji/zzz.png'
import emjs from '../assets/images/emoji/sad.png'
import emja from '../assets/images/emoji/anger.png'
import emjd from '../assets/images/emoji/dis.png'
import emjh from '../assets/images/emoji/happy.png'
import icloud from '../assets/images/aboutbg.png'
import myfont from '../assets/images/myfont.png'

// 点赞gif动画
import g1 from '../assets/images/gifs/g1.gif'
import g2 from '../assets/images/gifs/g2.gif'
import g3 from '../assets/images/gifs/g3.gif'
import g4 from '../assets/images/gifs/g4.gif'
import g5 from '../assets/images/gifs/g5.gif'
import g6 from '../assets/images/gifs/g6.gif'
import g7 from '../assets/images/gifs/g7.gif'
import g8 from '../assets/images/gifs/g8.gif'
import g9 from '../assets/images/gifs/g9.gif'
import g10 from '../assets/images/gifs/g10.gif'
import g11 from '../assets/images/gifs/g11.gif'
import g12 from '../assets/images/gifs/g12.gif'
import g13 from '../assets/images/gifs/g13.gif'
import g14 from '../assets/images/gifs/g14.gif'
import g15 from '../assets/images/gifs/g15.gif'
import g16 from '../assets/images/gifs/g16.gif'
import g17 from '../assets/images/gifs/g17.gif'
import g18 from '../assets/images/gifs/g18.gif'

const parrotSrc = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18
]

const homeIcon = {
  sup,
  readme,
  msg,
  setting
}

const homeImg = {
  glitch,
  logo,
  mail,
  smile,
  git
}

const aboutImg = {
  imail,
  igit,
  icode,
  iadd,
  icity,
  emjz,
  emjs,
  emja,
  emjd,
  emjh,
  icloud,
  myfont
}

const workIcon = {
  logo1,
  logo2,
  chick,
  moneky,
  game,
  jquo,
  pictring,
  // vue,
  reacts
  // blog
}

let parrotUrl = {}
// 类数组push
parrotSrc.map((url) => {
  [].push.call(parrotUrl, url)
})
delete parrotUrl.length

export { homeIcon, homeImg, workIcon, parrotUrl, aboutImg }
