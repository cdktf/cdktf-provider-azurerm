# `azurerm_eventgrid_system_topic_event_subscription`

Refer to the Terraform Registory for docs: [`azurerm_eventgrid_system_topic_event_subscription`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription).

# `eventgridSystemTopicEventSubscription` Submodule <a name="`eventgridSystemTopicEventSubscription` Submodule" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridSystemTopicEventSubscription <a name="EventgridSystemTopicEventSubscription" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription azurerm_eventgrid_system_topic_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscription(scope Construct, id *string, config EventgridSystemTopicEventSubscriptionConfig) EventgridSystemTopicEventSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig">EventgridSystemTopicEventSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig">EventgridSystemTopicEventSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putAdvancedFilter">PutAdvancedFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putAzureFunctionEndpoint">PutAzureFunctionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putDeadLetterIdentity">PutDeadLetterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putDeliveryIdentity">PutDeliveryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putDeliveryProperty">PutDeliveryProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putStorageBlobDeadLetterDestination">PutStorageBlobDeadLetterDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putStorageQueueEndpoint">PutStorageQueueEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putSubjectFilter">PutSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putWebhookEndpoint">PutWebhookEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetAdvancedFilter">ResetAdvancedFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetAdvancedFilteringOnArraysEnabled">ResetAdvancedFilteringOnArraysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetAzureFunctionEndpoint">ResetAzureFunctionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetDeadLetterIdentity">ResetDeadLetterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetDeliveryIdentity">ResetDeliveryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetDeliveryProperty">ResetDeliveryProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetEventDeliverySchema">ResetEventDeliverySchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetEventhubEndpointId">ResetEventhubEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetExpirationTimeUtc">ResetExpirationTimeUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetHybridConnectionEndpointId">ResetHybridConnectionEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetIncludedEventTypes">ResetIncludedEventTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetServiceBusQueueEndpointId">ResetServiceBusQueueEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetServiceBusTopicEndpointId">ResetServiceBusTopicEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetStorageBlobDeadLetterDestination">ResetStorageBlobDeadLetterDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetStorageQueueEndpoint">ResetStorageQueueEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetSubjectFilter">ResetSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetWebhookEndpoint">ResetWebhookEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAdvancedFilter` <a name="PutAdvancedFilter" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putAdvancedFilter"></a>

