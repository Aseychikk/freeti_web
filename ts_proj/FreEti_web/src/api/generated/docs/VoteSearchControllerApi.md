# VoteSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchVoteGet**](#executesearchvoteget) | **GET** /vote/search/deleteAllByPoll | |
|[**executeSearchVoteGet1**](#executesearchvoteget1) | **GET** /vote/search/findAllByPoll | |
|[**executeSearchVoteGet2**](#executesearchvoteget2) | **GET** /vote/search/findAllByUserID | |
|[**executeSearchVoteGet3**](#executesearchvoteget3) | **GET** /vote/search/findByUserIDAndPoll | |
|[**executeSearchVoteGet4**](#executesearchvoteget4) | **GET** /vote/search/reassignVotesToDefaultUser | |

# **executeSearchVoteGet**
> executeSearchVoteGet()


### Example

```typescript
import {
    VoteSearchControllerApi,
    Configuration,
    Poll
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteSearchControllerApi(configuration);

let poll: Poll; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchVoteGet(
    poll
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **poll** | **Poll** |  | (optional) defaults to undefined|


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

# **executeSearchVoteGet1**
> CollectionModelEntityModelVote executeSearchVoteGet1()


### Example

```typescript
import {
    VoteSearchControllerApi,
    Configuration,
    Poll
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteSearchControllerApi(configuration);

let poll: Poll; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchVoteGet1(
    poll
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **poll** | **Poll** |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelVote**

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

# **executeSearchVoteGet2**
> CollectionModelEntityModelVote executeSearchVoteGet2()


### Example

```typescript
import {
    VoteSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchVoteGet2(
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelVote**

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

# **executeSearchVoteGet3**
> EntityModelVote executeSearchVoteGet3()


### Example

```typescript
import {
    VoteSearchControllerApi,
    Configuration,
    User,
    Poll
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)
let poll: Poll; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchVoteGet3(
    user,
    poll
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | (optional) defaults to undefined|
| **poll** | **Poll** |  | (optional) defaults to undefined|


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

# **executeSearchVoteGet4**
> executeSearchVoteGet4()


### Example

```typescript
import {
    VoteSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new VoteSearchControllerApi(configuration);

let userId: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchVoteGet4(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | **User** |  | (optional) defaults to undefined|


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

