---
sidebar_position: 2
---

# Create an API Key

Access to the Allocations API is granted to an organization via API keys. Each API key is tied to an
organization and has full access to the API on behalf of that organization.

See the [Getting Started](/docs/tutorials/intro) to create a new organization.

## Get an API Key

API keys can be generated from the Allocations API Dashboard on the [API Keys page](https://developer.allocations.app/organizations/api-keys).

## Using an API Key

The API key should be used as a `Bearer` token in the `Authorization` header on each API request.

```
Authorization: Bearer YOUR_API_KEY_HERE
```

Try out a new API Key from your browser [here](/api/list-investor-passports).
