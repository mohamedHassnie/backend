//méthode pour calcuer date debut - date fin mtee congé
const calculateVacationPeriod = (vacation) => {
  const startingDate = new Date(vacation.startingDate);
  const endingDate = new Date(vacation.endingDate);
  const time = Math.abs(endingDate - startingDate);
  const days = Math.ceil(time / (1000 * 60 * 60 * 24));
  console.log("ee", days);
  return days;
};

const vacationStatus = (vacations, year = "") => {
  //+year convetir year in int
  // year = "" : andék choix argument etheka t3abih ou yet3ada vide : optional
  //new Date().getFullYear() : La méthode getFullYear()renvoie l'année de la date renseignée d'après l'heure locale.
  if (+year > new Date().getFullYear())
    throw new Error("Invalid year, please enter a valid year"); //exceptions
  const vacationYear = year === "" ? new Date().getFullYear() : year; // variable hetha vacationYear bch n3adilou ena year ou bien par défaut bch ye5ou l'annéé ahna fih local

  //filtre crée un nouveau tableau en supprimant les
  // éléments qui n'appartiennent pas. reduce , d'autre part,
  //prend tous les éléments d'un tableau et les réduit en une seule value .
  //vacation pacourou beha : bch nchouf f anneé en cours ou nn
  const vacationsInSameYear = vacations.filter((vacation) => {
    // test startingDate nefsou am ahna mawjoudine fih ou non
    return (
      vacation.startingDate.substring(0, 4) === vacationYear.toString() &&
      vacation.endingDate.substring(0, 4) === vacationYear.toString()
    );
  });
  // ou b facon hetha nektbu
  // k = 0 : initialisation , récursivité
  let total = 0;
  vacationsInSameYear.forEach((element) => {
    total += element.days;
  });
  const totalDays = total;
  console.log("total", totalDays);
  //console.log("ee", calculateVacationPeriod().days);
  // extract the max days attribute from  vacation in the same year
  const maxDays = vacationsInSameYear[0].maxDays;
  const maxDayssick = vacationsInSameYear[0].maxDayssick;
  const type_vacation = vacationsInSameYear[0].type_vacation;
  console.log("max", maxDays);
  console.log("maxDayssick", maxDayssick);
  if (type_vacation === " normal") {
    if (totalDays >= maxDays) {
      return {
        status: "rejected",
        remainingDays: 0,
      };
    } else {
      return {
        status: "pending",
        remainingDays: maxDays - totalDays,
      };
    }
  } else {
    if (totalDays >= maxDayssick) {
      return {
        status: "rejected",
        remainingDays: 0,
      };
    } else {
      return {
        status: "pending",
        remainingDays: maxDayssick - totalDays,
      };
    }
  }
};
module.exports = {
  vacationStatus,
  calculateVacationPeriod,
};
