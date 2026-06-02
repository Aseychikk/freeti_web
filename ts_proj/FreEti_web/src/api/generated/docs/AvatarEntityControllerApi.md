# AvatarEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceAvatarDelete**](#deleteitemresourceavatardelete) | **DELETE** /avatar/{id} | |
|[**getCollectionResourceAvatarGet**](#getcollectionresourceavatarget) | **GET** /avatar | |
|[**getItemResourceAvatarGet**](#getitemresourceavatarget) | **GET** /avatar/{id} | |
|[**patchItemResourceAvatarPatch**](#patchitemresourceavatarpatch) | **PATCH** /avatar/{id} | |
|[**postCollectionResourceAvatarPost**](#postcollectionresourceavatarpost) | **POST** /avatar | |
|[**putItemResourceAvatarPut**](#putitemresourceavatarput) | **PUT** /avatar/{id} | |

# **deleteItemResourceAvatarDelete**
> deleteItemResourceAvatarDelete()

delete-avatar

### Example

```typescript
import {
    AvatarEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceAvatarDelete(
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

# **getCollectionResourceAvatarGet**
> CollectionModelEntityModelAvatar getCollectionResourceAvatarGet()

get-avatar

### Example

```typescript
import {
    AvatarEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourceAvatarGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelAvatar**

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

# **getItemResourceAvatarGet**
> EntityModelAvatar getItemResourceAvatarGet()

get-avatar

### Example

```typescript
import {
    AvatarEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceAvatarGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelAvatar**

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

# **patchItemResourceAvatarPatch**
> EntityModelAvatar patchItemResourceAvatarPatch(avatarRequestBody)

patch-avatar

### Example

```typescript
import {
    AvatarEntityControllerApi,
    Configuration,
    AvatarRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarEntityControllerApi(configuration);

let id: string; // (default to undefined)
let avatarRequestBody: AvatarRequestBody; //

const { status, data } = await apiInstance.patchItemResourceAvatarPatch(
    id,
    avatarRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **avatarRequestBody** | **AvatarRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelAvatar**

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

# **postCollectionResourceAvatarPost**
> EntityModelAvatar postCollectionResourceAvatarPost(avatarRequestBody)

create-avatar

### Example

```typescript
import {
    AvatarEntityControllerApi,
    Configuration,
    AvatarRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarEntityControllerApi(configuration);

let avatarRequestBody: AvatarRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceAvatarPost(
    avatarRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **avatarRequestBody** | **AvatarRequestBody**|  | |


### Return type

**EntityModelAvatar**

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

# **putItemResourceAvatarPut**
> EntityModelAvatar putItemResourceAvatarPut(avatarRequestBody)

update-avatar

### Example

```typescript
import {
    AvatarEntityControllerApi,
    Configuration,
    AvatarRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarEntityControllerApi(configuration);

let id: string; // (default to undefined)
let avatarRequestBody: AvatarRequestBody; //

const { status, data } = await apiInstance.putItemResourceAvatarPut(
    id,
    avatarRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **avatarRequestBody** | **AvatarRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelAvatar**

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

