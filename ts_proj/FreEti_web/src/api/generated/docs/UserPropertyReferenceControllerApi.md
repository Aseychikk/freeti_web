# UserPropertyReferenceControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPropertyReferenceUserPatch**](#createpropertyreferenceuserpatch) | **PATCH** /user/{id}/repeatTasks | |
|[**createPropertyReferenceUserPatch1**](#createpropertyreferenceuserpatch1) | **PATCH** /user/{id}/tasks | |
|[**createPropertyReferenceUserPut**](#createpropertyreferenceuserput) | **PUT** /user/{id}/repeatTasks | |
|[**createPropertyReferenceUserPut1**](#createpropertyreferenceuserput1) | **PUT** /user/{id}/tasks | |
|[**deletePropertyReferenceIdUserDelete**](#deletepropertyreferenceiduserdelete) | **DELETE** /user/{id}/repeatTasks/{propertyId} | |
|[**deletePropertyReferenceIdUserDelete1**](#deletepropertyreferenceiduserdelete1) | **DELETE** /user/{id}/tasks/{propertyId} | |
|[**deletePropertyReferenceUserDelete**](#deletepropertyreferenceuserdelete) | **DELETE** /user/{id}/repeatTasks | |
|[**deletePropertyReferenceUserDelete1**](#deletepropertyreferenceuserdelete1) | **DELETE** /user/{id}/tasks | |
|[**followPropertyReferenceUserGet**](#followpropertyreferenceuserget) | **GET** /user/{id}/repeatTasks | |
|[**followPropertyReferenceUserGet1**](#followpropertyreferenceuserget1) | **GET** /user/{id}/repeatTasks/{propertyId} | |
|[**followPropertyReferenceUserGet2**](#followpropertyreferenceuserget2) | **GET** /user/{id}/tasks | |
|[**followPropertyReferenceUserGet3**](#followpropertyreferenceuserget3) | **GET** /user/{id}/tasks/{propertyId} | |

# **createPropertyReferenceUserPatch**
> CollectionModelRepeatTask createPropertyReferenceUserPatch(collectionModelObject)

patch-repeattask-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceUserPatch(
    id,
    collectionModelObject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionModelObject** | **CollectionModelObject**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CollectionModelRepeatTask**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-spring-data-compact+json, text/uri-list
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPropertyReferenceUserPatch1**
> CollectionModelTask createPropertyReferenceUserPatch1(collectionModelObject)

patch-task-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceUserPatch1(
    id,
    collectionModelObject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionModelObject** | **CollectionModelObject**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CollectionModelTask**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-spring-data-compact+json, text/uri-list
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPropertyReferenceUserPut**
> CollectionModelRepeatTask createPropertyReferenceUserPut(collectionModelObject)

update-repeattask-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceUserPut(
    id,
    collectionModelObject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionModelObject** | **CollectionModelObject**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CollectionModelRepeatTask**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-spring-data-compact+json, text/uri-list
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**201** | Created |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPropertyReferenceUserPut1**
> CollectionModelTask createPropertyReferenceUserPut1(collectionModelObject)

update-task-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceUserPut1(
    id,
    collectionModelObject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionModelObject** | **CollectionModelObject**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CollectionModelTask**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-spring-data-compact+json, text/uri-list
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**201** | Created |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePropertyReferenceIdUserDelete**
> deletePropertyReferenceIdUserDelete()

delete-repeattask-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceIdUserDelete(
    id,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | defaults to undefined|


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

# **deletePropertyReferenceIdUserDelete1**
> deletePropertyReferenceIdUserDelete1()

delete-task-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceIdUserDelete1(
    id,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | defaults to undefined|


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

# **deletePropertyReferenceUserDelete**
> deletePropertyReferenceUserDelete()

delete-repeattask-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceUserDelete(
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

# **deletePropertyReferenceUserDelete1**
> deletePropertyReferenceUserDelete1()

delete-task-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceUserDelete1(
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

# **followPropertyReferenceUserGet**
> CollectionModelRepeatTask followPropertyReferenceUserGet()

get-repeattask-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceUserGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CollectionModelRepeatTask**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json, text/uri-list


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followPropertyReferenceUserGet1**
> CollectionModelRepeatTask followPropertyReferenceUserGet1()

get-repeattask-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceUserGet1(
    id,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | defaults to undefined|


### Return type

**CollectionModelRepeatTask**

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

# **followPropertyReferenceUserGet2**
> CollectionModelTask followPropertyReferenceUserGet2()

get-task-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceUserGet2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CollectionModelTask**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json, text/uri-list


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followPropertyReferenceUserGet3**
> CollectionModelTask followPropertyReferenceUserGet3()

get-task-by-user-Id

### Example

```typescript
import {
    UserPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceUserGet3(
    id,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | defaults to undefined|


### Return type

**CollectionModelTask**

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

