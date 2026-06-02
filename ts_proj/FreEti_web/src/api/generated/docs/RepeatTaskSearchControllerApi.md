# RepeatTaskSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchRepeattaskGet**](#executesearchrepeattaskget) | **GET** /repeat_task/search/deleteAllByUser | |
|[**executeSearchRepeattaskGet1**](#executesearchrepeattaskget1) | **GET** /repeat_task/search/findByTitleAndUser | |
|[**executeSearchRepeattaskGet2**](#executesearchrepeattaskget2) | **GET** /repeat_task/search/findRepeatTaskByUserAndGlobalEndAfter | |

# **executeSearchRepeattaskGet**
> executeSearchRepeattaskGet()


### Example

```typescript
import {
    RepeatTaskSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new RepeatTaskSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchRepeattaskGet(
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

# **executeSearchRepeattaskGet1**
> EntityModelRepeatTask executeSearchRepeattaskGet1()


### Example

```typescript
import {
    RepeatTaskSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new RepeatTaskSearchControllerApi(configuration);

let title: string; // (optional) (default to undefined)
let user: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchRepeattaskGet1(
    title,
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **title** | [**string**] |  | (optional) defaults to undefined|
| **user** | **User** |  | (optional) defaults to undefined|


### Return type

**EntityModelRepeatTask**

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

# **executeSearchRepeattaskGet2**
> CollectionModelEntityModelRepeatTask executeSearchRepeattaskGet2()


### Example

```typescript
import {
    RepeatTaskSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new RepeatTaskSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)
let start: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchRepeattaskGet2(
    user,
    start
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | (optional) defaults to undefined|
| **start** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelRepeatTask**

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

