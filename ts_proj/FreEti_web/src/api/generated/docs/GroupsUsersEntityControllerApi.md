# GroupsUsersEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceGroupsusersDelete**](#deleteitemresourcegroupsusersdelete) | **DELETE** /group_members/{id} | |
|[**getCollectionResourceGroupsusersGet**](#getcollectionresourcegroupsusersget) | **GET** /group_members | |
|[**getItemResourceGroupsusersGet**](#getitemresourcegroupsusersget) | **GET** /group_members/{id} | |
|[**patchItemResourceGroupsusersPatch**](#patchitemresourcegroupsuserspatch) | **PATCH** /group_members/{id} | |
|[**postCollectionResourceGroupsusersPost**](#postcollectionresourcegroupsuserspost) | **POST** /group_members | |
|[**putItemResourceGroupsusersPut**](#putitemresourcegroupsusersput) | **PUT** /group_members/{id} | |

# **deleteItemResourceGroupsusersDelete**
> deleteItemResourceGroupsusersDelete()

delete-groupsusers

### Example

```typescript
import {
    GroupsUsersEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceGroupsusersDelete(
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

# **getCollectionResourceGroupsusersGet**
> CollectionModelEntityModelGroupsUsers getCollectionResourceGroupsusersGet()

get-groupsusers

### Example

```typescript
import {
    GroupsUsersEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourceGroupsusersGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelGroupsUsers**

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

# **getItemResourceGroupsusersGet**
> EntityModelGroupsUsers getItemResourceGroupsusersGet()

get-groupsusers

### Example

```typescript
import {
    GroupsUsersEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceGroupsusersGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **patchItemResourceGroupsusersPatch**
> EntityModelGroupsUsers patchItemResourceGroupsusersPatch(groupsUsersRequestBody)

patch-groupsusers

### Example

```typescript
import {
    GroupsUsersEntityControllerApi,
    Configuration,
    GroupsUsersRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersEntityControllerApi(configuration);

let id: string; // (default to undefined)
let groupsUsersRequestBody: GroupsUsersRequestBody; //

const { status, data } = await apiInstance.patchItemResourceGroupsusersPatch(
    id,
    groupsUsersRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupsUsersRequestBody** | **GroupsUsersRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelGroupsUsers**

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

# **postCollectionResourceGroupsusersPost**
> EntityModelGroupsUsers postCollectionResourceGroupsusersPost(groupsUsersRequestBody)

create-groupsusers

### Example

```typescript
import {
    GroupsUsersEntityControllerApi,
    Configuration,
    GroupsUsersRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersEntityControllerApi(configuration);

let groupsUsersRequestBody: GroupsUsersRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceGroupsusersPost(
    groupsUsersRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupsUsersRequestBody** | **GroupsUsersRequestBody**|  | |


### Return type

**EntityModelGroupsUsers**

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

# **putItemResourceGroupsusersPut**
> EntityModelGroupsUsers putItemResourceGroupsusersPut(groupsUsersRequestBody)

update-groupsusers

### Example

```typescript
import {
    GroupsUsersEntityControllerApi,
    Configuration,
    GroupsUsersRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsUsersEntityControllerApi(configuration);

let id: string; // (default to undefined)
let groupsUsersRequestBody: GroupsUsersRequestBody; //

const { status, data } = await apiInstance.putItemResourceGroupsusersPut(
    id,
    groupsUsersRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupsUsersRequestBody** | **GroupsUsersRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelGroupsUsers**

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

