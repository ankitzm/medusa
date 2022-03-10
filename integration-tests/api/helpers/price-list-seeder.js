const { PriceList, MoneyAmount } = require("@medusajs/medusa")

module.exports = async (connection, data = {}) => {
  const manager = connection.manager

  const priceListNoCustomerGroups = await manager.create(PriceList, {
    id: "pl_no_customer_groups",
    name: "VIP winter sale",
    description: "Winter sale for VIP customers. 25% off selected items.",
    type: "sale",
    status: "active",
    starts_at: "2022-07-01T00:00:00.000Z",
    ends_at: "2022-07-31T00:00:00.000Z",
  })

  await manager.save(priceListNoCustomerGroups)

  const moneyAmount1 = await manager.create(MoneyAmount, {
    id: "ma_test_1",
    amount: 100,
    currency_code: "usd",
    min_quantity: 1,
    max_quantity: 100,
    variant_id: "test-variant",
    price_list_id: "pl_no_customer_groups",
  })

  await manager.save(moneyAmount1)

  const moneyAmount2 = await manager.create(MoneyAmount, {
    amount: 80,
    currency_code: "usd",
    min_quantity: 101,
    max_quantity: 500,
    variant_id: "test-variant",
    price_list_id: "pl_no_customer_groups",
  })

  await manager.save(moneyAmount2)

  const moneyAmount3 = await manager.create(MoneyAmount, {
    amount: 50,
    currency_code: "usd",
    min_quantity: 501,
    max_quantity: 1000,
    variant_id: "test-variant",
    price_list_id: "pl_no_customer_groups",
  })

  await manager.save(moneyAmount3)
}