```go
func PutAdvancedFilter(value EventgridSystemTopicEventSubscriptionAdvancedFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putAdvancedFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter">EventgridSystemTopicEventSubscriptionAdvancedFilter</a>

---

##### `PutAzureFunctionEndpoint` <a name="PutAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putAzureFunctionEndpoint"></a>

```go
func PutAzureFunctionEndpoint(value EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putAzureFunctionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint">EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint</a>

---

##### `PutDeadLetterIdentity` <a name="PutDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putDeadLetterIdentity"></a>

```go
func PutDeadLetterIdentity(value EventgridSystemTopicEventSubscriptionDeadLetterIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putDeadLetterIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity">EventgridSystemTopicEventSubscriptionDeadLetterIdentity</a>

---

##### `PutDeliveryIdentity` <a name="PutDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putDeliveryIdentity"></a>

```go
func PutDeliveryIdentity(value EventgridSystemTopicEventSubscriptionDeliveryIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putDeliveryIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity">EventgridSystemTopicEventSubscriptionDeliveryIdentity</a>

---

##### `PutDeliveryProperty` <a name="PutDeliveryProperty" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putDeliveryProperty"></a>

```go
func PutDeliveryProperty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putDeliveryProperty.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putRetryPolicy"></a>

```go
func PutRetryPolicy(value EventgridSystemTopicEventSubscriptionRetryPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy">EventgridSystemTopicEventSubscriptionRetryPolicy</a>

---

##### `PutStorageBlobDeadLetterDestination` <a name="PutStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putStorageBlobDeadLetterDestination"></a>

```go
func PutStorageBlobDeadLetterDestination(value EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putStorageBlobDeadLetterDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination">EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination</a>

---

##### `PutStorageQueueEndpoint` <a name="PutStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putStorageQueueEndpoint"></a>

```go
func PutStorageQueueEndpoint(value EventgridSystemTopicEventSubscriptionStorageQueueEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putStorageQueueEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint">EventgridSystemTopicEventSubscriptionStorageQueueEndpoint</a>

---

##### `PutSubjectFilter` <a name="PutSubjectFilter" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putSubjectFilter"></a>

```go
func PutSubjectFilter(value EventgridSystemTopicEventSubscriptionSubjectFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putSubjectFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter">EventgridSystemTopicEventSubscriptionSubjectFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putTimeouts"></a>

```go
func PutTimeouts(value EventgridSystemTopicEventSubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts">EventgridSystemTopicEventSubscriptionTimeouts</a>

---

##### `PutWebhookEndpoint` <a name="PutWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putWebhookEndpoint"></a>

```go
func PutWebhookEndpoint(value EventgridSystemTopicEventSubscriptionWebhookEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.putWebhookEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint">EventgridSystemTopicEventSubscriptionWebhookEndpoint</a>

---

##### `ResetAdvancedFilter` <a name="ResetAdvancedFilter" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetAdvancedFilter"></a>

```go
func ResetAdvancedFilter()
```

##### `ResetAdvancedFilteringOnArraysEnabled` <a name="ResetAdvancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetAdvancedFilteringOnArraysEnabled"></a>

```go
func ResetAdvancedFilteringOnArraysEnabled()
```

##### `ResetAzureFunctionEndpoint` <a name="ResetAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetAzureFunctionEndpoint"></a>

```go
func ResetAzureFunctionEndpoint()
```

##### `ResetDeadLetterIdentity` <a name="ResetDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetDeadLetterIdentity"></a>

```go
func ResetDeadLetterIdentity()
```

##### `ResetDeliveryIdentity` <a name="ResetDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetDeliveryIdentity"></a>

```go
func ResetDeliveryIdentity()
```

##### `ResetDeliveryProperty` <a name="ResetDeliveryProperty" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetDeliveryProperty"></a>

```go
func ResetDeliveryProperty()
```

##### `ResetEventDeliverySchema` <a name="ResetEventDeliverySchema" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetEventDeliverySchema"></a>

```go
func ResetEventDeliverySchema()
```

##### `ResetEventhubEndpointId` <a name="ResetEventhubEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetEventhubEndpointId"></a>

```go
func ResetEventhubEndpointId()
```

##### `ResetExpirationTimeUtc` <a name="ResetExpirationTimeUtc" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetExpirationTimeUtc"></a>

```go
func ResetExpirationTimeUtc()
```

##### `ResetHybridConnectionEndpointId` <a name="ResetHybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetHybridConnectionEndpointId"></a>

```go
func ResetHybridConnectionEndpointId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludedEventTypes` <a name="ResetIncludedEventTypes" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetIncludedEventTypes"></a>

```go
func ResetIncludedEventTypes()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetRetryPolicy"></a>

```go
func ResetRetryPolicy()
```

##### `ResetServiceBusQueueEndpointId` <a name="ResetServiceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetServiceBusQueueEndpointId"></a>

```go
func ResetServiceBusQueueEndpointId()
```

##### `ResetServiceBusTopicEndpointId` <a name="ResetServiceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetServiceBusTopicEndpointId"></a>

```go
func ResetServiceBusTopicEndpointId()
```

##### `ResetStorageBlobDeadLetterDestination` <a name="ResetStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetStorageBlobDeadLetterDestination"></a>

```go
func ResetStorageBlobDeadLetterDestination()
```

##### `ResetStorageQueueEndpoint` <a name="ResetStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetStorageQueueEndpoint"></a>

```go
func ResetStorageQueueEndpoint()
```

##### `ResetSubjectFilter` <a name="ResetSubjectFilter" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetSubjectFilter"></a>

```go
func ResetSubjectFilter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWebhookEndpoint` <a name="ResetWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.resetWebhookEndpoint"></a>

```go
func ResetWebhookEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscription_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.advancedFilter">AdvancedFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference">EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.azureFunctionEndpoint">AzureFunctionEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference">EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deadLetterIdentity">DeadLetterIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference">EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deliveryIdentity">DeliveryIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference">EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deliveryProperty">DeliveryProperty</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList">EventgridSystemTopicEventSubscriptionDeliveryPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference">EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.storageBlobDeadLetterDestination">StorageBlobDeadLetterDestination</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference">EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.storageQueueEndpoint">StorageQueueEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference">EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.subjectFilter">SubjectFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference">EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference">EventgridSystemTopicEventSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.webhookEndpoint">WebhookEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference">EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.advancedFilteringOnArraysEnabledInput">AdvancedFilteringOnArraysEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.advancedFilterInput">AdvancedFilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter">EventgridSystemTopicEventSubscriptionAdvancedFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.azureFunctionEndpointInput">AzureFunctionEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint">EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deadLetterIdentityInput">DeadLetterIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity">EventgridSystemTopicEventSubscriptionDeadLetterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deliveryIdentityInput">DeliveryIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity">EventgridSystemTopicEventSubscriptionDeliveryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deliveryPropertyInput">DeliveryPropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.eventDeliverySchemaInput">EventDeliverySchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.eventhubEndpointIdInput">EventhubEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.expirationTimeUtcInput">ExpirationTimeUtcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.hybridConnectionEndpointIdInput">HybridConnectionEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.includedEventTypesInput">IncludedEventTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy">EventgridSystemTopicEventSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.serviceBusQueueEndpointIdInput">ServiceBusQueueEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.serviceBusTopicEndpointIdInput">ServiceBusTopicEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.storageBlobDeadLetterDestinationInput">StorageBlobDeadLetterDestinationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination">EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.storageQueueEndpointInput">StorageQueueEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint">EventgridSystemTopicEventSubscriptionStorageQueueEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.subjectFilterInput">SubjectFilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter">EventgridSystemTopicEventSubscriptionSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.systemTopicInput">SystemTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.webhookEndpointInput">WebhookEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint">EventgridSystemTopicEventSubscriptionWebhookEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.advancedFilteringOnArraysEnabled">AdvancedFilteringOnArraysEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.eventDeliverySchema">EventDeliverySchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.eventhubEndpointId">EventhubEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.expirationTimeUtc">ExpirationTimeUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.hybridConnectionEndpointId">HybridConnectionEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.includedEventTypes">IncludedEventTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.serviceBusQueueEndpointId">ServiceBusQueueEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.serviceBusTopicEndpointId">ServiceBusTopicEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.systemTopic">SystemTopic</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedFilter`<sup>Required</sup> <a name="AdvancedFilter" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.advancedFilter"></a>

```go
func AdvancedFilter() EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference">EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference</a>

---

##### `AzureFunctionEndpoint`<sup>Required</sup> <a name="AzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.azureFunctionEndpoint"></a>

```go
func AzureFunctionEndpoint() EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference">EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference</a>

---

##### `DeadLetterIdentity`<sup>Required</sup> <a name="DeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deadLetterIdentity"></a>

```go
func DeadLetterIdentity() EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference">EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference</a>

---

##### `DeliveryIdentity`<sup>Required</sup> <a name="DeliveryIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deliveryIdentity"></a>

```go
func DeliveryIdentity() EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference">EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference</a>

---

##### `DeliveryProperty`<sup>Required</sup> <a name="DeliveryProperty" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deliveryProperty"></a>

```go
func DeliveryProperty() EventgridSystemTopicEventSubscriptionDeliveryPropertyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList">EventgridSystemTopicEventSubscriptionDeliveryPropertyList</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.retryPolicy"></a>

```go
func RetryPolicy() EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference">EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference</a>

---

##### `StorageBlobDeadLetterDestination`<sup>Required</sup> <a name="StorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.storageBlobDeadLetterDestination"></a>

```go
func StorageBlobDeadLetterDestination() EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference">EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference</a>

---

##### `StorageQueueEndpoint`<sup>Required</sup> <a name="StorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.storageQueueEndpoint"></a>

```go
func StorageQueueEndpoint() EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference">EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference</a>

---

##### `SubjectFilter`<sup>Required</sup> <a name="SubjectFilter" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.subjectFilter"></a>

```go
func SubjectFilter() EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference">EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.timeouts"></a>

```go
func Timeouts() EventgridSystemTopicEventSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference">EventgridSystemTopicEventSubscriptionTimeoutsOutputReference</a>

---

##### `WebhookEndpoint`<sup>Required</sup> <a name="WebhookEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.webhookEndpoint"></a>

```go
func WebhookEndpoint() EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference">EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference</a>

---

##### `AdvancedFilteringOnArraysEnabledInput`<sup>Optional</sup> <a name="AdvancedFilteringOnArraysEnabledInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.advancedFilteringOnArraysEnabledInput"></a>

```go
func AdvancedFilteringOnArraysEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AdvancedFilterInput`<sup>Optional</sup> <a name="AdvancedFilterInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.advancedFilterInput"></a>

```go
func AdvancedFilterInput() EventgridSystemTopicEventSubscriptionAdvancedFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter">EventgridSystemTopicEventSubscriptionAdvancedFilter</a>

---

##### `AzureFunctionEndpointInput`<sup>Optional</sup> <a name="AzureFunctionEndpointInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.azureFunctionEndpointInput"></a>

```go
func AzureFunctionEndpointInput() EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint">EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint</a>

---

##### `DeadLetterIdentityInput`<sup>Optional</sup> <a name="DeadLetterIdentityInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deadLetterIdentityInput"></a>

```go
func DeadLetterIdentityInput() EventgridSystemTopicEventSubscriptionDeadLetterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity">EventgridSystemTopicEventSubscriptionDeadLetterIdentity</a>

---

##### `DeliveryIdentityInput`<sup>Optional</sup> <a name="DeliveryIdentityInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deliveryIdentityInput"></a>

```go
func DeliveryIdentityInput() EventgridSystemTopicEventSubscriptionDeliveryIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity">EventgridSystemTopicEventSubscriptionDeliveryIdentity</a>

---

##### `DeliveryPropertyInput`<sup>Optional</sup> <a name="DeliveryPropertyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.deliveryPropertyInput"></a>

```go
func DeliveryPropertyInput() interface{}
```

- *Type:* interface{}

---

##### `EventDeliverySchemaInput`<sup>Optional</sup> <a name="EventDeliverySchemaInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.eventDeliverySchemaInput"></a>

```go
func EventDeliverySchemaInput() *string
```

- *Type:* *string

---

##### `EventhubEndpointIdInput`<sup>Optional</sup> <a name="EventhubEndpointIdInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.eventhubEndpointIdInput"></a>

```go
func EventhubEndpointIdInput() *string
```

- *Type:* *string

---

##### `ExpirationTimeUtcInput`<sup>Optional</sup> <a name="ExpirationTimeUtcInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.expirationTimeUtcInput"></a>

```go
func ExpirationTimeUtcInput() *string
```

- *Type:* *string

---

##### `HybridConnectionEndpointIdInput`<sup>Optional</sup> <a name="HybridConnectionEndpointIdInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.hybridConnectionEndpointIdInput"></a>

```go
func HybridConnectionEndpointIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludedEventTypesInput`<sup>Optional</sup> <a name="IncludedEventTypesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.includedEventTypesInput"></a>

```go
func IncludedEventTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.retryPolicyInput"></a>

```go
func RetryPolicyInput() EventgridSystemTopicEventSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy">EventgridSystemTopicEventSubscriptionRetryPolicy</a>

---

##### `ServiceBusQueueEndpointIdInput`<sup>Optional</sup> <a name="ServiceBusQueueEndpointIdInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.serviceBusQueueEndpointIdInput"></a>

```go
func ServiceBusQueueEndpointIdInput() *string
```

- *Type:* *string

---

##### `ServiceBusTopicEndpointIdInput`<sup>Optional</sup> <a name="ServiceBusTopicEndpointIdInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.serviceBusTopicEndpointIdInput"></a>

```go
func ServiceBusTopicEndpointIdInput() *string
```

- *Type:* *string

---

##### `StorageBlobDeadLetterDestinationInput`<sup>Optional</sup> <a name="StorageBlobDeadLetterDestinationInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.storageBlobDeadLetterDestinationInput"></a>

```go
func StorageBlobDeadLetterDestinationInput() EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination">EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination</a>

---

##### `StorageQueueEndpointInput`<sup>Optional</sup> <a name="StorageQueueEndpointInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.storageQueueEndpointInput"></a>

```go
func StorageQueueEndpointInput() EventgridSystemTopicEventSubscriptionStorageQueueEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint">EventgridSystemTopicEventSubscriptionStorageQueueEndpoint</a>

---

##### `SubjectFilterInput`<sup>Optional</sup> <a name="SubjectFilterInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.subjectFilterInput"></a>

```go
func SubjectFilterInput() EventgridSystemTopicEventSubscriptionSubjectFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter">EventgridSystemTopicEventSubscriptionSubjectFilter</a>

---

##### `SystemTopicInput`<sup>Optional</sup> <a name="SystemTopicInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.systemTopicInput"></a>

```go
func SystemTopicInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebhookEndpointInput`<sup>Optional</sup> <a name="WebhookEndpointInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.webhookEndpointInput"></a>

```go
func WebhookEndpointInput() EventgridSystemTopicEventSubscriptionWebhookEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint">EventgridSystemTopicEventSubscriptionWebhookEndpoint</a>

---

##### `AdvancedFilteringOnArraysEnabled`<sup>Required</sup> <a name="AdvancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.advancedFilteringOnArraysEnabled"></a>

```go
func AdvancedFilteringOnArraysEnabled() interface{}
```

- *Type:* interface{}

---

##### `EventDeliverySchema`<sup>Required</sup> <a name="EventDeliverySchema" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.eventDeliverySchema"></a>

```go
func EventDeliverySchema() *string
```

- *Type:* *string

---

##### `EventhubEndpointId`<sup>Required</sup> <a name="EventhubEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.eventhubEndpointId"></a>

```go
func EventhubEndpointId() *string
```

- *Type:* *string

---

##### `ExpirationTimeUtc`<sup>Required</sup> <a name="ExpirationTimeUtc" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.expirationTimeUtc"></a>

```go
func ExpirationTimeUtc() *string
```

- *Type:* *string

---

##### `HybridConnectionEndpointId`<sup>Required</sup> <a name="HybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.hybridConnectionEndpointId"></a>

```go
func HybridConnectionEndpointId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludedEventTypes`<sup>Required</sup> <a name="IncludedEventTypes" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.includedEventTypes"></a>

```go
func IncludedEventTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServiceBusQueueEndpointId`<sup>Required</sup> <a name="ServiceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.serviceBusQueueEndpointId"></a>

```go
func ServiceBusQueueEndpointId() *string
```

- *Type:* *string

---

##### `ServiceBusTopicEndpointId`<sup>Required</sup> <a name="ServiceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.serviceBusTopicEndpointId"></a>

```go
func ServiceBusTopicEndpointId() *string
```

- *Type:* *string

---

##### `SystemTopic`<sup>Required</sup> <a name="SystemTopic" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.systemTopic"></a>

```go
func SystemTopic() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridSystemTopicEventSubscriptionAdvancedFilter <a name="EventgridSystemTopicEventSubscriptionAdvancedFilter" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter {
	BoolEquals: interface{},
	IsNotNull: interface{},
	IsNullOrUndefined: interface{},
	NumberGreaterThan: interface{},
	NumberGreaterThanOrEquals: interface{},
	NumberIn: interface{},
	NumberInRange: interface{},
	NumberLessThan: interface{},
	NumberLessThanOrEquals: interface{},
	NumberNotIn: interface{},
	NumberNotInRange: interface{},
	StringBeginsWith: interface{},
	StringContains: interface{},
	StringEndsWith: interface{},
	StringIn: interface{},
	StringNotBeginsWith: interface{},
	StringNotContains: interface{},
	StringNotEndsWith: interface{},
	StringNotIn: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.boolEquals">BoolEquals</a></code> | <code>interface{}</code> | bool_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.isNotNull">IsNotNull</a></code> | <code>interface{}</code> | is_not_null block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.isNullOrUndefined">IsNullOrUndefined</a></code> | <code>interface{}</code> | is_null_or_undefined block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberGreaterThan">NumberGreaterThan</a></code> | <code>interface{}</code> | number_greater_than block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberGreaterThanOrEquals">NumberGreaterThanOrEquals</a></code> | <code>interface{}</code> | number_greater_than_or_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberIn">NumberIn</a></code> | <code>interface{}</code> | number_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberInRange">NumberInRange</a></code> | <code>interface{}</code> | number_in_range block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberLessThan">NumberLessThan</a></code> | <code>interface{}</code> | number_less_than block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberLessThanOrEquals">NumberLessThanOrEquals</a></code> | <code>interface{}</code> | number_less_than_or_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberNotIn">NumberNotIn</a></code> | <code>interface{}</code> | number_not_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberNotInRange">NumberNotInRange</a></code> | <code>interface{}</code> | number_not_in_range block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringBeginsWith">StringBeginsWith</a></code> | <code>interface{}</code> | string_begins_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringContains">StringContains</a></code> | <code>interface{}</code> | string_contains block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringEndsWith">StringEndsWith</a></code> | <code>interface{}</code> | string_ends_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringIn">StringIn</a></code> | <code>interface{}</code> | string_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringNotBeginsWith">StringNotBeginsWith</a></code> | <code>interface{}</code> | string_not_begins_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringNotContains">StringNotContains</a></code> | <code>interface{}</code> | string_not_contains block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringNotEndsWith">StringNotEndsWith</a></code> | <code>interface{}</code> | string_not_ends_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringNotIn">StringNotIn</a></code> | <code>interface{}</code> | string_not_in block. |

---

##### `BoolEquals`<sup>Optional</sup> <a name="BoolEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.boolEquals"></a>

```go
BoolEquals interface{}
```

- *Type:* interface{}

bool_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#bool_equals EventgridSystemTopicEventSubscription#bool_equals}

---

##### `IsNotNull`<sup>Optional</sup> <a name="IsNotNull" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.isNotNull"></a>

```go
IsNotNull interface{}
```

- *Type:* interface{}

is_not_null block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#is_not_null EventgridSystemTopicEventSubscription#is_not_null}

---

##### `IsNullOrUndefined`<sup>Optional</sup> <a name="IsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.isNullOrUndefined"></a>

```go
IsNullOrUndefined interface{}
```

- *Type:* interface{}

is_null_or_undefined block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#is_null_or_undefined EventgridSystemTopicEventSubscription#is_null_or_undefined}

---

##### `NumberGreaterThan`<sup>Optional</sup> <a name="NumberGreaterThan" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberGreaterThan"></a>

```go
NumberGreaterThan interface{}
```

- *Type:* interface{}

number_greater_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#number_greater_than EventgridSystemTopicEventSubscription#number_greater_than}

---

##### `NumberGreaterThanOrEquals`<sup>Optional</sup> <a name="NumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberGreaterThanOrEquals"></a>

```go
NumberGreaterThanOrEquals interface{}
```

- *Type:* interface{}

number_greater_than_or_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#number_greater_than_or_equals EventgridSystemTopicEventSubscription#number_greater_than_or_equals}

---

##### `NumberIn`<sup>Optional</sup> <a name="NumberIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberIn"></a>

```go
NumberIn interface{}
```

- *Type:* interface{}

number_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#number_in EventgridSystemTopicEventSubscription#number_in}

---

##### `NumberInRange`<sup>Optional</sup> <a name="NumberInRange" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberInRange"></a>

```go
NumberInRange interface{}
```

- *Type:* interface{}

number_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#number_in_range EventgridSystemTopicEventSubscription#number_in_range}

---

##### `NumberLessThan`<sup>Optional</sup> <a name="NumberLessThan" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberLessThan"></a>

```go
NumberLessThan interface{}
```

- *Type:* interface{}

number_less_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#number_less_than EventgridSystemTopicEventSubscription#number_less_than}

---

##### `NumberLessThanOrEquals`<sup>Optional</sup> <a name="NumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberLessThanOrEquals"></a>

```go
NumberLessThanOrEquals interface{}
```

- *Type:* interface{}

number_less_than_or_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#number_less_than_or_equals EventgridSystemTopicEventSubscription#number_less_than_or_equals}

---

##### `NumberNotIn`<sup>Optional</sup> <a name="NumberNotIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberNotIn"></a>

```go
NumberNotIn interface{}
```

- *Type:* interface{}

number_not_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#number_not_in EventgridSystemTopicEventSubscription#number_not_in}

---

##### `NumberNotInRange`<sup>Optional</sup> <a name="NumberNotInRange" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.numberNotInRange"></a>

```go
NumberNotInRange interface{}
```

- *Type:* interface{}

number_not_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#number_not_in_range EventgridSystemTopicEventSubscription#number_not_in_range}

---

##### `StringBeginsWith`<sup>Optional</sup> <a name="StringBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringBeginsWith"></a>

```go
StringBeginsWith interface{}
```

- *Type:* interface{}

string_begins_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#string_begins_with EventgridSystemTopicEventSubscription#string_begins_with}

---

##### `StringContains`<sup>Optional</sup> <a name="StringContains" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringContains"></a>

```go
StringContains interface{}
```

- *Type:* interface{}

string_contains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#string_contains EventgridSystemTopicEventSubscription#string_contains}

---

##### `StringEndsWith`<sup>Optional</sup> <a name="StringEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringEndsWith"></a>

```go
StringEndsWith interface{}
```

- *Type:* interface{}

string_ends_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#string_ends_with EventgridSystemTopicEventSubscription#string_ends_with}

---

##### `StringIn`<sup>Optional</sup> <a name="StringIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringIn"></a>

```go
StringIn interface{}
```

- *Type:* interface{}

string_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#string_in EventgridSystemTopicEventSubscription#string_in}

---

##### `StringNotBeginsWith`<sup>Optional</sup> <a name="StringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringNotBeginsWith"></a>

```go
StringNotBeginsWith interface{}
```

- *Type:* interface{}

string_not_begins_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#string_not_begins_with EventgridSystemTopicEventSubscription#string_not_begins_with}

---

##### `StringNotContains`<sup>Optional</sup> <a name="StringNotContains" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringNotContains"></a>

```go
StringNotContains interface{}
```

- *Type:* interface{}

string_not_contains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#string_not_contains EventgridSystemTopicEventSubscription#string_not_contains}

---

##### `StringNotEndsWith`<sup>Optional</sup> <a name="StringNotEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringNotEndsWith"></a>

```go
StringNotEndsWith interface{}
```

- *Type:* interface{}

string_not_ends_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#string_not_ends_with EventgridSystemTopicEventSubscription#string_not_ends_with}

---

##### `StringNotIn`<sup>Optional</sup> <a name="StringNotIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter.property.stringNotIn"></a>

```go
StringNotIn interface{}
```

- *Type:* interface{}

string_not_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#string_not_in EventgridSystemTopicEventSubscription#string_not_in}

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals {
	Key: *string,
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEquals.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull {
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNull.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined {
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefined.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan {
	Key: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThan.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals {
	Key: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn {
	Key: *string,
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn.property.values">Values</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberIn.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange {
	Key: *string,
	Values: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange.property.values">Values</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRange.property.values"></a>

```go
Values interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan {
	Key: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThan.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals {
	Key: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn {
	Key: *string,
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn.property.values">Values</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotIn.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange {
	Key: *string,
	Values: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange.property.values">Values</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRange.property.values"></a>

```go
Values interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWith.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContains.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWith.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringIn.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWith.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContains.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWith.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#key EventgridSystemTopicEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotIn.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#values EventgridSystemTopicEventSubscription#values}.

---

### EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint <a name="EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint {
	FunctionId: *string,
	MaxEventsPerBatch: *f64,
	PreferredBatchSizeInKilobytes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint.property.functionId">FunctionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#function_id EventgridSystemTopicEventSubscription#function_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint.property.maxEventsPerBatch">MaxEventsPerBatch</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#max_events_per_batch EventgridSystemTopicEventSubscription#max_events_per_batch}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint.property.preferredBatchSizeInKilobytes">PreferredBatchSizeInKilobytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#preferred_batch_size_in_kilobytes EventgridSystemTopicEventSubscription#preferred_batch_size_in_kilobytes}. |

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint.property.functionId"></a>

```go
FunctionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#function_id EventgridSystemTopicEventSubscription#function_id}.

---

##### `MaxEventsPerBatch`<sup>Optional</sup> <a name="MaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint.property.maxEventsPerBatch"></a>

```go
MaxEventsPerBatch *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#max_events_per_batch EventgridSystemTopicEventSubscription#max_events_per_batch}.

---

##### `PreferredBatchSizeInKilobytes`<sup>Optional</sup> <a name="PreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint.property.preferredBatchSizeInKilobytes"></a>

```go
PreferredBatchSizeInKilobytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#preferred_batch_size_in_kilobytes EventgridSystemTopicEventSubscription#preferred_batch_size_in_kilobytes}.

---

### EventgridSystemTopicEventSubscriptionConfig <a name="EventgridSystemTopicEventSubscriptionConfig" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	SystemTopic: *string,
	AdvancedFilter: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter,
	AdvancedFilteringOnArraysEnabled: interface{},
	AzureFunctionEndpoint: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint,
	DeadLetterIdentity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity,
	DeliveryIdentity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity,
	DeliveryProperty: interface{},
	EventDeliverySchema: *string,
	EventhubEndpointId: *string,
	ExpirationTimeUtc: *string,
	HybridConnectionEndpointId: *string,
	Id: *string,
	IncludedEventTypes: *[]*string,
	Labels: *[]*string,
	RetryPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy,
	ServiceBusQueueEndpointId: *string,
	ServiceBusTopicEndpointId: *string,
	StorageBlobDeadLetterDestination: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination,
	StorageQueueEndpoint: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint,
	SubjectFilter: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts,
	WebhookEndpoint: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#name EventgridSystemTopicEventSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#resource_group_name EventgridSystemTopicEventSubscription#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.systemTopic">SystemTopic</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#system_topic EventgridSystemTopicEventSubscription#system_topic}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.advancedFilter">AdvancedFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter">EventgridSystemTopicEventSubscriptionAdvancedFilter</a></code> | advanced_filter block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.advancedFilteringOnArraysEnabled">AdvancedFilteringOnArraysEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#advanced_filtering_on_arrays_enabled EventgridSystemTopicEventSubscription#advanced_filtering_on_arrays_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.azureFunctionEndpoint">AzureFunctionEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint">EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint</a></code> | azure_function_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.deadLetterIdentity">DeadLetterIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity">EventgridSystemTopicEventSubscriptionDeadLetterIdentity</a></code> | dead_letter_identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.deliveryIdentity">DeliveryIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity">EventgridSystemTopicEventSubscriptionDeliveryIdentity</a></code> | delivery_identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.deliveryProperty">DeliveryProperty</a></code> | <code>interface{}</code> | delivery_property block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.eventDeliverySchema">EventDeliverySchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#event_delivery_schema EventgridSystemTopicEventSubscription#event_delivery_schema}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.eventhubEndpointId">EventhubEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#eventhub_endpoint_id EventgridSystemTopicEventSubscription#eventhub_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.expirationTimeUtc">ExpirationTimeUtc</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#expiration_time_utc EventgridSystemTopicEventSubscription#expiration_time_utc}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.hybridConnectionEndpointId">HybridConnectionEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#hybrid_connection_endpoint_id EventgridSystemTopicEventSubscription#hybrid_connection_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#id EventgridSystemTopicEventSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.includedEventTypes">IncludedEventTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#included_event_types EventgridSystemTopicEventSubscription#included_event_types}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.labels">Labels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#labels EventgridSystemTopicEventSubscription#labels}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy">EventgridSystemTopicEventSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.serviceBusQueueEndpointId">ServiceBusQueueEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#service_bus_queue_endpoint_id EventgridSystemTopicEventSubscription#service_bus_queue_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.serviceBusTopicEndpointId">ServiceBusTopicEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#service_bus_topic_endpoint_id EventgridSystemTopicEventSubscription#service_bus_topic_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.storageBlobDeadLetterDestination">StorageBlobDeadLetterDestination</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination">EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination</a></code> | storage_blob_dead_letter_destination block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.storageQueueEndpoint">StorageQueueEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint">EventgridSystemTopicEventSubscriptionStorageQueueEndpoint</a></code> | storage_queue_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.subjectFilter">SubjectFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter">EventgridSystemTopicEventSubscriptionSubjectFilter</a></code> | subject_filter block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts">EventgridSystemTopicEventSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.webhookEndpoint">WebhookEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint">EventgridSystemTopicEventSubscriptionWebhookEndpoint</a></code> | webhook_endpoint block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#name EventgridSystemTopicEventSubscription#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#resource_group_name EventgridSystemTopicEventSubscription#resource_group_name}.

---

##### `SystemTopic`<sup>Required</sup> <a name="SystemTopic" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.systemTopic"></a>

```go
SystemTopic *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#system_topic EventgridSystemTopicEventSubscription#system_topic}.

---

##### `AdvancedFilter`<sup>Optional</sup> <a name="AdvancedFilter" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.advancedFilter"></a>

```go
AdvancedFilter EventgridSystemTopicEventSubscriptionAdvancedFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter">EventgridSystemTopicEventSubscriptionAdvancedFilter</a>

advanced_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#advanced_filter EventgridSystemTopicEventSubscription#advanced_filter}

---

##### `AdvancedFilteringOnArraysEnabled`<sup>Optional</sup> <a name="AdvancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.advancedFilteringOnArraysEnabled"></a>

```go
AdvancedFilteringOnArraysEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#advanced_filtering_on_arrays_enabled EventgridSystemTopicEventSubscription#advanced_filtering_on_arrays_enabled}.

---

##### `AzureFunctionEndpoint`<sup>Optional</sup> <a name="AzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.azureFunctionEndpoint"></a>

```go
AzureFunctionEndpoint EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint">EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint</a>

azure_function_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#azure_function_endpoint EventgridSystemTopicEventSubscription#azure_function_endpoint}

---

##### `DeadLetterIdentity`<sup>Optional</sup> <a name="DeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.deadLetterIdentity"></a>

```go
DeadLetterIdentity EventgridSystemTopicEventSubscriptionDeadLetterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity">EventgridSystemTopicEventSubscriptionDeadLetterIdentity</a>

dead_letter_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#dead_letter_identity EventgridSystemTopicEventSubscription#dead_letter_identity}

---

##### `DeliveryIdentity`<sup>Optional</sup> <a name="DeliveryIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.deliveryIdentity"></a>

```go
DeliveryIdentity EventgridSystemTopicEventSubscriptionDeliveryIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity">EventgridSystemTopicEventSubscriptionDeliveryIdentity</a>

delivery_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#delivery_identity EventgridSystemTopicEventSubscription#delivery_identity}

---

##### `DeliveryProperty`<sup>Optional</sup> <a name="DeliveryProperty" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.deliveryProperty"></a>

```go
DeliveryProperty interface{}
```

- *Type:* interface{}

delivery_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#delivery_property EventgridSystemTopicEventSubscription#delivery_property}

---

##### `EventDeliverySchema`<sup>Optional</sup> <a name="EventDeliverySchema" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.eventDeliverySchema"></a>

```go
EventDeliverySchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#event_delivery_schema EventgridSystemTopicEventSubscription#event_delivery_schema}.

---

##### `EventhubEndpointId`<sup>Optional</sup> <a name="EventhubEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.eventhubEndpointId"></a>

```go
EventhubEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#eventhub_endpoint_id EventgridSystemTopicEventSubscription#eventhub_endpoint_id}.

---

##### `ExpirationTimeUtc`<sup>Optional</sup> <a name="ExpirationTimeUtc" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.expirationTimeUtc"></a>

```go
ExpirationTimeUtc *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#expiration_time_utc EventgridSystemTopicEventSubscription#expiration_time_utc}.

---

##### `HybridConnectionEndpointId`<sup>Optional</sup> <a name="HybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.hybridConnectionEndpointId"></a>

```go
HybridConnectionEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#hybrid_connection_endpoint_id EventgridSystemTopicEventSubscription#hybrid_connection_endpoint_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#id EventgridSystemTopicEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludedEventTypes`<sup>Optional</sup> <a name="IncludedEventTypes" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.includedEventTypes"></a>

```go
IncludedEventTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#included_event_types EventgridSystemTopicEventSubscription#included_event_types}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#labels EventgridSystemTopicEventSubscription#labels}.

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.retryPolicy"></a>

```go
RetryPolicy EventgridSystemTopicEventSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy">EventgridSystemTopicEventSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#retry_policy EventgridSystemTopicEventSubscription#retry_policy}

---

##### `ServiceBusQueueEndpointId`<sup>Optional</sup> <a name="ServiceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.serviceBusQueueEndpointId"></a>

```go
ServiceBusQueueEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#service_bus_queue_endpoint_id EventgridSystemTopicEventSubscription#service_bus_queue_endpoint_id}.

---

##### `ServiceBusTopicEndpointId`<sup>Optional</sup> <a name="ServiceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.serviceBusTopicEndpointId"></a>

```go
ServiceBusTopicEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#service_bus_topic_endpoint_id EventgridSystemTopicEventSubscription#service_bus_topic_endpoint_id}.

---

##### `StorageBlobDeadLetterDestination`<sup>Optional</sup> <a name="StorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.storageBlobDeadLetterDestination"></a>

```go
StorageBlobDeadLetterDestination EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination">EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination</a>

storage_blob_dead_letter_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#storage_blob_dead_letter_destination EventgridSystemTopicEventSubscription#storage_blob_dead_letter_destination}

---

##### `StorageQueueEndpoint`<sup>Optional</sup> <a name="StorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.storageQueueEndpoint"></a>

```go
StorageQueueEndpoint EventgridSystemTopicEventSubscriptionStorageQueueEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint">EventgridSystemTopicEventSubscriptionStorageQueueEndpoint</a>

storage_queue_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#storage_queue_endpoint EventgridSystemTopicEventSubscription#storage_queue_endpoint}

---

##### `SubjectFilter`<sup>Optional</sup> <a name="SubjectFilter" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.subjectFilter"></a>

```go
SubjectFilter EventgridSystemTopicEventSubscriptionSubjectFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter">EventgridSystemTopicEventSubscriptionSubjectFilter</a>

subject_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#subject_filter EventgridSystemTopicEventSubscription#subject_filter}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.timeouts"></a>

```go
Timeouts EventgridSystemTopicEventSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts">EventgridSystemTopicEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#timeouts EventgridSystemTopicEventSubscription#timeouts}

---

##### `WebhookEndpoint`<sup>Optional</sup> <a name="WebhookEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionConfig.property.webhookEndpoint"></a>

```go
WebhookEndpoint EventgridSystemTopicEventSubscriptionWebhookEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint">EventgridSystemTopicEventSubscriptionWebhookEndpoint</a>

webhook_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#webhook_endpoint EventgridSystemTopicEventSubscription#webhook_endpoint}

---

### EventgridSystemTopicEventSubscriptionDeadLetterIdentity <a name="EventgridSystemTopicEventSubscriptionDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity {
	Type: *string,
	UserAssignedIdentity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#type EventgridSystemTopicEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity.property.userAssignedIdentity">UserAssignedIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#user_assigned_identity EventgridSystemTopicEventSubscription#user_assigned_identity}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#type EventgridSystemTopicEventSubscription#type}.

---

##### `UserAssignedIdentity`<sup>Optional</sup> <a name="UserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity.property.userAssignedIdentity"></a>

```go
UserAssignedIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#user_assigned_identity EventgridSystemTopicEventSubscription#user_assigned_identity}.

---

### EventgridSystemTopicEventSubscriptionDeliveryIdentity <a name="EventgridSystemTopicEventSubscriptionDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity {
	Type: *string,
	UserAssignedIdentity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#type EventgridSystemTopicEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity.property.userAssignedIdentity">UserAssignedIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#user_assigned_identity EventgridSystemTopicEventSubscription#user_assigned_identity}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#type EventgridSystemTopicEventSubscription#type}.

---

##### `UserAssignedIdentity`<sup>Optional</sup> <a name="UserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity.property.userAssignedIdentity"></a>

```go
UserAssignedIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#user_assigned_identity EventgridSystemTopicEventSubscription#user_assigned_identity}.

---

### EventgridSystemTopicEventSubscriptionDeliveryProperty <a name="EventgridSystemTopicEventSubscriptionDeliveryProperty" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty {
	HeaderName: *string,
	Type: *string,
	Secret: interface{},
	SourceField: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.property.headerName">HeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#header_name EventgridSystemTopicEventSubscription#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#type EventgridSystemTopicEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.property.secret">Secret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#secret EventgridSystemTopicEventSubscription#secret}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.property.sourceField">SourceField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#source_field EventgridSystemTopicEventSubscription#source_field}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#header_name EventgridSystemTopicEventSubscription#header_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#type EventgridSystemTopicEventSubscription#type}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#secret EventgridSystemTopicEventSubscription#secret}.

---

##### `SourceField`<sup>Optional</sup> <a name="SourceField" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.property.sourceField"></a>

```go
SourceField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#source_field EventgridSystemTopicEventSubscription#source_field}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryProperty.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#value EventgridSystemTopicEventSubscription#value}.

---

### EventgridSystemTopicEventSubscriptionRetryPolicy <a name="EventgridSystemTopicEventSubscriptionRetryPolicy" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionRetryPolicy {
	EventTimeToLive: *f64,
	MaxDeliveryAttempts: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy.property.eventTimeToLive">EventTimeToLive</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#event_time_to_live EventgridSystemTopicEventSubscription#event_time_to_live}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#max_delivery_attempts EventgridSystemTopicEventSubscription#max_delivery_attempts}. |

---

##### `EventTimeToLive`<sup>Required</sup> <a name="EventTimeToLive" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy.property.eventTimeToLive"></a>

```go
EventTimeToLive *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#event_time_to_live EventgridSystemTopicEventSubscription#event_time_to_live}.

---

##### `MaxDeliveryAttempts`<sup>Required</sup> <a name="MaxDeliveryAttempts" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy.property.maxDeliveryAttempts"></a>

```go
MaxDeliveryAttempts *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#max_delivery_attempts EventgridSystemTopicEventSubscription#max_delivery_attempts}.

---

### EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination <a name="EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination {
	StorageAccountId: *string,
	StorageBlobContainerName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#storage_account_id EventgridSystemTopicEventSubscription#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination.property.storageBlobContainerName">StorageBlobContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#storage_blob_container_name EventgridSystemTopicEventSubscription#storage_blob_container_name}. |

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#storage_account_id EventgridSystemTopicEventSubscription#storage_account_id}.

---

##### `StorageBlobContainerName`<sup>Required</sup> <a name="StorageBlobContainerName" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination.property.storageBlobContainerName"></a>

```go
StorageBlobContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#storage_blob_container_name EventgridSystemTopicEventSubscription#storage_blob_container_name}.

---

### EventgridSystemTopicEventSubscriptionStorageQueueEndpoint <a name="EventgridSystemTopicEventSubscriptionStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint {
	QueueName: *string,
	StorageAccountId: *string,
	QueueMessageTimeToLiveInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint.property.queueName">QueueName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#queue_name EventgridSystemTopicEventSubscription#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#storage_account_id EventgridSystemTopicEventSubscription#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint.property.queueMessageTimeToLiveInSeconds">QueueMessageTimeToLiveInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#queue_message_time_to_live_in_seconds EventgridSystemTopicEventSubscription#queue_message_time_to_live_in_seconds}. |

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint.property.queueName"></a>

```go
QueueName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#queue_name EventgridSystemTopicEventSubscription#queue_name}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#storage_account_id EventgridSystemTopicEventSubscription#storage_account_id}.

---

##### `QueueMessageTimeToLiveInSeconds`<sup>Optional</sup> <a name="QueueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint.property.queueMessageTimeToLiveInSeconds"></a>

```go
QueueMessageTimeToLiveInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#queue_message_time_to_live_in_seconds EventgridSystemTopicEventSubscription#queue_message_time_to_live_in_seconds}.

---

### EventgridSystemTopicEventSubscriptionSubjectFilter <a name="EventgridSystemTopicEventSubscriptionSubjectFilter" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionSubjectFilter {
	CaseSensitive: interface{},
	SubjectBeginsWith: *string,
	SubjectEndsWith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#case_sensitive EventgridSystemTopicEventSubscription#case_sensitive}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter.property.subjectBeginsWith">SubjectBeginsWith</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#subject_begins_with EventgridSystemTopicEventSubscription#subject_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter.property.subjectEndsWith">SubjectEndsWith</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#subject_ends_with EventgridSystemTopicEventSubscription#subject_ends_with}. |

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter.property.caseSensitive"></a>

```go
CaseSensitive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#case_sensitive EventgridSystemTopicEventSubscription#case_sensitive}.

---

##### `SubjectBeginsWith`<sup>Optional</sup> <a name="SubjectBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter.property.subjectBeginsWith"></a>

```go
SubjectBeginsWith *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#subject_begins_with EventgridSystemTopicEventSubscription#subject_begins_with}.

---

##### `SubjectEndsWith`<sup>Optional</sup> <a name="SubjectEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter.property.subjectEndsWith"></a>

```go
SubjectEndsWith *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#subject_ends_with EventgridSystemTopicEventSubscription#subject_ends_with}.

---

### EventgridSystemTopicEventSubscriptionTimeouts <a name="EventgridSystemTopicEventSubscriptionTimeouts" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#create EventgridSystemTopicEventSubscription#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#delete EventgridSystemTopicEventSubscription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#read EventgridSystemTopicEventSubscription#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#update EventgridSystemTopicEventSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#create EventgridSystemTopicEventSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#delete EventgridSystemTopicEventSubscription#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#read EventgridSystemTopicEventSubscription#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#update EventgridSystemTopicEventSubscription#update}.

---

### EventgridSystemTopicEventSubscriptionWebhookEndpoint <a name="EventgridSystemTopicEventSubscriptionWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

&eventgridsystemtopiceventsubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint {
	Url: *string,
	ActiveDirectoryAppIdOrUri: *string,
	ActiveDirectoryTenantId: *string,
	MaxEventsPerBatch: *f64,
	PreferredBatchSizeInKilobytes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#url EventgridSystemTopicEventSubscription#url}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.property.activeDirectoryAppIdOrUri">ActiveDirectoryAppIdOrUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#active_directory_app_id_or_uri EventgridSystemTopicEventSubscription#active_directory_app_id_or_uri}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.property.activeDirectoryTenantId">ActiveDirectoryTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#active_directory_tenant_id EventgridSystemTopicEventSubscription#active_directory_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.property.maxEventsPerBatch">MaxEventsPerBatch</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#max_events_per_batch EventgridSystemTopicEventSubscription#max_events_per_batch}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.property.preferredBatchSizeInKilobytes">PreferredBatchSizeInKilobytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#preferred_batch_size_in_kilobytes EventgridSystemTopicEventSubscription#preferred_batch_size_in_kilobytes}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#url EventgridSystemTopicEventSubscription#url}.

---

##### `ActiveDirectoryAppIdOrUri`<sup>Optional</sup> <a name="ActiveDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.property.activeDirectoryAppIdOrUri"></a>

```go
ActiveDirectoryAppIdOrUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#active_directory_app_id_or_uri EventgridSystemTopicEventSubscription#active_directory_app_id_or_uri}.

---

##### `ActiveDirectoryTenantId`<sup>Optional</sup> <a name="ActiveDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.property.activeDirectoryTenantId"></a>

```go
ActiveDirectoryTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#active_directory_tenant_id EventgridSystemTopicEventSubscription#active_directory_tenant_id}.

---

##### `MaxEventsPerBatch`<sup>Optional</sup> <a name="MaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.property.maxEventsPerBatch"></a>

```go
MaxEventsPerBatch *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#max_events_per_batch EventgridSystemTopicEventSubscription#max_events_per_batch}.

---

##### `PreferredBatchSizeInKilobytes`<sup>Optional</sup> <a name="PreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint.property.preferredBatchSizeInKilobytes"></a>

```go
PreferredBatchSizeInKilobytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/eventgrid_system_topic_event_subscription#preferred_batch_size_in_kilobytes EventgridSystemTopicEventSubscription#preferred_batch_size_in_kilobytes}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.values">Values</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.valuesInput"></a>

```go
func ValuesInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.values"></a>

```go
func Values() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.values">Values</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.valuesInput"></a>

```go
func ValuesInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.values"></a>

```go
func Values() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putBoolEquals">PutBoolEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putIsNotNull">PutIsNotNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined">PutIsNullOrUndefined</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan">PutNumberGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals">PutNumberGreaterThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberIn">PutNumberIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberInRange">PutNumberInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan">PutNumberLessThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals">PutNumberLessThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn">PutNumberNotIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange">PutNumberNotInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith">PutStringBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringContains">PutStringContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith">PutStringEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringIn">PutStringIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith">PutStringNotBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotContains">PutStringNotContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith">PutStringNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotIn">PutStringNotIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetBoolEquals">ResetBoolEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetIsNotNull">ResetIsNotNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetIsNullOrUndefined">ResetIsNullOrUndefined</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThan">ResetNumberGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThanOrEquals">ResetNumberGreaterThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberIn">ResetNumberIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberInRange">ResetNumberInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThan">ResetNumberLessThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThanOrEquals">ResetNumberLessThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberNotIn">ResetNumberNotIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberNotInRange">ResetNumberNotInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringBeginsWith">ResetStringBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringContains">ResetStringContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringEndsWith">ResetStringEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringIn">ResetStringIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringNotBeginsWith">ResetStringNotBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringNotContains">ResetStringNotContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringNotEndsWith">ResetStringNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringNotIn">ResetStringNotIn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBoolEquals` <a name="PutBoolEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putBoolEquals"></a>

```go
func PutBoolEquals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putBoolEquals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIsNotNull` <a name="PutIsNotNull" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putIsNotNull"></a>

```go
func PutIsNotNull(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putIsNotNull.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIsNullOrUndefined` <a name="PutIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined"></a>

```go
func PutIsNullOrUndefined(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNumberGreaterThan` <a name="PutNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan"></a>

```go
func PutNumberGreaterThan(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNumberGreaterThanOrEquals` <a name="PutNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals"></a>

```go
func PutNumberGreaterThanOrEquals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNumberIn` <a name="PutNumberIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberIn"></a>

```go
func PutNumberIn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberIn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNumberInRange` <a name="PutNumberInRange" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberInRange"></a>

```go
func PutNumberInRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberInRange.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNumberLessThan` <a name="PutNumberLessThan" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan"></a>

```go
func PutNumberLessThan(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNumberLessThanOrEquals` <a name="PutNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals"></a>

```go
func PutNumberLessThanOrEquals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNumberNotIn` <a name="PutNumberNotIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn"></a>

```go
func PutNumberNotIn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNumberNotInRange` <a name="PutNumberNotInRange" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange"></a>

```go
func PutNumberNotInRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringBeginsWith` <a name="PutStringBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith"></a>

```go
func PutStringBeginsWith(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringContains` <a name="PutStringContains" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringContains"></a>

```go
func PutStringContains(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringContains.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringEndsWith` <a name="PutStringEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith"></a>

```go
func PutStringEndsWith(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringIn` <a name="PutStringIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringIn"></a>

```go
func PutStringIn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringIn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringNotBeginsWith` <a name="PutStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith"></a>

```go
func PutStringNotBeginsWith(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringNotContains` <a name="PutStringNotContains" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotContains"></a>

```go
func PutStringNotContains(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotContains.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringNotEndsWith` <a name="PutStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith"></a>

```go
func PutStringNotEndsWith(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringNotIn` <a name="PutStringNotIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotIn"></a>

```go
func PutStringNotIn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.putStringNotIn.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBoolEquals` <a name="ResetBoolEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetBoolEquals"></a>

```go
func ResetBoolEquals()
```

##### `ResetIsNotNull` <a name="ResetIsNotNull" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetIsNotNull"></a>

```go
func ResetIsNotNull()
```

##### `ResetIsNullOrUndefined` <a name="ResetIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetIsNullOrUndefined"></a>

```go
func ResetIsNullOrUndefined()
```

##### `ResetNumberGreaterThan` <a name="ResetNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThan"></a>

```go
func ResetNumberGreaterThan()
```

##### `ResetNumberGreaterThanOrEquals` <a name="ResetNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThanOrEquals"></a>

```go
func ResetNumberGreaterThanOrEquals()
```

##### `ResetNumberIn` <a name="ResetNumberIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberIn"></a>

```go
func ResetNumberIn()
```

##### `ResetNumberInRange` <a name="ResetNumberInRange" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberInRange"></a>

```go
func ResetNumberInRange()
```

##### `ResetNumberLessThan` <a name="ResetNumberLessThan" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThan"></a>

```go
func ResetNumberLessThan()
```

##### `ResetNumberLessThanOrEquals` <a name="ResetNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThanOrEquals"></a>

```go
func ResetNumberLessThanOrEquals()
```

##### `ResetNumberNotIn` <a name="ResetNumberNotIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberNotIn"></a>

```go
func ResetNumberNotIn()
```

##### `ResetNumberNotInRange` <a name="ResetNumberNotInRange" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetNumberNotInRange"></a>

```go
func ResetNumberNotInRange()
```

##### `ResetStringBeginsWith` <a name="ResetStringBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringBeginsWith"></a>

```go
func ResetStringBeginsWith()
```

##### `ResetStringContains` <a name="ResetStringContains" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringContains"></a>

```go
func ResetStringContains()
```

##### `ResetStringEndsWith` <a name="ResetStringEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringEndsWith"></a>

```go
func ResetStringEndsWith()
```

##### `ResetStringIn` <a name="ResetStringIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringIn"></a>

```go
func ResetStringIn()
```

##### `ResetStringNotBeginsWith` <a name="ResetStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringNotBeginsWith"></a>

```go
func ResetStringNotBeginsWith()
```

##### `ResetStringNotContains` <a name="ResetStringNotContains" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringNotContains"></a>

```go
func ResetStringNotContains()
```

##### `ResetStringNotEndsWith` <a name="ResetStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringNotEndsWith"></a>

```go
func ResetStringNotEndsWith()
```

##### `ResetStringNotIn` <a name="ResetStringNotIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.resetStringNotIn"></a>

```go
func ResetStringNotIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.boolEquals">BoolEquals</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList">EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.isNotNull">IsNotNull</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList">EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefined">IsNullOrUndefined</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList">EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThan">NumberGreaterThan</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEquals">NumberGreaterThanOrEquals</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberIn">NumberIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberInRange">NumberInRange</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberLessThan">NumberLessThan</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEquals">NumberLessThanOrEquals</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberNotIn">NumberNotIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRange">NumberNotInRange</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWith">StringBeginsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringContains">StringContains</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWith">StringEndsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringIn">StringIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWith">StringNotBeginsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotContains">StringNotContains</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWith">StringNotEndsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotIn">StringNotIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.boolEqualsInput">BoolEqualsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.isNotNullInput">IsNotNullInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefinedInput">IsNullOrUndefinedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanInput">NumberGreaterThanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEqualsInput">NumberGreaterThanOrEqualsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberInInput">NumberInInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberInRangeInput">NumberInRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanInput">NumberLessThanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEqualsInput">NumberLessThanOrEqualsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberNotInInput">NumberNotInInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRangeInput">NumberNotInRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWithInput">StringBeginsWithInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringContainsInput">StringContainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWithInput">StringEndsWithInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringInInput">StringInInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWithInput">StringNotBeginsWithInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotContainsInput">StringNotContainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWithInput">StringNotEndsWithInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotInInput">StringNotInInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter">EventgridSystemTopicEventSubscriptionAdvancedFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoolEquals`<sup>Required</sup> <a name="BoolEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.boolEquals"></a>

```go
func BoolEquals() EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList">EventgridSystemTopicEventSubscriptionAdvancedFilterBoolEqualsList</a>

---

##### `IsNotNull`<sup>Required</sup> <a name="IsNotNull" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.isNotNull"></a>

```go
func IsNotNull() EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList">EventgridSystemTopicEventSubscriptionAdvancedFilterIsNotNullList</a>

---

##### `IsNullOrUndefined`<sup>Required</sup> <a name="IsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefined"></a>

```go
func IsNullOrUndefined() EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList">EventgridSystemTopicEventSubscriptionAdvancedFilterIsNullOrUndefinedList</a>

---

##### `NumberGreaterThan`<sup>Required</sup> <a name="NumberGreaterThan" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThan"></a>

```go
func NumberGreaterThan() EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanList</a>

---

##### `NumberGreaterThanOrEquals`<sup>Required</sup> <a name="NumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEquals"></a>

```go
func NumberGreaterThanOrEquals() EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList</a>

---

##### `NumberIn`<sup>Required</sup> <a name="NumberIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberIn"></a>

```go
func NumberIn() EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInList</a>

---

##### `NumberInRange`<sup>Required</sup> <a name="NumberInRange" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberInRange"></a>

```go
func NumberInRange() EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberInRangeList</a>

---

##### `NumberLessThan`<sup>Required</sup> <a name="NumberLessThan" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberLessThan"></a>

```go
func NumberLessThan() EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanList</a>

---

##### `NumberLessThanOrEquals`<sup>Required</sup> <a name="NumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEquals"></a>

```go
func NumberLessThanOrEquals() EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList</a>

---

##### `NumberNotIn`<sup>Required</sup> <a name="NumberNotIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberNotIn"></a>

```go
func NumberNotIn() EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInList</a>

---

##### `NumberNotInRange`<sup>Required</sup> <a name="NumberNotInRange" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRange"></a>

```go
func NumberNotInRange() EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList">EventgridSystemTopicEventSubscriptionAdvancedFilterNumberNotInRangeList</a>

---

##### `StringBeginsWith`<sup>Required</sup> <a name="StringBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWith"></a>

```go
func StringBeginsWith() EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList</a>

---

##### `StringContains`<sup>Required</sup> <a name="StringContains" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringContains"></a>

```go
func StringContains() EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList</a>

---

##### `StringEndsWith`<sup>Required</sup> <a name="StringEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWith"></a>

```go
func StringEndsWith() EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList</a>

---

##### `StringIn`<sup>Required</sup> <a name="StringIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringIn"></a>

```go
func StringIn() EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList</a>

---

##### `StringNotBeginsWith`<sup>Required</sup> <a name="StringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWith"></a>

```go
func StringNotBeginsWith() EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList</a>

---

##### `StringNotContains`<sup>Required</sup> <a name="StringNotContains" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotContains"></a>

```go
func StringNotContains() EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList</a>

---

##### `StringNotEndsWith`<sup>Required</sup> <a name="StringNotEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWith"></a>

```go
func StringNotEndsWith() EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList</a>

---

##### `StringNotIn`<sup>Required</sup> <a name="StringNotIn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotIn"></a>

```go
func StringNotIn() EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList">EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList</a>

---

##### `BoolEqualsInput`<sup>Optional</sup> <a name="BoolEqualsInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.boolEqualsInput"></a>

```go
func BoolEqualsInput() interface{}
```

- *Type:* interface{}

---

##### `IsNotNullInput`<sup>Optional</sup> <a name="IsNotNullInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.isNotNullInput"></a>

```go
func IsNotNullInput() interface{}
```

- *Type:* interface{}

---

##### `IsNullOrUndefinedInput`<sup>Optional</sup> <a name="IsNullOrUndefinedInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefinedInput"></a>

```go
func IsNullOrUndefinedInput() interface{}
```

- *Type:* interface{}

---

##### `NumberGreaterThanInput`<sup>Optional</sup> <a name="NumberGreaterThanInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanInput"></a>

```go
func NumberGreaterThanInput() interface{}
```

- *Type:* interface{}

---

##### `NumberGreaterThanOrEqualsInput`<sup>Optional</sup> <a name="NumberGreaterThanOrEqualsInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEqualsInput"></a>

```go
func NumberGreaterThanOrEqualsInput() interface{}
```

- *Type:* interface{}

---

##### `NumberInInput`<sup>Optional</sup> <a name="NumberInInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberInInput"></a>

```go
func NumberInInput() interface{}
```

- *Type:* interface{}

---

##### `NumberInRangeInput`<sup>Optional</sup> <a name="NumberInRangeInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberInRangeInput"></a>

```go
func NumberInRangeInput() interface{}
```

- *Type:* interface{}

---

##### `NumberLessThanInput`<sup>Optional</sup> <a name="NumberLessThanInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanInput"></a>

```go
func NumberLessThanInput() interface{}
```

- *Type:* interface{}

---

##### `NumberLessThanOrEqualsInput`<sup>Optional</sup> <a name="NumberLessThanOrEqualsInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEqualsInput"></a>

```go
func NumberLessThanOrEqualsInput() interface{}
```

- *Type:* interface{}

---

##### `NumberNotInInput`<sup>Optional</sup> <a name="NumberNotInInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberNotInInput"></a>

```go
func NumberNotInInput() interface{}
```

- *Type:* interface{}

---

##### `NumberNotInRangeInput`<sup>Optional</sup> <a name="NumberNotInRangeInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRangeInput"></a>

```go
func NumberNotInRangeInput() interface{}
```

- *Type:* interface{}

---

##### `StringBeginsWithInput`<sup>Optional</sup> <a name="StringBeginsWithInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWithInput"></a>

```go
func StringBeginsWithInput() interface{}
```

- *Type:* interface{}

---

##### `StringContainsInput`<sup>Optional</sup> <a name="StringContainsInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringContainsInput"></a>

```go
func StringContainsInput() interface{}
```

- *Type:* interface{}

---

##### `StringEndsWithInput`<sup>Optional</sup> <a name="StringEndsWithInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWithInput"></a>

```go
func StringEndsWithInput() interface{}
```

- *Type:* interface{}

---

##### `StringInInput`<sup>Optional</sup> <a name="StringInInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringInInput"></a>

```go
func StringInInput() interface{}
```

- *Type:* interface{}

---

##### `StringNotBeginsWithInput`<sup>Optional</sup> <a name="StringNotBeginsWithInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWithInput"></a>

```go
func StringNotBeginsWithInput() interface{}
```

- *Type:* interface{}

---

##### `StringNotContainsInput`<sup>Optional</sup> <a name="StringNotContainsInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotContainsInput"></a>

```go
func StringNotContainsInput() interface{}
```

- *Type:* interface{}

---

##### `StringNotEndsWithInput`<sup>Optional</sup> <a name="StringNotEndsWithInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWithInput"></a>

```go
func StringNotEndsWithInput() interface{}
```

- *Type:* interface{}

---

##### `StringNotInInput`<sup>Optional</sup> <a name="StringNotInInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.stringNotInInput"></a>

```go
func StringNotInInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() EventgridSystemTopicEventSubscriptionAdvancedFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilter">EventgridSystemTopicEventSubscriptionAdvancedFilter</a>

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringContainsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringInList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringInOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference <a name="EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAdvancedFilterStringNotInOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference <a name="EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.resetMaxEventsPerBatch">ResetMaxEventsPerBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.resetPreferredBatchSizeInKilobytes">ResetPreferredBatchSizeInKilobytes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxEventsPerBatch` <a name="ResetMaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.resetMaxEventsPerBatch"></a>

```go
func ResetMaxEventsPerBatch()
```

##### `ResetPreferredBatchSizeInKilobytes` <a name="ResetPreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.resetPreferredBatchSizeInKilobytes"></a>

```go
func ResetPreferredBatchSizeInKilobytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.functionIdInput">FunctionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatchInput">MaxEventsPerBatchInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytesInput">PreferredBatchSizeInKilobytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatch">MaxEventsPerBatch</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytes">PreferredBatchSizeInKilobytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint">EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.functionIdInput"></a>

```go
func FunctionIdInput() *string
```

- *Type:* *string

---

##### `MaxEventsPerBatchInput`<sup>Optional</sup> <a name="MaxEventsPerBatchInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatchInput"></a>

```go
func MaxEventsPerBatchInput() *f64
```

- *Type:* *f64

---

##### `PreferredBatchSizeInKilobytesInput`<sup>Optional</sup> <a name="PreferredBatchSizeInKilobytesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytesInput"></a>

```go
func PreferredBatchSizeInKilobytesInput() *f64
```

- *Type:* *f64

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `MaxEventsPerBatch`<sup>Required</sup> <a name="MaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatch"></a>

```go
func MaxEventsPerBatch() *f64
```

- *Type:* *f64

---

##### `PreferredBatchSizeInKilobytes`<sup>Required</sup> <a name="PreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytes"></a>

```go
func PreferredBatchSizeInKilobytes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint">EventgridSystemTopicEventSubscriptionAzureFunctionEndpoint</a>

---


### EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference <a name="EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.resetUserAssignedIdentity">ResetUserAssignedIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentity` <a name="ResetUserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.resetUserAssignedIdentity"></a>

```go
func ResetUserAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentityInput">UserAssignedIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentity">UserAssignedIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity">EventgridSystemTopicEventSubscriptionDeadLetterIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityInput`<sup>Optional</sup> <a name="UserAssignedIdentityInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentityInput"></a>

```go
func UserAssignedIdentityInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserAssignedIdentity`<sup>Required</sup> <a name="UserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentity"></a>

```go
func UserAssignedIdentity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() EventgridSystemTopicEventSubscriptionDeadLetterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeadLetterIdentity">EventgridSystemTopicEventSubscriptionDeadLetterIdentity</a>

---


### EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference <a name="EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.resetUserAssignedIdentity">ResetUserAssignedIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentity` <a name="ResetUserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.resetUserAssignedIdentity"></a>

```go
func ResetUserAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentityInput">UserAssignedIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentity">UserAssignedIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity">EventgridSystemTopicEventSubscriptionDeliveryIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityInput`<sup>Optional</sup> <a name="UserAssignedIdentityInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentityInput"></a>

```go
func UserAssignedIdentityInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserAssignedIdentity`<sup>Required</sup> <a name="UserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentity"></a>

```go
func UserAssignedIdentity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() EventgridSystemTopicEventSubscriptionDeliveryIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryIdentity">EventgridSystemTopicEventSubscriptionDeliveryIdentity</a>

---


### EventgridSystemTopicEventSubscriptionDeliveryPropertyList <a name="EventgridSystemTopicEventSubscriptionDeliveryPropertyList" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionDeliveryPropertyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventgridSystemTopicEventSubscriptionDeliveryPropertyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.get"></a>

```go
func Get(index *f64) EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference <a name="EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.resetSourceField">ResetSourceField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetSourceField` <a name="ResetSourceField" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.resetSourceField"></a>

```go
func ResetSourceField()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.sourceFieldInput">SourceFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.secret">Secret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.sourceField">SourceField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `SourceFieldInput`<sup>Optional</sup> <a name="SourceFieldInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.sourceFieldInput"></a>

```go
func SourceFieldInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.secret"></a>

```go
func Secret() interface{}
```

- *Type:* interface{}

---

##### `SourceField`<sup>Required</sup> <a name="SourceField" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.sourceField"></a>

```go
func SourceField() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionDeliveryPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference <a name="EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLiveInput">EventTimeToLiveInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttemptsInput">MaxDeliveryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLive">EventTimeToLive</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy">EventgridSystemTopicEventSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTimeToLiveInput`<sup>Optional</sup> <a name="EventTimeToLiveInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLiveInput"></a>

```go
func EventTimeToLiveInput() *f64
```

- *Type:* *f64

---

##### `MaxDeliveryAttemptsInput`<sup>Optional</sup> <a name="MaxDeliveryAttemptsInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```go
func MaxDeliveryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `EventTimeToLive`<sup>Required</sup> <a name="EventTimeToLive" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLive"></a>

```go
func EventTimeToLive() *f64
```

- *Type:* *f64

---

##### `MaxDeliveryAttempts`<sup>Required</sup> <a name="MaxDeliveryAttempts" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttempts"></a>

```go
func MaxDeliveryAttempts() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() EventgridSystemTopicEventSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionRetryPolicy">EventgridSystemTopicEventSubscriptionRetryPolicy</a>

---


### EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference <a name="EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerNameInput">StorageBlobContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerName">StorageBlobContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination">EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `StorageBlobContainerNameInput`<sup>Optional</sup> <a name="StorageBlobContainerNameInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerNameInput"></a>

```go
func StorageBlobContainerNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `StorageBlobContainerName`<sup>Required</sup> <a name="StorageBlobContainerName" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerName"></a>

```go
func StorageBlobContainerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination">EventgridSystemTopicEventSubscriptionStorageBlobDeadLetterDestination</a>

---


### EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference <a name="EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.resetQueueMessageTimeToLiveInSeconds">ResetQueueMessageTimeToLiveInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueueMessageTimeToLiveInSeconds` <a name="ResetQueueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.resetQueueMessageTimeToLiveInSeconds"></a>

```go
func ResetQueueMessageTimeToLiveInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSecondsInput">QueueMessageTimeToLiveInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.queueNameInput">QueueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSeconds">QueueMessageTimeToLiveInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint">EventgridSystemTopicEventSubscriptionStorageQueueEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueueMessageTimeToLiveInSecondsInput`<sup>Optional</sup> <a name="QueueMessageTimeToLiveInSecondsInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSecondsInput"></a>

```go
func QueueMessageTimeToLiveInSecondsInput() *f64
```

- *Type:* *f64

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.queueNameInput"></a>

```go
func QueueNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `QueueMessageTimeToLiveInSeconds`<sup>Required</sup> <a name="QueueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSeconds"></a>

```go
func QueueMessageTimeToLiveInSeconds() *f64
```

- *Type:* *f64

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() EventgridSystemTopicEventSubscriptionStorageQueueEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionStorageQueueEndpoint">EventgridSystemTopicEventSubscriptionStorageQueueEndpoint</a>

---


### EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference <a name="EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionSubjectFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.resetSubjectBeginsWith">ResetSubjectBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.resetSubjectEndsWith">ResetSubjectEndsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.resetCaseSensitive"></a>

```go
func ResetCaseSensitive()
```

##### `ResetSubjectBeginsWith` <a name="ResetSubjectBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.resetSubjectBeginsWith"></a>

```go
func ResetSubjectBeginsWith()
```

##### `ResetSubjectEndsWith` <a name="ResetSubjectEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.resetSubjectEndsWith"></a>

```go
func ResetSubjectEndsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWithInput">SubjectBeginsWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWithInput">SubjectEndsWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWith">SubjectBeginsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWith">SubjectEndsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter">EventgridSystemTopicEventSubscriptionSubjectFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.caseSensitiveInput"></a>

```go
func CaseSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `SubjectBeginsWithInput`<sup>Optional</sup> <a name="SubjectBeginsWithInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWithInput"></a>

```go
func SubjectBeginsWithInput() *string
```

- *Type:* *string

---

##### `SubjectEndsWithInput`<sup>Optional</sup> <a name="SubjectEndsWithInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWithInput"></a>

```go
func SubjectEndsWithInput() *string
```

- *Type:* *string

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.caseSensitive"></a>

```go
func CaseSensitive() interface{}
```

- *Type:* interface{}

---

##### `SubjectBeginsWith`<sup>Required</sup> <a name="SubjectBeginsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWith"></a>

```go
func SubjectBeginsWith() *string
```

- *Type:* *string

---

##### `SubjectEndsWith`<sup>Required</sup> <a name="SubjectEndsWith" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWith"></a>

```go
func SubjectEndsWith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() EventgridSystemTopicEventSubscriptionSubjectFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionSubjectFilter">EventgridSystemTopicEventSubscriptionSubjectFilter</a>

---


### EventgridSystemTopicEventSubscriptionTimeoutsOutputReference <a name="EventgridSystemTopicEventSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridSystemTopicEventSubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference <a name="EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/eventgridsystemtopiceventsubscription"

eventgridsystemtopiceventsubscription.NewEventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryAppIdOrUri">ResetActiveDirectoryAppIdOrUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryTenantId">ResetActiveDirectoryTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resetMaxEventsPerBatch">ResetMaxEventsPerBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resetPreferredBatchSizeInKilobytes">ResetPreferredBatchSizeInKilobytes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveDirectoryAppIdOrUri` <a name="ResetActiveDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryAppIdOrUri"></a>

```go
func ResetActiveDirectoryAppIdOrUri()
```

##### `ResetActiveDirectoryTenantId` <a name="ResetActiveDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryTenantId"></a>

```go
func ResetActiveDirectoryTenantId()
```

##### `ResetMaxEventsPerBatch` <a name="ResetMaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resetMaxEventsPerBatch"></a>

```go
func ResetMaxEventsPerBatch()
```

##### `ResetPreferredBatchSizeInKilobytes` <a name="ResetPreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.resetPreferredBatchSizeInKilobytes"></a>

```go
func ResetPreferredBatchSizeInKilobytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUriInput">ActiveDirectoryAppIdOrUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantIdInput">ActiveDirectoryTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatchInput">MaxEventsPerBatchInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytesInput">PreferredBatchSizeInKilobytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUri">ActiveDirectoryAppIdOrUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantId">ActiveDirectoryTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatch">MaxEventsPerBatch</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytes">PreferredBatchSizeInKilobytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint">EventgridSystemTopicEventSubscriptionWebhookEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `ActiveDirectoryAppIdOrUriInput`<sup>Optional</sup> <a name="ActiveDirectoryAppIdOrUriInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUriInput"></a>

```go
func ActiveDirectoryAppIdOrUriInput() *string
```

- *Type:* *string

---

##### `ActiveDirectoryTenantIdInput`<sup>Optional</sup> <a name="ActiveDirectoryTenantIdInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantIdInput"></a>

```go
func ActiveDirectoryTenantIdInput() *string
```

- *Type:* *string

---

##### `MaxEventsPerBatchInput`<sup>Optional</sup> <a name="MaxEventsPerBatchInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatchInput"></a>

```go
func MaxEventsPerBatchInput() *f64
```

- *Type:* *f64

---

##### `PreferredBatchSizeInKilobytesInput`<sup>Optional</sup> <a name="PreferredBatchSizeInKilobytesInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytesInput"></a>

```go
func PreferredBatchSizeInKilobytesInput() *f64
```

- *Type:* *f64

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ActiveDirectoryAppIdOrUri`<sup>Required</sup> <a name="ActiveDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUri"></a>

```go
func ActiveDirectoryAppIdOrUri() *string
```

- *Type:* *string

---

##### `ActiveDirectoryTenantId`<sup>Required</sup> <a name="ActiveDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantId"></a>

```go
func ActiveDirectoryTenantId() *string
```

- *Type:* *string

---

##### `MaxEventsPerBatch`<sup>Required</sup> <a name="MaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatch"></a>

```go
func MaxEventsPerBatch() *f64
```

- *Type:* *f64

---

##### `PreferredBatchSizeInKilobytes`<sup>Required</sup> <a name="PreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytes"></a>

```go
func PreferredBatchSizeInKilobytes() *f64
```

- *Type:* *f64

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() EventgridSystemTopicEventSubscriptionWebhookEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridSystemTopicEventSubscription.EventgridSystemTopicEventSubscriptionWebhookEndpoint">EventgridSystemTopicEventSubscriptionWebhookEndpoint</a>

---



