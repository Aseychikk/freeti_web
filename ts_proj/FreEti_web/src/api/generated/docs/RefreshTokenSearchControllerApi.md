# RefreshTokenSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchRefreshtokenGet**](#executesearchrefreshtokenget) | **GET** /refreshTokens/search/deleteByUser | |
|[**executeSearchRefreshtokenGet1**](#executesearchrefreshtokenget1) | **GET** /refreshTokens/search/findByToken | |

# **executeSearchRefreshtokenGet**
> executeSearchRefreshtokenGet()


### Example

```typescript
import {
    RefreshTokenSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new RefreshTokenSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchRefreshtokenGet(
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | (optional) defaults to undefined|


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
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **executeSearchRefreshtokenGet1**
> EntityModelRefreshToken executeSearchRefreshtokenGet1()


### Example

```typescript
import {
    RefreshTokenSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RefreshTokenSearchControllerApi(configuration);

let token: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchRefreshtokenGet1(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | (optional) defaults to undefined|


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

