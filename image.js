//Code modified from the Doge Chrome Extension

// To add images: Google image search for the desired images, then run the following command in your browser console (tested in FF):
// var output = ''; document.body.innerHTML.match(/(?=imgurl=)(.+?)(?=&amp;)/g).map(function(value) {var url = encodeURIComponent(decodeURIComponent(decodeURIComponent(value)).replace('imgurl=', '').replace(/'/g, '\\\'')); if (url) output += '\'' + url + '\',';}); window.open('data:text/plain,' + output, '_blank', 'width=500,height=500,scrollbars=1');
// Copy and paste the output below. Make sure the opening and closing []s are still there, and make sure the last line does not end with a comma.

(function($) {
 
    var self = $.duck = new function() {};
 
    $.extend(self, {
        duckImgs: [
            'https://pbs.twimg.com/profile_images/664353768213876736/FJxc8DUb_400x400.jpg','https://pbs.twimg.com/profile_images/712653847093764097/QeiB2i-u.jpg','https://s-media-cache-ak0.pinimg.com/avatars/trudibruce_1452110210_30.jpg','https://pbs.twimg.com/profile_images/670660826689372160/e68K2-qK.png','http://www.avatarist.com/avatars/Cartoons/Disney/Donald-Duck/Donald-Duck.jpg','https://pbs.twimg.com/profile_images/648079020484116480/X5up7IDU.png','http://www.avatarist.com/avatars/Cartoons/Disney/Donald-Duck/Donald-Duck-Diving.jpg','http://www.avatarist.com/avatars/Cartoons/Disney/Donald-Duck/Donald-Duck-Baseball.jpg','http://s1.tsuki-board.net/pics/figure/big/360966.jpg?t=1450160113','http://www.tsumtsumcentral.com/assets/img/t64/LrgDSDonaldSide2.jpg','http://www.androidfreeware.net/software_images/mickey-mouse-and-donald-duck-in-world-of-illusion.thumb.jpg','https://lh3.googleusercontent.com/-xz-Raa7nM80/AAAAAAAAAAI/AAAAAAAAABk/X-ctK6wNUI4/s46-c-k-no/photo.jpg','http://files.gamebanana.com/img/ico/sprays/donalds.png','http://files.gamebanana.com/img/ico/sprays/donald_duck_spray_image.png','https://pbs.twimg.com/profile_images/708966689669570564/vs41WSYI.jpg','http://s1.tsuki-board.net/pics/figure/big/395578.jpg?t=1459406346','https://yt3.ggpht.com/-pAHXeHztPak/AAAAAAAAAAI/AAAAAAAAAAA/y15cSHVJxrs/s48-c-k-no-rj-c0xffffff/photo.jpg','https://lh3.googleusercontent.com/-Sprf1AlWK4c/AAAAAAAAAAI/AAAAAAAAADk/kfrTnfLTe4Y/s46-c-k-no/photo.jpg','https://67.media.tumblr.com/avatar_5be8deff44b2_128.png','http://s1.tsuki-board.net/pics/figure/big/354145.jpg?t=1445866224','https://lh3.googleusercontent.com/-Qi2gOugfgKI/AAAAAAAAAAI/AAAAAAAAACI/X_0MFerN5fg/s46-c-k-no/photo.jpg','http://i.ebayimg.com/images/g/ckwAAOSw14xWP26H/s-l64.jpg','https://sc01.alicdn.com/kf/HTB10NYTIXXXXXaEaXXXq6xXFXXXI/Garden-statue-disney-donald-duck.jpg_50x50.jpg','https://pbs.twimg.com/profile_images/728486010707795968/2-W0Zn3E.jpg','https://lh3.googleusercontent.com/-_dAC-UsEzos/AAAAAAAAAAI/AAAAAAAAAB0/MquEXjFQuTc/s46-c-k-no/photo.jpg','http://img.getjar.mobi/icon-50x50/7b/819944_thm.png','https://pbs.twimg.com/profile_images/616937212127612928/VKEonPME_400x400.jpg','https://yt3.ggpht.com/-DIkSzXLQFhc/AAAAAAAAAAI/AAAAAAAAAAA/HQEQSibDEBw/s48-c-k-no-rj-c0xffffff/photo.jpg','http://srv-live-02.lazada.com.ph/p/tsum-tsum-series-1-dumbo-donald-duck-winnie-the-pooh-7331-1291613-2-gallery.jpg','http://cdn3.bigcommerce.com/s-ygopcimc/products/178/images/644/donaldduckkigurumiside__37246.1431617950.50.50.jpg?c=2','http://static.webshopapp.com/shops/025199/files/007286354/36x36x2/disney-traditions-donald-duck.jpg','https://www.svgimages.com/svg-image/s5/baby-daisy-donald-duck-256x256.png','https://pbs.twimg.com/profile_images/620943570208337920/evfjmX1x.png','http://i.i.cbsi.com/cnwk.1d/i/tim/2013/02/14/Foreman_12981745_5837_Icon.76791_48x48.png','http://www.wallpapertycoon.com/wp-content/uploads/2016/04/Donald-Duck-Sailor-Wallpaper-256x256.jpg','http://g01.a.alicdn.com/kf/HTB1S5hJKXXXXXb4XpXXq6xXFXXXX/Glylezee-Cartoon-In-Ear-Mickey-Mouse-Duck-Headphones-Headset-Cute-Donald-Duck-Earphones-with-3-5MM.jpg_50x50.jpg','https://dadfordisney.files.wordpress.com/2014/05/donald-duck-laughing.jpg?w=474','http://67.media.tumblr.com/avatar_becd26222099_128.png','https://lh3.googleusercontent.com/--7Ma61hWdmA/AAAAAAAAAAI/AAAAAAAAAAY/xNeT8QppQTs/s46-c-k/photo.jpg','http://www.tsumtsumcentral.com/assets/img/t64/ParkPolkaDotDonald.jpg','http://mugenarchive.com/forums/34f814e2d7eeb9a2d05cba1245ab0bf6/images/donald_duck_006_thumb.png','https://pbs.twimg.com/profile_images/730569153015369730/QFbPDGeJ.jpg','http://cdn3.bigcommerce.com/s-ygopcimc/products/178/images/640/donaldduckkigurumifront__73500.1431617946.50.50.jpg?c=2','http://csoadmin.org/wp-content/uploads/ktz/Donald-Duck-Wallpaper-Stickers-for-Kids-Wall-Decoration-Ideas-2srtolos07ci3b7x73me4q.jpg','http://g01.a.alicdn.com/kf/HTB1irWrJXXXXXcQXFXXq6xXFXXX3/2015-new-donald-duck-cartoon-4gb-8gb-32gb-64gb-memory-stick-u-disk-pendrive-pen-drive.jpg_50x50.jpg','http://storage.akamai.coub.com/get/b65/p/channel/cw_avatar/b925729b540/cba05fb73dfbf7fce7132/small_1428776025_donald_duck_by_ireprincess-d4gcuo9.png','http://g02.a.alicdn.com/kf/HTB1gn2tIVXXXXbXXFXXq6xXFXXXu/TSUM-Donald-Duck-Daisy-Mickey-Minnie-Dumbo-small-pendant-screen-wipe-wipe-the-phone-birthday-gifts.jpg_50x50.jpg','https://66.media.tumblr.com/avatar_ba7c839df198_128.png','http://67.media.tumblr.com/avatar_d606306c162a_128.png','http://rlv.zcache.com/donald_duck_smiling_mouse_pad-ra4423119243740f2a650996817da9f86_x74vk_8byvr_50.jpg','http://s1.tsuki-board.net/pics/figure/big/125728.jpg?t=1458353003','http://www.avatarist.com/avatars/Cartoons/Disney/Donald-Duck/Donald-Duck-Yawning.jpg','http://g01.a.alicdn.com/kf/HTB12rVOIXXXXXcMXpXXq6xXFXXXf/For-iphone-6-Case-Graffiti-Cartoon-Donald-Duck-Daisy-Duck-Silicone-Cell-Phone-Cases-Covers-For.jpg_50x50.jpg','https://s-media-cache-ak0.pinimg.com/avatars/Kroketswag_1451839429_30.jpg','http://www.minecraftskins.com/newuploaded_skins/skin_20151228054923154954.png','http://g01.a.alicdn.com/kf/HTB1JDhtKFXXXXbvXFXXq6xXFXXXa/3D-Cartoon-Graffiti-Minnie-Mickey-Mouse-Daisy-Donald-Duck-Chip-Slinky-dog-Silicone-cellphone-Cases-Cover.jpg_50x50.jpg','https://static-s.aa-cdn.net/img/ios/435478306/39170536912d616e9899801d24302901?v=1','http://www.wallpapertycoon.com/wp-content/uploads/2016/04/Popular-Donald-Duck-Cartoon-Wallpaper-256x256.jpg','https://lh6.googleusercontent.com/-KA3Xr6xi-MQ/UQjZDv6D_EI/AAAAAAAAADk/3JVA-E984VI/s96-c/donald_duck-1059.jpg','http://static.webshopapp.com/shops/025199/files/050945142/36x36x2/disney-britto-donald-duck-mini-figurine.jpg','http://g01.a.alicdn.com/kf/HTB1IhCRHVXXXXcYXpXXq6xXFXXXH/Mix6pcs-full-set-Mickey-Coin-1OZ-MICKEY-MOUSE-Donald-Duck-Daisy-duck-Minnie-Mouse-AND-FRIENDS.jpg_50x50.jpg','http://www.fitzsattic.com/wp-content/uploads/2016/03/Walt-Disney-Donald-Duck.jpg','http://www.tsumtsumcentral.com/assets/img/t64/LrgDSDonald.jpg','http://g01.a.alicdn.com/kf/HTB1er35HVXXXXb7XpXXq6xXFXXXo/Pendrive-Donald-Duck-Bear-Superman-Batman-Cartoon-64GBUSB-Flash-Pen-Drive-U-Disk-Memory-Sticks-Rubber.jpg_50x50.jpg','http://thumbnail.image.rakuten.co.jp/@0_mall/bemagical/cabinet/item3/0616201417140541m.jpg?_ex=50x50','http://g01.a.alicdn.com/kf/HTB1eP0zIXXXXXbpXXXXq6xXFXXXC/Twist-car-Donald-Duck-child-fitness-swing-car-rbaby-cute-rocking-car.jpg_50x50.jpg','http://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/c/mc2-st-barth-disney-donald-duck-goofy-pluto-print-t-shirt-117833-d8d5ad7d80e12cb51b90661861b7002c24f6986b.jpg','http://g01.a.alicdn.com/kf/HTB1K5mLJXXXXXXiapXXq6xXFXXXd/2015-New-Arrival-Mickey-Minnie-Pooh-Bear-Donald-Duck-Stitch-Case-TPU-Funda-Case-For-Iphone.jpg_50x50.jpg','http://thumbnail.image.rakuten.co.jp/@0_mall/bemagical/cabinet/item3/0616201417140541m_1.jpg?_ex=50x50','http://media.8bob.com/thumbs/128x128/smart/img/thumb/f7cc46f7240d882b17e33f0227b7c9aad391da34.jpg','http://khm0.googleapis.com/kh?v=692&hl=en&&x=3160&y=1948&z=12','http://g01.a.alicdn.com/kf/HTB1Q49wJpXXXXcTXpXXq6xXFXXXl/Hot-sale-12pcs-set-Donald-Duck-Mickey-Minnie-Winnie-Pooh-doll-plastic-figure-dolls-free-shipping.jpg_50x50.jpg','http://www.minecraftskins.com/newuploaded_skins/skin_2016042611080718216.png','http://g03.a.alicdn.com/kf/HTB19t8wIXXXXXc.XpXXq6xXFXXXR/The-Graffiti-Series-Mobile-Phone-Accessory-3D-Cute-Soft-Silicon-Daisy-Duck-Donald-Duck-Circus-Case.jpg_50x50.jpg','http://www.emotiyou.com/galerie/tv/dessins-animes/donald/201006261235KNZ.gif','http://cdn3.bigcommerce.com/s-ygopcimc/products/178/images/642/donaldduckkigurumiback__93567.1431617948.50.50.jpg?c=2','http://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/l/i/little-eleven-paris-white-donald-duck-disney-character-t-shirt-127819-1f06bd1174124f847c76b5e5758ca707afd61702.jpg','https://pbs.twimg.com/profile_images/659152366487359488/UM9tKNds.png','https://s-media-cache-ak0.pinimg.com/avatars/joshjlewis_1460732179_30.jpg','http://www.fitzsattic.com/wp-content/uploads/2016/03/Walt-Disney-Donald-Duck4.jpg','http://www.emotiyou.com/galerie/tv/dessins-animes/donald/201103250003MKE.gif','https://s-media-cache-ak0.pinimg.com/avatars/dduckcollection_1449014682_30.jpg','https://sc01.alicdn.com/kf/HTB1NECDKFXXXXcfXXXXq6xXFXXXf/donald-duck-pinata-pinata-toys-birthday-pinata.jpg_50x50.jpg','https://nrhatch.files.wordpress.com/2011/02/donald-duck-painting.jpg?w=460','https://yt3.ggpht.com/-_G85QMGoKS8/AAAAAAAAAAI/AAAAAAAAAAA/4tFDTM15Ku0/s48-c-k-no-rj-c0xffffff/photo.jpg','http://g02.a.alicdn.com/kf/HTB1RnFmJXXXXXaBaXXXq6xXFXXXa/large-mickey-minnie-mouse-and-donald-duck-wall-stickers-decals-kids-anime-vinyl-wallpapers-mural-baby.jpg_50x50.jpg','http://rlv.zcache.com/donald_duck_t_shirt-r8d03e7ab9eeb4479b77efb232aa79d2d_wio5v_50.jpg','http://g01.a.alicdn.com/kf/HTB1gWnEIXXXXXXGXFXXq6xXFXXXZ/Tsum-Tsum-Mini-Plush-Easter-Bunny-Egg-Set-Daisy-Donald-Duck-Piglet-Tigger-Eeyore-Dale-Chip.jpg_50x50.jpg','http://cdn.imgs.tuts.dragoart.com/how-to-draw-daisy-and-donald-duck-kissing_3_000000022226_7.png','http://in3.vmstatic.com/cuddles-cute-looking-donald-duck-combo-18-cm-36581187-0-40-24.jpg','http://g01.a.alicdn.com/kf/HTB1OHNnJpXXXXbDXpXXq6xXFXXXn/6Psc-Lot-Kawaii-PVC-Kewpie-Sonny-Angel-Action-Figures-Cosplay-Donald-Duck-Mouse-Stitch-Action-Figures.jpg_50x50.jpg','http://g01.a.alicdn.com/kf/HTB1P8HTIXXXXXXBXFXXq6xXFXXXX/-Mickey-Friends-2015-coin-1-Oz-Mickey-Mouse-Donald-Duck-Silver-Plated-Coin-New-Zealand.jpg_50x50.jpg'
        ],
        bigDuckImgs: [
            'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Donald_Duck.svg/618px-Donald_Duck.svg.png','http://www.metrolibrary.org/sites/default/files/Donald Duck.png','http://static6.comicvine.com/uploads/original/0/77/4338755-donald-duck-30.jpg','http://cartoonbros.com/wp-content/uploads/2015/11/Donald-Duck-12.gif','http://cartoonbros.com/wp-content/uploads/2015/11/Donald-Duck-18.jpg','http://cartoonbros.com/wp-content/uploads/2015/11/Donald-Duck-15.jpg','http://lifeseasons.getitguru.in/wp-content/uploads/2015/11/Donald-duck-07.jpg','http://www.disneyclips.com/imagesnewb/images/clipdon2.gif','http://cartoonbros.com/wp-content/uploads/2015/11/Donald-Duck-1.gif','http://vignette3.wikia.nocookie.net/disney/images/d/d5/Donaldstar_1600.jpg/revision/latest?cb=20100629001545','http://cdn.hitfix.com/photos/6062954/Donald-duck-disney-photo-450x400-dcp-cpna013154.jpg','http://images.clipartpanda.com/donald-duck-clip-art-ja0119.gif','http://static.zerochan.net/Donald.Duck.full.9190.jpg','http://jeannettetomanka.com/wp-content/uploads/2014/07/Donald-Duck-2014.png','http://cdn.imgs.tuts.dragoart.com/how-to-draw-baby-donald-duck_1_000000006971_5.jpg','http://vignette2.wikia.nocookie.net/iannielli-legend/images/f/f6/Donald_duck.jpg/revision/latest?cb=20150716175716','https://upload.wikimedia.org/wikipedia/en/4/4f/Donald_Duck_in_Mickey_Mouse_Clubhouse.png','http://cartoonbros.com/wp-content/uploads/2015/11/Donald-Duck-14.jpg','http://www.disneyclips.com/imagesnewb/images/donaldduck.gif','http://mickeymousepictures.com/wp-content/uploads/2015/07/Donald-Duck-13.jpg','http://wondersofdisney.webs.com/pals/donald/joyfulduck.gif','http://images.clipartpanda.com/donald-duck-clip-art-donald-004.gif','http://img.lum.dolimg.com/v1/images/open-uri20150422-7119-375bsz_9723b1b3.jpeg?region=0,0,600,450&width=480','http://vignette3.wikia.nocookie.net/mickey-and-friends/images/8/89/Donald-duck.png/revision/latest?cb=20150119004727','http://4vector.com/i/free-vector-classic-cartoon-style-clip-art-image-of-donald-duck_094279_classic_cartoon_style_clip_art_image_of_donald_duck_103/2010.01.18-10/classic_cartoon_style_clip_art_image_of_donald_duck_26.jpg','http://vignette3.wikia.nocookie.net/parody/images/9/95/Donald_duck_version.jpg/revision/latest?cb=20150518184720','http://vignette2.wikia.nocookie.net/youtubepoop/images/a/a3/Tumblr_lu7lewaPBZ1qjlx7g.gif/revision/latest?cb=20150119043656','http://www.images20.com/wp-content/uploads/2014/09/Donald-Duck-32.jpg','http://vignette2.wikia.nocookie.net/disney/images/5/59/Angry_Donald_Duck.png/revision/latest?cb=20150127042902','https://i.ytimg.com/vi/T1M1aklQVkk/maxresdefault.jpg','https://upload.wikimedia.org/wikipedia/commons/6/66/Donald-Duck-Star-On-Hollywood-Walk-of-Fame-Los-Angeles.jpg','http://www.hdwallpapersfreedownload.com/uploads/large/cartoons/mickey-mouse-donald-duck-hd-wall-paper.jpg','http://s1.dmcdn.net/JpYI0/1280x720-U0d.jpg','http://img10.deviantart.net/72ec/i/2014/078/6/a/friendly_donald_duck_by_magicalmerlingirl-d5j3jt2.jpg','http://pre07.deviantart.net/7a59/th/pre/f/2013/091/a/8/a89a1f812bca7ad756e32c76272c0074-d602jby.jpg','https://www.daysoftheyear.com/wp-content/images/donald-duck-day2-e1433064726433-808x382.jpg','http://www.thefactsite.com/wp-content/uploads/2010/06/donald-duck.jpg','https://i.ytimg.com/vi/SxUtBb8ZYDc/maxresdefault.jpg','https://upload.wikimedia.org/wikipedia/commons/9/9e/Donald_Duck_in_Grauman\'s_Chinese_Theatre.jpg','http://img08.deviantart.net/9206/i/2013/005/5/d/donald_duck_is_curious_by_skibb_duck-d5b26ff.png','http://static1.comicvine.com/uploads/original/0/77/4338754-donald_newmickeyseries.jpg','http://www.idwpublishing.com/wp-content/uploads/2016/02/DonaldDuck-TPB_cvr_MOCKONLY.jpg','https://s-media-cache-ak0.pinimg.com/564x/21/72/94/21729440b00ba215a51b43b8833a876e.jpg','http://static.dnaindia.com/sites/default/files/2015/06/09/344726-donald-3.jpg','http://lolworthy.com/wp-content/uploads/2015/10/donald-duck-cosplay.jpg','http://s1.dmcdn.net/Jpmhl/1280x720-jrK.png','http://www.disneyclips.com/imagesnewb/images/clipdon8.gif','http://www.cartoonswallpapers.net/wallpapers/donald-duck-cartoon-background-iphone-6.jpg','http://cdnvideo.dolimg.com/cdn_assets/839abfd0d4853fbff73323e305dde661ece1cb6b.jpg','http://vignette1.wikia.nocookie.net/disney/images/8/80/Walt-Disney-Screencaps-Donald-Duck-walt-disney-characters-24123242-2560-1432.jpg/revision/latest?cb=20140331205952','http://images.clipartpanda.com/donald-duck-clip-art-donald-duck-clip-art-12.jpg','http://cdn.imgs.tuts.dragoart.com/how-to-draw-daisy-and-donald-duck-kissing_3_000000022226_5.png','https://s-media-cache-ak0.pinimg.com/564x/28/be/5b/28be5bbfed3dcd27b74d46ed99213081.jpg','http://vignette4.wikia.nocookie.net/donaldduck/images/1/1f/DonaldDuck.jpg/revision/latest?cb=20090727132040&path-prefix=no','http://2.bp.blogspot.com/-kNgdiL3w4Kw/Uj9mGFS10fI/AAAAAAAAAIs/1-WW0V8kuV8/s1600/Donald-Duck.jpg','http://pbs.twimg.com/profile_images/674617015085228032/cVeTkIma.png','http://vignette4.wikia.nocookie.net/disney/images/d/d8/DonaldCartoonOpening-Mouseworks.jpg/revision/latest?cb=20150617080214','http://cdn2.gbtimes.com/cdn/farfuture/A0NbejoZ9BDeUkBmUJxlriYGLseMS4YglJ69XRT7-ss/mtime:1401886272/sites/default/files/styles/1280_wide/public/2014/06/04/walt-disney-donald-duck.jpg?itok=-4PZUUQa','http://vignette2.wikia.nocookie.net/kingdomhearts/images/6/63/Donald_Duck_KHIII.png/revision/latest?cb=20140605204753','http://s3.amazonaws.com/images.hitfix.com/assets/8674/20120919151318.jpg','https://s-media-cache-ak0.pinimg.com/736x/bc/7d/1b/bc7d1b65ae591d4401897967660471d8.jpg','http://image.slidesharecdn.com/lifesquotedonaldduck-120422092029-phpapp02/95/lifes-quote-from-donald-duck-12-728.jpg?cb=1335086533','http://i.huffpost.com/gen/4242294/images/o-DONALD-DUCK-facebook.jpg','https://i.ytimg.com/vi/kQik-yAgeHU/maxresdefault.jpg','http://img.lum.dolimg.com/v1/images/character_mickeymouse_donaldduck_914f6b94.jpeg?region=0,0,450,450','http://img05.deviantart.net/ee87/i/2011/243/a/9/donald_duck_by_ireprincess-d48ey4r.png','https://i.ytimg.com/vi/y5l832KK4sI/maxresdefault.jpg','http://3.bp.blogspot.com/-nBwuytkPsUw/Uj9mEPytnWI/AAAAAAAAAHw/MgGOAeZo7-A/s1600/Donald-Duck-Dekstop-HD.jpg','http://7-themes.com/data_images/out/17/6824332-donald-duck.jpg','https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2014/06/23-Jobs-Donald-Duck-Has-Attempted-6.jpg','http://vignette1.wikia.nocookie.net/kingdomhearts/images/3/3a/Donald_Duck_(KHIIFM)_KHIIHD.png/revision/latest?cb=20140726072238','http://vignette3.wikia.nocookie.net/donaldduck/images/4/40/30183.jpg/revision/latest?cb=20090730215403&path-prefix=no','https://i.ytimg.com/vi/_Wy5wnOzq1w/maxresdefault.jpg','http://i.telegraph.co.uk/multimedia/archive/02935/donaldduck300x400_2935484a.jpg','http://images2.fanpop.com/images/photos/8400000/Donald-donald-duck-8486247-351-404.gif','http://media.threadless.com/media/2011/12/22/172686_main_banner_2.jpeg','http://s1.dmcdn.net/BEq3G/1280x720-ngA.jpg','http://www.disneyclips.com/imagesnewb/images/donald.gif','https://s-media-cache-ak0.pinimg.com/564x/3c/f2/41/3cf24147ba8b5caa0e241796e30e406b.jpg','http://img15.deviantart.net/6491/i/2015/114/5/b/donald_duck_by_hidde99-d56ot9u.png','http://www.wondersofdisney.webs.com/pals/donald/donflowers.gif','https://s-media-cache-ak0.pinimg.com/564x/9b/fe/59/9bfe5915db481930d2c0bfce956110e5.jpg','https://s-media-cache-ak0.pinimg.com/originals/06/98/42/0698429e73160d647ecbf39a328f590c.gif','http://images.clipartpanda.com/donald-duck-clip-art-7.gif','http://s1.dmcdn.net/BkeVm/1280x720-k-3.jpg','http://s2.dmcdn.net/JolWC/1280x720-mZb.jpg','http://img04.deviantart.net/c659/i/2015/125/d/2/donald_duck_with_ak47_by_wewerka007-d1i72ih.jpg','https://i.ytimg.com/vi/GQvLnhoh_pA/hqdefault.jpg','http://img12.deviantart.net/a27d/i/2012/101/f/a/donald_duck_by_captainjamesman-d4vvfzn.png','http://media2.intoday.in/indiatoday/images/stories//2016May/do1_060916114753.jpg','http://images.clipartpanda.com/donald-duck-clip-art-piratedon.png','https://i.ytimg.com/vi/BJWZchIXpow/hqdefault.jpg','http://img03.deviantart.net/b3c9/i/2004/184/0/5/donald_duck.jpg','https://s-media-cache-ak0.pinimg.com/originals/4c/62/eb/4c62eb56fa22f5b6736bd757345ba697.jpg','http://images.clipartpanda.com/donald-duck-clip-art-clipdonaldparrot.gif','http://www.renders-graphiques.fr/image/upload/normal/donald_disney.png','https://d13yacurqjgara.cloudfront.net/users/763/screenshots/1790498/donald-duck-club-worn.png','http://www.disneyclips.com/imagesnewb/images/clipdonskate.gif'
        ],
        doReplace: function(item) {
 
            if ($(item)
                .attr('duck') == undefined) {
 
                var h = $(item)
                    .height();
                var w = $(item)
                    .width();
                var list = self.duckImgs;
                /* Added */
                var arr = ['donald trump','donald_trump','donald-trump','donaldtrump','trump','mr. trump','mister trump','mistertrump','donald drumpf','donald_drumpf','donald-drumpf','drumpf'];
                var src = $(item).attr('src');
                if(src != null){
                    src = src.toLowerCase();
                }
                var alt = $(item).attr('alt');
                if(alt != null){
                    alt = alt.toLowerCase();
                }
                var name = $(item).attr('name');
                if(name != null){
                    name = name.toLowerCase();
                }
                /* End Added */
                
                if (w > 100 && h > 100) {
                    list = self.bigDuckImgs;
                }
 
                /*
                $(item)
                    .css('width', w + 'px')
                    .css('height', h + 'px');
                $(item)
                    .attr('src', list[Math.floor(Math.random() * list.length)]);
                $(item)
                    .attr('duck', true);
                */
                for(var i = 0; i < arr.length; i++){
                    if(src.indexOf(arr[i]) != null){
                        if(src.indexOf(arr[i]) != -1){
                            $(item)
                                .css('width', w + 'px')
                                .css('height', h + 'px');
                            $(item)
                                .attr('src', list[Math.floor(Math.random() * list.length)]);
                            $(item)
                                .attr('duck', true);
                        }
                    }
                    else if(alt.indexOf(arr[i]) != null){
                        if(alt.indexOf(arr[i]) != -1){
                            $(item)
                                .css('width', w + 'px')
                                .css('height', h + 'px');
                            $(item)
                                .attr('src', list[Math.floor(Math.random() * list.length)]);
                            $(item)
                                .attr('duck', true);
                        }
                    }
                    else if(name.indexOf(arr[i]) != null){
                        if(name.indexOf(arr[i]) != -1){
                            $(item)
                                .css('width', w + 'px')
                                .css('height', h + 'px');
                            $(item)
                                .attr('src', list[Math.floor(Math.random() * list.length)]);
                            $(item)
                                .attr('duck', true);
                        }
                    }
                    else{}
                }
            }
        },
        handleImages: function(time) {
            $.each($('img'), function(i, item) {
 
                var h = $(item)
                    .height();
                var w = $(item)
                    .width();
 
                //If image loaded
                if (h > 0 && w > 0) {
                    self.doReplace(item);
                } else {
                    //Replace when loaded
                    $(item)
                        .load(function() {
                            //Prevent 'infinite' loop
                            self.doReplace(item);
                        });
                }
 
            });
 
            //Keep replacing
            if (time > 0) {
                setTimeout(function() {
                    self.handleImages(time);
                }, time);
            }
        }
    });
 
    //Run on jQuery ready
    $(function() {
        self.handleImages(500);
    });
})(jQuery);