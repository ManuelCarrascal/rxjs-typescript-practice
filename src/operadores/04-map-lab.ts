import { fromEvent, map, tap } from "rxjs";

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet dui vel est consectetur, at iaculis massa fermentum. Nullam imperdiet mi aliquam finibus pellentesque. Ut sagittis augue vel massa dapibus semper. Sed iaculis ante dui, sit amet imperdiet magna pellentesque in. Pellentesque quis pretium elit, eu pellentesque libero. Proin lobortis tellus gravida augue tincidunt, vitae condimentum velit convallis. In porttitor bibendum ligula, eget dapibus massa euismod id. Vivamus suscipit justo nunc, ac pulvinar orci condimentum id. Proin elementum justo et elit fermentum placerat. Pellentesque bibendum, ipsum blandit commodo maximus, sapien diam imperdiet odio, in aliquet erat leo sed quam. Mauris dignissim quis nunc eu mollis. Praesent non odio fermentum, iaculis eros at, rutrum nisi. Nam eu laoreet lectus. In sit amet leo metus. Pellentesque ac odio eu nisl aliquet facilisis.
<br>
Sed est ligula, consequat vel leo at, congue fringilla ante. Donec tincidunt est nec justo mattis, eu pulvinar tortor fermentum. Aenean iaculis lacinia velit, eu maximus lectus dapibus ut. Nulla at pretium eros. Vestibulum maximus eros nisl, quis finibus nibh mollis ut. Sed ultrices dui eget est efficitur lacinia. Aliquam commodo nibh in mauris interdum ullamcorper. Phasellus id sapien in ex interdum cursus. Quisque porttitor libero quam, non ultrices nisl laoreet efficitur.
<br>
Quisque euismod nisi in felis aliquam imperdiet. Vivamus eleifend leo et dolor porttitor pretium. Phasellus non placerat neque, non viverra mi. Donec pulvinar massa iaculis odio tincidunt rutrum. Aenean venenatis mattis leo, sit amet venenatis nunc ornare vitae. Fusce malesuada molestie diam ut tristique. Fusce est felis, posuere ac odio sed, sollicitudin vulputate augue. Duis non arcu non enim fermentum imperdiet. Donec a ultrices ex. Aenean non dignissim nunc, vel ultrices dui. Nullam pretium dui in nibh rutrum aliquet. Donec rhoncus neque lorem, sit amet pharetra arcu efficitur at. Mauris commodo et risus non fringilla. Praesent nec aliquet quam. Vestibulum rutrum lectus at nibh ultrices, id venenatis dui faucibus.
<br>
Maecenas orci ex, cursus eu purus a, dignissim eleifend magna. Nam a sodales elit, at hendrerit diam. Nunc euismod nisi nec sapien dictum gravida. Aenean ante metus, iaculis nec elit a, placerat mollis ante. Integer vitae ligula tristique, varius erat accumsan, ultricies mauris. Suspendisse arcu nisi, eleifend sed turpis vitae, malesuada ornare arcu. Proin vehicula, ex ac vestibulum ullamcorper, felis risus suscipit elit, ut vestibulum diam metus ac velit. Proin tempus, ante ut posuere ullamcorper, elit ante aliquet quam, in egestas massa leo eget magna. Praesent nec turpis sit amet dui bibendum mollis a eu est. Vestibulum eget felis mollis, consectetur urna eget, auctor neque. Donec vitae pellentesque mauris. Proin euismod velit non dictum rutrum.
<br>
Maecenas lobortis leo libero, non ullamcorper arcu vestibulum et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eu volutpat dui. Praesent dignissim massa sed ullamcorper sagittis. Nunc leo tellus, aliquet sit amet est varius, egestas iaculis purus. Sed at sapien ut elit sagittis suscipit. Donec libero ligula, euismod id nisi vitae, accumsan posuere turpis. Suspendisse potenti. Aenean bibendum fermentum nisl. Pellentesque a turpis at urna laoreet gravida non a ipsum. Phasellus neque erat, posuere sit amet odio vel, fringilla accumsan mi.
<br>
Sed eu odio sed massa malesuada dictum. Duis rutrum ex et consequat maximus. Aenean eu ullamcorper sapien. Sed convallis pellentesque massa eu porttitor. Praesent vitae lectus ultricies, consequat ante eu, venenatis quam. Phasellus sed facilisis enim. Aliquam felis tellus, volutpat ac viverra nec, maximus et tortor. Duis luctus magna in leo bibendum, vitae lacinia ante blandit. Suspendisse arcu eros, porttitor ac metus euismod, faucibus feugiat magna. Curabitur magna risus, scelerisque tincidunt ligula eu, pharetra eleifend metus. Aenean nec tortor vel quam consectetur condimentum vel nec nibh. Nunc arcu lorem, scelerisque eu facilisis eget, ornare vel velit. Nullam vel nulla in odio faucibus suscipit et convallis quam. Nunc tempus eros in odio fringilla, a mattis eros lacinia. Morbi consequat posuere enim eu rhoncus. Phasellus at nibh sed lacus blandit vulputate ac ac sem.
<br>
Suspendisse interdum blandit suscipit. Suspendisse ut aliquam dolor. Maecenas libero arcu, mollis quis velit id, maximus lacinia nibh. Quisque sit amet vehicula ante. Proin vel diam non libero dignissim vulputate. Suspendisse potenti. Praesent ullamcorper risus nulla, condimentum dignissim augue porta nec.
<br>
Proin vestibulum sit amet urna in scelerisque. Curabitur at nulla at urna elementum elementum. Suspendisse faucibus, nunc in vulputate pellentesque, nibh odio volutpat dolor, eu rhoncus lacus est ac quam. Praesent feugiat leo nunc. Aliquam erat volutpat. Integer vel luctus erat, aliquam pellentesque neque. Aliquam est ex, efficitur non hendrerit a, lacinia eu augue. Nunc accumsan leo at justo interdum, nec facilisis turpis vehicula. Aliquam commodo metus quis felis eleifend, ac fermentum ligula consequat.
<br>
Morbi porttitor sodales turpis vulputate auctor. Morbi vel sapien a quam facilisis luctus vel a sapien. Aenean in sapien sit amet lacus placerat varius vitae a velit. Mauris mollis massa non mi lacinia, et porttitor urna fringilla. Maecenas ultrices urna eget nunc iaculis blandit. Mauris eleifend, lacus sed rhoncus ultricies, ipsum ex scelerisque nisi, sed venenatis felis nibh quis nisl. Morbi ornare et lorem vitae vulputate. Cras ut eros purus. Morbi tempus arcu viverra libero rutrum convallis. Praesent ornare velit et dui aliquam dapibus. Integer eget justo vehicula, fringilla ligula et, blandit sapien.
<br>
Curabitur fermentum dolor eu ante pharetra, interdum molestie ante vulputate. Nunc feugiat volutpat ante, eu posuere mauris condimentum vel. Sed efficitur elementum sem, vitae tincidunt turpis volutpat vitae. Phasellus sed euismod libero. Nam blandit risus et ligula egestas, et aliquet magna mattis. Nunc varius varius velit eget aliquam. Ut volutpat orci nulla, et porttitor ante iaculis at. Etiam sit amet facilisis nibh. Sed est leo, consequat at urna ac, rhoncus hendrerit orci. Etiam porttitor mi ultrices ultricies pellentesque. Duis viverra magna sed dui porta, eu fermentum arcu congue. Nulla facilisi. Suspendisse potenti. Aliquam arcu nisi, pulvinar in lorem quis, tincidunt tempus sem. Donec euismod in augue iaculis posuere.
<br>
Aenean sit amet sodales lacus. Nam lobortis, tortor vulputate iaculis volutpat, diam mauris placerat justo, ac eleifend arcu sem ut leo. Nullam sed scelerisque nunc. Mauris diam eros, lacinia ut urna vel, consequat feugiat elit. Sed lobortis arcu vel scelerisque tempor. Donec ut purus tortor. Integer vulputate, nibh et suscipit facilisis, metus augue tincidunt nisl, eu condimentum turpis dolor in justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sed lobortis dolor, euismod finibus felis. Donec nec quam a nulla tristique volutpat. Curabitur eget neque porttitor, fermentum urna a, viverra ex. Etiam pharetra ac lorem ac porttitor.
<br>
Nullam odio orci, fermentum ut dui consectetur, interdum vestibulum felis. Nulla placerat tempor metus, a dignissim enim gravida in. Nulla ut ex elementum, congue sem quis, aliquet orci. Proin ut erat et sapien posuere interdum. Phasellus mollis, eros sit amet congue venenatis, urna nulla elementum turpis, et commodo justo quam a dolor. Proin rhoncus, eros volutpat maximus iaculis, nibh libero molestie massa, id vulputate nisl lectus sit amet augue. Donec ut nibh velit. Phasellus in laoreet ipsum. Donec mollis felis lectus, ut efficitur purus fermentum ac. Donec magna nibh, auctor nec pharetra a, consequat vel elit. Aenean vestibulum nisl in augue commodo, in iaculis quam egestas. Donec nec lacinia nulla. Mauris eleifend sem magna, et egestas orci posuere vitae. Phasellus ut iaculis enim, at pharetra diam.
<br>
Pellentesque dictum tristique lorem vel scelerisque. Nunc eros arcu, laoreet sit amet erat vel, feugiat consectetur nisl. Phasellus arcu ipsum, ornare vitae mattis et, malesuada sed mi. Donec tincidunt sapien nec vestibulum consequat. Aenean aliquam quam non erat pellentesque sodales. Curabitur bibendum scelerisque feugiat. Fusce in facilisis metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vel tellus quis ligula euismod tristique ut eleifend metus. Suspendisse potenti. Maecenas volutpat lacinia hendrerit. Maecenas eget tellus vitae ligula cursus volutpat et sit amet ante.
<br>
Quisque egestas ligula justo, at faucibus justo porta in. Donec dictum ultrices est, ac aliquam est faucibus in. Integer euismod, est sit amet aliquet vulputate, tellus neque laoreet risus, egestas molestie tellus est ac felis. Duis pretium ex quam, at pretium enim mollis quis. Donec fermentum eros eros, fringilla vestibulum magna ultrices eu. Nulla a dui mauris. Etiam vel mauris nibh. Donec convallis orci et neque congue dapibus. Sed finibus turpis vehicula, iaculis quam id, porttitor mi.

