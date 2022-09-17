

var Bank = {
    balance : 47477,
    balanceNumber: "767676",
    valute: "som",
     BankAdress : {
      adres : "chuy 453",
      name: "kicb",
     }
  }
   
  
  console.log(Bank);
  
  var customer = {
      Name: "Arina",
      Surname: "Ermekbaeva",
      CustomerType: 1,
      IsInternetBankingUser: true,
      IsMobileBankingUser: false,
      Verification: null,
      AdditionalInfo: undefined,
      Sex: 1,
      "Passport Data":{
          ID:"AN",
          Series: "128289",
          ExpiryDate: "02.01.2030",
          Authority: "MKK 30-01",
      
      }
  
  }
  
  console.log(customer)
  
  if(customer.CustomerType === 1) {
      console.log('физ лицо');
  }else{
      console.log('юр лицо');
  }