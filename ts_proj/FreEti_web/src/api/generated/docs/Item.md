# Item


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**properties** | [**{ [key: string]: AbstractJsonSchemaPropertyObject; }**](AbstractJsonSchemaPropertyObject.md) |  | [optional] [default to undefined]
**requiredProperties** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { Item } from './api';

const instance: Item = {
    type,
    properties,
    requiredProperties,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
