# PollPropertyReferenceControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPropertyReferencePollPatch**](#createpropertyreferencepollpatch) | **PATCH** /poll/{id}/groupEvent | |
|[**createPropertyReferencePollPut**](#createpropertyreferencepollput) | **PUT** /poll/{id}/groupEvent | |
|[**deletePropertyReferenceIdPollDelete**](#deletepropertyreferenceidpolldelete) | **DELETE** /poll/{id}/groupEvent/{propertyId} | |
|[**deletePropertyReferencePollDelete**](#deletepropertyreferencepolldelete) | **DELETE** /poll/{id}/groupEvent | |
|[**followPropertyReferencePollGet**](#followpropertyreferencepollget) | **GET** /poll/{id}/groupEvent | |
|[**followPropertyReferencePollGet1**](#followpropertyreferencepollget1) | **GET** /poll/{id}/groupEvent/{propertyId} | |

# **createPropertyReferencePollPatch**
> EntityModelGroupEvents createPropertyReferencePollPatch(collectionModelObject)

patch-groupevents-by-poll-Id

### Example

```typescript
import {
    PollPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new PollPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferencePollPatch(
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

**EntityModelGroupEvents**

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

# **createPropertyReferencePollPut**
> EntityModelGroupEvents createPropertyReferencePollPut(collectionModelObject)

update-groupevents-by-poll-Id

### Example

```typescript
import {
    PollPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new PollPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferencePollPut(
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

**EntityModelGroupEvents**

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

# **deletePropertyReferenceIdPollDelete**
> deletePropertyReferenceIdPollDelete()

delete-groupevents-by-poll-Id

### Example

```typescript
import {
    PollPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PollPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceIdPollDelete(
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

# **deletePropertyReferencePollDelete**
> deletePropertyReferencePollDelete()

delete-groupevents-by-poll-Id

### Example

```typescript
import {
    PollPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PollPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferencePollDelete(
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

# **followPropertyReferencePollGet**
> EntityModelGroupEvents followPropertyReferencePollGet()

get-groupevents-by-poll-Id

### Example

```typescript
import {
    PollPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PollPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferencePollGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelGroupEvents**

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

# **followPropertyReferencePollGet1**
> EntityModelGroupEvents followPropertyReferencePollGet1()

get-groupevents-by-poll-Id

### Example

```typescript
import {
    PollPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PollPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferencePollGet1(
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

**EntityModelGroupEvents**

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

