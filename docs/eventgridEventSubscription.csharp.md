# `azurerm_eventgrid_event_subscription`

Refer to the Terraform Registory for docs: [`azurerm_eventgrid_event_subscription`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription).

# `eventgridEventSubscription` Submodule <a name="`eventgridEventSubscription` Submodule" id="@cdktf/provider-azurerm.eventgridEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridEventSubscription <a name="EventgridEventSubscription" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription azurerm_eventgrid_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscription(Construct Scope, string Id, EventgridEventSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig">EventgridEventSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig">EventgridEventSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAdvancedFilter">PutAdvancedFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAzureFunctionEndpoint">PutAzureFunctionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeadLetterIdentity">PutDeadLetterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryIdentity">PutDeliveryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryProperty">PutDeliveryProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageBlobDeadLetterDestination">PutStorageBlobDeadLetterDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageQueueEndpoint">PutStorageQueueEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putSubjectFilter">PutSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putWebhookEndpoint">PutWebhookEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAdvancedFilter">ResetAdvancedFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAdvancedFilteringOnArraysEnabled">ResetAdvancedFilteringOnArraysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAzureFunctionEndpoint">ResetAzureFunctionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeadLetterIdentity">ResetDeadLetterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeliveryIdentity">ResetDeliveryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeliveryProperty">ResetDeliveryProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetEventDeliverySchema">ResetEventDeliverySchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetEventhubEndpointId">ResetEventhubEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetExpirationTimeUtc">ResetExpirationTimeUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetHybridConnectionEndpointId">ResetHybridConnectionEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetIncludedEventTypes">ResetIncludedEventTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetServiceBusQueueEndpointId">ResetServiceBusQueueEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetServiceBusTopicEndpointId">ResetServiceBusTopicEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetStorageBlobDeadLetterDestination">ResetStorageBlobDeadLetterDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetStorageQueueEndpoint">ResetStorageQueueEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetSubjectFilter">ResetSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetWebhookEndpoint">ResetWebhookEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAdvancedFilter` <a name="PutAdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAdvancedFilter"></a>

