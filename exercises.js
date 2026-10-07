const machine={
  chest:{name:'Chest press',scheme:'3–4 × 6–10',cue:'Set handles at mid-chest<br/>Exhale while pressing to full extension<br/>Inhale while returning slowly and under control',details:'Use press position 2 (Chest)<br/>Adjust the seat so the lower horizontal handle of the press arm is at mid-chest level<br/>Select the desired weight<br/>Exhale while pushing out to full extension<br/>Inhale while returning to the starting position in a slow and controlled manner',img:'assets/press-positions.jpeg'},
  shoulder:{name:'Shoulder press',scheme:'3 × 8–12',cue:'Match press arm and seat-back position 4<br/>Press overhead under control',details:'Use press position 4 (Shoulder)<br/>Match the number on the press arm to the corresponding number on the seat back<br/>Adjust the seat, select the desired weight, press to full extension, then return slowly and under control',img:'assets/press-positions.jpeg'},
  incline:{name:'Incline press',scheme:'3 × 8–12',cue:'Match press arm and seat-back position 3<br/>Press smoothly<br/>Return slowly',details:'Use press position 3 (Incline)<br/>Match press arm and seat-back numbers<br/>Adjust the seat so the lower horizontal handle is appropriately aligned, select the desired weight, press to full extension, and return slowly',img:'assets/press-positions.jpeg'},
  decline:{name:'Decline press',scheme:'3 × 8–12',cue:'Match press arm and seat-back position 1<br/>Press to full extension<br/>Return slowly',details:'Use press position 1 (Decline)<br/>Match press arm and seat-back numbers<br/>Select the desired weight, press to full extension, and return to the start slowly and under control',img:'assets/press-positions.jpeg'},
  lat:{name:'Lat pulldown',scheme:'3–4 × 8–12',cue:'Knees under thigh pad<br/>Pull the bar toward the upper chest<br/>Return slowly',details:'Adjust the arm/thigh pad so it rests against your thighs when seated<br/>Select weight<br/>Grip the lat bar<br/>Slide knees under the pad<br/>Exhale while pulling the bar toward your upper chest<br/>Inhale while returning slowly and under control',img:'assets/lat-pulldown.jpeg'},
  row:{name:'Seated row',scheme:'3–4 × 8–12',cue:'Brace feet<br/>Pull the handle toward the mid-section<br/>Control the reach forward',details:'Select weight<br/>Sit on the floor with feet securely against the low tube<br/>With torso slightly bent, reach forward while grasping the handles or bar with palms facing down<br/>Exhale while pulling toward your mid-section<br/>Inhale while returning slowly and under control',img:'assets/seated-row.jpeg'},
  biceps:{name:'Bicep curl',scheme:'3 × 10–15',cue:'Palms up<br/>Curl handles or bar toward the chest<br/>Lower slowly',details:'Select weight<br/>Stand facing the machine<br/>Grasp handles or bar with palms facing up and slowly curl toward your chest<br/>Inhale while returning to the start slowly and under control',img:'assets/bicep-curl.jpeg'},
  triceps:{name:'Tricep pushdown',scheme:'3 × 10–15',cue:'Palms down, elbows pinned<br/>Extend down fully<br/>Return slowly',details:'Stand straddling the seat pad so you can reach the lat bar<br/>Select weight<br/>Grasp the bar palms down, shoulder-width apart<br/>Exhale while extending downward to full extension<br/>Inhale while returning slowly and under control',img:'assets/tricep-pushdown.jpeg'},
  legext:{name:'Leg extension',scheme:'3–4 × 10–15',cue:'Set rollers at ankle height<br/>Extend to full contraction<br/>Lower slowly',details:'Select weight<br/>Adjust the seat back pad to the inclined position<br/>While seated, adjust lower rollers to ankle height<br/>Position the backs of your knees against the front of the lower seat pad and the tops of your feet behind the rollers<br/>Exhale while extending to full extension<br/>Inhale while returning slowly and under control',img:'assets/leg-extension.jpeg'},
  legcurl:{name:'Leg curl',scheme:'3–4 × 10–15',cue:'Prone on pads<br/>Ankles under rollers<br/>Curl toward buttocks<br/>Control the return',details:'Select weight<br/>Adjust the seat back pad to the declined position<br/>Lie face down against the seat pads<br/>Position knees slightly beyond the front of the lower seat pad and the backs of the ankles under the upper roller pads<br/>Exhale while bringing legs toward the buttocks to a full contraction<br/>Inhale while returning slowly and under control',img:'assets/leg-curl.jpeg'}
};
const db={
 lateral:{name:'DB lateral raise',scheme:'2–3 × 12–20',cue:'Keep a slight elbow bend<br/>Raise to shoulder height<br/>Lower under control',video:'-u--zOEJUVk'},
 rearfly:{name:'DB rear delt fly',scheme:'2–3 × 12–20',cue:'Hinge at the hips<br/>Sweep arms out<br/>Keep shoulders down and movement controlled',video:'tLMYYkNbwwY'},
 hammer:{name:'DB hammer curl',scheme:'2–3 × 10–15',cue:'Use a neutral grip<br/>Curl without swinging<br/>Lower slowly',video:'C78sQb40Ozs'},
 goblet:{name:'DB goblet squat',scheme:'3 × 8–12',cue:'Hold one dumbbell at chest<br/>Squat with a braced torso<br/>Stand tall',video:'ik7spDPZDxg'},
 rdl:{name:'DB Romanian deadlift',scheme:'3 × 8–12',cue:'Hinge hips back with a slight knee bend<br/>Load the hamstrings<br/>Stand by driving the hips through',video:'-kvriSTyOv4'},
 calf:{name:'DB calf raise',scheme:'2–4 × 12–20',cue:'Hold dumbbells<br/>Rise onto toes<br/>Pause<br/>Lower into a controlled stretch',video:'xHs4DX5PlL0'},
 bench:{name:'DB bench press',scheme:'2–3 × 8–12',cue:'Start with dumbbells over the chest<br/>Lower under control<br/>Press evenly',video:'4P36Tno4XqU'},
 pullover:{name:'DB pullover',scheme:'2–3 × 10–15',cue:'Keep ribs down<br/>Lower the dumbbell behind the head gently<br/>Pull it back over the chest',video:'4OVYj9VjWeM'},
 lunge:{name:'DB reverse lunge',scheme:'3 × 8–12 / leg',cue:'Step back<br/>Keep the front shin controlled<br/>Drive through the front foot',video:'bNOiZI2a6M0'},
 carry:{name:'DB farmer carry',scheme:'4 × 30–60 sec',cue:'Keep tall posture and ribs down<br/>Walk with controlled steps',video:'7JJgmBM3aGE'}
};
// Keep stored exercise names and schemes stable for history keys and set counts.
function exerciseName(ex){return ex.name.replace(/^DB (.)/,(_,first)=>first.toUpperCase())}
function schemeLabel(s){
  const [sets,target]=s.replaceAll('–','-').split(' × ');
  if(target.endsWith(' sec'))return `${sets} sets of ${target.replace(' sec',' seconds')}`;
  return `${sets} sets of ${target.replace(' / leg','')} reps${target.includes(' / leg')?' per leg':''}`;
}
function exerciseId(ex){return `${ex.video?'dumbbell':'inflight-3070'}-${exerciseName(ex).toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}
function exerciseGuidance(ex){
  return ex.video
    ? `<details class="guidance"><summary>Video</summary><div class="detailbody"><iframe class="demo-video" src="https://www.youtube-nocookie.com/embed/${ex.video}" title="${exerciseName(ex)} exercise demo" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></details>`
    : `<details class="guidance"><summary>Diagram</summary><div class="detailbody"><p>${ex.details}</p><p class="diagram-note">Original inflight instruction image shown in full:</p><img class="diagram" src="${ex.img}" alt="${exerciseName(ex)} Inflight Fitness 3070 instruction diagram" loading="lazy"></div></details>`;
}
