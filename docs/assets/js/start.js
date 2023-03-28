$(document).ready(() => {
  window.setInterval(() =>{
    const r = Math.floor(Math.random() * 331);
    $('#logo').attr('src', `/slurp/assets/images/logos/fuchsia-${ r }.png`);
  }, 7000);
  const emoji = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰','😗','😙','😚','☺️','🙂','🤗','🤩','🤔','🤨','😐','😑','😶','🙄','😏','😣','😥','😮','🤐','😯','😪','😫','😴','😌','😛','😜','😝','🤤','😒','😓','😔','😕','🙃','🤑','😲','☹️','🙁','😖','😞','😟','😤','😢','😭','😦','😧','😨','😩','🤯','😬','😰','😱','🥵','🥶','😳','🤪','😵','😡','😠','🤬','😷','🤒','🤕','🤢','🤮','🤧','😇','🤠','🤡','🥳','🥴','🥺','🤥','🤫','🤭','🧐','🤓','😈','👿','👹','👺','💀','👻','👽','🤖','💩','😺','😸','😹','😻','😼','😽','🙀','😿','😾','👶','👧','🧒','👦','👩','🧑','👨','👵','🧓','👴','👲','👳‍♀️','👳‍♂️','🧕','🧔','👱‍♂️','👱‍♀️','👨‍🦰','👩‍🦰','👨‍🦱','👩‍🦱','👨‍🦲','👩‍🦲','👨‍🦳','👩‍🦳','🦸‍♀️','🦸‍♂️','🦹‍♀️','🦹‍♂️','👮‍♀️','👮‍♂️','👷‍♀️','👷‍♂️','💂‍♀️','💂‍♂️','🕵️‍♀️','🕵️‍♂️','👩‍⚕️','👨‍⚕️','👩‍🌾','👨‍🌾','👩‍🍳','👨‍🍳','👩‍🎓','👨‍🎓','👩‍🎤','👨‍🎤','👩‍🏫','👨‍🏫','👩‍🏭','👨‍🏭','👩‍💻','👨‍💻','👩‍💼','👨‍💼','👩‍🔧','👨‍🔧','👩‍🔬','👨‍🔬','👩‍🎨','👨‍🎨','👩‍🚒','👨‍🚒','👩‍✈️','👨‍✈️','👩‍🚀','👨‍🚀','👩‍⚖️','👨‍⚖️','👰','🤵','👸','🤴','🤶','🎅','🧙‍♀️','🧙‍♂️','🧝‍♀️','🧝‍♂️','🧛‍♀️','🧛‍♂️','🧟‍♀️','🧟‍♂️','🧞‍♀️','🧞‍♂️','🧜‍♀️','🧜‍♂️','🧚‍♀️','🧚‍♂️','👼','🤰','🤱','🙇‍♀️','🙇‍♂️','💁‍♀️','💁‍♂️','🙅‍♀️','🙅‍♂️','🙆‍♀️','🙆‍♂️','🙋‍♀️','🙋‍♂️','🤦‍♀️','🤦‍♂️','🤷‍♀️','🤷‍♂️','🙎‍♀️','🙎‍♂️','🙍‍♀️','🙍‍♂️','💇‍♀️','💇‍♂️','💆‍♀️','💆‍♂️','🧖‍♀️','🧖‍♂️','💅','🤳','💃','🕺','👯‍♀️','👯‍♂️','🕴','🚶‍♀️','🚶‍♂️','🏃‍♀️','🏃‍♂️','👫','👭','👬','💑','👩‍❤️‍👩','👨‍❤️‍👨','💏','👩‍❤️‍💋‍👩','👨‍❤️‍💋‍👨','👪','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👦','👩‍👧','👩‍👧‍👦','👩‍👦‍👦','👩‍👧‍👧','👨‍👦','👨‍👧','👨‍👧‍👦','👨‍👦‍👦','👨‍👧‍👧','🤲','👐','🙌','👏','🤝','👍','👎','👊','✊','🤛','🤜','🤞','✌️','🤟','🤘','👌','👈','👉','👆','👇','☝️','✋','🤚','🖐','🖖','👋','🤙','💪','🦵','🦶','🖕','✍️','🙏','💍','💄','💋','👄','👅','👂','👃','👣','👁','👀','🧠','🦴','🦷','🗣','👤','👥','🧥','👚','👕','👖','👔','👗','👙','👘','👠','👡','👢','👞','👟','🥾','🥿','🧦','🧤','🧣','🎩','🧢','👒','🎓','⛑','👑','👝','👛','👜','💼','🎒','👓','🕶','🥽','🥼','🌂','🧵','🧶','👶🏻','👦🏻','👧🏻','👨🏻','👩🏻','👱🏻‍♀️','👱🏻','👴🏻','👵🏻','👲🏻','👳🏻‍♀️','👳🏻','👮🏻‍♀️','👮🏻','👷🏻‍♀️','👷🏻','💂🏻‍♀️','💂🏻','🕵🏻‍♀️','🕵🏻','👩🏻‍⚕️','👨🏻‍⚕️','👩🏻‍🌾','👨🏻‍🌾','👩🏻‍🍳','👨🏻‍🍳','👩🏻‍🎓','👨🏻‍🎓','👩🏻‍🎤','👨🏻‍🎤','👩🏻‍🏫','👨🏻‍🏫','👩🏻‍🏭','👨🏻‍🏭','👩🏻‍💻','👨🏻‍💻','👩🏻‍💼','👨🏻‍💼','👩🏻‍🔧','👨🏻‍🔧','👩🏻‍🔬','👨🏻‍🔬','👩🏻‍🎨','👨🏻‍🎨','👩🏻‍🚒','👨🏻‍🚒','👩🏻‍✈️','👨🏻‍✈️','👩🏻‍🚀','👨🏻‍🚀','👩🏻‍⚖️','👨🏻‍⚖️','🤶🏻','🎅🏻','👸🏻','🤴🏻','👰🏻','🤵🏻','👼🏻','🤰🏻','🙇🏻‍♀️','🙇🏻','💁🏻','💁🏻‍♂️','🙅🏻','🙅🏻‍♂️','🙆🏻','🙆🏻‍♂️','🙋🏻','🙋🏻‍♂️','🤦🏻‍♀️','🤦🏻‍♂️','🤷🏻‍♀️','🤷🏻‍♂️','🙎🏻','🙎🏻‍♂️','🙍🏻','🙍🏻‍♂️','💇🏻','💇🏻‍♂️','💆🏻','💆🏻‍♂️','🕴🏻','💃🏻','🕺🏻','🚶🏻‍♀️','🚶🏻','🏃🏻‍♀️','🏃🏻','🤲🏻','👐🏻','🙌🏻','👏🏻','🙏🏻','👍🏻','👎🏻','👊🏻','✊🏻','🤛🏻','🤜🏻','🤞🏻','✌🏻','🤟🏻','🤘🏻','👌🏻','👈🏻','👉🏻','👆🏻','👇🏻','☝🏻','✋🏻','🤚🏻','🖐🏻','🖖🏻','👋🏻','🤙🏻','💪🏻','🖕🏻','✍🏻','🤳🏻','💅🏻','👂🏻','👃🏻','👶🏼','👦🏼','👧🏼','👨🏼','👩🏼','👱🏼‍♀️','👱🏼','👴🏼','👵🏼','👲🏼','👳🏼‍♀️','👳🏼','👮🏼‍♀️','👮🏼','👷🏼‍♀️','👷🏼','💂🏼‍♀️','💂🏼','🕵🏼‍♀️','🕵🏼','👩🏼‍⚕️','👨🏼‍⚕️','👩🏼‍🌾','👨🏼‍🌾','👩🏼‍🍳','👨🏼‍🍳','👩🏼‍🎓','👨🏼‍🎓','👩🏼‍🎤','👨🏼‍🎤','👩🏼‍🏫','👨🏼‍🏫','👩🏼‍🏭','👨🏼‍🏭','👩🏼‍💻','👨🏼‍💻','👩🏼‍💼','👨🏼‍💼','👩🏼‍🔧','👨🏼‍🔧','👩🏼‍🔬','👨🏼‍🔬','👩🏼‍🎨','👨🏼‍🎨','👩🏼‍🚒','👨🏼‍🚒','👩🏼‍✈️','👨🏼‍✈️','👩🏼‍🚀','👨🏼‍🚀','👩🏼‍⚖️','👨🏼‍⚖️','🤶🏼','🎅🏼','👸🏼','🤴🏼','👰🏼','🤵🏼','👼🏼','🤰🏼','🙇🏼‍♀️','🙇🏼','💁🏼','💁🏼‍♂️','🙅🏼','🙅🏼‍♂️','🙆🏼','🙆🏼‍♂️','🙋🏼','🙋🏼‍♂️','🤦🏼‍♀️','🤦🏼‍♂️','🤷🏼‍♀️','🤷🏼‍♂️','🙎🏼','🙎🏼‍♂️','🙍🏼','🙍🏼‍♂️','💇🏼','💇🏼‍♂️','💆🏼','💆🏼‍♂️','🕴🏼','💃🏼','🕺🏼','🚶🏼‍♀️','🚶🏼','🏃🏼‍♀️','🏃🏼','🤲🏼','👐🏼','🙌🏼','👏🏼','🙏🏼','👍🏼','👎🏼','👊🏼','✊🏼','🤛🏼','🤜🏼','🤞🏼','✌🏼','🤟🏼','🤘🏼','👌🏼','👈🏼','👉🏼','👆🏼','👇🏼','☝🏼','✋🏼','🤚🏼','🖐🏼','🖖🏼','👋🏼','🤙🏼','💪🏼','🖕🏼','✍🏼','🤳🏼','💅🏼','👂🏼','👃🏼','👶🏽','👦🏽','👧🏽','👨🏽','👩🏽','👱🏽‍♀️','👱🏽','👴🏽','👵🏽','👲🏽','👳🏽‍♀️','👳🏽','👮🏽‍♀️','👮🏽','👷🏽‍♀️','👷🏽','💂🏽‍♀️','💂🏽','🕵🏽‍♀️','🕵🏽','👩🏽‍⚕️','👨🏽‍⚕️','👩🏽‍🌾','👨🏽‍🌾','👩🏽‍🍳','👨🏽‍🍳','👩🏽‍🎓','👨🏽‍🎓','👩🏽‍🎤','👨🏽‍🎤','👩🏽‍🏫','👨🏽‍🏫','👩🏽‍🏭','👨🏽‍🏭','👩🏽‍💻','👨🏽‍💻','👩🏽‍💼','👨🏽‍💼','👩🏽‍🔧','👨🏽‍🔧','👩🏽‍🔬','👨🏽‍🔬','👩🏽‍🎨','👨🏽‍🎨','👩🏽‍🚒','👨🏽‍🚒','👩🏽‍✈️','👨🏽‍✈️','👩🏽‍🚀','👨🏽‍🚀','👩🏽‍⚖️','👨🏽‍⚖️','🤶🏽','🎅🏽','👸🏽','🤴🏽','👰🏽','🤵🏽','👼🏽','🤰🏽','🙇🏽‍♀️','🙇🏽','💁🏽','💁🏽‍♂️','🙅🏽','🙅🏽‍♂️','🙆🏽','🙆🏽‍♂️','🙋🏽','🙋🏽‍♂️','🤦🏽‍♀️','🤦🏽‍♂️','🤷🏽‍♀️','🤷🏽‍♂️','🙎🏽','🙎🏽‍♂️','🙍🏽','🙍🏽‍♂️','💇🏽','💇🏽‍♂️','💆🏽','💆🏽‍♂️','🕴🏼','💃🏽','🕺🏽','🚶🏽‍♀️','🚶🏽','🏃🏽‍♀️','🏃🏽','🤲🏽','👐🏽','🙌🏽','👏🏽','🙏🏽','👍🏽','👎🏽','👊🏽','✊🏽','🤛🏽','🤜🏽','🤞🏽','✌🏽','🤟🏽','🤘🏽','👌🏽','👈🏽','👉🏽','👆🏽','👇🏽','☝🏽','✋🏽','🤚🏽','🖐🏽','🖖🏽','👋🏽','🤙🏽','💪🏽','🖕🏽','✍🏽','🤳🏽','💅🏽','👂🏽','👃🏽','👶🏾','👦🏾','👧🏾','👨🏾','👩🏾','👱🏾‍♀️','👱🏾','👴🏾','👵🏾','👲🏾','👳🏾‍♀️','👳🏾','👮🏾‍♀️','👮🏾','👷🏾‍♀️','👷🏾','💂🏾‍♀️','💂🏾','🕵🏾‍♀️','🕵🏾','👩🏾‍⚕️','👨🏾‍⚕️','👩🏾‍🌾','👨🏾‍🌾','👩🏾‍🍳','👨🏾‍🍳','👩🏾‍🎓','👨🏾‍🎓','👩🏾‍🎤','👨🏾‍🎤','👩🏾‍🏫','👨🏾‍🏫','👩🏾‍🏭','👨🏾‍🏭','👩🏾‍💻','👨🏾‍💻','👩🏾‍💼','👨🏾‍💼','👩🏾‍🔧','👨🏾‍🔧','👩🏾‍🔬','👨🏾‍🔬','👩🏾‍🎨','👨🏾‍🎨','👩🏾‍🚒','👨🏾‍🚒','👩🏾‍✈️','👨🏾‍✈️','👩🏾‍🚀','👨🏾‍🚀','👩🏾‍⚖️','👨🏾‍⚖️','🤶🏾','🎅🏾','👸🏾','🤴🏾','👰🏾','🤵🏾','👼🏾','🤰🏾','🙇🏾‍♀️','🙇🏾','💁🏾','💁🏾‍♂️','🙅🏾','🙅🏾‍♂️','🙆🏾','🙆🏾‍♂️','🙋🏾','🙋🏾‍♂️','🤦🏾‍♀️','🤦🏾‍♂️','🤷🏾‍♀️','🤷🏾‍♂️','🙎🏾','🙎🏾‍♂️','🙍🏾','🙍🏾‍♂️','💇🏾','💇🏾‍♂️','💆🏾','💆🏾‍♂️','🕴🏾','💃🏾','🕺🏾','🚶🏾‍♀️','🚶🏾','🏃🏾‍♀️','🏃🏾','🤲🏾','👐🏾','🙌🏾','👏🏾','🙏🏾','👍🏾','👎🏾','👊🏾','✊🏾','🤛🏾','🤜🏾','🤞🏾','✌🏾','🤟🏾','🤘🏾','👌🏾','👈🏾','👉🏾','👆🏾','👇🏾','☝🏾','✋🏾','🤚🏾','🖐🏾','🖖🏾','👋🏾','🤙🏾','💪🏾','🖕🏾','✍🏾','🤳🏾','💅🏾','👂🏾','👃🏾','👶🏿','👦🏿','👧🏿','👨🏿','👩🏿','👱🏿‍♀️','👱🏿','👴🏿','👵🏿','👲🏿','👳🏿‍♀️','👳🏿','👮🏿‍♀️','👮🏿','👷🏿‍♀️','👷🏿','💂🏿‍♀️','💂🏿','🕵🏿‍♀️','🕵🏿','👩🏿‍⚕️','👨🏿‍⚕️','👩🏿‍🌾','👨🏿‍🌾','👩🏿‍🍳','👨🏿‍🍳','👩🏿‍🎓','👨🏿‍🎓','👩🏿‍🎤','👨🏿‍🎤','👩🏿‍🏫','👨🏿‍🏫','👩🏿‍🏭','👨🏿‍🏭','👩🏿‍💻','👨🏿‍💻','👩🏿‍💼','👨🏿‍💼','👩🏿‍🔧','👨🏿‍🔧','👩🏿‍🔬','👨🏿‍🔬','👩🏿‍🎨','👨🏿‍🎨','👩🏿‍🚒','👨🏿‍🚒','👩🏿‍✈️','👨🏿‍✈️','👩🏿‍🚀','👨🏿‍🚀','👩🏿‍⚖️','👨🏿‍⚖️','🤶🏿','🎅🏿','👸🏿','🤴🏿','👰🏿','🤵🏿','👼🏿','🤰🏿','🙇🏿‍♀️','🙇🏿','💁🏿','💁🏿‍♂️','🙅🏿','🙅🏿‍♂️','🙆🏿','🙆🏿‍♂️','🙋🏿','🙋🏿‍♂️','🤦🏿‍♀️','🤦🏿‍♂️','🤷🏿‍♀️','🤷🏿‍♂️','🙎🏿','🙎🏿‍♂️','🙍🏿','🙍🏿‍♂️','💇🏿','💇🏿‍♂️','💆🏿','💆🏿‍♂️','🕴🏿','💃🏿','🕺🏿','🚶🏿‍♀️','🚶🏿','🏃🏿‍♀️','🏃🏿','🤲🏿','👐🏿','🙌🏿','👏🏿','🙏🏿','👍🏿','👎🏿','👊🏿','✊🏿','🤛🏿','🤜🏿','🤞🏿','✌🏿','🤟🏿','🤘🏿','👌🏿','👈🏿','👉🏿','👆🏿','👇🏿','☝🏿','✋🏿','🤚🏿','🖐🏿','🖖🏿','👋🏿','🤙🏿','💪🏿','🖕🏿','✍🏿','🤳🏿','💅🏿','👂🏿','👃🏿','🐶','🐱','🐭','🐹','🐰','🦊','🦝','🐻','🐼','🦘','🦡','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦢','🦅','🦉','🦚','🦜','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐚','🐞','🐜','🦗','🕷','🕸','🦂','🦟','🦠','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🐘','🦏','🦛','🐪','🐫','🦙','🦒','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🐐','🦌','🐕','🐩','🐈','🐓','🦃','🕊','🐇','🐁','🐀','🐿','🦔','🐾','🐉','🐲','🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂','🍁','🍄','🌾','💐','🌷','🌹','🥀','🌺','🌸','🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍','🌏','💫','⭐️','🌟','✨','⚡️','☄️','💥','🔥','🌪','🌈','☀️','🌤','⛅️','🌥','☁️','🌦','🌧','⛈','🌩','🌨','❄️','☃️','⛄️','🌬','💨','💧','💦','☔️','☂️','🌊','🌫','🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🍍','🥭','🥥','🥝','🍅','🍆','🥑','🥦','🥒','🥬','🌶','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🥯','🧀','🥚','🍳','🥞','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🌮','🌯','🥗','🥘','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🥟','🍤','🍙','🍚','🍘','🍥','🥮','🥠','🍢','🍡','🍧','🍨','🍦','🥧','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🧂','🍩','🍪','🌰','🥜','🍯','🥛','🍼','☕️','🍵','🥤','🍶','🍺','🍻','🥂','🍷','🥃','🍸','🍹','🍾','🥄','🍴','🍽','🥣','🥡','⚽️','🏀','🏈','⚾️','🥎','🏐','🏉','🎾','🥏','🎱','🏓','🏸','🥅','🏒','🏑','🥍','🏏','⛳️','🏹','🎣','🥊','🥋','🎽','⛸','🥌','🛷','🛹','🎿','⛷','🏂','🏋️‍♀️','🏋🏻‍♀️','🏋🏼‍♀️','🏋🏽‍♀️','🏋🏾‍♀️','🏋🏿‍♀️','🏋️‍♂️','🏋🏻‍♂️','🏋🏼‍♂️','🏋🏽‍♂️','🏋🏾‍♂️','🏋🏿‍♂️','🤼‍♀️','🤼‍♂️','🤸‍♀️','🤸🏻‍♀️','🤸🏼‍♀️','🤸🏽‍♀️','🤸🏾‍♀️','🤸🏿‍♀️','🤸‍♂️','🤸🏻‍♂️','🤸🏼‍♂️','🤸🏽‍♂️','🤸🏾‍♂️','🤸🏿‍♂️','⛹️‍♀️','⛹🏻‍♀️','⛹🏼‍♀️','⛹🏽‍♀️','⛹🏾‍♀️','⛹🏿‍♀️','⛹️‍♂️','⛹🏻‍♂️','⛹🏼‍♂️','⛹🏽‍♂️','⛹🏾‍♂️','⛹🏿‍♂️','🤺','🤾‍♀️','🤾🏻‍♀️','🤾🏼‍♀️','🤾🏾‍♀️','🤾🏾‍♀️','🤾🏿‍♀️','🤾‍♂️','🤾🏻‍♂️','🤾🏼‍♂️','🤾🏽‍♂️','🤾🏾‍♂️','🤾🏿‍♂️','🏌️‍♀️','🏌🏻‍♀️','🏌🏼‍♀️','🏌🏽‍♀️','🏌🏾‍♀️','🏌🏿‍♀️','🏌️‍♂️','🏌🏻‍♂️','🏌🏼‍♂️','🏌🏽‍♂️','🏌🏾‍♂️','🏌🏿‍♂️','🏇','🏇🏻','🏇🏼','🏇🏽','🏇🏾','🏇🏿','🧘‍♀️','🧘🏻‍♀️','🧘🏼‍♀️','🧘🏽‍♀️','🧘🏾‍♀️','🧘🏿‍♀️','🧘‍♂️','🧘🏻‍♂️','🧘🏼‍♂️','🧘🏽‍♂️','🧘🏾‍♂️','🧘🏿‍♂️','🏄‍♀️','🏄🏻‍♀️','🏄🏼‍♀️','🏄🏽‍♀️','🏄🏾‍♀️','🏄🏿‍♀️','🏄‍♂️','🏄🏻‍♂️','🏄🏼‍♂️','🏄🏽‍♂️','🏄🏾‍♂️','🏄🏿‍♂️','🏊‍♀️','🏊🏻‍♀️','🏊🏼‍♀️','🏊🏽‍♀️','🏊🏾‍♀️','🏊🏿‍♀️','🏊‍♂️','🏊🏻‍♂️','🏊🏼‍♂️','🏊🏽‍♂️','🏊🏾‍♂️','🏊🏿‍♂️','🤽‍♀️','🤽🏻‍♀️','🤽🏼‍♀️','🤽🏽‍♀️','🤽🏾‍♀️','🤽🏿‍♀️','🤽‍♂️','🤽🏻‍♂️','🤽🏼‍♂️','🤽🏽‍♂️','🤽🏾‍♂️','🤽🏿‍♂️','🚣‍♀️','🚣🏻‍♀️','🚣🏼‍♀️','🚣🏽‍♀️','🚣🏾‍♀️','🚣🏿‍♀️','🚣‍♂️','🚣🏻‍♂️','🚣🏼‍♂️','🚣🏽‍♂️','🚣🏾‍♂️','🚣🏿‍♂️','🧗‍♀️','🧗🏻‍♀️','🧗🏼‍♀️','🧗🏽‍♀️','🧗🏾‍♀️','🧗🏿‍♀️','🧗‍♂️','🧗🏻‍♂️','🧗🏼‍♂️','🧗🏽‍♂️','🧗🏾‍♂️','🧗🏿‍♂️','🚵‍♀️','🚵🏻‍♀️','🚵🏼‍♀️','🚵🏽‍♀️','🚵🏾‍♀️','🚵🏿‍♀️','🚵‍♂️','🚵🏻‍♂️','🚵🏼‍♂️','🚵🏽‍♂️','🚵🏾‍♂️','🚵🏿‍♂️','🚴‍♀️','🚴🏻‍♀️','🚴🏼‍♀️','🚴🏽‍♀️','🚴🏾‍♀️','🚴🏿‍♀️','🚴‍♂️','🚴🏻‍♂️','🚴🏼‍♂️','🚴🏽‍♂️','🚴🏾‍♂️','🚴🏿‍♂️','🏆','🥇','🥈','🥉','🏅','🎖','🏵','🎗','🎫','🎟','🎪','🤹‍♀️','🤹🏻‍♀️','🤹🏼‍♀️','🤹🏽‍♀️','🤹🏾‍♀️','🤹🏿‍♀️','🤹‍♂️','🤹🏻‍♂️','🤹🏼‍♂️','🤹🏽‍♂️','🤹🏾‍♂️','🤹🏿‍♂️','🎭','🎨','🎬','🎤','🎧','🎼','🎹','🥁','🎷','🎺','🎸','🎻','🎲','🧩','♟','🎯','🎳','🎮','🎰','🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🚚','🚛','🚜','🛴','🚲','🛵','🏍','🚨','🚔','🚍','🚘','🚖','🚡','🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂','🚆','🚇','🚊','🚉','✈️','🛫','🛬','🛩','💺','🛰','🚀','🛸','🚁','🛶','⛵️','🚤','🛥','🛳','⛴','🚢','⚓️','⛽️','🚧','🚦','🚥','🚏','🗺','🗿','🗽','🗼','🏰','🏯','🏟','🎡','🎢','🎠','⛲️','⛱','🏖','🏝','🏜','🌋','⛰','🏔','🗻','🏕','⛺️','🏠','🏡','🏘','🏚','🏗','🏭','🏢','🏬','🏣','🏤','🏥','🏦','🏨','🏪','🏫','🏩','💒','🏛','⛪️','🕌','🕍','🕋','⛩','🛤','🛣','🗾','🎑','🏞','🌅','🌄','🌠','🎇','🎆','🌇','🌆','🏙','🌃','🌌','🌉','🌁','⌚️','📱','📲','💻','⌨️','🖥','🖨','🖱','🖲','🕹','🗜','💽','💾','💿','📀','📼','📷','📸','📹','🎥','📽','🎞','📞','☎️','📟','📠','📺','📻','🎙','🎚','🎛','⏱','⏲','⏰','🕰','⌛️','⏳','📡','🔋','🔌','💡','🔦','🕯','🗑','🛢','💸','💵','💴','💶','💷','💰','💳','🧾','💎','⚖️','🔧','🔨','⚒','🛠','⛏','🔩','⚙️','⛓','🔫','💣','🔪','🗡','⚔️','🛡','🚬','⚰️','⚱️','🏺','🧭','🧱','🔮','🧿','🧸','📿','💈','⚗️','🔭','🧰','🧲','🧪','🧫','🧬','🧯','🔬','🕳','💊','💉','🌡','🚽','🚰','🚿','🛁','🛀','🛀🏻','🛀🏼','🛀🏽','🛀🏾','🛀🏿','🧴','🧵','🧶','🧷','🧹','🧺','🧻','🧼','🧽','🛎','🔑','🗝','🚪','🛋','🛏','🛌','🖼','🛍','🧳','🛒','🎁','🎈','🎏','🎀','🎊','🎉','🧨','🎎','🏮','🎐','🧧','✉️','📩','📨','📧','💌','📥','📤','📦','🏷','📪','📫','📬','📭','📮','📯','📜','📃','📄','📑','📊','📈','📉','🗒','🗓','📆','📅','📇','🗃','🗳','🗄','📋','📁','📂','🗂','🗞','📰','📓','📔','📒','📕','📗','📘','📙','📚','📖','🔖','🔗','📎','🖇','📐','📏','📌','📍','✂️','🖊','🖋','✒️','🖌','🖍','📝','✏️','🔍','🔎','🔏','🔐','🔒','🔓','❤️','🧡','💛','💚','💙','💜','🖤','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','🆔','⚛️','🉑','☢️','☣️','📴','📳','🈶','🈚️','🈸','🈺','🈷️','✴️','🆚','💮','🉐','㊙️','㊗️','🈴','🈵','🈹','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘','❌','⭕️','🛑','⛔️','📛','🚫','💯','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','🚭','❗️','❕','❓','❔','‼️','⁉️','🔅','🔆','〽️','⚠️','🚸','🔱','⚜️','🔰','♻️','✅','🈯️','💹','❇️','✳️','❎','🌐','💠','Ⓜ️','🌀','💤','🏧','🚾','♿️','🅿️','🈳','🈂️','🛂','🛃','🛄','🛅','🚹','🚺','🚼','🚻','🚮','🎦','📶','🈁','🔣','ℹ️','🔤','🔡','🔠','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','#️⃣','*️⃣','⏏️','▶️','⏸','⏯','⏹','⏺','⏭','⏮','⏩','⏪','⏫','⏬','◀️','🔼','🔽','➡️','⬅️','⬆️','⬇️','↗️','↘️','↙️','↖️','↕️','↔️','↪️','↩️','⤴️','⤵️','🔀','🔁','🔂','🔄','🔃','🎵','🎶','➕','➖','➗','✖️','♾','💲','💱','™️','©️','®️','〰️','➰','➿','🔚','🔙','🔛','🔝','🔜','✔️','☑️','🔘','⚪️','⚫️','🔴','🔵','🔺','🔻','🔸','🔹','🔶','🔷','🔳','🔲','▪️','▫️','◾️','◽️','◼️','◻️','⬛️','⬜️','🔈','🔇','🔉','🔊','🔔','🔕','📣','📢','👁‍🗨','💬','💭','🗯','♠️','♣️','♥️','♦️','🃏','🎴','🀄️','🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛','🕜','🕝','🕞','🕟','🕠','🕡','🕢','🕣','🕤','🕥','🕦','🕧','🏳️','🏴','🏁','🚩','🏳️‍🌈','🏴‍☠️' ,'🏴󠁧󠁢󠁥󠁮󠁧󠁿','🏴󠁧󠁢󠁳󠁣󠁴󠁿','🏴󠁧󠁢󠁷󠁬󠁳󠁿','🥰','🥵','🥶','🥳','🥴','🥺','👨‍🦰','👩‍🦰','👨‍🦱','👩‍🦱','👨‍🦲','👩‍🦲','👨‍🦳','👩‍🦳','🦸','🦸‍♀️','🦸‍♂️','🦹','🦹‍♀️','🦹‍♂️','🦵','🦶','🦴','🦷','🥽','🥼','🥾','🥿','🦝','🦙','🦛','🦘','🦡','🦢','🦚','🦜','🦞','🦟','🦠','🥭','🥬','🥯','🧂','🥮','🧁','🧭','🧱','🛹','🧳','🧨','🧧','🥎','🥏','🥍','🧿','🧩','🧸','♟','🧮','🧾','🧰','🧲','🧪','🧫','🧬','🧯','🧴','🧵','🧶','🧷','🧹','🧺','🧻','🧼','🧽','♾','🏴‍☠️'];
  let index = 0;
  document.title = emoji.slice(index).join``;
  window.setInterval(() =>{
    if(index==2166)index=0;
    const title = emoji.slice(index).join`` + emoji.slice(0, index).join``;
    document.title = title;
    index++;
  }, 1000);
  eggs();
});
