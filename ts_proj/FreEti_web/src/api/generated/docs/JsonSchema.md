# JsonSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**properties** | [**{ [key: string]: AbstractJsonSchemaPropertyObject; }**](AbstractJsonSchemaPropertyObject.md) |  | [optional] [default to undefined]
**requiredProperties** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**definitions** | [**{ [key: string]: Item; }**](Item.md) |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**$schema** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { JsonSchema } from './api';

const instance: JsonSchema = {
    title,
    description,
    properties,
    requiredProperties,
    definitions,
    type,
    $schema,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
