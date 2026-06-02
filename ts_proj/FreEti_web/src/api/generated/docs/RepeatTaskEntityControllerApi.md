# RepeatTaskEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceRepeattaskDelete**](#deleteitemresourcerepeattaskdelete) | **DELETE** /repeat_task/{id} | |
|[**getCollectionResourceRepeattaskGet**](#getcollectionresourcerepeattaskget) | **GET** /repeat_task | |
|[**getItemResourceRepeattaskGet**](#getitemresourcerepeattaskget) | **GET** /repeat_task/{id} | |
|[**patchItemResourceRepeattaskPatch**](#patchitemresourcerepeattaskpatch) | **PATCH** /repeat_task/{id} | |
|[**postCollectionResourceRepeattaskPost**](#postcollectionresourcerepeattaskpost) | **POST** /repeat_task | |
|[**putItemResourceRepeattaskPut**](#putitemresourcerepeattaskput) | **PUT** /repeat_task/{id} | |

# **deleteItemResourceRepeattaskDelete**
> deleteItemResourceRepeattaskDelete()

delete-repeattask

### Example

```typescript
import {
    RepeatTaskEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RepeatTaskEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceRepeattaskDelete(
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

# **getCollectionResourceRepeattaskGet**
> CollectionModelEntityModelRepeatTask getCollectionResourceRepeattaskGet()

get-repeattask

### Example

```typescript
import {
    RepeatTaskEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RepeatTaskEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourceRepeattaskGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelRepeatTask**

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

# **getItemResourceRepeattaskGet**
> EntityModelRepeatTask getItemResourceRepeattaskGet()

get-repeattask

### Example

```typescript
import {
    RepeatTaskEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RepeatTaskEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceRepeattaskGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelRepeatTask**

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

# **patchItemResourceRepeattaskPatch**
> EntityModelRepeatTask patchItemResourceRepeattaskPatch(repeatTaskRequestBody)

patch-repeattask

### Example

```typescript
import {
    RepeatTaskEntityControllerApi,
    Configuration,
    RepeatTaskRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new RepeatTaskEntityControllerApi(configuration);

let id: string; // (default to undefined)
let repeatTaskRequestBody: RepeatTaskRequestBody; //

const { status, data } = await apiInstance.patchItemResourceRepeattaskPatch(
    id,
    repeatTaskRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repeatTaskRequestBody** | **RepeatTaskRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelRepeatTask**

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

# **postCollectionResourceRepeattaskPost**
> EntityModelRepeatTask postCollectionResourceRepeattaskPost(repeatTaskRequestBody)

create-repeattask

### Example

```typescript
import {
    RepeatTaskEntityControllerApi,
    Configuration,
    RepeatTaskRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new RepeatTaskEntityControllerApi(configuration);

let repeatTaskRequestBody: RepeatTaskRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceRepeattaskPost(
    repeatTaskRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repeatTaskRequestBody** | **RepeatTaskRequestBody**|  | |


### Return type

**EntityModelRepeatTask**

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

# **putItemResourceRepeattaskPut**
> EntityModelRepeatTask putItemResourceRepeattaskPut(repeatTaskRequestBody)

update-repeattask

### Example

```typescript
import {
    RepeatTaskEntityControllerApi,
    Configuration,
    RepeatTaskRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new RepeatTaskEntityControllerApi(configuration);

let id: string; // (default to undefined)
let repeatTaskRequestBody: RepeatTaskRequestBody; //

const { status, data } = await apiInstance.putItemResourceRepeattaskPut(
    id,
    repeatTaskRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repeatTaskRequestBody** | **RepeatTaskRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelRepeatTask**

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

