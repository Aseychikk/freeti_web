# PushTemplateEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourcePushtemplateDelete**](#deleteitemresourcepushtemplatedelete) | **DELETE** /push_template/{id} | |
|[**getCollectionResourcePushtemplateGet**](#getcollectionresourcepushtemplateget) | **GET** /push_template | |
|[**getItemResourcePushtemplateGet**](#getitemresourcepushtemplateget) | **GET** /push_template/{id} | |
|[**patchItemResourcePushtemplatePatch**](#patchitemresourcepushtemplatepatch) | **PATCH** /push_template/{id} | |
|[**postCollectionResourcePushtemplatePost**](#postcollectionresourcepushtemplatepost) | **POST** /push_template | |
|[**putItemResourcePushtemplatePut**](#putitemresourcepushtemplateput) | **PUT** /push_template/{id} | |

# **deleteItemResourcePushtemplateDelete**
> deleteItemResourcePushtemplateDelete()

delete-pushtemplate

### Example

```typescript
import {
    PushTemplateEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PushTemplateEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourcePushtemplateDelete(
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

# **getCollectionResourcePushtemplateGet**
> CollectionModelEntityModelPushTemplate getCollectionResourcePushtemplateGet()

get-pushtemplate

### Example

```typescript
import {
    PushTemplateEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PushTemplateEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourcePushtemplateGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelPushTemplate**

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

# **getItemResourcePushtemplateGet**
> EntityModelPushTemplate getItemResourcePushtemplateGet()

get-pushtemplate

### Example

```typescript
import {
    PushTemplateEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PushTemplateEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourcePushtemplateGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelPushTemplate**

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

# **patchItemResourcePushtemplatePatch**
> EntityModelPushTemplate patchItemResourcePushtemplatePatch(pushTemplateRequestBody)

patch-pushtemplate

### Example

```typescript
import {
    PushTemplateEntityControllerApi,
    Configuration,
    PushTemplateRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new PushTemplateEntityControllerApi(configuration);

let id: string; // (default to undefined)
let pushTemplateRequestBody: PushTemplateRequestBody; //

const { status, data } = await apiInstance.patchItemResourcePushtemplatePatch(
    id,
    pushTemplateRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pushTemplateRequestBody** | **PushTemplateRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelPushTemplate**

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

# **postCollectionResourcePushtemplatePost**
> EntityModelPushTemplate postCollectionResourcePushtemplatePost(pushTemplateRequestBody)

create-pushtemplate

### Example

```typescript
import {
    PushTemplateEntityControllerApi,
    Configuration,
    PushTemplateRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new PushTemplateEntityControllerApi(configuration);

let pushTemplateRequestBody: PushTemplateRequestBody; //

const { status, data } = await apiInstance.postCollectionResourcePushtemplatePost(
    pushTemplateRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pushTemplateRequestBody** | **PushTemplateRequestBody**|  | |


### Return type

**EntityModelPushTemplate**

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

# **putItemResourcePushtemplatePut**
> EntityModelPushTemplate putItemResourcePushtemplatePut(pushTemplateRequestBody)

update-pushtemplate

### Example

```typescript
import {
    PushTemplateEntityControllerApi,
    Configuration,
    PushTemplateRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new PushTemplateEntityControllerApi(configuration);

let id: string; // (default to undefined)
let pushTemplateRequestBody: PushTemplateRequestBody; //

const { status, data } = await apiInstance.putItemResourcePushtemplatePut(
    id,
    pushTemplateRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pushTemplateRequestBody** | **PushTemplateRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelPushTemplate**

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