```csharp
private void PutAdvancedFilter(EventgridEventSubscriptionAdvancedFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAdvancedFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

---

##### `PutAzureFunctionEndpoint` <a name="PutAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAzureFunctionEndpoint"></a>

```csharp
private void PutAzureFunctionEndpoint(EventgridEventSubscriptionAzureFunctionEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putAzureFunctionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

---

##### `PutDeadLetterIdentity` <a name="PutDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeadLetterIdentity"></a>

```csharp
private void PutDeadLetterIdentity(EventgridEventSubscriptionDeadLetterIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeadLetterIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

---

##### `PutDeliveryIdentity` <a name="PutDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryIdentity"></a>

```csharp
private void PutDeliveryIdentity(EventgridEventSubscriptionDeliveryIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

---

##### `PutDeliveryProperty` <a name="PutDeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryProperty"></a>

```csharp
private void PutDeliveryProperty(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putDeliveryProperty.parameter.value"></a>

- *Type:* object

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(EventgridEventSubscriptionRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

---

##### `PutStorageBlobDeadLetterDestination` <a name="PutStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageBlobDeadLetterDestination"></a>

```csharp
private void PutStorageBlobDeadLetterDestination(EventgridEventSubscriptionStorageBlobDeadLetterDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageBlobDeadLetterDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

---

##### `PutStorageQueueEndpoint` <a name="PutStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageQueueEndpoint"></a>

```csharp
private void PutStorageQueueEndpoint(EventgridEventSubscriptionStorageQueueEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putStorageQueueEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

---

##### `PutSubjectFilter` <a name="PutSubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putSubjectFilter"></a>

```csharp
private void PutSubjectFilter(EventgridEventSubscriptionSubjectFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putSubjectFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(EventgridEventSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a>

---

##### `PutWebhookEndpoint` <a name="PutWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putWebhookEndpoint"></a>

```csharp
private void PutWebhookEndpoint(EventgridEventSubscriptionWebhookEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.putWebhookEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

---

##### `ResetAdvancedFilter` <a name="ResetAdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAdvancedFilter"></a>

```csharp
private void ResetAdvancedFilter()
```

##### `ResetAdvancedFilteringOnArraysEnabled` <a name="ResetAdvancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAdvancedFilteringOnArraysEnabled"></a>

```csharp
private void ResetAdvancedFilteringOnArraysEnabled()
```

##### `ResetAzureFunctionEndpoint` <a name="ResetAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetAzureFunctionEndpoint"></a>

```csharp
private void ResetAzureFunctionEndpoint()
```

##### `ResetDeadLetterIdentity` <a name="ResetDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeadLetterIdentity"></a>

```csharp
private void ResetDeadLetterIdentity()
```

##### `ResetDeliveryIdentity` <a name="ResetDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeliveryIdentity"></a>

```csharp
private void ResetDeliveryIdentity()
```

##### `ResetDeliveryProperty` <a name="ResetDeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetDeliveryProperty"></a>

```csharp
private void ResetDeliveryProperty()
```

##### `ResetEventDeliverySchema` <a name="ResetEventDeliverySchema" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetEventDeliverySchema"></a>

```csharp
private void ResetEventDeliverySchema()
```

##### `ResetEventhubEndpointId` <a name="ResetEventhubEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetEventhubEndpointId"></a>

```csharp
private void ResetEventhubEndpointId()
```

##### `ResetExpirationTimeUtc` <a name="ResetExpirationTimeUtc" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetExpirationTimeUtc"></a>

```csharp
private void ResetExpirationTimeUtc()
```

##### `ResetHybridConnectionEndpointId` <a name="ResetHybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetHybridConnectionEndpointId"></a>

```csharp
private void ResetHybridConnectionEndpointId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludedEventTypes` <a name="ResetIncludedEventTypes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetIncludedEventTypes"></a>

```csharp
private void ResetIncludedEventTypes()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetServiceBusQueueEndpointId` <a name="ResetServiceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetServiceBusQueueEndpointId"></a>

```csharp
private void ResetServiceBusQueueEndpointId()
```

##### `ResetServiceBusTopicEndpointId` <a name="ResetServiceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetServiceBusTopicEndpointId"></a>

```csharp
private void ResetServiceBusTopicEndpointId()
```

##### `ResetStorageBlobDeadLetterDestination` <a name="ResetStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetStorageBlobDeadLetterDestination"></a>

```csharp
private void ResetStorageBlobDeadLetterDestination()
```

##### `ResetStorageQueueEndpoint` <a name="ResetStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetStorageQueueEndpoint"></a>

```csharp
private void ResetStorageQueueEndpoint()
```

##### `ResetSubjectFilter` <a name="ResetSubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetSubjectFilter"></a>

```csharp
private void ResetSubjectFilter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWebhookEndpoint` <a name="ResetWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.resetWebhookEndpoint"></a>

```csharp
private void ResetWebhookEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridEventSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridEventSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridEventSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilter">AdvancedFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference">EventgridEventSubscriptionAdvancedFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpoint">AzureFunctionEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference">EventgridEventSubscriptionAzureFunctionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentity">DeadLetterIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference">EventgridEventSubscriptionDeadLetterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentity">DeliveryIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference">EventgridEventSubscriptionDeliveryIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryProperty">DeliveryProperty</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList">EventgridEventSubscriptionDeliveryPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference">EventgridEventSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestination">StorageBlobDeadLetterDestination</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference">EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpoint">StorageQueueEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference">EventgridEventSubscriptionStorageQueueEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilter">SubjectFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference">EventgridEventSubscriptionSubjectFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference">EventgridEventSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpoint">WebhookEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference">EventgridEventSubscriptionWebhookEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabledInput">AdvancedFilteringOnArraysEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilterInput">AdvancedFilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpointInput">AzureFunctionEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentityInput">DeadLetterIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentityInput">DeliveryIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryPropertyInput">DeliveryPropertyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchemaInput">EventDeliverySchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointIdInput">EventhubEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtcInput">ExpirationTimeUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointIdInput">HybridConnectionEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypesInput">IncludedEventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointIdInput">ServiceBusQueueEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointIdInput">ServiceBusTopicEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestinationInput">StorageBlobDeadLetterDestinationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpointInput">StorageQueueEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilterInput">SubjectFilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpointInput">WebhookEndpointInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabled">AdvancedFilteringOnArraysEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchema">EventDeliverySchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointId">EventhubEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtc">ExpirationTimeUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointId">HybridConnectionEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypes">IncludedEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointId">ServiceBusQueueEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointId">ServiceBusTopicEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedFilter`<sup>Required</sup> <a name="AdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilter"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterOutputReference AdvancedFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference">EventgridEventSubscriptionAdvancedFilterOutputReference</a>

---

##### `AzureFunctionEndpoint`<sup>Required</sup> <a name="AzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpoint"></a>

```csharp
public EventgridEventSubscriptionAzureFunctionEndpointOutputReference AzureFunctionEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference">EventgridEventSubscriptionAzureFunctionEndpointOutputReference</a>

---

##### `DeadLetterIdentity`<sup>Required</sup> <a name="DeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentity"></a>

```csharp
public EventgridEventSubscriptionDeadLetterIdentityOutputReference DeadLetterIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference">EventgridEventSubscriptionDeadLetterIdentityOutputReference</a>

---

##### `DeliveryIdentity`<sup>Required</sup> <a name="DeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentity"></a>

```csharp
public EventgridEventSubscriptionDeliveryIdentityOutputReference DeliveryIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference">EventgridEventSubscriptionDeliveryIdentityOutputReference</a>

---

##### `DeliveryProperty`<sup>Required</sup> <a name="DeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryProperty"></a>

```csharp
public EventgridEventSubscriptionDeliveryPropertyList DeliveryProperty { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList">EventgridEventSubscriptionDeliveryPropertyList</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicy"></a>

```csharp
public EventgridEventSubscriptionRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference">EventgridEventSubscriptionRetryPolicyOutputReference</a>

---

##### `StorageBlobDeadLetterDestination`<sup>Required</sup> <a name="StorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestination"></a>

```csharp
public EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference StorageBlobDeadLetterDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference">EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference</a>

---

##### `StorageQueueEndpoint`<sup>Required</sup> <a name="StorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpoint"></a>

```csharp
public EventgridEventSubscriptionStorageQueueEndpointOutputReference StorageQueueEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference">EventgridEventSubscriptionStorageQueueEndpointOutputReference</a>

---

##### `SubjectFilter`<sup>Required</sup> <a name="SubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilter"></a>

```csharp
public EventgridEventSubscriptionSubjectFilterOutputReference SubjectFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference">EventgridEventSubscriptionSubjectFilterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeouts"></a>

```csharp
public EventgridEventSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference">EventgridEventSubscriptionTimeoutsOutputReference</a>

---

##### `WebhookEndpoint`<sup>Required</sup> <a name="WebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpoint"></a>

```csharp
public EventgridEventSubscriptionWebhookEndpointOutputReference WebhookEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference">EventgridEventSubscriptionWebhookEndpointOutputReference</a>

---

##### `AdvancedFilteringOnArraysEnabledInput`<sup>Optional</sup> <a name="AdvancedFilteringOnArraysEnabledInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabledInput"></a>

```csharp
public object AdvancedFilteringOnArraysEnabledInput { get; }
```

- *Type:* object

---

##### `AdvancedFilterInput`<sup>Optional</sup> <a name="AdvancedFilterInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilterInput"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilter AdvancedFilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

---

##### `AzureFunctionEndpointInput`<sup>Optional</sup> <a name="AzureFunctionEndpointInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.azureFunctionEndpointInput"></a>

```csharp
public EventgridEventSubscriptionAzureFunctionEndpoint AzureFunctionEndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

---

##### `DeadLetterIdentityInput`<sup>Optional</sup> <a name="DeadLetterIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deadLetterIdentityInput"></a>

```csharp
public EventgridEventSubscriptionDeadLetterIdentity DeadLetterIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

---

##### `DeliveryIdentityInput`<sup>Optional</sup> <a name="DeliveryIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryIdentityInput"></a>

```csharp
public EventgridEventSubscriptionDeliveryIdentity DeliveryIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

---

##### `DeliveryPropertyInput`<sup>Optional</sup> <a name="DeliveryPropertyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.deliveryPropertyInput"></a>

```csharp
public object DeliveryPropertyInput { get; }
```

- *Type:* object

---

##### `EventDeliverySchemaInput`<sup>Optional</sup> <a name="EventDeliverySchemaInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchemaInput"></a>

```csharp
public string EventDeliverySchemaInput { get; }
```

- *Type:* string

---

##### `EventhubEndpointIdInput`<sup>Optional</sup> <a name="EventhubEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointIdInput"></a>

```csharp
public string EventhubEndpointIdInput { get; }
```

- *Type:* string

---

##### `ExpirationTimeUtcInput`<sup>Optional</sup> <a name="ExpirationTimeUtcInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtcInput"></a>

```csharp
public string ExpirationTimeUtcInput { get; }
```

- *Type:* string

---

##### `HybridConnectionEndpointIdInput`<sup>Optional</sup> <a name="HybridConnectionEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointIdInput"></a>

```csharp
public string HybridConnectionEndpointIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludedEventTypesInput`<sup>Optional</sup> <a name="IncludedEventTypesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypesInput"></a>

```csharp
public string[] IncludedEventTypesInput { get; }
```

- *Type:* string[]

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.retryPolicyInput"></a>

```csharp
public EventgridEventSubscriptionRetryPolicy RetryPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ServiceBusQueueEndpointIdInput`<sup>Optional</sup> <a name="ServiceBusQueueEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointIdInput"></a>

```csharp
public string ServiceBusQueueEndpointIdInput { get; }
```

- *Type:* string

---

##### `ServiceBusTopicEndpointIdInput`<sup>Optional</sup> <a name="ServiceBusTopicEndpointIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointIdInput"></a>

```csharp
public string ServiceBusTopicEndpointIdInput { get; }
```

- *Type:* string

---

##### `StorageBlobDeadLetterDestinationInput`<sup>Optional</sup> <a name="StorageBlobDeadLetterDestinationInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageBlobDeadLetterDestinationInput"></a>

```csharp
public EventgridEventSubscriptionStorageBlobDeadLetterDestination StorageBlobDeadLetterDestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

---

##### `StorageQueueEndpointInput`<sup>Optional</sup> <a name="StorageQueueEndpointInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.storageQueueEndpointInput"></a>

```csharp
public EventgridEventSubscriptionStorageQueueEndpoint StorageQueueEndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

---

##### `SubjectFilterInput`<sup>Optional</sup> <a name="SubjectFilterInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.subjectFilterInput"></a>

```csharp
public EventgridEventSubscriptionSubjectFilter SubjectFilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WebhookEndpointInput`<sup>Optional</sup> <a name="WebhookEndpointInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.webhookEndpointInput"></a>

```csharp
public EventgridEventSubscriptionWebhookEndpoint WebhookEndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

---

##### `AdvancedFilteringOnArraysEnabled`<sup>Required</sup> <a name="AdvancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.advancedFilteringOnArraysEnabled"></a>

```csharp
public object AdvancedFilteringOnArraysEnabled { get; }
```

- *Type:* object

---

##### `EventDeliverySchema`<sup>Required</sup> <a name="EventDeliverySchema" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventDeliverySchema"></a>

```csharp
public string EventDeliverySchema { get; }
```

- *Type:* string

---

##### `EventhubEndpointId`<sup>Required</sup> <a name="EventhubEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.eventhubEndpointId"></a>

```csharp
public string EventhubEndpointId { get; }
```

- *Type:* string

---

##### `ExpirationTimeUtc`<sup>Required</sup> <a name="ExpirationTimeUtc" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.expirationTimeUtc"></a>

```csharp
public string ExpirationTimeUtc { get; }
```

- *Type:* string

---

##### `HybridConnectionEndpointId`<sup>Required</sup> <a name="HybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.hybridConnectionEndpointId"></a>

```csharp
public string HybridConnectionEndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludedEventTypes`<sup>Required</sup> <a name="IncludedEventTypes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.includedEventTypes"></a>

```csharp
public string[] IncludedEventTypes { get; }
```

- *Type:* string[]

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `ServiceBusQueueEndpointId`<sup>Required</sup> <a name="ServiceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusQueueEndpointId"></a>

```csharp
public string ServiceBusQueueEndpointId { get; }
```

- *Type:* string

---

##### `ServiceBusTopicEndpointId`<sup>Required</sup> <a name="ServiceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.serviceBusTopicEndpointId"></a>

```csharp
public string ServiceBusTopicEndpointId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridEventSubscriptionAdvancedFilter <a name="EventgridEventSubscriptionAdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilter {
    object BoolEquals = null,
    object IsNotNull = null,
    object IsNullOrUndefined = null,
    object NumberGreaterThan = null,
    object NumberGreaterThanOrEquals = null,
    object NumberIn = null,
    object NumberInRange = null,
    object NumberLessThan = null,
    object NumberLessThanOrEquals = null,
    object NumberNotIn = null,
    object NumberNotInRange = null,
    object StringBeginsWith = null,
    object StringContains = null,
    object StringEndsWith = null,
    object StringIn = null,
    object StringNotBeginsWith = null,
    object StringNotContains = null,
    object StringNotEndsWith = null,
    object StringNotIn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.boolEquals">BoolEquals</a></code> | <code>object</code> | bool_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNotNull">IsNotNull</a></code> | <code>object</code> | is_not_null block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNullOrUndefined">IsNullOrUndefined</a></code> | <code>object</code> | is_null_or_undefined block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThan">NumberGreaterThan</a></code> | <code>object</code> | number_greater_than block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThanOrEquals">NumberGreaterThanOrEquals</a></code> | <code>object</code> | number_greater_than_or_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberIn">NumberIn</a></code> | <code>object</code> | number_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberInRange">NumberInRange</a></code> | <code>object</code> | number_in_range block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThan">NumberLessThan</a></code> | <code>object</code> | number_less_than block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThanOrEquals">NumberLessThanOrEquals</a></code> | <code>object</code> | number_less_than_or_equals block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotIn">NumberNotIn</a></code> | <code>object</code> | number_not_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotInRange">NumberNotInRange</a></code> | <code>object</code> | number_not_in_range block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringBeginsWith">StringBeginsWith</a></code> | <code>object</code> | string_begins_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringContains">StringContains</a></code> | <code>object</code> | string_contains block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringEndsWith">StringEndsWith</a></code> | <code>object</code> | string_ends_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringIn">StringIn</a></code> | <code>object</code> | string_in block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotBeginsWith">StringNotBeginsWith</a></code> | <code>object</code> | string_not_begins_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotContains">StringNotContains</a></code> | <code>object</code> | string_not_contains block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotEndsWith">StringNotEndsWith</a></code> | <code>object</code> | string_not_ends_with block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotIn">StringNotIn</a></code> | <code>object</code> | string_not_in block. |

---

##### `BoolEquals`<sup>Optional</sup> <a name="BoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.boolEquals"></a>

```csharp
public object BoolEquals { get; set; }
```

- *Type:* object

bool_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#bool_equals EventgridEventSubscription#bool_equals}

---

##### `IsNotNull`<sup>Optional</sup> <a name="IsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNotNull"></a>

```csharp
public object IsNotNull { get; set; }
```

- *Type:* object

is_not_null block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#is_not_null EventgridEventSubscription#is_not_null}

---

##### `IsNullOrUndefined`<sup>Optional</sup> <a name="IsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.isNullOrUndefined"></a>

```csharp
public object IsNullOrUndefined { get; set; }
```

- *Type:* object

is_null_or_undefined block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#is_null_or_undefined EventgridEventSubscription#is_null_or_undefined}

---

##### `NumberGreaterThan`<sup>Optional</sup> <a name="NumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThan"></a>

```csharp
public object NumberGreaterThan { get; set; }
```

- *Type:* object

number_greater_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#number_greater_than EventgridEventSubscription#number_greater_than}

---

##### `NumberGreaterThanOrEquals`<sup>Optional</sup> <a name="NumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberGreaterThanOrEquals"></a>

```csharp
public object NumberGreaterThanOrEquals { get; set; }
```

- *Type:* object

number_greater_than_or_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#number_greater_than_or_equals EventgridEventSubscription#number_greater_than_or_equals}

---

##### `NumberIn`<sup>Optional</sup> <a name="NumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberIn"></a>

```csharp
public object NumberIn { get; set; }
```

- *Type:* object

number_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#number_in EventgridEventSubscription#number_in}

---

##### `NumberInRange`<sup>Optional</sup> <a name="NumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberInRange"></a>

```csharp
public object NumberInRange { get; set; }
```

- *Type:* object

number_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#number_in_range EventgridEventSubscription#number_in_range}

---

##### `NumberLessThan`<sup>Optional</sup> <a name="NumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThan"></a>

```csharp
public object NumberLessThan { get; set; }
```

- *Type:* object

number_less_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#number_less_than EventgridEventSubscription#number_less_than}

---

##### `NumberLessThanOrEquals`<sup>Optional</sup> <a name="NumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberLessThanOrEquals"></a>

```csharp
public object NumberLessThanOrEquals { get; set; }
```

- *Type:* object

number_less_than_or_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#number_less_than_or_equals EventgridEventSubscription#number_less_than_or_equals}

---

##### `NumberNotIn`<sup>Optional</sup> <a name="NumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotIn"></a>

```csharp
public object NumberNotIn { get; set; }
```

- *Type:* object

number_not_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#number_not_in EventgridEventSubscription#number_not_in}

---

##### `NumberNotInRange`<sup>Optional</sup> <a name="NumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.numberNotInRange"></a>

```csharp
public object NumberNotInRange { get; set; }
```

- *Type:* object

number_not_in_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#number_not_in_range EventgridEventSubscription#number_not_in_range}

---

##### `StringBeginsWith`<sup>Optional</sup> <a name="StringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringBeginsWith"></a>

```csharp
public object StringBeginsWith { get; set; }
```

- *Type:* object

string_begins_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#string_begins_with EventgridEventSubscription#string_begins_with}

---

##### `StringContains`<sup>Optional</sup> <a name="StringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringContains"></a>

```csharp
public object StringContains { get; set; }
```

- *Type:* object

string_contains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#string_contains EventgridEventSubscription#string_contains}

---

##### `StringEndsWith`<sup>Optional</sup> <a name="StringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringEndsWith"></a>

```csharp
public object StringEndsWith { get; set; }
```

- *Type:* object

string_ends_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#string_ends_with EventgridEventSubscription#string_ends_with}

---

##### `StringIn`<sup>Optional</sup> <a name="StringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringIn"></a>

```csharp
public object StringIn { get; set; }
```

- *Type:* object

string_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#string_in EventgridEventSubscription#string_in}

---

##### `StringNotBeginsWith`<sup>Optional</sup> <a name="StringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotBeginsWith"></a>

```csharp
public object StringNotBeginsWith { get; set; }
```

- *Type:* object

string_not_begins_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#string_not_begins_with EventgridEventSubscription#string_not_begins_with}

---

##### `StringNotContains`<sup>Optional</sup> <a name="StringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotContains"></a>

```csharp
public object StringNotContains { get; set; }
```

- *Type:* object

string_not_contains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#string_not_contains EventgridEventSubscription#string_not_contains}

---

##### `StringNotEndsWith`<sup>Optional</sup> <a name="StringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotEndsWith"></a>

```csharp
public object StringNotEndsWith { get; set; }
```

- *Type:* object

string_not_ends_with block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#string_not_ends_with EventgridEventSubscription#string_not_ends_with}

---

##### `StringNotIn`<sup>Optional</sup> <a name="StringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter.property.stringNotIn"></a>

```csharp
public object StringNotIn { get; set; }
```

- *Type:* object

string_not_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#string_not_in EventgridEventSubscription#string_not_in}

---

### EventgridEventSubscriptionAdvancedFilterBoolEquals <a name="EventgridEventSubscriptionAdvancedFilterBoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterBoolEquals {
    string Key,
    object Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.value">Value</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEquals.property.value"></a>

```csharp
public object Value { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterIsNotNull <a name="EventgridEventSubscriptionAdvancedFilterIsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterIsNotNull {
    string Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNull.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

### EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined <a name="EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined {
    string Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

### EventgridEventSubscriptionAdvancedFilterNumberGreaterThan <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberGreaterThan {
    string Key,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThan.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals {
    string Key,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberIn <a name="EventgridEventSubscriptionAdvancedFilterNumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberIn {
    string Key,
    double[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.values">Values</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberIn.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterNumberInRange <a name="EventgridEventSubscriptionAdvancedFilterNumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberInRange {
    string Key,
    object Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.values">Values</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRange.property.values"></a>

```csharp
public object Values { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterNumberLessThan <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberLessThan {
    string Key,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThan.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals {
    string Key,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionAdvancedFilterNumberNotIn <a name="EventgridEventSubscriptionAdvancedFilterNumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberNotIn {
    string Key,
    double[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.values">Values</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotIn.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterNumberNotInRange <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberNotInRange {
    string Key,
    object Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.values">Values</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRange.property.values"></a>

```csharp
public object Values { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringBeginsWith <a name="EventgridEventSubscriptionAdvancedFilterStringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringBeginsWith {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWith.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringContains <a name="EventgridEventSubscriptionAdvancedFilterStringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringContains {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContains.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringEndsWith <a name="EventgridEventSubscriptionAdvancedFilterStringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringEndsWith {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWith.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringIn <a name="EventgridEventSubscriptionAdvancedFilterStringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringIn {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringIn.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith <a name="EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotContains <a name="EventgridEventSubscriptionAdvancedFilterStringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotContains {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContains.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotEndsWith <a name="EventgridEventSubscriptionAdvancedFilterStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotEndsWith {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWith.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAdvancedFilterStringNotIn <a name="EventgridEventSubscriptionAdvancedFilterStringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotIn {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#key EventgridEventSubscription#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotIn.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#values EventgridEventSubscription#values}.

---

### EventgridEventSubscriptionAzureFunctionEndpoint <a name="EventgridEventSubscriptionAzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAzureFunctionEndpoint {
    string FunctionId,
    double MaxEventsPerBatch = null,
    double PreferredBatchSizeInKilobytes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.functionId">FunctionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#function_id EventgridEventSubscription#function_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.maxEventsPerBatch">MaxEventsPerBatch</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.preferredBatchSizeInKilobytes">PreferredBatchSizeInKilobytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}. |

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.functionId"></a>

```csharp
public string FunctionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#function_id EventgridEventSubscription#function_id}.

---

##### `MaxEventsPerBatch`<sup>Optional</sup> <a name="MaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.maxEventsPerBatch"></a>

```csharp
public double MaxEventsPerBatch { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}.

---

##### `PreferredBatchSizeInKilobytes`<sup>Optional</sup> <a name="PreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint.property.preferredBatchSizeInKilobytes"></a>

```csharp
public double PreferredBatchSizeInKilobytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}.

---

### EventgridEventSubscriptionConfig <a name="EventgridEventSubscriptionConfig" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Scope,
    EventgridEventSubscriptionAdvancedFilter AdvancedFilter = null,
    object AdvancedFilteringOnArraysEnabled = null,
    EventgridEventSubscriptionAzureFunctionEndpoint AzureFunctionEndpoint = null,
    EventgridEventSubscriptionDeadLetterIdentity DeadLetterIdentity = null,
    EventgridEventSubscriptionDeliveryIdentity DeliveryIdentity = null,
    object DeliveryProperty = null,
    string EventDeliverySchema = null,
    string EventhubEndpointId = null,
    string ExpirationTimeUtc = null,
    string HybridConnectionEndpointId = null,
    string Id = null,
    string[] IncludedEventTypes = null,
    string[] Labels = null,
    EventgridEventSubscriptionRetryPolicy RetryPolicy = null,
    string ServiceBusQueueEndpointId = null,
    string ServiceBusTopicEndpointId = null,
    EventgridEventSubscriptionStorageBlobDeadLetterDestination StorageBlobDeadLetterDestination = null,
    EventgridEventSubscriptionStorageQueueEndpoint StorageQueueEndpoint = null,
    EventgridEventSubscriptionSubjectFilter SubjectFilter = null,
    EventgridEventSubscriptionTimeouts Timeouts = null,
    EventgridEventSubscriptionWebhookEndpoint WebhookEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#name EventgridEventSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#scope EventgridEventSubscription#scope}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilter">AdvancedFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a></code> | advanced_filter block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilteringOnArraysEnabled">AdvancedFilteringOnArraysEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.azureFunctionEndpoint">AzureFunctionEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a></code> | azure_function_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deadLetterIdentity">DeadLetterIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a></code> | dead_letter_identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryIdentity">DeliveryIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a></code> | delivery_identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryProperty">DeliveryProperty</a></code> | <code>object</code> | delivery_property block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventDeliverySchema">EventDeliverySchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#event_delivery_schema EventgridEventSubscription#event_delivery_schema}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventhubEndpointId">EventhubEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.expirationTimeUtc">ExpirationTimeUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#expiration_time_utc EventgridEventSubscription#expiration_time_utc}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.hybridConnectionEndpointId">HybridConnectionEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#id EventgridEventSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.includedEventTypes">IncludedEventTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#included_event_types EventgridEventSubscription#included_event_types}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.labels">Labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#labels EventgridEventSubscription#labels}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusQueueEndpointId">ServiceBusQueueEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusTopicEndpointId">ServiceBusTopicEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageBlobDeadLetterDestination">StorageBlobDeadLetterDestination</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a></code> | storage_blob_dead_letter_destination block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageQueueEndpoint">StorageQueueEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a></code> | storage_queue_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.subjectFilter">SubjectFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a></code> | subject_filter block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.webhookEndpoint">WebhookEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a></code> | webhook_endpoint block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#name EventgridEventSubscription#name}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#scope EventgridEventSubscription#scope}.

---

##### `AdvancedFilter`<sup>Optional</sup> <a name="AdvancedFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilter"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilter AdvancedFilter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

advanced_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#advanced_filter EventgridEventSubscription#advanced_filter}

---

##### `AdvancedFilteringOnArraysEnabled`<sup>Optional</sup> <a name="AdvancedFilteringOnArraysEnabled" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.advancedFilteringOnArraysEnabled"></a>

```csharp
public object AdvancedFilteringOnArraysEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#advanced_filtering_on_arrays_enabled EventgridEventSubscription#advanced_filtering_on_arrays_enabled}.

---

##### `AzureFunctionEndpoint`<sup>Optional</sup> <a name="AzureFunctionEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.azureFunctionEndpoint"></a>

```csharp
public EventgridEventSubscriptionAzureFunctionEndpoint AzureFunctionEndpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

azure_function_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#azure_function_endpoint EventgridEventSubscription#azure_function_endpoint}

---

##### `DeadLetterIdentity`<sup>Optional</sup> <a name="DeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deadLetterIdentity"></a>

```csharp
public EventgridEventSubscriptionDeadLetterIdentity DeadLetterIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

dead_letter_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#dead_letter_identity EventgridEventSubscription#dead_letter_identity}

---

##### `DeliveryIdentity`<sup>Optional</sup> <a name="DeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryIdentity"></a>

```csharp
public EventgridEventSubscriptionDeliveryIdentity DeliveryIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

delivery_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#delivery_identity EventgridEventSubscription#delivery_identity}

---

##### `DeliveryProperty`<sup>Optional</sup> <a name="DeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.deliveryProperty"></a>

```csharp
public object DeliveryProperty { get; set; }
```

- *Type:* object

delivery_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#delivery_property EventgridEventSubscription#delivery_property}

---

##### `EventDeliverySchema`<sup>Optional</sup> <a name="EventDeliverySchema" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventDeliverySchema"></a>

```csharp
public string EventDeliverySchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#event_delivery_schema EventgridEventSubscription#event_delivery_schema}.

---

##### `EventhubEndpointId`<sup>Optional</sup> <a name="EventhubEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.eventhubEndpointId"></a>

```csharp
public string EventhubEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}.

---

##### `ExpirationTimeUtc`<sup>Optional</sup> <a name="ExpirationTimeUtc" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.expirationTimeUtc"></a>

```csharp
public string ExpirationTimeUtc { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#expiration_time_utc EventgridEventSubscription#expiration_time_utc}.

---

##### `HybridConnectionEndpointId`<sup>Optional</sup> <a name="HybridConnectionEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.hybridConnectionEndpointId"></a>

```csharp
public string HybridConnectionEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#id EventgridEventSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludedEventTypes`<sup>Optional</sup> <a name="IncludedEventTypes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.includedEventTypes"></a>

```csharp
public string[] IncludedEventTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#included_event_types EventgridEventSubscription#included_event_types}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#labels EventgridEventSubscription#labels}.

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.retryPolicy"></a>

```csharp
public EventgridEventSubscriptionRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#retry_policy EventgridEventSubscription#retry_policy}

---

##### `ServiceBusQueueEndpointId`<sup>Optional</sup> <a name="ServiceBusQueueEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusQueueEndpointId"></a>

```csharp
public string ServiceBusQueueEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}.

---

##### `ServiceBusTopicEndpointId`<sup>Optional</sup> <a name="ServiceBusTopicEndpointId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.serviceBusTopicEndpointId"></a>

```csharp
public string ServiceBusTopicEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}.

---

##### `StorageBlobDeadLetterDestination`<sup>Optional</sup> <a name="StorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageBlobDeadLetterDestination"></a>

```csharp
public EventgridEventSubscriptionStorageBlobDeadLetterDestination StorageBlobDeadLetterDestination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

storage_blob_dead_letter_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#storage_blob_dead_letter_destination EventgridEventSubscription#storage_blob_dead_letter_destination}

---

##### `StorageQueueEndpoint`<sup>Optional</sup> <a name="StorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.storageQueueEndpoint"></a>

```csharp
public EventgridEventSubscriptionStorageQueueEndpoint StorageQueueEndpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

storage_queue_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#storage_queue_endpoint EventgridEventSubscription#storage_queue_endpoint}

---

##### `SubjectFilter`<sup>Optional</sup> <a name="SubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.subjectFilter"></a>

```csharp
public EventgridEventSubscriptionSubjectFilter SubjectFilter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

subject_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#subject_filter EventgridEventSubscription#subject_filter}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.timeouts"></a>

```csharp
public EventgridEventSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts">EventgridEventSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#timeouts EventgridEventSubscription#timeouts}

---

##### `WebhookEndpoint`<sup>Optional</sup> <a name="WebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionConfig.property.webhookEndpoint"></a>

```csharp
public EventgridEventSubscriptionWebhookEndpoint WebhookEndpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

webhook_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#webhook_endpoint EventgridEventSubscription#webhook_endpoint}

---

### EventgridEventSubscriptionDeadLetterIdentity <a name="EventgridEventSubscriptionDeadLetterIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionDeadLetterIdentity {
    string Type,
    string UserAssignedIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.userAssignedIdentity">UserAssignedIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}.

---

##### `UserAssignedIdentity`<sup>Optional</sup> <a name="UserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity.property.userAssignedIdentity"></a>

```csharp
public string UserAssignedIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}.

---

### EventgridEventSubscriptionDeliveryIdentity <a name="EventgridEventSubscriptionDeliveryIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionDeliveryIdentity {
    string Type,
    string UserAssignedIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.userAssignedIdentity">UserAssignedIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}.

---

##### `UserAssignedIdentity`<sup>Optional</sup> <a name="UserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity.property.userAssignedIdentity"></a>

```csharp
public string UserAssignedIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#user_assigned_identity EventgridEventSubscription#user_assigned_identity}.

---

### EventgridEventSubscriptionDeliveryProperty <a name="EventgridEventSubscriptionDeliveryProperty" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionDeliveryProperty {
    string HeaderName,
    string Type,
    object Secret = null,
    string SourceField = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.headerName">HeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#header_name EventgridEventSubscription#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.secret">Secret</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#secret EventgridEventSubscription#secret}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.sourceField">SourceField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#source_field EventgridEventSubscription#source_field}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#header_name EventgridEventSubscription#header_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#type EventgridEventSubscription#type}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.secret"></a>

```csharp
public object Secret { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#secret EventgridEventSubscription#secret}.

---

##### `SourceField`<sup>Optional</sup> <a name="SourceField" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.sourceField"></a>

```csharp
public string SourceField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#source_field EventgridEventSubscription#source_field}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryProperty.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#value EventgridEventSubscription#value}.

---

### EventgridEventSubscriptionRetryPolicy <a name="EventgridEventSubscriptionRetryPolicy" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionRetryPolicy {
    double EventTimeToLive,
    double MaxDeliveryAttempts
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.eventTimeToLive">EventTimeToLive</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#event_time_to_live EventgridEventSubscription#event_time_to_live}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#max_delivery_attempts EventgridEventSubscription#max_delivery_attempts}. |

---

##### `EventTimeToLive`<sup>Required</sup> <a name="EventTimeToLive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.eventTimeToLive"></a>

```csharp
public double EventTimeToLive { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#event_time_to_live EventgridEventSubscription#event_time_to_live}.

---

##### `MaxDeliveryAttempts`<sup>Required</sup> <a name="MaxDeliveryAttempts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy.property.maxDeliveryAttempts"></a>

```csharp
public double MaxDeliveryAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#max_delivery_attempts EventgridEventSubscription#max_delivery_attempts}.

---

### EventgridEventSubscriptionStorageBlobDeadLetterDestination <a name="EventgridEventSubscriptionStorageBlobDeadLetterDestination" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionStorageBlobDeadLetterDestination {
    string StorageAccountId,
    string StorageBlobContainerName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageBlobContainerName">StorageBlobContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#storage_blob_container_name EventgridEventSubscription#storage_blob_container_name}. |

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}.

---

##### `StorageBlobContainerName`<sup>Required</sup> <a name="StorageBlobContainerName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination.property.storageBlobContainerName"></a>

```csharp
public string StorageBlobContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#storage_blob_container_name EventgridEventSubscription#storage_blob_container_name}.

---

### EventgridEventSubscriptionStorageQueueEndpoint <a name="EventgridEventSubscriptionStorageQueueEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionStorageQueueEndpoint {
    string QueueName,
    string StorageAccountId,
    double QueueMessageTimeToLiveInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueName">QueueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#queue_name EventgridEventSubscription#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueMessageTimeToLiveInSeconds">QueueMessageTimeToLiveInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#queue_message_time_to_live_in_seconds EventgridEventSubscription#queue_message_time_to_live_in_seconds}. |

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueName"></a>

```csharp
public string QueueName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#queue_name EventgridEventSubscription#queue_name}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#storage_account_id EventgridEventSubscription#storage_account_id}.

---

##### `QueueMessageTimeToLiveInSeconds`<sup>Optional</sup> <a name="QueueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint.property.queueMessageTimeToLiveInSeconds"></a>

```csharp
public double QueueMessageTimeToLiveInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#queue_message_time_to_live_in_seconds EventgridEventSubscription#queue_message_time_to_live_in_seconds}.

---

### EventgridEventSubscriptionSubjectFilter <a name="EventgridEventSubscriptionSubjectFilter" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionSubjectFilter {
    object CaseSensitive = null,
    string SubjectBeginsWith = null,
    string SubjectEndsWith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.caseSensitive">CaseSensitive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#case_sensitive EventgridEventSubscription#case_sensitive}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectBeginsWith">SubjectBeginsWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#subject_begins_with EventgridEventSubscription#subject_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectEndsWith">SubjectEndsWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#subject_ends_with EventgridEventSubscription#subject_ends_with}. |

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.caseSensitive"></a>

```csharp
public object CaseSensitive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#case_sensitive EventgridEventSubscription#case_sensitive}.

---

##### `SubjectBeginsWith`<sup>Optional</sup> <a name="SubjectBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectBeginsWith"></a>

```csharp
public string SubjectBeginsWith { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#subject_begins_with EventgridEventSubscription#subject_begins_with}.

---

##### `SubjectEndsWith`<sup>Optional</sup> <a name="SubjectEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter.property.subjectEndsWith"></a>

```csharp
public string SubjectEndsWith { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#subject_ends_with EventgridEventSubscription#subject_ends_with}.

---

### EventgridEventSubscriptionTimeouts <a name="EventgridEventSubscriptionTimeouts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#create EventgridEventSubscription#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#delete EventgridEventSubscription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#read EventgridEventSubscription#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#update EventgridEventSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#create EventgridEventSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#delete EventgridEventSubscription#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#read EventgridEventSubscription#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#update EventgridEventSubscription#update}.

---

### EventgridEventSubscriptionWebhookEndpoint <a name="EventgridEventSubscriptionWebhookEndpoint" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionWebhookEndpoint {
    string Url,
    string ActiveDirectoryAppIdOrUri = null,
    string ActiveDirectoryTenantId = null,
    double MaxEventsPerBatch = null,
    double PreferredBatchSizeInKilobytes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#url EventgridEventSubscription#url}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryAppIdOrUri">ActiveDirectoryAppIdOrUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#active_directory_app_id_or_uri EventgridEventSubscription#active_directory_app_id_or_uri}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryTenantId">ActiveDirectoryTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#active_directory_tenant_id EventgridEventSubscription#active_directory_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.maxEventsPerBatch">MaxEventsPerBatch</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.preferredBatchSizeInKilobytes">PreferredBatchSizeInKilobytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#url EventgridEventSubscription#url}.

---

##### `ActiveDirectoryAppIdOrUri`<sup>Optional</sup> <a name="ActiveDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryAppIdOrUri"></a>

```csharp
public string ActiveDirectoryAppIdOrUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#active_directory_app_id_or_uri EventgridEventSubscription#active_directory_app_id_or_uri}.

---

##### `ActiveDirectoryTenantId`<sup>Optional</sup> <a name="ActiveDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.activeDirectoryTenantId"></a>

```csharp
public string ActiveDirectoryTenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#active_directory_tenant_id EventgridEventSubscription#active_directory_tenant_id}.

---

##### `MaxEventsPerBatch`<sup>Optional</sup> <a name="MaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.maxEventsPerBatch"></a>

```csharp
public double MaxEventsPerBatch { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#max_events_per_batch EventgridEventSubscription#max_events_per_batch}.

---

##### `PreferredBatchSizeInKilobytes`<sup>Optional</sup> <a name="PreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint.property.preferredBatchSizeInKilobytes"></a>

```csharp
public double PreferredBatchSizeInKilobytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/eventgrid_event_subscription#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridEventSubscriptionAdvancedFilterBoolEqualsList <a name="EventgridEventSubscriptionAdvancedFilterBoolEqualsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterBoolEqualsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.value">Value</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.value"></a>

```csharp
public object Value { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterIsNotNullList <a name="EventgridEventSubscriptionAdvancedFilterIsNotNullList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterIsNotNullList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference <a name="EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList <a name="EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference <a name="EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberInList <a name="EventgridEventSubscriptionAdvancedFilterNumberInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberInList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterNumberInOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberInRangeList <a name="EventgridEventSubscriptionAdvancedFilterNumberInRangeList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberInRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.values">Values</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.valuesInput"></a>

```csharp
public object ValuesInput { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.values"></a>

```csharp
public object Values { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanList <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberLessThanList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInList <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberNotInList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference <a name="EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.values">Values</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.valuesInput"></a>

```csharp
public object ValuesInput { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.values"></a>

```csharp
public object Values { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterOutputReference <a name="EventgridEventSubscriptionAdvancedFilterOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putBoolEquals">PutBoolEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNotNull">PutIsNotNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined">PutIsNullOrUndefined</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan">PutNumberGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals">PutNumberGreaterThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberIn">PutNumberIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberInRange">PutNumberInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan">PutNumberLessThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals">PutNumberLessThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn">PutNumberNotIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange">PutNumberNotInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith">PutStringBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringContains">PutStringContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith">PutStringEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringIn">PutStringIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith">PutStringNotBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotContains">PutStringNotContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith">PutStringNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotIn">PutStringNotIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetBoolEquals">ResetBoolEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetIsNotNull">ResetIsNotNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetIsNullOrUndefined">ResetIsNullOrUndefined</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThan">ResetNumberGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThanOrEquals">ResetNumberGreaterThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberIn">ResetNumberIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberInRange">ResetNumberInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThan">ResetNumberLessThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThanOrEquals">ResetNumberLessThanOrEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberNotIn">ResetNumberNotIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberNotInRange">ResetNumberNotInRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringBeginsWith">ResetStringBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringContains">ResetStringContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringEndsWith">ResetStringEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringIn">ResetStringIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotBeginsWith">ResetStringNotBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotContains">ResetStringNotContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotEndsWith">ResetStringNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotIn">ResetStringNotIn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBoolEquals` <a name="PutBoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putBoolEquals"></a>

```csharp
private void PutBoolEquals(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putBoolEquals.parameter.value"></a>

- *Type:* object

---

##### `PutIsNotNull` <a name="PutIsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNotNull"></a>

```csharp
private void PutIsNotNull(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNotNull.parameter.value"></a>

- *Type:* object

---

##### `PutIsNullOrUndefined` <a name="PutIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined"></a>

```csharp
private void PutIsNullOrUndefined(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putIsNullOrUndefined.parameter.value"></a>

- *Type:* object

---

##### `PutNumberGreaterThan` <a name="PutNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan"></a>

```csharp
private void PutNumberGreaterThan(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThan.parameter.value"></a>

- *Type:* object

---

##### `PutNumberGreaterThanOrEquals` <a name="PutNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals"></a>

```csharp
private void PutNumberGreaterThanOrEquals(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberGreaterThanOrEquals.parameter.value"></a>

- *Type:* object

---

##### `PutNumberIn` <a name="PutNumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberIn"></a>

```csharp
private void PutNumberIn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberIn.parameter.value"></a>

- *Type:* object

---

##### `PutNumberInRange` <a name="PutNumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberInRange"></a>

```csharp
private void PutNumberInRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberInRange.parameter.value"></a>

- *Type:* object

---

##### `PutNumberLessThan` <a name="PutNumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan"></a>

```csharp
private void PutNumberLessThan(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThan.parameter.value"></a>

- *Type:* object

---

##### `PutNumberLessThanOrEquals` <a name="PutNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals"></a>

```csharp
private void PutNumberLessThanOrEquals(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberLessThanOrEquals.parameter.value"></a>

- *Type:* object

---

##### `PutNumberNotIn` <a name="PutNumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn"></a>

```csharp
private void PutNumberNotIn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotIn.parameter.value"></a>

- *Type:* object

---

##### `PutNumberNotInRange` <a name="PutNumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange"></a>

```csharp
private void PutNumberNotInRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putNumberNotInRange.parameter.value"></a>

- *Type:* object

---

##### `PutStringBeginsWith` <a name="PutStringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith"></a>

```csharp
private void PutStringBeginsWith(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringBeginsWith.parameter.value"></a>

- *Type:* object

---

##### `PutStringContains` <a name="PutStringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringContains"></a>

```csharp
private void PutStringContains(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringContains.parameter.value"></a>

- *Type:* object

---

##### `PutStringEndsWith` <a name="PutStringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith"></a>

```csharp
private void PutStringEndsWith(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringEndsWith.parameter.value"></a>

- *Type:* object

---

##### `PutStringIn` <a name="PutStringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringIn"></a>

```csharp
private void PutStringIn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringIn.parameter.value"></a>

- *Type:* object

---

##### `PutStringNotBeginsWith` <a name="PutStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith"></a>

```csharp
private void PutStringNotBeginsWith(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotBeginsWith.parameter.value"></a>

- *Type:* object

---

##### `PutStringNotContains` <a name="PutStringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotContains"></a>

```csharp
private void PutStringNotContains(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotContains.parameter.value"></a>

- *Type:* object

---

##### `PutStringNotEndsWith` <a name="PutStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith"></a>

```csharp
private void PutStringNotEndsWith(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotEndsWith.parameter.value"></a>

- *Type:* object

---

##### `PutStringNotIn` <a name="PutStringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotIn"></a>

```csharp
private void PutStringNotIn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.putStringNotIn.parameter.value"></a>

- *Type:* object

---

##### `ResetBoolEquals` <a name="ResetBoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetBoolEquals"></a>

```csharp
private void ResetBoolEquals()
```

##### `ResetIsNotNull` <a name="ResetIsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetIsNotNull"></a>

```csharp
private void ResetIsNotNull()
```

##### `ResetIsNullOrUndefined` <a name="ResetIsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetIsNullOrUndefined"></a>

```csharp
private void ResetIsNullOrUndefined()
```

##### `ResetNumberGreaterThan` <a name="ResetNumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThan"></a>

```csharp
private void ResetNumberGreaterThan()
```

##### `ResetNumberGreaterThanOrEquals` <a name="ResetNumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberGreaterThanOrEquals"></a>

```csharp
private void ResetNumberGreaterThanOrEquals()
```

##### `ResetNumberIn` <a name="ResetNumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberIn"></a>

```csharp
private void ResetNumberIn()
```

##### `ResetNumberInRange` <a name="ResetNumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberInRange"></a>

```csharp
private void ResetNumberInRange()
```

##### `ResetNumberLessThan` <a name="ResetNumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThan"></a>

```csharp
private void ResetNumberLessThan()
```

##### `ResetNumberLessThanOrEquals` <a name="ResetNumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberLessThanOrEquals"></a>

```csharp
private void ResetNumberLessThanOrEquals()
```

##### `ResetNumberNotIn` <a name="ResetNumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberNotIn"></a>

```csharp
private void ResetNumberNotIn()
```

##### `ResetNumberNotInRange` <a name="ResetNumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetNumberNotInRange"></a>

```csharp
private void ResetNumberNotInRange()
```

##### `ResetStringBeginsWith` <a name="ResetStringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringBeginsWith"></a>

```csharp
private void ResetStringBeginsWith()
```

##### `ResetStringContains` <a name="ResetStringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringContains"></a>

```csharp
private void ResetStringContains()
```

##### `ResetStringEndsWith` <a name="ResetStringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringEndsWith"></a>

```csharp
private void ResetStringEndsWith()
```

##### `ResetStringIn` <a name="ResetStringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringIn"></a>

```csharp
private void ResetStringIn()
```

##### `ResetStringNotBeginsWith` <a name="ResetStringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotBeginsWith"></a>

```csharp
private void ResetStringNotBeginsWith()
```

##### `ResetStringNotContains` <a name="ResetStringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotContains"></a>

```csharp
private void ResetStringNotContains()
```

##### `ResetStringNotEndsWith` <a name="ResetStringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotEndsWith"></a>

```csharp
private void ResetStringNotEndsWith()
```

##### `ResetStringNotIn` <a name="ResetStringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.resetStringNotIn"></a>

```csharp
private void ResetStringNotIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEquals">BoolEquals</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList">EventgridEventSubscriptionAdvancedFilterBoolEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNull">IsNotNull</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList">EventgridEventSubscriptionAdvancedFilterIsNotNullList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefined">IsNullOrUndefined</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThan">NumberGreaterThan</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEquals">NumberGreaterThanOrEquals</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberIn">NumberIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList">EventgridEventSubscriptionAdvancedFilterNumberInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRange">NumberInRange</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList">EventgridEventSubscriptionAdvancedFilterNumberInRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThan">NumberLessThan</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList">EventgridEventSubscriptionAdvancedFilterNumberLessThanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEquals">NumberLessThanOrEquals</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotIn">NumberNotIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList">EventgridEventSubscriptionAdvancedFilterNumberNotInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRange">NumberNotInRange</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList">EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWith">StringBeginsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList">EventgridEventSubscriptionAdvancedFilterStringBeginsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContains">StringContains</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList">EventgridEventSubscriptionAdvancedFilterStringContainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWith">StringEndsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList">EventgridEventSubscriptionAdvancedFilterStringEndsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringIn">StringIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList">EventgridEventSubscriptionAdvancedFilterStringInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWith">StringNotBeginsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContains">StringNotContains</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList">EventgridEventSubscriptionAdvancedFilterStringNotContainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWith">StringNotEndsWith</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList">EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotIn">StringNotIn</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList">EventgridEventSubscriptionAdvancedFilterStringNotInList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEqualsInput">BoolEqualsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNullInput">IsNotNullInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefinedInput">IsNullOrUndefinedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanInput">NumberGreaterThanInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEqualsInput">NumberGreaterThanOrEqualsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInInput">NumberInInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRangeInput">NumberInRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanInput">NumberLessThanInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEqualsInput">NumberLessThanOrEqualsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInInput">NumberNotInInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRangeInput">NumberNotInRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWithInput">StringBeginsWithInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContainsInput">StringContainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWithInput">StringEndsWithInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringInInput">StringInInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWithInput">StringNotBeginsWithInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContainsInput">StringNotContainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWithInput">StringNotEndsWithInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotInInput">StringNotInInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoolEquals`<sup>Required</sup> <a name="BoolEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEquals"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterBoolEqualsList BoolEquals { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterBoolEqualsList">EventgridEventSubscriptionAdvancedFilterBoolEqualsList</a>

---

##### `IsNotNull`<sup>Required</sup> <a name="IsNotNull" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNull"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterIsNotNullList IsNotNull { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNotNullList">EventgridEventSubscriptionAdvancedFilterIsNotNullList</a>

---

##### `IsNullOrUndefined`<sup>Required</sup> <a name="IsNullOrUndefined" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefined"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList IsNullOrUndefined { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList">EventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedList</a>

---

##### `NumberGreaterThan`<sup>Required</sup> <a name="NumberGreaterThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThan"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList NumberGreaterThan { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanList</a>

---

##### `NumberGreaterThanOrEquals`<sup>Required</sup> <a name="NumberGreaterThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEquals"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList NumberGreaterThanOrEquals { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList">EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsList</a>

---

##### `NumberIn`<sup>Required</sup> <a name="NumberIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberIn"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterNumberInList NumberIn { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInList">EventgridEventSubscriptionAdvancedFilterNumberInList</a>

---

##### `NumberInRange`<sup>Required</sup> <a name="NumberInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRange"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterNumberInRangeList NumberInRange { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberInRangeList">EventgridEventSubscriptionAdvancedFilterNumberInRangeList</a>

---

##### `NumberLessThan`<sup>Required</sup> <a name="NumberLessThan" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThan"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterNumberLessThanList NumberLessThan { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanList">EventgridEventSubscriptionAdvancedFilterNumberLessThanList</a>

---

##### `NumberLessThanOrEquals`<sup>Required</sup> <a name="NumberLessThanOrEquals" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEquals"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList NumberLessThanOrEquals { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList">EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsList</a>

---

##### `NumberNotIn`<sup>Required</sup> <a name="NumberNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotIn"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterNumberNotInList NumberNotIn { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInList">EventgridEventSubscriptionAdvancedFilterNumberNotInList</a>

---

##### `NumberNotInRange`<sup>Required</sup> <a name="NumberNotInRange" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRange"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList NumberNotInRange { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList">EventgridEventSubscriptionAdvancedFilterNumberNotInRangeList</a>

---

##### `StringBeginsWith`<sup>Required</sup> <a name="StringBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWith"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterStringBeginsWithList StringBeginsWith { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList">EventgridEventSubscriptionAdvancedFilterStringBeginsWithList</a>

---

##### `StringContains`<sup>Required</sup> <a name="StringContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContains"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterStringContainsList StringContains { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList">EventgridEventSubscriptionAdvancedFilterStringContainsList</a>

---

##### `StringEndsWith`<sup>Required</sup> <a name="StringEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWith"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterStringEndsWithList StringEndsWith { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList">EventgridEventSubscriptionAdvancedFilterStringEndsWithList</a>

---

##### `StringIn`<sup>Required</sup> <a name="StringIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringIn"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterStringInList StringIn { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList">EventgridEventSubscriptionAdvancedFilterStringInList</a>

---

##### `StringNotBeginsWith`<sup>Required</sup> <a name="StringNotBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWith"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList StringNotBeginsWith { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList">EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList</a>

---

##### `StringNotContains`<sup>Required</sup> <a name="StringNotContains" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContains"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterStringNotContainsList StringNotContains { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList">EventgridEventSubscriptionAdvancedFilterStringNotContainsList</a>

---

##### `StringNotEndsWith`<sup>Required</sup> <a name="StringNotEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWith"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList StringNotEndsWith { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList">EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList</a>

---

##### `StringNotIn`<sup>Required</sup> <a name="StringNotIn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotIn"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilterStringNotInList StringNotIn { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList">EventgridEventSubscriptionAdvancedFilterStringNotInList</a>

---

##### `BoolEqualsInput`<sup>Optional</sup> <a name="BoolEqualsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.boolEqualsInput"></a>

```csharp
public object BoolEqualsInput { get; }
```

- *Type:* object

---

##### `IsNotNullInput`<sup>Optional</sup> <a name="IsNotNullInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNotNullInput"></a>

```csharp
public object IsNotNullInput { get; }
```

- *Type:* object

---

##### `IsNullOrUndefinedInput`<sup>Optional</sup> <a name="IsNullOrUndefinedInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.isNullOrUndefinedInput"></a>

```csharp
public object IsNullOrUndefinedInput { get; }
```

- *Type:* object

---

##### `NumberGreaterThanInput`<sup>Optional</sup> <a name="NumberGreaterThanInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanInput"></a>

```csharp
public object NumberGreaterThanInput { get; }
```

- *Type:* object

---

##### `NumberGreaterThanOrEqualsInput`<sup>Optional</sup> <a name="NumberGreaterThanOrEqualsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberGreaterThanOrEqualsInput"></a>

```csharp
public object NumberGreaterThanOrEqualsInput { get; }
```

- *Type:* object

---

##### `NumberInInput`<sup>Optional</sup> <a name="NumberInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInInput"></a>

```csharp
public object NumberInInput { get; }
```

- *Type:* object

---

##### `NumberInRangeInput`<sup>Optional</sup> <a name="NumberInRangeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberInRangeInput"></a>

```csharp
public object NumberInRangeInput { get; }
```

- *Type:* object

---

##### `NumberLessThanInput`<sup>Optional</sup> <a name="NumberLessThanInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanInput"></a>

```csharp
public object NumberLessThanInput { get; }
```

- *Type:* object

---

##### `NumberLessThanOrEqualsInput`<sup>Optional</sup> <a name="NumberLessThanOrEqualsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberLessThanOrEqualsInput"></a>

```csharp
public object NumberLessThanOrEqualsInput { get; }
```

- *Type:* object

---

##### `NumberNotInInput`<sup>Optional</sup> <a name="NumberNotInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInInput"></a>

```csharp
public object NumberNotInInput { get; }
```

- *Type:* object

---

##### `NumberNotInRangeInput`<sup>Optional</sup> <a name="NumberNotInRangeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.numberNotInRangeInput"></a>

```csharp
public object NumberNotInRangeInput { get; }
```

- *Type:* object

---

##### `StringBeginsWithInput`<sup>Optional</sup> <a name="StringBeginsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringBeginsWithInput"></a>

```csharp
public object StringBeginsWithInput { get; }
```

- *Type:* object

---

##### `StringContainsInput`<sup>Optional</sup> <a name="StringContainsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringContainsInput"></a>

```csharp
public object StringContainsInput { get; }
```

- *Type:* object

---

##### `StringEndsWithInput`<sup>Optional</sup> <a name="StringEndsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringEndsWithInput"></a>

```csharp
public object StringEndsWithInput { get; }
```

- *Type:* object

---

##### `StringInInput`<sup>Optional</sup> <a name="StringInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringInInput"></a>

```csharp
public object StringInInput { get; }
```

- *Type:* object

---

##### `StringNotBeginsWithInput`<sup>Optional</sup> <a name="StringNotBeginsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotBeginsWithInput"></a>

```csharp
public object StringNotBeginsWithInput { get; }
```

- *Type:* object

---

##### `StringNotContainsInput`<sup>Optional</sup> <a name="StringNotContainsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotContainsInput"></a>

```csharp
public object StringNotContainsInput { get; }
```

- *Type:* object

---

##### `StringNotEndsWithInput`<sup>Optional</sup> <a name="StringNotEndsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotEndsWithInput"></a>

```csharp
public object StringNotEndsWithInput { get; }
```

- *Type:* object

---

##### `StringNotInInput`<sup>Optional</sup> <a name="StringNotInInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.stringNotInInput"></a>

```csharp
public object StringNotInInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterOutputReference.property.internalValue"></a>

```csharp
public EventgridEventSubscriptionAdvancedFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilter">EventgridEventSubscriptionAdvancedFilter</a>

---


### EventgridEventSubscriptionAdvancedFilterStringBeginsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringBeginsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringBeginsWithList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringBeginsWithOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringContainsList <a name="EventgridEventSubscriptionAdvancedFilterStringContainsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringContainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringContainsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringEndsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringEndsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringEndsWithList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringEndsWithOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringInList <a name="EventgridEventSubscriptionAdvancedFilterStringInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringInList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterStringInOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringInOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotBeginsWithOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringNotContainsList <a name="EventgridEventSubscriptionAdvancedFilterStringNotContainsList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotContainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotContainsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList <a name="EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotEndsWithOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringNotInList <a name="EventgridEventSubscriptionAdvancedFilterStringNotInList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotInList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.get"></a>

```csharp
private EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference <a name="EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAdvancedFilterStringNotInOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionAzureFunctionEndpointOutputReference <a name="EventgridEventSubscriptionAzureFunctionEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionAzureFunctionEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resetMaxEventsPerBatch">ResetMaxEventsPerBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resetPreferredBatchSizeInKilobytes">ResetPreferredBatchSizeInKilobytes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxEventsPerBatch` <a name="ResetMaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resetMaxEventsPerBatch"></a>

```csharp
private void ResetMaxEventsPerBatch()
```

##### `ResetPreferredBatchSizeInKilobytes` <a name="ResetPreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.resetPreferredBatchSizeInKilobytes"></a>

```csharp
private void ResetPreferredBatchSizeInKilobytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionIdInput">FunctionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatchInput">MaxEventsPerBatchInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytesInput">PreferredBatchSizeInKilobytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatch">MaxEventsPerBatch</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytes">PreferredBatchSizeInKilobytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionIdInput"></a>

```csharp
public string FunctionIdInput { get; }
```

- *Type:* string

---

##### `MaxEventsPerBatchInput`<sup>Optional</sup> <a name="MaxEventsPerBatchInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatchInput"></a>

```csharp
public double MaxEventsPerBatchInput { get; }
```

- *Type:* double

---

##### `PreferredBatchSizeInKilobytesInput`<sup>Optional</sup> <a name="PreferredBatchSizeInKilobytesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytesInput"></a>

```csharp
public double PreferredBatchSizeInKilobytesInput { get; }
```

- *Type:* double

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `MaxEventsPerBatch`<sup>Required</sup> <a name="MaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.maxEventsPerBatch"></a>

```csharp
public double MaxEventsPerBatch { get; }
```

- *Type:* double

---

##### `PreferredBatchSizeInKilobytes`<sup>Required</sup> <a name="PreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.preferredBatchSizeInKilobytes"></a>

```csharp
public double PreferredBatchSizeInKilobytes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpointOutputReference.property.internalValue"></a>

```csharp
public EventgridEventSubscriptionAzureFunctionEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionAzureFunctionEndpoint">EventgridEventSubscriptionAzureFunctionEndpoint</a>

---


### EventgridEventSubscriptionDeadLetterIdentityOutputReference <a name="EventgridEventSubscriptionDeadLetterIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionDeadLetterIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resetUserAssignedIdentity">ResetUserAssignedIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentity` <a name="ResetUserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.resetUserAssignedIdentity"></a>

```csharp
private void ResetUserAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentityInput">UserAssignedIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentity">UserAssignedIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityInput`<sup>Optional</sup> <a name="UserAssignedIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentityInput"></a>

```csharp
public string UserAssignedIdentityInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserAssignedIdentity`<sup>Required</sup> <a name="UserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.userAssignedIdentity"></a>

```csharp
public string UserAssignedIdentity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentityOutputReference.property.internalValue"></a>

```csharp
public EventgridEventSubscriptionDeadLetterIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeadLetterIdentity">EventgridEventSubscriptionDeadLetterIdentity</a>

---


### EventgridEventSubscriptionDeliveryIdentityOutputReference <a name="EventgridEventSubscriptionDeliveryIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionDeliveryIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resetUserAssignedIdentity">ResetUserAssignedIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentity` <a name="ResetUserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.resetUserAssignedIdentity"></a>

```csharp
private void ResetUserAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentityInput">UserAssignedIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentity">UserAssignedIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityInput`<sup>Optional</sup> <a name="UserAssignedIdentityInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentityInput"></a>

```csharp
public string UserAssignedIdentityInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserAssignedIdentity`<sup>Required</sup> <a name="UserAssignedIdentity" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.userAssignedIdentity"></a>

```csharp
public string UserAssignedIdentity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentityOutputReference.property.internalValue"></a>

```csharp
public EventgridEventSubscriptionDeliveryIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryIdentity">EventgridEventSubscriptionDeliveryIdentity</a>

---


### EventgridEventSubscriptionDeliveryPropertyList <a name="EventgridEventSubscriptionDeliveryPropertyList" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionDeliveryPropertyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.get"></a>

```csharp
private EventgridEventSubscriptionDeliveryPropertyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionDeliveryPropertyOutputReference <a name="EventgridEventSubscriptionDeliveryPropertyOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionDeliveryPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetSourceField">ResetSourceField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetSourceField` <a name="ResetSourceField" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetSourceField"></a>

```csharp
private void ResetSourceField()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secretInput">SecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceFieldInput">SourceFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secret">Secret</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceField">SourceField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secretInput"></a>

```csharp
public object SecretInput { get; }
```

- *Type:* object

---

##### `SourceFieldInput`<sup>Optional</sup> <a name="SourceFieldInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceFieldInput"></a>

```csharp
public string SourceFieldInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.secret"></a>

```csharp
public object Secret { get; }
```

- *Type:* object

---

##### `SourceField`<sup>Required</sup> <a name="SourceField" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.sourceField"></a>

```csharp
public string SourceField { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionDeliveryPropertyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionRetryPolicyOutputReference <a name="EventgridEventSubscriptionRetryPolicyOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLiveInput">EventTimeToLiveInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttemptsInput">MaxDeliveryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLive">EventTimeToLive</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTimeToLiveInput`<sup>Optional</sup> <a name="EventTimeToLiveInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLiveInput"></a>

```csharp
public double EventTimeToLiveInput { get; }
```

- *Type:* double

---

##### `MaxDeliveryAttemptsInput`<sup>Optional</sup> <a name="MaxDeliveryAttemptsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```csharp
public double MaxDeliveryAttemptsInput { get; }
```

- *Type:* double

---

##### `EventTimeToLive`<sup>Required</sup> <a name="EventTimeToLive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.eventTimeToLive"></a>

```csharp
public double EventTimeToLive { get; }
```

- *Type:* double

---

##### `MaxDeliveryAttempts`<sup>Required</sup> <a name="MaxDeliveryAttempts" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.maxDeliveryAttempts"></a>

```csharp
public double MaxDeliveryAttempts { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public EventgridEventSubscriptionRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionRetryPolicy">EventgridEventSubscriptionRetryPolicy</a>

---


### EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference <a name="EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerNameInput">StorageBlobContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerName">StorageBlobContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `StorageBlobContainerNameInput`<sup>Optional</sup> <a name="StorageBlobContainerNameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerNameInput"></a>

```csharp
public string StorageBlobContainerNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `StorageBlobContainerName`<sup>Required</sup> <a name="StorageBlobContainerName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.storageBlobContainerName"></a>

```csharp
public string StorageBlobContainerName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestinationOutputReference.property.internalValue"></a>

```csharp
public EventgridEventSubscriptionStorageBlobDeadLetterDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageBlobDeadLetterDestination">EventgridEventSubscriptionStorageBlobDeadLetterDestination</a>

---


### EventgridEventSubscriptionStorageQueueEndpointOutputReference <a name="EventgridEventSubscriptionStorageQueueEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionStorageQueueEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resetQueueMessageTimeToLiveInSeconds">ResetQueueMessageTimeToLiveInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueueMessageTimeToLiveInSeconds` <a name="ResetQueueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.resetQueueMessageTimeToLiveInSeconds"></a>

```csharp
private void ResetQueueMessageTimeToLiveInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSecondsInput">QueueMessageTimeToLiveInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueNameInput">QueueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSeconds">QueueMessageTimeToLiveInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueName">QueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueueMessageTimeToLiveInSecondsInput`<sup>Optional</sup> <a name="QueueMessageTimeToLiveInSecondsInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSecondsInput"></a>

```csharp
public double QueueMessageTimeToLiveInSecondsInput { get; }
```

- *Type:* double

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueNameInput"></a>

```csharp
public string QueueNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `QueueMessageTimeToLiveInSeconds`<sup>Required</sup> <a name="QueueMessageTimeToLiveInSeconds" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueMessageTimeToLiveInSeconds"></a>

```csharp
public double QueueMessageTimeToLiveInSeconds { get; }
```

- *Type:* double

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.queueName"></a>

```csharp
public string QueueName { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpointOutputReference.property.internalValue"></a>

```csharp
public EventgridEventSubscriptionStorageQueueEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionStorageQueueEndpoint">EventgridEventSubscriptionStorageQueueEndpoint</a>

---


### EventgridEventSubscriptionSubjectFilterOutputReference <a name="EventgridEventSubscriptionSubjectFilterOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionSubjectFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetSubjectBeginsWith">ResetSubjectBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetSubjectEndsWith">ResetSubjectEndsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetCaseSensitive"></a>

```csharp
private void ResetCaseSensitive()
```

##### `ResetSubjectBeginsWith` <a name="ResetSubjectBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetSubjectBeginsWith"></a>

```csharp
private void ResetSubjectBeginsWith()
```

##### `ResetSubjectEndsWith` <a name="ResetSubjectEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.resetSubjectEndsWith"></a>

```csharp
private void ResetSubjectEndsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWithInput">SubjectBeginsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWithInput">SubjectEndsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWith">SubjectBeginsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWith">SubjectEndsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitiveInput"></a>

```csharp
public object CaseSensitiveInput { get; }
```

- *Type:* object

---

##### `SubjectBeginsWithInput`<sup>Optional</sup> <a name="SubjectBeginsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWithInput"></a>

```csharp
public string SubjectBeginsWithInput { get; }
```

- *Type:* string

---

##### `SubjectEndsWithInput`<sup>Optional</sup> <a name="SubjectEndsWithInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWithInput"></a>

```csharp
public string SubjectEndsWithInput { get; }
```

- *Type:* string

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.caseSensitive"></a>

```csharp
public object CaseSensitive { get; }
```

- *Type:* object

---

##### `SubjectBeginsWith`<sup>Required</sup> <a name="SubjectBeginsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectBeginsWith"></a>

```csharp
public string SubjectBeginsWith { get; }
```

- *Type:* string

---

##### `SubjectEndsWith`<sup>Required</sup> <a name="SubjectEndsWith" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.subjectEndsWith"></a>

```csharp
public string SubjectEndsWith { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilterOutputReference.property.internalValue"></a>

```csharp
public EventgridEventSubscriptionSubjectFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionSubjectFilter">EventgridEventSubscriptionSubjectFilter</a>

---


### EventgridEventSubscriptionTimeoutsOutputReference <a name="EventgridEventSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridEventSubscriptionWebhookEndpointOutputReference <a name="EventgridEventSubscriptionWebhookEndpointOutputReference" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridEventSubscriptionWebhookEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryAppIdOrUri">ResetActiveDirectoryAppIdOrUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryTenantId">ResetActiveDirectoryTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetMaxEventsPerBatch">ResetMaxEventsPerBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetPreferredBatchSizeInKilobytes">ResetPreferredBatchSizeInKilobytes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveDirectoryAppIdOrUri` <a name="ResetActiveDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryAppIdOrUri"></a>

```csharp
private void ResetActiveDirectoryAppIdOrUri()
```

##### `ResetActiveDirectoryTenantId` <a name="ResetActiveDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetActiveDirectoryTenantId"></a>

```csharp
private void ResetActiveDirectoryTenantId()
```

##### `ResetMaxEventsPerBatch` <a name="ResetMaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetMaxEventsPerBatch"></a>

```csharp
private void ResetMaxEventsPerBatch()
```

##### `ResetPreferredBatchSizeInKilobytes` <a name="ResetPreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.resetPreferredBatchSizeInKilobytes"></a>

```csharp
private void ResetPreferredBatchSizeInKilobytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUriInput">ActiveDirectoryAppIdOrUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantIdInput">ActiveDirectoryTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatchInput">MaxEventsPerBatchInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytesInput">PreferredBatchSizeInKilobytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUri">ActiveDirectoryAppIdOrUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantId">ActiveDirectoryTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatch">MaxEventsPerBatch</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytes">PreferredBatchSizeInKilobytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `ActiveDirectoryAppIdOrUriInput`<sup>Optional</sup> <a name="ActiveDirectoryAppIdOrUriInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUriInput"></a>

```csharp
public string ActiveDirectoryAppIdOrUriInput { get; }
```

- *Type:* string

---

##### `ActiveDirectoryTenantIdInput`<sup>Optional</sup> <a name="ActiveDirectoryTenantIdInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantIdInput"></a>

```csharp
public string ActiveDirectoryTenantIdInput { get; }
```

- *Type:* string

---

##### `MaxEventsPerBatchInput`<sup>Optional</sup> <a name="MaxEventsPerBatchInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatchInput"></a>

```csharp
public double MaxEventsPerBatchInput { get; }
```

- *Type:* double

---

##### `PreferredBatchSizeInKilobytesInput`<sup>Optional</sup> <a name="PreferredBatchSizeInKilobytesInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytesInput"></a>

```csharp
public double PreferredBatchSizeInKilobytesInput { get; }
```

- *Type:* double

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `ActiveDirectoryAppIdOrUri`<sup>Required</sup> <a name="ActiveDirectoryAppIdOrUri" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryAppIdOrUri"></a>

```csharp
public string ActiveDirectoryAppIdOrUri { get; }
```

- *Type:* string

---

##### `ActiveDirectoryTenantId`<sup>Required</sup> <a name="ActiveDirectoryTenantId" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.activeDirectoryTenantId"></a>

```csharp
public string ActiveDirectoryTenantId { get; }
```

- *Type:* string

---

##### `MaxEventsPerBatch`<sup>Required</sup> <a name="MaxEventsPerBatch" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.maxEventsPerBatch"></a>

```csharp
public double MaxEventsPerBatch { get; }
```

- *Type:* double

---

##### `PreferredBatchSizeInKilobytes`<sup>Required</sup> <a name="PreferredBatchSizeInKilobytes" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.preferredBatchSizeInKilobytes"></a>

```csharp
public double PreferredBatchSizeInKilobytes { get; }
```

- *Type:* double

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpointOutputReference.property.internalValue"></a>

```csharp
public EventgridEventSubscriptionWebhookEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridEventSubscription.EventgridEventSubscriptionWebhookEndpoint">EventgridEventSubscriptionWebhookEndpoint</a>

---



