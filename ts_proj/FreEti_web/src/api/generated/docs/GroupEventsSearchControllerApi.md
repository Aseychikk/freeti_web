# GroupEventsSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchGroupeventsGet**](#executesearchgroupeventsget) | **GET** /group_events/search/deleteAllByGroup | |
|[**executeSearchGroupeventsGet1**](#executesearchgroupeventsget1) | **GET** /group_events/search/findAllByGroup | |
|[**executeSearchGroupeventsGet2**](#executesearchgroupeventsget2) | **GET** /group_events/search/findAllByGroupAndEndingBetween | |

# **executeSearchGroupeventsGet**
> executeSearchGroupeventsGet()


### Example

```typescript
import {
    GroupEventsSearchControllerApi,
    Configuration,
    Groups
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupEventsSearchControllerApi(configuration);

let group: Groups; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchGroupeventsGet(
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

# **executeSearchGroupeventsGet1**
> CollectionModelEntityModelGroupEvents executeSearchGroupeventsGet1()


### Example

```typescript
import {
    GroupEventsSearchControllerApi,
    Configuration,
    Groups
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupEventsSearchControllerApi(configuration);

let group: Groups; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchGroupeventsGet1(
    group
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **group** | **Groups** |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelGroupEvents**

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

# **executeSearchGroupeventsGet2**
> CollectionModelEntityModelGroupEvents executeSearchGroupeventsGet2()


### Example

```typescript
import {
    GroupEventsSearchControllerApi,
    Configuration,
    Groups
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupEventsSearchControllerApi(configuration);

let groups: Groups; // (optional) (default to undefined)
let start: string; // (optional) (default to undefined)
let end: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchGroupeventsGet2(
    groups,
    start,
    end
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groups** | **Groups** |  | (optional) defaults to undefined|
| **start** | [**string**] |  | (optional) defaults to undefined|
| **end** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelGroupEvents**

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

