# ContactEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceContactDelete**](#deleteitemresourcecontactdelete) | **DELETE** /contacts/{id} | |
|[**getCollectionResourceContactGet**](#getcollectionresourcecontactget) | **GET** /contacts | |
|[**getItemResourceContactGet**](#getitemresourcecontactget) | **GET** /contacts/{id} | |
|[**patchItemResourceContactPatch**](#patchitemresourcecontactpatch) | **PATCH** /contacts/{id} | |
|[**postCollectionResourceContactPost**](#postcollectionresourcecontactpost) | **POST** /contacts | |
|[**putItemResourceContactPut**](#putitemresourcecontactput) | **PUT** /contacts/{id} | |

# **deleteItemResourceContactDelete**
> deleteItemResourceContactDelete()

delete-contact

### Example

```typescript
import {
    ContactEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceContactDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCollectionResourceContactGet**
> CollectionModelEntityModelContact getCollectionResourceContactGet()

get-contact

### Example

```typescript
import {
    ContactEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourceContactGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelContact**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json, application/x-spring-data-compact+json, text/uri-list


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getItemResourceContactGet**
> EntityModelContact getItemResourceContactGet()

get-contact

### Example

```typescript
import {
    ContactEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceContactGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelContact**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchItemResourceContactPatch**
> EntityModelContact patchItemResourceContactPatch(contactRequestBody)

patch-contact

### Example

```typescript
import {
    ContactEntityControllerApi,
    Configuration,
    ContactRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactEntityControllerApi(configuration);

let id: string; // (default to undefined)
let contactRequestBody: ContactRequestBody; //

const { status, data } = await apiInstance.patchItemResourceContactPatch(
    id,
    contactRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactRequestBody** | **ContactRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelContact**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCollectionResourceContactPost**
> EntityModelContact postCollectionResourceContactPost(contactRequestBody)

create-contact

### Example

```typescript
import {
    ContactEntityControllerApi,
    Configuration,
    ContactRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactEntityControllerApi(configuration);

let contactRequestBody: ContactRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceContactPost(
    contactRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactRequestBody** | **ContactRequestBody**|  | |


### Return type

**EntityModelContact**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putItemResourceContactPut**
> EntityModelContact putItemResourceContactPut(contactRequestBody)

update-contact

### Example

```typescript
import {
    ContactEntityControllerApi,
    Configuration,
    ContactRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactEntityControllerApi(configuration);

let id: string; // (default to undefined)
let contactRequestBody: ContactRequestBody; //

const { status, data } = await apiInstance.putItemResourceContactPut(
    id,
    contactRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactRequestBody** | **ContactRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelContact**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**201** | Created |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

