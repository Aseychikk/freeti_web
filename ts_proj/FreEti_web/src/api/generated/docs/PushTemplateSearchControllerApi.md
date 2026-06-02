# PushTemplateSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchPushtemplateGet**](#executesearchpushtemplateget) | **GET** /push_template/search/findPushTemplateByBeforeHowDaysAndBeforeHowHours | |
|[**executeSearchPushtemplateGet1**](#executesearchpushtemplateget1) | **GET** /push_template/search/findPushTemplateByPushId | |

# **executeSearchPushtemplateGet**
> EntityModelPushTemplate executeSearchPushtemplateGet()


### Example

```typescript
import {
    PushTemplateSearchControllerApi,
    Configuration,
    ExecuteSearchPushtemplateGetBeforeHowDaysParameter,
    ExecuteSearchPushtemplateGetBeforeHowHoursParameter
} from './api';

const configuration = new Configuration();
const apiInstance = new PushTemplateSearchControllerApi(configuration);

let beforeHowDays: ExecuteSearchPushtemplateGetBeforeHowDaysParameter; // (optional) (default to undefined)
let beforeHowHours: ExecuteSearchPushtemplateGetBeforeHowHoursParameter; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchPushtemplateGet(
    beforeHowDays,
    beforeHowHours
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **beforeHowDays** | **ExecuteSearchPushtemplateGetBeforeHowDaysParameter** |  | (optional) defaults to undefined|
| **beforeHowHours** | **ExecuteSearchPushtemplateGetBeforeHowHoursParameter** |  | (optional) defaults to undefined|


### Return type

**EntityModelPushTemplate**

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

# **executeSearchPushtemplateGet1**
> EntityModelPushTemplate executeSearchPushtemplateGet1()


### Example

```typescript
import {
    PushTemplateSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PushTemplateSearchControllerApi(configuration);

let id: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchPushtemplateGet1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | (optional) defaults to undefined|


### Return type

**EntityModelPushTemplate**

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

