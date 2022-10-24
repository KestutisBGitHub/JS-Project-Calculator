// Skaičiuotuvo projektas

// Šio projekto metu turėsite sukurti savo skaičiuotuvą,
// kuris veikia taip, kaip visuose prietaisuose, pavyzdžiui,
// kompiuteryje, telefone ar fiziniame skaičiuotuve, kurį
// visiems teko ir tenka naudoti ir šiandien.

// Projekto tikslas - įtvirtinti savo JS įgūdžius ir juos
// pademonstruoti ne tik kolegoms, bet ir visam pasauliui (projektas
// turės atsidurti ir GitHub!), nes tai bus pirmasis realus JS
// darbas.

// Reikalavimai:
// - Sukurti naują projekto aplanką, inicijuoti git ir viso darbo
// metu tvarkingai ir prasmingai kurti commit'us;
// - Skaičiuotuvas turėtų būti kuriamas kaip ES6 klasė, kad visa
// logika būtų enkapsuliuota ir nepasiekiama išoriniams skriptams;
// - Idealus variantas būtų inicijuojant skaičiuotuvą (new keyword),
// kaip vienintelį parametrą, paduoti arba elementą, arba jo selektorių
// (klasę, id ar pan.), pagal ką jūsų inicijuota klasė sukurs visus
// reikiamus HTML elementus ir juos įterps į tą konkrečią vietą;
// - Skaičiuotuvas turi būti pilnai responsive ir stilizuotas. Dar geriau
// būtų jį padaryti fluid, jog išsidėstymą diktuotų konteineris, į kurį
// skaičiuotuvas bus įterpiamas;
// - Tai populiarus projektas, todėl aklai nekopijuokite kitų autorių kodų,
// priešingu atveju turėsit GitHub paminėti kieno kodą naudojot. Kitaip
// tariant - sukurkite autorinį darbą, kuris atspindės jūsų įgūdžius;

// Tiems, kuriems nepavyksta dirbti su klasėmis, galite rinktis
// alternatyvų būdą įgyvendinti šį projektą. Pavyzdžiui, tiesiog
// sukurti visą HTML pačiame dokumente ir atitinkamai selectinti visus elementus.

// Sėkmės!

const calculatorDesign = () => {
  const frame = document.createElement("div");
  frame.classList.add("frame");
  frame.style.border = "1px solid black";
  document.body.append(frame);
};

calculatorDesign();
