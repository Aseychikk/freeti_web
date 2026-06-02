# VoteEntityControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteItemResourceVoteDelete**](#deleteitemresourcevotedelete) | **DELETE** /vote/{id} | |
|[**getCollectionResourceVoteGet**](#getcollectionresourcevoteget) | **GET** /vote | |
|[**getItemResourceVoteGet**](#getitemresourcevoteget) | **GET** /vote/{id} | |
|[**patchItemResourceVotePatch**](#patchitemresourcevotepatch) | **PATCH** /vote/{id} | |
|[**postCollectionResourceVotePost**](#postcollectionresourcevotepost) | **POST** /vote | |
|[**putItemResourceVotePut**](#putitemresourcevoteput) | **PUT** /vote/{id} | |

# **deleteItemResourceVoteDelete**
> deleteItemResourceVoteDelete()

delete-vote

### Example

```typescript
import {
    VoteEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemResourceVoteDelete(
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

# **getCollectionResourceVoteGet**
> CollectionModelEntityModelVote getCollectionResourceVoteGet()

get-vote

### Example

```typescript
import {
    VoteEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteEntityControllerApi(configuration);

const { status, data } = await apiInstance.getCollectionResourceVoteGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CollectionModelEntityModelVote**

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

# **getItemResourceVoteGet**
> EntityModelVote getItemResourceVoteGet()

get-vote

### Example

```typescript
import {
    VoteEntityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteEntityControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getItemResourceVoteGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelVote**

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

# **patchItemResourceVotePatch**
> EntityModelVote patchItemResourceVotePatch(voteRequestBody)

patch-vote

### Example

```typescript
import {
    VoteEntityControllerApi,
    Configuration,
    VoteRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteEntityControllerApi(configuration);

let id: string; // (default to undefined)
let voteRequestBody: VoteRequestBody; //

const { status, data } = await apiInstance.patchItemResourceVotePatch(
    id,
    voteRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **voteRequestBody** | **VoteRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelVote**

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

# **postCollectionResourceVotePost**
> EntityModelVote postCollectionResourceVotePost(voteRequestBody)

create-vote

### Example

```typescript
import {
    VoteEntityControllerApi,
    Configuration,
    VoteRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteEntityControllerApi(configuration);

let voteRequestBody: VoteRequestBody; //

const { status, data } = await apiInstance.postCollectionResourceVotePost(
    voteRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **voteRequestBody** | **VoteRequestBody**|  | |


### Return type

**EntityModelVote**

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

# **putItemResourceVotePut**
> EntityModelVote putItemResourceVotePut(voteRequestBody)

update-vote

### Example

```typescript
import {
    VoteEntityControllerApi,
    Configuration,
    VoteRequestBody
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteEntityControllerApi(configuration);

let id: string; // (default to undefined)
let voteRequestBody: VoteRequestBody; //

const { status, data } = await apiInstance.putItemResourceVotePut(
    id,
    voteRequestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **voteRequestBody** | **VoteRequestBody**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelVote**

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

