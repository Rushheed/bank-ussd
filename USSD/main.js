function tajUssd() {
    let tajCode = prompt("Please Enter TAJ USSD(*898#)");
  
    if (tajCode === "*898#") {
      let options = prompt(
        "\n1. Airtime self \n2. Airtime others \n3. Trsf-Taj \n4. Trsf others \n5. Pay bills"
      );
      switch (options) {
        //AIRTIME SELF
        case "1":
          prompt("Enter amount");
          alert("successful");
          break;
  
        // AIRTIME OTHERS
        case "2":
          let number = prompt("Enter Third Party Number");
          if (number.length === 11) {
            prompt("Enter amount");
            let pin = prompt("Enter pin");
            if (pin.length === 4) {
              alert("Successful");
            } else {
              alert("wrong pin");
            }
          } else {
            alert("Wrong Number");
          }
          break;
  
        // TAJ TO TAJ TRANSFER
        case "3":
          let acct = prompt("Enter account number");
          if (acct.length === 10) {
            prompt("Enter amount");
            let pin = prompt("Enter pin");
            if (pin.length === 4) {
              alert("processing, you will receive a message shortly");
            } else {
              alert("wrong pin");
            }
          } else {
            alert("wrong account number");
          }
          break;
  
        // TAJ TO OTHER BANKS TRANSFER
        case "4":
          let select = prompt(
            "\n1. Access bank \n2. GTbank  \n3. First bank \n4. UBA \n5. Others"
          );
          switch (select) {
            case "1":
              let acct = prompt("Enter account number");
              if (acct.length === 10) {
                prompt("Enter amount");
                let pin = prompt("Enter pin");
                if (pin.length === 4) {
                  alert("processing, you will receive a message shortly");
                } else {
                  alert("wrong pin");
                }
              } else {
                alert("wrong account number");
              }
              break;
  
            case "2":
              let bacct = prompt("Enter account number");
              if (bacct.length === 10) {
                prompt("Enter amount");
                let pin = prompt("Enter pin");
                if (pin.length === 4) {
                  alert("processing, you will receive a message shortly");
                } else {
                  alert("wrong pin");
                }
              } else {
                alert("wrong account number");
              }
              break;
  
            case "3":
              let aacct = prompt("Enter account number");
              if (aacct.length === 10) {
                prompt("Enter amount");
                let pin = prompt("Enter pin");
                if (pin.length === 4) {
                  alert("processing, you will receive a message shortly");
                } else {
                  alert("wrong pin");
                }
              } else {
                alert("wrong account number");
              }
              break;
  
            case "4":
              let vacct = prompt("Enter account number");
              if (vacct.length === 10) {
                prompt("Enter amount");
                let pin = prompt("Enter pin");
                if (pin.length === 4) {
                  alert("processing, you will receive a message shortly");
                } else {
                  alert("wrong pin");
                }
              } else {
                alert("wrong account number");
              }
              break;
  
            case "5":
              alert(
                "Other banks are not available at the moment, try again later"
              );
              break;
          }
  
        // PAY BILLS
        case "5":
          let bills = prompt("\n.1 Electricity bill \n.2 DSTV");
          switch (bills) {
            case "1":
              prompt("Enter your meter number");
              prompt("Enter amount");
              let pin = prompt("Enter pin");
              if (pin.length === 4) {
                alert("your RRR is 90088761345456567456");
              } else {
                alert("wrong pin");
              }
              break;
  
            case "2":
              prompt("Enter your card Number");
              prompt("Enter amount");
              alert(
                "Congratulations You've activate a monthly premium Subscription"
              );
              break;
          }
      }
    } else {
      alert("Please enter the correct USSD for GT bank.");
    }
  }
  