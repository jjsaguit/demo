function getBFI(gender,age,fat){

    var bfi = [];
    if (age < 20)
    {
      age = 20;
    }
    if(age >=20 && age <=24){
        if(gender === 'F'){
          if(fat < 18.2){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 18.2){
            bfi[0] = 'Excellent';
          }
          else if(fat >18.2 && fat < 22.1){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 22.1){
            bfi[0] = 'Good';
          }
          else if(fat >22.1 && fat < 25){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 25.0){
            bfi[0] = 'Medium';
          }
          else if(fat >25 && fat < 29.6){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat >29.6){
            bfi[0] = 'Bad';
          }
          bfi[1] = '18.2% - 22.1%';
        }else if(gender ==='M'){
          if(fat < 10.8){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 10.8){
            bfi[0] = 'Excellent';
          }
          else if(fat >10.8 && fat < 14.9){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 14.9){
            bfi[0] = 'Good';
          }
          else if(fat >14.9 && fat < 19){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 19){
            bfi[0] = 'Medium';
          }
          else if(fat >19 && fat < 23.3){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat >23.3){
            bfi[0] = 'Bad';
          }
          bfi[1] = '10.8% - 14.9%';
        }
      }
      else if(age >=25 && age <=29){
        if(gender === 'F'){
          if(fat < 18.9){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 18.9){
            bfi[0] = 'Excellent';
          }
          else if(fat >18.9 && fat < 22){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 22){
            bfi[0] = 'Good';
          }
          else if(fat >22 && fat < 25.4){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 25.4){
            bfi[0] = 'Medium';
          }
          else if(fat >25.4 && fat < 29.8){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat >29.8){
            bfi[0] = 'Bad';
          }
          bfi[1] = '18.9% - 22%';
        }else if(gender ==='M'){
          if(fat < 12.8){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 12.8){
            bfi[0] = 'Excellent';
          }
          else if(fat >12.8 && fat < 16.5){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 16.5){
            bfi[0] = 'Good';
          }
          else if(fat >16.5 && fat < 20.3){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 20.3){
            bfi[0] = 'Medium';
          }
          else if(fat >20.3 && fat < 24.3){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat >24.3){
            bfi[0] = 'Bad';
          }
          bfi[1] = '12.8% - 16.5';
        }
      }
      else if(age >=30 && age <=34){
        if(gender === 'F'){
          if(fat < 19.7){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 19.7){
            bfi[0] = 'Excellent';
          }
          else if(fat >19.7 && fat < 22.7){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 22.7){
            bfi[0] = 'Good';
          }
          else if(fat >22.7 && fat < 26.4){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 26.4){
            bfi[0] = 'Medium';
          }
          else if(fat >26.4 && fat < 30.5){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat > 30.5){
            bfi[0] = 'Bad';
          }
          bfi[1] = '19.7% - 22.7%';
        }else if(gender ==='M'){
          if(fat < 14.5){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 14.5){
            bfi[0] = 'Excellent';
          }
          else if(fat >14.5 && fat < 18){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 18){
            bfi[0] = 'Good';
          }
          else if(fat >18 && fat < 21.5){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 21.5){
            bfi[0] = 'Medium';
          }
          else if(fat >21.5 && fat < 25.2){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat >25.2){
            bfi[0] = 'Bad';
          }
          bfi[1] = '14.5% - 18%';
        }
      }
      else if(age >=35 && age <=39){
        if(gender === 'F'){
          if(fat < 21.1){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 21.1){
            bfi[0] = 'Excellent';
          }
          else if(fat >21.1 && fat < 24.0){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 24.0){
            bfi[0] = 'Good';
          }
          else if(fat >24.0 && fat < 27.7){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 27.7){
            bfi[0] = 'Medium';
          }
          else if(fat >27.7 && fat < 31.5){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat > 31.5){
            bfi[0] = 'Bad';
          }
          bfi[1] = '22.1% - 24.0%';
        }else if(gender ==='M'){
          if(fat < 16.1){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 16.1){
            bfi[0] = 'Excellent';
          }
          else if(fat >16.1 && fat < 19.3){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 19.3){
            bfi[0] = 'Good';
          }
          else if(fat >19.3 && fat < 22.6){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 22.6){
            bfi[0] = 'Medium';
          }
          else if(fat >22.6 && fat < 26.1){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat >26.1){
            bfi[0] = 'Bad';
          }
          bfi[1] = '16.1% - 19.3%';
        }
      }
      else if(age >=40 && age <=44){
        if(gender === 'F'){
          if(fat < 22.3){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 22.3){
            bfi[0] = 'Excellent';
          }
          else if(fat >22.3 && fat < 25.6){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 25.6){
            bfi[0] = 'Good';
          }
          else if(fat >25.6 && fat < 29.3){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 29.3){
            bfi[0] = 'Medium';
          }
          else if(fat >29.3 && fat < 32.8){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat > 32.8){
            bfi[0] = 'Bad';
          }
          bfi[1] = '22.3% - 25.6%';
        }else if(gender ==='M'){
          if(fat < 17.5){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 17.5){
            bfi[0] = 'Excellent';
          }
          else if(fat > 17.5 && fat < 20.5){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 20.5){
            bfi[0] = 'Good';
          }
          else if(fat >20.5 && fat < 23.6){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 23.6){
            bfi[0] = 'Medium';
          }
          else if(fat >23.6 && fat < 26.9){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat >26.9){
            bfi[0] = 'Bad';
          }
          bfi[1] = '17.5% - 20.5%';
        }
      }
      else if(age >=45 && age <=49){
        if(gender === 'F'){
          if(fat < 24.3){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 24.3){
            bfi[0] = 'Excellent';
          }
          else if(fat >24.3 && fat < 27.3){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 27.3){
            bfi[0] = 'Good';
          }
          else if(fat >27.3 && fat < 30.9){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 30.9){
            bfi[0] = 'Medium';
          }
          else if(fat >30.9 && fat < 34.1){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat > 34.1){
            bfi[0] = 'Bad';
          }
          bfi[1] = '24.3% - 27.3%';
        }else if(gender ==='M'){
          if(fat < 18.6){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 18.6){
            bfi[0] = 'Excellent';
          }
          else if(fat > 18.6 && fat < 21.5){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 21.5){
            bfi[0] = 'Good';
          }
          else if(fat >21.5 && fat < 24.5){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 24.5){
            bfi[0] = 'Medium';
          }
          else if(fat >24.5 && fat < 27.6){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat >27.6){
            bfi[0] = 'Bad';
          }
          bfi[1] = '18.6% - 21.5%';
        }
      }
      else if(age >=50 && age <=54){
        if(gender === 'F'){
          if(fat < 25.2){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 25.2){
            bfi[0] = 'Excellent';
          }
          else if(fat >25.2 && fat < 26.2){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 26.2){
            bfi[0] = 'Good';
          }
          else if(fat >26.2 && fat < 31.8){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 31.8){
            bfi[0] = 'Medium';
          }
          else if(fat >31.8 && fat < 35.1){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat > 35.1){
            bfi[0] = 'Bad';
          }
          bfi[1] = '25.2% - 26.2%';
        }else if(gender ==='M'){
          if(fat < 19.2){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 19.2){
            bfi[0] = 'Excellent';
          }
          else if(fat > 19.2 && fat < 22.1){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 22.1){
            bfi[0] = 'Good';
          }
          else if(fat > 22.1 && fat < 25.1){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 25.1){
            bfi[0] = 'Medium';
          }
          else if(fat > 25.1 && fat < 28.2){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat > 28.2){
            bfi[0] = 'Bad';
          }
          bfi[1] = '19.2% - 22.1%';
        }
      }
      else if(age >=55 && age <=59){
        if(gender === 'F'){
          if(fat < 26.6){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 26.6){
            bfi[0] = 'Excellent';
          }
          else if(fat >26.6 && fat < 29.7){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 29.7){
            bfi[0] = 'Good';
          }
          else if(fat >29.7 && fat < 33.1){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 33.1){
            bfi[0] = 'Medium';
          }
          else if(fat >33.1 && fat < 36.2){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat > 36.2){
            bfi[0] = 'Bad';
          }
          bfi[1] = '26.6% - 29.7%';
        }else if(gender ==='M'){
          if(fat < 19.8){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 19.8){
            bfi[0] = 'Excellent';
          }
          else if(fat > 19.8 && fat < 22.7){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 22.7){
            bfi[0] = 'Good';
          }
          else if(fat > 22.7 && fat < 25.6){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 25.6){
            bfi[0] = 'Medium';
          }
          else if(fat > 25.6 && fat < 28.7){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat > 28.7){
            bfi[0] = 'Bad';
          }
          bfi[1] = '19.8% - 22.7%';
        }
      }
      else if(age >=60){
        if(gender === 'F'){
          if(fat < 27.4){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 27.4){
            bfi[0] = 'Excellent';
          }
          else if(fat > 27.4 && fat < 30.7){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 30.7){
            bfi[0] = 'Good';
          }
          else if(fat >30.7 && fat < 34.0){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 34.0){
            bfi[0] = 'Medium';
          }
          else if(fat >34.0 && fat < 37.3){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat > 37.3){
            bfi[0] = 'Bad';
          }
          bfi[1] = '27.4% - 30.7%';
        }else if(gender ==='M'){
          if(fat < 20.2){
            bfi[0] = 'Below Excellent';
          }
          else if(fat == 20.2){
            bfi[0] = 'Excellent';
          }
          else if(fat > 20.2 && fat < 23.3){
            bfi[0] = 'Excellent - Good';
          }
          else if(fat == 23.3){
            bfi[0] = 'Good';
          }
          else if(fat > 23.3 && fat < 26.2){
            bfi[0] = 'Good - Medium';
          }
          else if(fat == 26.2){
            bfi[0] = 'Medium';
          }
          else if(fat > 26.2 && fat < 29.3){
            bfi[0] = 'Medium - Bad';
          }
          else if(fat > 29.3){
            bfi[0] = 'Bad';
          }
          bfi[1] = '20.2% - 23.3%';
        }
      }
    
    //console.log(bfi);
    return bfi;
}