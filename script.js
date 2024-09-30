for (let i = 1; i <=10; i++) {
    console.log(i);
}

let a = 1;
while(a<=10) {
    console.log(a);
    a++;
}

let b = 1;
do {
    console.log(b);
    b++;
}
while(b<=10);

// 2 Question

for (let i = 2; i<=20; i = i+2) {
    console.log(i);
}

let c = 2;
while(c <=20) {
    console.log(c);
    c = c+2;
}

let d = 2;

do {
    console.log(d);
    d = d+2
}
while (d<=20);

// 3 Question

for (let i = 1; i<=20; i = i+2){
    console.log(i);
}

let e = 1;
while(e <= 20) {
    console.log(e);
    e = e+2
}

let f = 1;

do {
    console.log(f);
    f = f+2
}
while(f<=20);

// 4 Question

let marks = prompt("Enter the marks:");

if (marks>=90) {
    console.log("A+ Grade");
}
    else if (marks>=89 && marks<=80) {
        console.log("A Grade");
    }

    else if (marks>=79 && marks<=65) {
        console.log("B Grade");
    }

    else if (marks>=64 && marks<=50) {
        console.log("C Grade");
    }

    else if (marks>=49 && marks<=35) {
        console.log("D Grade");
    }
    
    else {
        console.log("Fail");   
    }

