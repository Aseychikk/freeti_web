# PollEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourcePollDelete**](#deleteitemresourcepolldelete) | **DELETE** /poll/{id} | |
|[**getCollectionResourcePollGet**](#getcollectionresourcepollget) | **GET** /poll | |
|[**getItemResourcePollGet**](#getitemresourcepollget) | **GET** /poll/{id} | |
|[**patchItemResourcePollPatch**](#patchitemresourcepollpatch) | **PATCH** /poll/{id} | |
|[**postCollectionResourcePollPost**](#postcollectionresourcepollpost) | **POST** /poll | |
|[**putItemResourcePollPut**](#putitemresourcepollput) | **PUT** /poll/{id} | |

# **deleteItemResourcePollDelete**
> deleteItemResourcePollDelete()

delete-poll

### Example

```typescript
import {
    PollEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PollEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourcePollDelete(
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

# **getCollectionResourcePollGet**
> CollectionModelEntityModelPoll getCollectionResourcePollGet()

get-poll

### Example

```typescript
import {
    PollEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PollEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourcePollGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelPoll**

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

# **getItemResourcePollGet**
> EntityModelPoll getItemResourcePollGet()

get-poll

### Example

```typescript
import {
    PollEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PollEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourcePollGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelPoll**

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

# **patchItemResourcePollPatch**
> EntityModelPoll patchItemResourcePollPatch(pollRequestBody)

patch-poll

### Example

```typescript
import {
    PollEntityControllerApi,
    Configuration,
    PollRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new PollEntityControllerApi(configuration);

let id: string; // (default to undefined)
let pollRequestBody: PollRequestBody; //

const { status, data } = await apiInstance.patchItemResourcePollPatch(
    id,
    pollRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pollRequestBody** | **PollRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelPoll**

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

# **postCollectionResourcePollPost**
> EntityModelPoll postCollectionResourcePollPost(pollRequestBody)

create-poll

### Example

```typescript
import {
    PollEntityControllerApi,
    Configuration,
    PollRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new PollEntityControllerApi(configuration);

let pollRequestBody: PollRequestBody; //

const { status, data } = await apiInstance.postCollectionResourcePollPost(
    pollRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pollRequestBody** | **PollRequestBody**|  | |


### Return type

**EntityModelPoll**

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

# **putItemResourcePollPut**
> EntityModelPoll putItemResourcePollPut(pollRequestBody)

update-poll

### Example

```typescript
import {
    PollEntityControllerApi,
    Configuration,
    PollRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new PollEntityControllerApi(configuration);

let id: string; // (default to undefined)
let pollRequestBody: PollRequestBody; //

const { status, data } = await apiInstance.putItemResourcePollPut(
    id,
    pollRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pollRequestBody** | **PollRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelPoll**

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

