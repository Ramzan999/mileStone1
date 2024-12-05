"use strict";
//---------------- Reference Section -----------///
let refSection = document.getElementById('ref');
let refBtn = document.getElementById('refBtn');
refBtn?.addEventListener('click', () => {
    refSection.classList.toggle('hide');
});
//--------------- Experience Section ---------------//
let expSection = document.getElementById('experienceInfo');
let btnExperience = document.getElementById('btnExperience');
btnExperience?.addEventListener('click', () => {
    expSection.classList.toggle('hide');
});
//------------- Print Button ------------------------//
let printBtn = document.getElementById('printBtn');
printBtn?.addEventListener('click', () => {
    window.print();
});