Maecenas rhoncus ut metus in aliquet. Integer suscipit ligula ex, eu vulputate magna tincidunt quis. Fusce elementum vitae ligula sed mollis. Vivamus ornare imperdiet laoreet. Phasellus massa mauris, blandit molestie mi eu, rhoncus finibus orci. Vestibulum vel rhoncus felis. Fusce elit augue, tincidunt vitae blandit eu, molestie id nisl. Etiam non ultrices orci. Morbi vulputate mollis ornare. Sed in urna aliquet, pulvinar est sit amet, malesuada urna.
<br>
Nullam eget mi nec metus venenatis mollis. Donec non eros commodo massa imperdiet vestibulum. Nulla eleifend pulvinar massa non rhoncus. Pellentesque blandit nec erat ut elementum. Donec at vulputate erat. Nulla magna arcu, venenatis ut porta non, dapibus et velit. Fusce in volutpat dolor. Pellentesque dui turpis, varius nec metus sodales, ultricies cursus odio. Nulla facilisis dui in rutrum tincidunt. Pellentesque id laoreet nunc. In vel urna sed nisi cursus elementum. Pellentesque eu magna pulvinar, facilisis nulla ut, maximus magna. Nulla interdum, magna suscipit vestibulum hendrerit, ante mauris pulvinar purus, sit amet varius turpis ipsum dignissim est. Phasellus tristique, sem a tristique congue, metus sem suscipit odio, vel malesuada risus tellus vel sem. Donec ut ipsum accumsan, facilisis augue mattis, ultricies augue. Integer eget luctus metus.
<br>
Duis pharetra ipsum lectus, quis efficitur odio suscipit ut. Praesent ut erat a odio facilisis porta vel porttitor augue. Nunc ex mauris, tempor sed mauris a, laoreet pretium diam. Integer vel ligula iaculis, convallis enim et, pharetra mauris. Integer non tristique lectus. Praesent vel metus ut risus consectetur tempor sed sit amet est. Ut imperdiet ante a tellus accumsan sollicitudin. Nullam vel ultrices metus. Duis iaculis tellus nibh, a blandit risus maximus quis. Vivamus eleifend rutrum ex, eget ultrices neque commodo eu. Proin aliquet id sapien at sagittis.
<br>
Pellentesque molestie nisl ante, vulputate facilisis magna auctor quis. Aenean imperdiet elit nec sem congue hendrerit. Ut felis mauris, gravida et metus ac, venenatis aliquam elit. Aenean nec nulla quam. Integer fermentum, enim a fermentum hendrerit, augue est aliquet libero, ut elementum sapien neque et sem. Duis eu augue ultrices purus auctor tempus at non justo. Sed sit amet nulla hendrerit sapien bibendum fringilla. Proin finibus malesuada ligula, et fermentum velit ornare ut. Pellentesque nunc felis, posuere quis eros at, tincidunt placerat purus.
<br>
Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin auctor tempor dictum. Aenean ex metus, tempor sit amet pretium laoreet, posuere at dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ut ornare leo. Aliquam tempus convallis lacus sed mattis. Praesent condimentum, nisi ac pellentesque laoreet, sapien dolor mollis felis, vel dignissim magna nisl eu lacus. Praesent elementum scelerisque enim, nec sodales nulla fringilla in.
<br>
Duis dictum quam at imperdiet sollicitudin. Morbi auctor porttitor massa, in egestas quam. Nunc sem augue, dictum eget placerat in, rhoncus ac magna. Maecenas in hendrerit eros, nec tempus orci. Donec non lacinia nunc. Sed non egestas orci, eget finibus diam. Nam ut tincidunt metus. Sed dignissim, neque eleifend pretium imperdiet, neque turpis vestibulum mauris, in consectetur nulla nibh at eros. Nulla a volutpat lacus, ut volutpat ipsum. Phasellus aliquam felis a rutrum sagittis. Duis vel vestibulum tortor. Nunc viverra nisi iaculis enim gravida maximus. Proin tristique consectetur interdum. Nunc vulputate est magna.
`
const body =document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
body.append(progressBar);

//funcion que calcule el porcentaje de scroll
const calculateScrollPercentage = (event) => {
    const {scrollTop, scrollHeight, clientHeight} = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//Streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map( calculateScrollPercentage),
    tap(console.log)
)

progress$.subscribe(percentage =>{
    progressBar.style.width = `${percentage}%`;
} )
