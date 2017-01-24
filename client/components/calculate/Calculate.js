const calculate = {
  RATE_RANGES : {
    interest_rate_low: 0.0632,
    interest_rate_high: 0.2666,
    origination_fee_low: 0.01,
    origination_fee_high: 0.05
  },

  rateCalculationNominator: function(interestRate, loanAmount) {
    return ((interestRate / 12) * loanAmount);
  },

  rateCalculationDenominator: function(interestRate) {
    let exp = Math.pow((1 + (interestRate / 12)), -36);
    return (1 - exp);
  },


  getLoanAmountInfo: function(loan_amount_size) {
    return {
      loan_size: (loan_amount_size),
      monthly_payment: {
        low: Math.round(calculate.rateCalculationNominator(calculate.RATE_RANGES.interest_rate_low, loan_amount_size) /
          calculate.rateCalculationDenominator(calculate.RATE_RANGES.interest_rate_low)
        ),
        high: Math.round(calculate.rateCalculationNominator(calculate.RATE_RANGES.interest_rate_high, loan_amount_size) /
          calculate.rateCalculationDenominator(calculate.RATE_RANGES.interest_rate_high)
        )
      },
      origination_fee: {
        high: Math.round(loan_amount_size * calculate.RATE_RANGES.origination_fee_high),
        low: Math.round(loan_amount_size * calculate.RATE_RANGES.origination_fee_low)
      }
    }
  }
}

module.exports = calculate;
