function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255, 230, 230); // 연한 핑크 배경
  
    // 돼지 얼굴 (더 크게)
    fill(255, 182, 193);
    ellipse(200, 200, 250, 220); 
  
    // 돼지 귀 (더 둥글고 귀엽게)
    fill(255, 182, 193);
    ellipse(130, 110, 70, 70);
    ellipse(270, 110, 70, 70);
  
    // 돼지 눈 (더 귀엽게)
    fill(0);
    ellipse(170, 180, 25, 30);
    ellipse(230, 180, 25, 30);
    
    // 돼지 볼 (귀여운 분홍색 볼터치)
    fill(255, 150, 170, 150);
    ellipse(140, 210, 30, 20);
    ellipse(260, 210, 30, 20);
  
    // 돼지 코 (더 크게)
    fill(255, 105, 180);
    ellipse(200, 230, 70, 50);
    fill(0);
    ellipse(185, 230, 12, 18);
    ellipse(215, 230, 12, 18);
  
    // 돼지 입 (더 귀엽게 웃는 표정)
    noFill();
    stroke(150, 0, 50);
    strokeWeight(3);
    arc(200, 250, 40, 20, 0, PI);
  }
  