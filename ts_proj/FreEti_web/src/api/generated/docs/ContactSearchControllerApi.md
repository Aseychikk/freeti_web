# ContactSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchContactGet**](#executesearchcontactget) | **GET** /contacts/search/deleteALlByFirstAndSecond | |
|[**executeSearchContactGet1**](#executesearchcontactget1) | **GET** /contacts/search/deleteALlByFirstOrSecond | |
|[**executeSearchContactGet2**](#executesearchcontactget2) | **GET** /contacts/search/findAllByFirstAndIsFriend | |
|[**executeSearchContactGet3**](#executesearchcontactget3) | **GET** /contacts/search/findAllByFirstAndSecond | |
|[**executeSearchContactGet4**](#executesearchcontactget4) | **GET** /contacts/search/findAllByFirstAndSecondAndIsFriend | |
|[**executeSearchContactGet5**](#executesearchcontactget5) | **GET** /contacts/search/findAllBySecondAndIsFriend | |
|[**executeSearchContactGet6**](#executesearchcontactget6) | **GET** /contacts/search/updateIsFriend | |

# **executeSearchContactGet**
> executeSearchContactGet()


### Example

```typescript
import {
    ContactSearchControllerApi,
    Configuration,
    User,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactSearchControllerApi(configuration);

let first: User; // (optional) (default to undefined)
let second: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchContactGet(
    first,
    second
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **first** | **User** |  | (optional) defaults to undefined|
| **second** | **User** |  | (optional) defaults to undefined|


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

# **executeSearchContactGet1**
> executeSearchContactGet1()


### Example

```typescript
import {
    ContactSearchControllerApi,
    Configuration,
    User,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactSearchControllerApi(configuration);

let first: User; // (optional) (default to undefined)
let second: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchContactGet1(
    first,
    second
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **first** | **User** |  | (optional) defaults to undefined|
| **second** | **User** |  | (optional) defaults to undefined|


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

# **executeSearchContactGet2**
> CollectionModelEntityModelContact executeSearchContactGet2()


### Example

```typescript
import {
    ContactSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactSearchControllerApi(configuration);

let first: User; // (optional) (default to undefined)
let isFriend: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchContactGet2(
    first,
    isFriend
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **first** | **User** |  | (optional) defaults to undefined|
| **isFriend** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelContact**

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

# **executeSearchContactGet3**
> EntityModelContact executeSearchContactGet3()


### Example

```typescript
import {
    ContactSearchControllerApi,
    Configuration,
    User,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactSearchControllerApi(configuration);

let first: User; // (optional) (default to undefined)
let second: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchContactGet3(
    first,
    second
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **first** | **User** |  | (optional) defaults to undefined|
| **second** | **User** |  | (optional) defaults to undefined|


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

# **executeSearchContactGet4**
> EntityModelContact executeSearchContactGet4()


### Example

```typescript
import {
    ContactSearchControllerApi,
    Configuration,
    User,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactSearchControllerApi(configuration);

let first: User; // (optional) (default to undefined)
let second: User; // (optional) (default to undefined)
let isFriend: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchContactGet4(
    first,
    second,
    isFriend
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **first** | **User** |  | (optional) defaults to undefined|
| **second** | **User** |  | (optional) defaults to undefined|
| **isFriend** | [**boolean**] |  | (optional) defaults to undefined|


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

# **executeSearchContactGet5**
> CollectionModelEntityModelContact executeSearchContactGet5()


### Example

```typescript
import {
    ContactSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactSearchControllerApi(configuration);

let second: User; // (optional) (default to undefined)
let isFriend: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchContactGet5(
    second,
    isFriend
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **second** | **User** |  | (optional) defaults to undefined|
| **isFriend** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelContact**

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

# **executeSearchContactGet6**
> executeSearchContactGet6()


### Example

```typescript
import {
    ContactSearchControllerApi,
    Configuration,
    User,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactSearchControllerApi(configuration);

let first: User; // (optional) (default to undefined)
let second: User; // (optional) (default to undefined)
let isFriend: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchContactGet6(
    first,
    second,
    isFriend
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **first** | **User** |  | (optional) defaults to undefined|
| **second** | **User** |  | (optional) defaults to undefined|
| **isFriend** | [**boolean**] |  | (optional) defaults to undefined|


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

