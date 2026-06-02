# GroupsPropertyReferenceControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPropertyReferenceGroupsPatch**](#createpropertyreferencegroupspatch) | **PATCH** /groups/{id}/groupEventsSet | |
|[**createPropertyReferenceGroupsPut**](#createpropertyreferencegroupsput) | **PUT** /groups/{id}/groupEventsSet | |
|[**deletePropertyReferenceGroupsDelete**](#deletepropertyreferencegroupsdelete) | **DELETE** /groups/{id}/groupEventsSet | |
|[**deletePropertyReferenceIdGroupsDelete**](#deletepropertyreferenceidgroupsdelete) | **DELETE** /groups/{id}/groupEventsSet/{propertyId} | |
|[**followPropertyReferenceGroupsGet**](#followpropertyreferencegroupsget) | **GET** /groups/{id}/groupEventsSet | |
|[**followPropertyReferenceGroupsGet1**](#followpropertyreferencegroupsget1) | **GET** /groups/{id}/groupEventsSet/{propertyId} | |

# **createPropertyReferenceGroupsPatch**
> CollectionModelGroupEvents createPropertyReferenceGroupsPatch(collectionModelObject)

patch-groupevents-by-groups-Id

### Example

```typescript
import {
    GroupsPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceGroupsPatch(
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

**CollectionModelGroupEvents**

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

# **createPropertyReferenceGroupsPut**
> CollectionModelGroupEvents createPropertyReferenceGroupsPut(collectionModelObject)

update-groupevents-by-groups-Id

### Example

```typescript
import {
    GroupsPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceGroupsPut(
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

**CollectionModelGroupEvents**

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

# **deletePropertyReferenceGroupsDelete**
> deletePropertyReferenceGroupsDelete()

delete-groupevents-by-groups-Id

### Example

```typescript
import {
    GroupsPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceGroupsDelete(
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

# **deletePropertyReferenceIdGroupsDelete**
> deletePropertyReferenceIdGroupsDelete()

delete-groupevents-by-groups-Id

### Example

```typescript
import {
    GroupsPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceIdGroupsDelete(
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

# **followPropertyReferenceGroupsGet**
> CollectionModelGroupEvents followPropertyReferenceGroupsGet()

get-groupevents-by-groups-Id

### Example

```typescript
import {
    GroupsPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceGroupsGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CollectionModelGroupEvents**

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

# **followPropertyReferenceGroupsGet1**
> CollectionModelGroupEvents followPropertyReferenceGroupsGet1()

get-groupevents-by-groups-Id

### Example

```typescript
import {
    GroupsPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceGroupsGet1(
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

**CollectionModelGroupEvents**

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

