---
sidebar_position: 1
---

# Getting Started

API Keys grant access to the Allocations API for an organization. Each API key has full access to the API on behalf of that organization.

## Get an API Key

Generate API Keys from the Allocations API Dashboard on the [API Keys](https://developer.allocations.app). There are two types of API Keys:

- `test` - Used to test your integration in a sandbox environment.
- `production` - Used in production to create real data.

## Using an API Key

The API key should be used as a `Bearer` token in the `Authorization` header on each API request.

```
Authorization: Bearer YOUR_API_KEY_HERE
```

## Next Steps

- View our [API Documentation](/api)
- Follow our [Custom Invest Flow Tutorial](/docs/tutorials/custom-invest-flow)
