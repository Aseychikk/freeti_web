# UserSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchUserGet**](#executesearchuserget) | **GET** /user/search/findByEmail | |
|[**executeSearchUserGet1**](#executesearchuserget1) | **GET** /user/search/findByNameContainingIgnoreCase | |
|[**executeSearchUserGet2**](#executesearchuserget2) | **GET** /user/search/findByUsernameContainingIgnoreCase | |
|[**executeSearchUserGet3**](#executesearchuserget3) | **GET** /user/search/findUserByUserId | |
|[**executeSearchUserGet4**](#executesearchuserget4) | **GET** /user/search/findUserByUsername | |

# **executeSearchUserGet**
> EntityModelUser executeSearchUserGet()


### Example

```typescript
import {
    UserSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserSearchControllerApi(configuration);

let email: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchUserGet(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | (optional) defaults to undefined|


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

# **executeSearchUserGet1**
> CollectionModelEntityModelUser executeSearchUserGet1()


### Example

```typescript
import {
    UserSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserSearchControllerApi(configuration);

let namePart: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchUserGet1(
    namePart
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **namePart** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelUser**

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

# **executeSearchUserGet2**
> CollectionModelEntityModelUser executeSearchUserGet2()


### Example

```typescript
import {
    UserSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserSearchControllerApi(configuration);

let usernamePart: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchUserGet2(
    usernamePart
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usernamePart** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelUser**

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

# **executeSearchUserGet3**
> EntityModelUser executeSearchUserGet3()


### Example

```typescript
import {
    UserSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserSearchControllerApi(configuration);

let userId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchUserGet3(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | (optional) defaults to undefined|


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

# **executeSearchUserGet4**
> EntityModelUser executeSearchUserGet4()


### Example

```typescript
import {
    UserSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserSearchControllerApi(configuration);

let username: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchUserGet4(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] |  | (optional) defaults to undefined|


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

