# TaskEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceTaskDelete**](#deleteitemresourcetaskdelete) | **DELETE** /task/{id} | |
|[**getCollectionResourceTaskGet**](#getcollectionresourcetaskget) | **GET** /task | |
|[**getItemResourceTaskGet**](#getitemresourcetaskget) | **GET** /task/{id} | |
|[**patchItemResourceTaskPatch**](#patchitemresourcetaskpatch) | **PATCH** /task/{id} | |
|[**postCollectionResourceTaskPost**](#postcollectionresourcetaskpost) | **POST** /task | |
|[**putItemResourceTaskPut**](#putitemresourcetaskput) | **PUT** /task/{id} | |

# **deleteItemResourceTaskDelete**
> deleteItemResourceTaskDelete()

delete-task

### Example

```typescript
import {
    TaskEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceTaskDelete(
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

# **getCollectionResourceTaskGet**
> CollectionModelEntityModelTask getCollectionResourceTaskGet()

get-task

### Example

```typescript
import {
    TaskEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourceTaskGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelTask**

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

# **getItemResourceTaskGet**
> EntityModelTask getItemResourceTaskGet()

get-task

### Example

```typescript
import {
    TaskEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceTaskGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelTask**

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

# **patchItemResourceTaskPatch**
> EntityModelTask patchItemResourceTaskPatch(taskRequestBody)

patch-task

### Example

```typescript
import {
    TaskEntityControllerApi,
    Configuration,
    TaskRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskEntityControllerApi(configuration);

let id: string; // (default to undefined)
let taskRequestBody: TaskRequestBody; //

const { status, data } = await apiInstance.patchItemResourceTaskPatch(
    id,
    taskRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskRequestBody** | **TaskRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelTask**

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

# **postCollectionResourceTaskPost**
> EntityModelTask postCollectionResourceTaskPost(taskRequestBody)

create-task

### Example

```typescript
import {
    TaskEntityControllerApi,
    Configuration,
    TaskRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskEntityControllerApi(configuration);

let taskRequestBody: TaskRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceTaskPost(
    taskRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskRequestBody** | **TaskRequestBody**|  | |


### Return type

**EntityModelTask**

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

# **putItemResourceTaskPut**
> EntityModelTask putItemResourceTaskPut(taskRequestBody)

update-task

### Example

```typescript
import {
    TaskEntityControllerApi,
    Configuration,
    TaskRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskEntityControllerApi(configuration);

let id: string; // (default to undefined)
let taskRequestBody: TaskRequestBody; //

const { status, data } = await apiInstance.putItemResourceTaskPut(
    id,
    taskRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskRequestBody** | **TaskRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelTask**

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

