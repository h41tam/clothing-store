export function calculateCoupon(totalSpent) {
  const coupons = Math.floor(totalSpent / 300)
  return {
    coupons,
    discount: coupons * 50,
  }
}
