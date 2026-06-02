# GroupsEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceGroupsDelete**](#deleteitemresourcegroupsdelete) | **DELETE** /groups/{id} | |
|[**getCollectionResourceGroupsGet**](#getcollectionresourcegroupsget) | **GET** /groups | |
|[**getItemResourceGroupsGet**](#getitemresourcegroupsget) | **GET** /groups/{id} | |
|[**patchItemResourceGroupsPatch**](#patchitemresourcegroupspatch) | **PATCH** /groups/{id} | |
|[**postCollectionResourceGroupsPost**](#postcollectionresourcegroupspost) | **POST** /groups | |
|[**putItemResourceGroupsPut**](#putitemresourcegroupsput) | **PUT** /groups/{id} | |

# **deleteItemResourceGroupsDelete**
> deleteItemResourceGroupsDelete()

delete-groups

### Example

```typescript
import {
    GroupsEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceGroupsDelete(
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

# **getCollectionResourceGroupsGet**
> CollectionModelEntityModelGroups getCollectionResourceGroupsGet()

get-groups

### Example

```typescript
import {
    GroupsEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourceGroupsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelGroups**

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

# **getItemResourceGroupsGet**
> EntityModelGroups getItemResourceGroupsGet()

get-groups

### Example

```typescript
import {
    GroupsEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceGroupsGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelGroups**

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

# **patchItemResourceGroupsPatch**
> EntityModelGroups patchItemResourceGroupsPatch(groupsRequestBody)

patch-groups

### Example

```typescript
import {
    GroupsEntityControllerApi,
    Configuration,
    GroupsRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsEntityControllerApi(configuration);

let id: string; // (default to undefined)
let groupsRequestBody: GroupsRequestBody; //

const { status, data } = await apiInstance.patchItemResourceGroupsPatch(
    id,
    groupsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupsRequestBody** | **GroupsRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelGroups**

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

# **postCollectionResourceGroupsPost**
> EntityModelGroups postCollectionResourceGroupsPost(groupsRequestBody)

create-groups

### Example

```typescript
import {
    GroupsEntityControllerApi,
    Configuration,
    GroupsRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsEntityControllerApi(configuration);

let groupsRequestBody: GroupsRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceGroupsPost(
    groupsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupsRequestBody** | **GroupsRequestBody**|  | |


### Return type

**EntityModelGroups**

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

# **putItemResourceGroupsPut**
> EntityModelGroups putItemResourceGroupsPut(groupsRequestBody)

update-groups

### Example

```typescript
import {
    GroupsEntityControllerApi,
    Configuration,
    GroupsRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsEntityControllerApi(configuration);

let id: string; // (default to undefined)
let groupsRequestBody: GroupsRequestBody; //

const { status, data } = await apiInstance.putItemResourceGroupsPut(
    id,
    groupsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupsRequestBody** | **GroupsRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelGroups**

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

