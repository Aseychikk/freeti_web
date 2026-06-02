# GroupsUsersSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchGroupsusersGet**](#executesearchgroupsusersget) | **GET** /group_members/search/deleteAllByGroup | |
|[**executeSearchGroupsusersGet1**](#executesearchgroupsusersget1) | **GET** /group_members/search/deleteAllByUser | |
|[**executeSearchGroupsusersGet2**](#executesearchgroupsusersget2) | **GET** /group_members/search/findAllByGroup | |
|[**executeSearchGroupsusersGet3**](#executesearchgroupsusersget3) | **GET** /group_members/search/findAllByUser | |
|[**executeSearchGroupsusersGet4**](#executesearchgroupsusersget4) | **GET** /group_members/search/findByUserAndGroup | |

# **executeSearchGroupsusersGet**
> executeSearchGroupsusersGet()


### Example

```typescript
import {
    GroupsUsersSearchControllerApi,
    Configuration,
    Groups
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersSearchControllerApi(configuration);

let group: Groups; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchGroupsusersGet(
    group
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **group** | **Groups** |  | (optional) defaults to undefined|


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

# **executeSearchGroupsusersGet1**
> executeSearchGroupsusersGet1()


### Example

```typescript
import {
    GroupsUsersSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchGroupsusersGet1(
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

# **executeSearchGroupsusersGet2**
> CollectionModelEntityModelGroupsUsers executeSearchGroupsusersGet2()


### Example

```typescript
import {
    GroupsUsersSearchControllerApi,
    Configuration,
    Groups
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersSearchControllerApi(configuration);

let group: Groups; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchGroupsusersGet2(
    group
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **group** | **Groups** |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelGroupsUsers**

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

# **executeSearchGroupsusersGet3**
> CollectionModelEntityModelGroupsUsers executeSearchGroupsusersGet3()


### Example

```typescript
import {
    GroupsUsersSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchGroupsusersGet3(
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelGroupsUsers**

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

# **executeSearchGroupsusersGet4**
> EntityModelGroupsUsers executeSearchGroupsusersGet4()


### Example

```typescript
import {
    GroupsUsersSearchControllerApi,
    Configuration,
    User,
    Groups
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)
let group: Groups; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchGroupsusersGet4(
    user,
    group
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | (optional) defaults to undefined|
| **group** | **Groups** |  | (optional) defaults to undefined|


### Return type

**EntityModelGroupsUsers**

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

