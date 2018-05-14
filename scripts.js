$('document').ready(loadTabOne);
$('.tabs').on('click', showTab);

const image = {
  'tab-1':
    'http://princespot.com/wp-content/uploads/2014/07/Seth-Casteel-Underwater-puppies02.jpg',
  'tab-2':
    'https://assets3.thrillist.com/v1/image/1320488/size/tmg-article_default_mobile.jpg',
  'tab-3':
    'https://cdn.thisiswhyimbroke.com/images/underwater-puppies-photography-book-640x533.jpg',
  'tab-4':
    'https://static1.squarespace.com/static/53a096cce4b00d7644776a0b/544d5f5ce4b0b7c1dfbfb70e/544d5fb8e4b048f0ef614dae/1414356922235/Shake+Puppies-1_Mixbreed.jpg'
};

const text = {
  'tab-1':
    'Doggo ipsum such treat extremely cuuuuuute the neighborhood pupper shooberino the neighborhood pupper extremely cuuuuuute, super chub wrinkler very good spot. Snoot smol shoob doggo long water shoob, doing me a frighten bork. Pupperino long water shoob boof, very good spot. borkf tungg. Shoober very good spot pupper porgo, big ol very hand that feed shibe. Thicc tungg bork maximum borkdrive ruff puggo doggo, he made many woofs blop stop it fren dat tungg tho. The neighborhood pupper h*ck corgo pats heckin angery woofer, what a nice floof length boy shooberino. He made many woofs woofer heckin shibe blep heckin angery woofer, floofs snoot the neighborhood pupper porgo.',
  'tab-2':
    'Wow such tempt h*ck length boy blop heck snoot shooberino, pats wrinkler he made many woofs shoober heck. Pupperino he made many woofs shoober pupper, fluffer. Boof big ol pupper you are doin me a concern yapper, you are doing me the shock very taste wow. Heckin good boys I am bekom fat noodle horse yapper the neighborhood pupper heckin angery woofer h*ck, shoober I am bekom fat heck snoot wow such tempt. H*ck very hand that feed shibe maximum borkdrive smol, doge.',
  'tab-3':
    'Extremely cuuuuuute smol borkdrive tungg wrinkler, ur givin me a spook length boy. Doggorino you are doing me a frighten very hand that feed shibe ruff wrinkler vvv, smol boof waggy wags. Heckin good boys woofer big ol pupper very hand that feed shibe, borkdrive you are doing me a frighten. Yapper puggorino fat boi adorable doggo borking doggo much ruin diet bork mlem vvv, big ol ur givin me a spook many pats adorable doggo snoot pupper such treat. Doing me a frighten heckin good boys puggorino most angery pupper I have ever seen, such treat. Noodle horse borkf he made many woofs ruff very taste wow pats, h*ck puggorino porgo. Doggo vvv blep heckin boof, you are doing me the shock doggo. Vvv very jealous pupper blop long bois borkdrive, super chub much ruin diet such treat.',
  'tab-4':
    'Porgo shooberino what a nice floof thicc shoober heckin angery woofer, shooberino I am bekom fat what a nice floof. Waggy wags smol borking doggo with a long snoot for pats adorable doggo very jealous pupper dat tungg tho clouds very good spot what a nice floof, mlem boof fluffer heckin angery woofer you are doing me the shock heckin. Doggo very hand that feed shibe blop what a nice floof, very taste wow. Wow very biscit sub woofer heckin dat tungg tho, bork. Boof corgo clouds aqua doggo wow very biscit floofs, noodle horse pupper long doggo doggorino. Tungg long bois corgo you are doing me the shock, very taste wow boofers clouds long doggo, many pats porgo. Heckin angery woofer very taste wow pupper porgo floofs, super chub he made many woofs. Big ol boof clouds sub woofer heck, heckin angery woofer doggo fat boi, bork you are doing me the shock woofer.'
};

function loadTabOne() {
  $('.tab-info').children('img').attr('src', image['tab-1']);
  $('.tab-info').children('p').text(text['tab-1']);
  $('.tab-1').addClass('selected');
};

function showTab(event) {
  $('.tab-info').children('img').attr('src', image[event.target.className]);
  $('.tab-info').children('p').text(text[event.target.className]);
  $('.tab-1').removeClass('selected');
  $('.tab-2').removeClass('selected');
  $('.tab-3').removeClass('selected');
  $('.tab-4').removeClass('selected');
  $(event.target).addClass('selected');
};