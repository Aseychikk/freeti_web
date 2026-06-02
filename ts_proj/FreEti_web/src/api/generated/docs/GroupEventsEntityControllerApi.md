# GroupEventsEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceGroupeventsDelete**](#deleteitemresourcegroupeventsdelete) | **DELETE** /group_events/{id} | |
|[**getCollectionResourceGroupeventsGet**](#getcollectionresourcegroupeventsget) | **GET** /group_events | |
|[**getItemResourceGroupeventsGet**](#getitemresourcegroupeventsget) | **GET** /group_events/{id} | |
|[**patchItemResourceGroupeventsPatch**](#patchitemresourcegroupeventspatch) | **PATCH** /group_events/{id} | |
|[**postCollectionResourceGroupeventsPost**](#postcollectionresourcegroupeventspost) | **POST** /group_events | |
|[**putItemResourceGroupeventsPut**](#putitemresourcegroupeventsput) | **PUT** /group_events/{id} | |

# **deleteItemResourceGroupeventsDelete**
> deleteItemResourceGroupeventsDelete()

delete-groupevents

### Example

```typescript
import {
    GroupEventsEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupEventsEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceGroupeventsDelete(
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

# **getCollectionResourceGroupeventsGet**
> CollectionModelEntityModelGroupEvents getCollectionResourceGroupeventsGet()

get-groupevents

### Example

```typescript
import {
    GroupEventsEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupEventsEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourceGroupeventsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelGroupEvents**

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

# **getItemResourceGroupeventsGet**
> EntityModelGroupEvents getItemResourceGroupeventsGet()

get-groupevents

### Example

```typescript
import {
    GroupEventsEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupEventsEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceGroupeventsGet(
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
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchItemResourceGroupeventsPatch**
> EntityModelGroupEvents patchItemResourceGroupeventsPatch(groupEventsRequestBody)

patch-groupevents

### Example

```typescript
import {
    GroupEventsEntityControllerApi,
    Configuration,
    GroupEventsRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupEventsEntityControllerApi(configuration);

let id: string; // (default to undefined)
let groupEventsRequestBody: GroupEventsRequestBody; //

const { status, data } = await apiInstance.patchItemResourceGroupeventsPatch(
    id,
    groupEventsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupEventsRequestBody** | **GroupEventsRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelGroupEvents**

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

# **postCollectionResourceGroupeventsPost**
> EntityModelGroupEvents postCollectionResourceGroupeventsPost(groupEventsRequestBody)

create-groupevents

### Example

```typescript
import {
    GroupEventsEntityControllerApi,
    Configuration,
    GroupEventsRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupEventsEntityControllerApi(configuration);

let groupEventsRequestBody: GroupEventsRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceGroupeventsPost(
    groupEventsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupEventsRequestBody** | **GroupEventsRequestBody**|  | |


### Return type

**EntityModelGroupEvents**

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

# **putItemResourceGroupeventsPut**
> EntityModelGroupEvents putItemResourceGroupeventsPut(groupEventsRequestBody)

update-groupevents

### Example

```typescript
import {
    GroupEventsEntityControllerApi,
    Configuration,
    GroupEventsRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupEventsEntityControllerApi(configuration);

let id: string; // (default to undefined)
let groupEventsRequestBody: GroupEventsRequestBody; //

const { status, data } = await apiInstance.putItemResourceGroupeventsPut(
    id,
    groupEventsRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupEventsRequestBody** | **GroupEventsRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelGroupEvents**

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

