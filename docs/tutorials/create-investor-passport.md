---
sidebar_position: 3
---

# Create an Investor Passport

[Investor Passports](/docs/concepts/investor-passport) are used to collect compliance and tax information about an investor. Before an investment can be created, an Investor Passport has to be made and then associated with an investment.

## Prerequisites

- [Create an API Key](/docs/tutorials/create-api-key)

## Step 1: Create the Investor Passport

Follow the [API Documentation](/api/create-investor-passport) to create a new Investor Passport. You are required to include:

- `name` - The name of the investor.
- `type` - Is the investor an `Individual` or `Entity`.
- `country` - The country the investor is from.
- `accreditation_type` - How the investor meets Regulation D accreditation.

If the investor is an `Entity` the following fields are also required:

- `title` - The title of the individual signing on behalf of an Entity.
- `representative` - The name of the individual signing on behalf of the Entity.

If the investor is from the United States, then a `state` field is also required.

Additionally, arbitrary `metadata` can be provided and stored with the Investor Passport record. This is useful for storing additional data like identifiers from your own database.

```ts
import fetch from 'node-fetch';

const createInvestorPassport = async() => {
  const res = await fetch('https://api.allocations.app/api/v1/investor-passport', {
    method
  })
}
```


## Step 2: Upload Identifying Documentation

## Step 3: Complete Tax Information

## Step 4: Trigger KYC/KYB
