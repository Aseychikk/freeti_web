# AvatarSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchAvatarGet**](#executesearchavatarget) | **GET** /avatar/search/findByLink | |

# **executeSearchAvatarGet**
> EntityModelAvatar executeSearchAvatarGet()


### Example

```typescript
import {
    AvatarSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AvatarSearchControllerApi(configuration);

let link: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchAvatarGet(
    link
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **link** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EntityModelAvatar**

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

