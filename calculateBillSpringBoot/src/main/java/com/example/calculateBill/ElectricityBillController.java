//package com.example.calculateBill;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//
//@Controller
//public class ElectricityBillController {
//
//    @GetMapping("/calculateBill")
//    public String calculateBill() {
//        return "electricityBillCalculator";
//    }
//}

package com.example.calculateBill;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ElectricityBillController {

    @GetMapping("/calculateBill")
    public String showBillForm() {
        return "electricityBillCalculator";
    }

    @PostMapping("/calculateBill")
    public String calculateBill(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String address, @RequestParam int units, Model model) {
        double bill = calculateElectricityBill(units);

        model.addAttribute("firstName", firstName);
        model.addAttribute("lastName", lastName);
        model.addAttribute("address", address);
        model.addAttribute("units", units);
        model.addAttribute("bill", bill);

        return "billResult";
    }
    
    private double calculateElectricityBill(int units) {
        double rate1 = 3.50;  // Rate for the first 50 units
        double rate2 = 4.00;  // Rate for the next 100 units
        double rate3 = 5.20;  // Rate for the next 100 units
        double rate4 = 6.50;  // Rate for units above 250

        double bill = 0;

        if (units <= 50) {
            bill = units * rate1;
        } else if (units <= 150) {
            bill = 50 * rate1 + (units - 50) * rate2;
        } else if (units <= 250) {
            bill = 50 * rate1 + 100 * rate2 + (units - 150) * rate3;
        } else {
            bill = 50 * rate1 + 100 * rate2 + 100 * rate3 + (units - 250) * rate4;
        }

        return bill;
    }


}