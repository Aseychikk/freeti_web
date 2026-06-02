# RefreshTokenEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceRefreshtokenDelete**](#deleteitemresourcerefreshtokendelete) | **DELETE** /refreshTokens/{id} | |
|[**getCollectionResourceRefreshtokenGet**](#getcollectionresourcerefreshtokenget) | **GET** /refreshTokens | |
|[**getItemResourceRefreshtokenGet**](#getitemresourcerefreshtokenget) | **GET** /refreshTokens/{id} | |
|[**patchItemResourceRefreshtokenPatch**](#patchitemresourcerefreshtokenpatch) | **PATCH** /refreshTokens/{id} | |
|[**postCollectionResourceRefreshtokenPost**](#postcollectionresourcerefreshtokenpost) | **POST** /refreshTokens | |
|[**putItemResourceRefreshtokenPut**](#putitemresourcerefreshtokenput) | **PUT** /refreshTokens/{id} | |

# **deleteItemResourceRefreshtokenDelete**
> deleteItemResourceRefreshtokenDelete()

delete-refreshtoken

### Example

```typescript
import {
    RefreshTokenEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RefreshTokenEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceRefreshtokenDelete(
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

# **getCollectionResourceRefreshtokenGet**
> CollectionModelEntityModelRefreshToken getCollectionResourceRefreshtokenGet()

get-refreshtoken

### Example

```typescript
import {
    RefreshTokenEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RefreshTokenEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourceRefreshtokenGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelRefreshToken**

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

# **getItemResourceRefreshtokenGet**
> EntityModelRefreshToken getItemResourceRefreshtokenGet()

get-refreshtoken

### Example

```typescript
import {
    RefreshTokenEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RefreshTokenEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceRefreshtokenGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelRefreshToken**

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

# **patchItemResourceRefreshtokenPatch**
> EntityModelRefreshToken patchItemResourceRefreshtokenPatch(refreshTokenRequestBody)

patch-refreshtoken

### Example

```typescript
import {
    RefreshTokenEntityControllerApi,
    Configuration,
    RefreshTokenRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new RefreshTokenEntityControllerApi(configuration);

let id: string; // (default to undefined)
let refreshTokenRequestBody: RefreshTokenRequestBody; //

const { status, data } = await apiInstance.patchItemResourceRefreshtokenPatch(
    id,
    refreshTokenRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshTokenRequestBody** | **RefreshTokenRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelRefreshToken**

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

# **postCollectionResourceRefreshtokenPost**
> EntityModelRefreshToken postCollectionResourceRefreshtokenPost(refreshTokenRequestBody)

create-refreshtoken

### Example

```typescript
import {
    RefreshTokenEntityControllerApi,
    Configuration,
    RefreshTokenRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new RefreshTokenEntityControllerApi(configuration);

let refreshTokenRequestBody: RefreshTokenRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceRefreshtokenPost(
    refreshTokenRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshTokenRequestBody** | **RefreshTokenRequestBody**|  | |


### Return type

**EntityModelRefreshToken**

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

# **putItemResourceRefreshtokenPut**
> EntityModelRefreshToken putItemResourceRefreshtokenPut(refreshTokenRequestBody)

update-refreshtoken

### Example

```typescript
import {
    RefreshTokenEntityControllerApi,
    Configuration,
    RefreshTokenRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new RefreshTokenEntityControllerApi(configuration);

let id: string; // (default to undefined)
let refreshTokenRequestBody: RefreshTokenRequestBody; //

const { status, data } = await apiInstance.putItemResourceRefreshtokenPut(
    id,
    refreshTokenRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshTokenRequestBody** | **RefreshTokenRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelRefreshToken**

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

