var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);

  input = createInput();
  input.position(100, 60);

  heading = createElement('h4', 'Enter any alphabhet');
  heading.position(100, 20);
}

function draw() {

  //to read the value entered by the user in the box

  //please except the value
  const value= input.value();

  //alternative of if condition
  switch( value)
  {

    case 'a': console.log("vowel");
              break;

    case 'e': console.log("vowel");
              break;

    case 'i': console.log("vowel");
              break;

    case 'o': console.log("vowel");
              break;

    case 'u': console.log("vowel");
              break;

    default: console.log("please enter any character, becuase it is not a vowel")
              break;

  }//come out of this when there is a break
}

