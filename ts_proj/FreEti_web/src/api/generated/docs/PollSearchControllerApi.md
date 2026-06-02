# PollSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchPollGet**](#executesearchpollget) | **GET** /poll/search/deleteAllByGroupEvent | |
|[**executeSearchPollGet1**](#executesearchpollget1) | **GET** /poll/search/findAllByGroupEvent | |
|[**executeSearchPollGet2**](#executesearchpollget2) | **GET** /poll/search/findAllByGroupEventIn | |
|[**executeSearchPollGet3**](#executesearchpollget3) | **GET** /poll/search/findPollById | |

# **executeSearchPollGet**
> executeSearchPollGet()


### Example

```typescript
import {
    PollSearchControllerApi,
    Configuration,
    GroupEvents
} from './api';

const configuration = new Configuration();
const apiInstance = new PollSearchControllerApi(configuration);

let groupEvent: GroupEvents; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchPollGet(
    groupEvent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupEvent** | **GroupEvents** |  | (optional) defaults to undefined|


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

# **executeSearchPollGet1**
> CollectionModelEntityModelPoll executeSearchPollGet1()


### Example

```typescript
import {
    PollSearchControllerApi,
    Configuration,
    GroupEvents
} from './api';

const configuration = new Configuration();
const apiInstance = new PollSearchControllerApi(configuration);

let groupEvent: GroupEvents; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchPollGet1(
    groupEvent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupEvent** | **GroupEvents** |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelPoll**

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

# **executeSearchPollGet2**
> CollectionModelEntityModelPoll executeSearchPollGet2()


### Example

```typescript
import {
    PollSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PollSearchControllerApi(configuration);

let groupEventsList: Array<GroupEvents>; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchPollGet2(
    groupEventsList
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupEventsList** | **Array&lt;GroupEvents&gt;** |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelPoll**

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

# **executeSearchPollGet3**
> EntityModelPoll executeSearchPollGet3()


### Example

```typescript
import {
    PollSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PollSearchControllerApi(configuration);

let id: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchPollGet3(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EntityModelPoll**

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

