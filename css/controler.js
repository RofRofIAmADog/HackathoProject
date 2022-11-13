let pg = 0;
document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("keyup", event=>{
        if(event.code == 'Space'){
            switch(pg){
                case 0:
                    document.getElementById('title').classList.remove('enable');
                    document.getElementById('up').classList.remove('enable');
                    document.getElementById('title').classList.add('disable');
                    document.getElementById('up').classList.add('disable');
                    document.querySelector('.intro').classList.remove('null');
                    document.querySelector('.intro').classList.add('enable');
                    pg+=1;
                    break
                case 1:
                    document.querySelector('.intro').classList.remove("enable");
                    document.querySelector('.intro').classList.add('disable');
                    document.querySelector('.work').classList.remove('null');
                    document.querySelector('.work').classList.add('enable');
                    pg+=1;
                    break
                case 2:
                    document.getElementById('p1').classList.add("disable");
                    document.getElementById('p2').classList.add("enable");
                    pg+=1;
                    break
                case 3:
                    document.querySelector('.work').classList.remove('enable');
                    document.querySelector('.work').classList.add('disable');
                    document.querySelector('.work2').classList.remove('null');
                    document.querySelector('.work2').classList.add('enable');
                    pg+=1;
                    break
                case 4:
                    document.getElementById('inst1').classList.add("disable");
                    document.getElementById('inst2').classList.remove("null");
                    document.getElementById('inst2').classList.add("enable");
                    pg+=1;
                    break
                case 5:
                    document.querySelector('.work2').classList.remove("enable");
                    document.querySelector('.work2').classList.add("disable");
                    document.querySelector('.end').classList.remove('null');
                    document.querySelector('.end').classList.add('enable');
                    pg+=1;
                    break
            }
        }
    });
});