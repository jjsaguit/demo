function getIdealWeight(gender,feet,inches){
    var idealLbsMin = 0, idealLbsMax = 0;

    if(gender === 'F'){
        if(feet === 4)
        {
          if(inches === 11){
            idealLbsMin = 93;idealLbsMax = 100;
          }
        }
        else if(feet === 5){
          if(inches === 0){
            idealLbsMin = 98;idealLbsMax = 102;
          }
          else if(inches === 1){
            idealLbsMin = 103;idealLbsMax = 106;
          }
          else if(inches === 2){
            idealLbsMin = 106;idealLbsMax = 112;
          }
          else if(inches === 3){
            idealLbsMin = 109;idealLbsMax = 118;
          }
          else if(inches === 4){
            idealLbsMin = 112;idealLbsMax = 124;
          }
          else if(inches === 5){
            idealLbsMin = 115;idealLbsMax = 130;
          }
          else if(inches === 6){
            idealLbsMin = 118;idealLbsMax = 136;
          }
          else if(inches === 7){
            idealLbsMin = 121;idealLbsMax = 142;
          }
          else if(inches === 8){
            idealLbsMin = 124;idealLbsMax = 148;
          }
          else if(inches === 9){
            idealLbsMin = 127;idealLbsMax = 153;
          }
          else if(inches === 10){
            idealLbsMin = 130;idealLbsMax = 158;
          }
          else if(inches === 11){
            idealLbsMin = 133;idealLbsMax = 163;
          }
        }else if(feet === 6){
          if(inches === 0){
            idealLbsMin = 136;idealLbsMax = 168;
          }
          else if(inches === 1){
            idealLbsMin = 139;idealLbsMax = 173;
          }
        }
      }
      else if(gender === 'M'){
        //for male
        if(feet === 5){
          if(inches === 2){
            idealLbsMin = 115;idealLbsMax = 121;
          }
          else if(inches === 3){
            idealLbsMin = 120;idealLbsMax = 129;
          }
          else if(inches === 4){
            idealLbsMin = 125;idealLbsMax = 137;
          }
          else if(inches === 5){
            idealLbsMin = 130;idealLbsMax = 145;
          }
          else if(inches === 6){
            idealLbsMin = 135;idealLbsMax = 153;
          }
          else if(inches === 7){
            idealLbsMin = 140;idealLbsMax = 161;
          }
          else if(inches === 8){
            idealLbsMin = 145;idealLbsMax = 169;
          }
          else if(inches === 9){
            idealLbsMin = 150;idealLbsMax = 177;
          }
          else if(inches === 10){
            idealLbsMin = 155;idealLbsMax = 185;
          }
          else if(inches === 11){
            idealLbsMin = 160;idealLbsMax = 193;
          }
        }
        else if(feet === 6){
          if(inches === 0){
            idealLbsMin = 165;idealLbsMax = 201;
          }
          else if(inches === 1){
            idealLbsMin = 170;idealLbsMax = 209;
          }
          else if(inches === 2){
            idealLbsMin = 175;idealLbsMax = 217;
          }
          else if(inches === 3){
            idealLbsMin = 180;idealLbsMax = 225;
          }
          else if(inches === 4){
            idealLbsMin = 180;idealLbsMax = 233;
          }
        }
      }

    return {
        idealLbsMin:idealLbsMin,
        idealLbsMax:idealLbsMax
    };
}