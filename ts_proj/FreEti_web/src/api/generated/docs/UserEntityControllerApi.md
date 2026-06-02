# UserEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceUserDelete**](#deleteitemresourceuserdelete) | **DELETE** /user/{id} | |
|[**getCollectionResourceUserGet**](#getcollectionresourceuserget) | **GET** /user | |
|[**getItemResourceUserGet**](#getitemresourceuserget) | **GET** /user/{id} | |
|[**patchItemResourceUserPatch**](#patchitemresourceuserpatch) | **PATCH** /user/{id} | |
|[**postCollectionResourceUserPost**](#postcollectionresourceuserpost) | **POST** /user | |
|[**putItemResourceUserPut**](#putitemresourceuserput) | **PUT** /user/{id} | |

# **deleteItemResourceUserDelete**
> deleteItemResourceUserDelete()

delete-user

### Example

```typescript
import {
    UserEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceUserDelete(
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

# **getCollectionResourceUserGet**
> CollectionModelEntityModelUser getCollectionResourceUserGet()

get-user

### Example

```typescript
import {
    UserEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourceUserGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelUser**

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

# **getItemResourceUserGet**
> EntityModelUser getItemResourceUserGet()

get-user

### Example

```typescript
import {
    UserEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceUserGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

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

# **patchItemResourceUserPatch**
> EntityModelUser patchItemResourceUserPatch(userRequestBody)

patch-user

### Example

```typescript
import {
    UserEntityControllerApi,
    Configuration,
    UserRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UserEntityControllerApi(configuration);

let id: string; // (default to undefined)
let userRequestBody: UserRequestBody; //

const { status, data } = await apiInstance.patchItemResourceUserPatch(
    id,
    userRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userRequestBody** | **UserRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

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

# **postCollectionResourceUserPost**
> EntityModelUser postCollectionResourceUserPost(userRequestBody)

create-user

### Example

```typescript
import {
    UserEntityControllerApi,
    Configuration,
    UserRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UserEntityControllerApi(configuration);

let userRequestBody: UserRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceUserPost(
    userRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userRequestBody** | **UserRequestBody**|  | |


### Return type

**EntityModelUser**

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

# **putItemResourceUserPut**
> EntityModelUser putItemResourceUserPut(userRequestBody)

update-user

### Example

```typescript
import {
    UserEntityControllerApi,
    Configuration,
    UserRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new UserEntityControllerApi(configuration);

let id: string; // (default to undefined)
let userRequestBody: UserRequestBody; //

const { status, data } = await apiInstance.putItemResourceUserPut(
    id,
    userRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userRequestBody** | **UserRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

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

