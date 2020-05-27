/**
 * !Regular Functions
 */

function sayName() {
  const firstName = "Codinger ";
  const lastName = "Blade";

  const fullName = firstName + lastName;
  console.log(fullName);
}

sayName();

/**
 * ? Arrow Functions
 */

const nameSayer = () => {
  const firstName = "Codinger ";
  const lastName = "Blade";

  const fullName = firstName + lastName;
  console.log(fullName);
};

nameSayer();

/**
 * * Functions with Parameters
 */

function getSqaure(num) {
  const sqauredNum = num ** 2;
  console.log(sqauredNum);
}

getSqaure(9);

const sqaure = (num) => {
  const sqauredNum = num ** 2;
  console.log(sqauredNum);
};

sqaure(9);

/**
 * ! this
 */

let me = {
  name: "Codinger Blade",
  arrowFunc: () => {
    console.log(me.name);
  },
  normalFunc: function () {
    console.log(this.name);
  },
};

me.arrowFunc();
me.normalFunc();
