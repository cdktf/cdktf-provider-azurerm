# `azurerm_servicebus_queue`

Refer to the Terraform Registory for docs: [`azurerm_servicebus_queue`](https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue).

# `servicebusQueue` Submodule <a name="`servicebusQueue` Submodule" id="@cdktf/provider-azurerm.servicebusQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusQueue <a name="ServicebusQueue" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue azurerm_servicebus_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusQueue(Construct Scope, string Id, ServicebusQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig">ServicebusQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig">ServicebusQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetAutoDeleteOnIdle">ResetAutoDeleteOnIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDeadLetteringOnMessageExpiration">ResetDeadLetteringOnMessageExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDefaultMessageTtl">ResetDefaultMessageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDuplicateDetectionHistoryTimeWindow">ResetDuplicateDetectionHistoryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableBatchedOperations">ResetEnableBatchedOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableExpress">ResetEnableExpress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnablePartitioning">ResetEnablePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardDeadLetteredMessagesTo">ResetForwardDeadLetteredMessagesTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardTo">ResetForwardTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetLockDuration">ResetLockDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxDeliveryCount">ResetMaxDeliveryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxMessageSizeInKilobytes">ResetMaxMessageSizeInKilobytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxSizeInMegabytes">ResetMaxSizeInMegabytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresDuplicateDetection">ResetRequiresDuplicateDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresSession">ResetRequiresSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicebusQueueTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

---

##### `ResetAutoDeleteOnIdle` <a name="ResetAutoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetAutoDeleteOnIdle"></a>

```csharp
private void ResetAutoDeleteOnIdle()
```

##### `ResetDeadLetteringOnMessageExpiration` <a name="ResetDeadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDeadLetteringOnMessageExpiration"></a>

```csharp
private void ResetDeadLetteringOnMessageExpiration()
```

##### `ResetDefaultMessageTtl` <a name="ResetDefaultMessageTtl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDefaultMessageTtl"></a>

```csharp
private void ResetDefaultMessageTtl()
```

##### `ResetDuplicateDetectionHistoryTimeWindow` <a name="ResetDuplicateDetectionHistoryTimeWindow" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDuplicateDetectionHistoryTimeWindow"></a>

```csharp
private void ResetDuplicateDetectionHistoryTimeWindow()
```

##### `ResetEnableBatchedOperations` <a name="ResetEnableBatchedOperations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableBatchedOperations"></a>

```csharp
private void ResetEnableBatchedOperations()
```

##### `ResetEnableExpress` <a name="ResetEnableExpress" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableExpress"></a>

```csharp
private void ResetEnableExpress()
```

##### `ResetEnablePartitioning` <a name="ResetEnablePartitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnablePartitioning"></a>

```csharp
private void ResetEnablePartitioning()
```

##### `ResetForwardDeadLetteredMessagesTo` <a name="ResetForwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardDeadLetteredMessagesTo"></a>

```csharp
private void ResetForwardDeadLetteredMessagesTo()
```

##### `ResetForwardTo` <a name="ResetForwardTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardTo"></a>

```csharp
private void ResetForwardTo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLockDuration` <a name="ResetLockDuration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetLockDuration"></a>

```csharp
private void ResetLockDuration()
```

##### `ResetMaxDeliveryCount` <a name="ResetMaxDeliveryCount" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxDeliveryCount"></a>

```csharp
private void ResetMaxDeliveryCount()
```

##### `ResetMaxMessageSizeInKilobytes` <a name="ResetMaxMessageSizeInKilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxMessageSizeInKilobytes"></a>

```csharp
private void ResetMaxMessageSizeInKilobytes()
```

##### `ResetMaxSizeInMegabytes` <a name="ResetMaxSizeInMegabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxSizeInMegabytes"></a>

```csharp
private void ResetMaxSizeInMegabytes()
```

##### `ResetRequiresDuplicateDetection` <a name="ResetRequiresDuplicateDetection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresDuplicateDetection"></a>

```csharp
private void ResetRequiresDuplicateDetection()
```

##### `ResetRequiresSession` <a name="ResetRequiresSession" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresSession"></a>

```csharp
private void ResetRequiresSession()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ServicebusQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference">ServicebusQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdleInput">AutoDeleteOnIdleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpirationInput">DeadLetteringOnMessageExpirationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtlInput">DefaultMessageTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindowInput">DuplicateDetectionHistoryTimeWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperationsInput">EnableBatchedOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpressInput">EnableExpressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioningInput">EnablePartitioningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesToInput">ForwardDeadLetteredMessagesToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardToInput">ForwardToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDurationInput">LockDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCountInput">MaxDeliveryCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytesInput">MaxMessageSizeInKilobytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytesInput">MaxSizeInMegabytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetectionInput">RequiresDuplicateDetectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSessionInput">RequiresSessionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdle">AutoDeleteOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpiration">DeadLetteringOnMessageExpiration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtl">DefaultMessageTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindow">DuplicateDetectionHistoryTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperations">EnableBatchedOperations</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpress">EnableExpress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioning">EnablePartitioning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesTo">ForwardDeadLetteredMessagesTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardTo">ForwardTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDuration">LockDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCount">MaxDeliveryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytes">MaxMessageSizeInKilobytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytes">MaxSizeInMegabytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetection">RequiresDuplicateDetection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSession">RequiresSession</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeouts"></a>

```csharp
public ServicebusQueueTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference">ServicebusQueueTimeoutsOutputReference</a>

---

##### `AutoDeleteOnIdleInput`<sup>Optional</sup> <a name="AutoDeleteOnIdleInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdleInput"></a>

```csharp
public string AutoDeleteOnIdleInput { get; }
```

- *Type:* string

---

##### `DeadLetteringOnMessageExpirationInput`<sup>Optional</sup> <a name="DeadLetteringOnMessageExpirationInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpirationInput"></a>

```csharp
public object DeadLetteringOnMessageExpirationInput { get; }
```

- *Type:* object

---

##### `DefaultMessageTtlInput`<sup>Optional</sup> <a name="DefaultMessageTtlInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtlInput"></a>

```csharp
public string DefaultMessageTtlInput { get; }
```

- *Type:* string

---

##### `DuplicateDetectionHistoryTimeWindowInput`<sup>Optional</sup> <a name="DuplicateDetectionHistoryTimeWindowInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindowInput"></a>

```csharp
public string DuplicateDetectionHistoryTimeWindowInput { get; }
```

- *Type:* string

---

##### `EnableBatchedOperationsInput`<sup>Optional</sup> <a name="EnableBatchedOperationsInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperationsInput"></a>

```csharp
public object EnableBatchedOperationsInput { get; }
```

- *Type:* object

---

##### `EnableExpressInput`<sup>Optional</sup> <a name="EnableExpressInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpressInput"></a>

```csharp
public object EnableExpressInput { get; }
```

- *Type:* object

---

##### `EnablePartitioningInput`<sup>Optional</sup> <a name="EnablePartitioningInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioningInput"></a>

```csharp
public object EnablePartitioningInput { get; }
```

- *Type:* object

---

##### `ForwardDeadLetteredMessagesToInput`<sup>Optional</sup> <a name="ForwardDeadLetteredMessagesToInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesToInput"></a>

```csharp
public string ForwardDeadLetteredMessagesToInput { get; }
```

- *Type:* string

---

##### `ForwardToInput`<sup>Optional</sup> <a name="ForwardToInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardToInput"></a>

```csharp
public string ForwardToInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LockDurationInput`<sup>Optional</sup> <a name="LockDurationInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDurationInput"></a>

```csharp
public string LockDurationInput { get; }
```

- *Type:* string

---

##### `MaxDeliveryCountInput`<sup>Optional</sup> <a name="MaxDeliveryCountInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCountInput"></a>

```csharp
public double MaxDeliveryCountInput { get; }
```

- *Type:* double

---

##### `MaxMessageSizeInKilobytesInput`<sup>Optional</sup> <a name="MaxMessageSizeInKilobytesInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytesInput"></a>

```csharp
public double MaxMessageSizeInKilobytesInput { get; }
```

- *Type:* double

---

##### `MaxSizeInMegabytesInput`<sup>Optional</sup> <a name="MaxSizeInMegabytesInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytesInput"></a>

```csharp
public double MaxSizeInMegabytesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `RequiresDuplicateDetectionInput`<sup>Optional</sup> <a name="RequiresDuplicateDetectionInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetectionInput"></a>

```csharp
public object RequiresDuplicateDetectionInput { get; }
```

- *Type:* object

---

##### `RequiresSessionInput`<sup>Optional</sup> <a name="RequiresSessionInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSessionInput"></a>

```csharp
public object RequiresSessionInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoDeleteOnIdle`<sup>Required</sup> <a name="AutoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdle"></a>

```csharp
public string AutoDeleteOnIdle { get; }
```

- *Type:* string

---

##### `DeadLetteringOnMessageExpiration`<sup>Required</sup> <a name="DeadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpiration"></a>

```csharp
public object DeadLetteringOnMessageExpiration { get; }
```

- *Type:* object

---

##### `DefaultMessageTtl`<sup>Required</sup> <a name="DefaultMessageTtl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtl"></a>

```csharp
public string DefaultMessageTtl { get; }
```

- *Type:* string

---

##### `DuplicateDetectionHistoryTimeWindow`<sup>Required</sup> <a name="DuplicateDetectionHistoryTimeWindow" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindow"></a>

```csharp
public string DuplicateDetectionHistoryTimeWindow { get; }
```

- *Type:* string

---

##### `EnableBatchedOperations`<sup>Required</sup> <a name="EnableBatchedOperations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperations"></a>

```csharp
public object EnableBatchedOperations { get; }
```

- *Type:* object

---

##### `EnableExpress`<sup>Required</sup> <a name="EnableExpress" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpress"></a>

```csharp
public object EnableExpress { get; }
```

- *Type:* object

---

##### `EnablePartitioning`<sup>Required</sup> <a name="EnablePartitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioning"></a>

```csharp
public object EnablePartitioning { get; }
```

- *Type:* object

---

##### `ForwardDeadLetteredMessagesTo`<sup>Required</sup> <a name="ForwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesTo"></a>

```csharp
public string ForwardDeadLetteredMessagesTo { get; }
```

- *Type:* string

---

##### `ForwardTo`<sup>Required</sup> <a name="ForwardTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardTo"></a>

```csharp
public string ForwardTo { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LockDuration`<sup>Required</sup> <a name="LockDuration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDuration"></a>

```csharp
public string LockDuration { get; }
```

- *Type:* string

---

##### `MaxDeliveryCount`<sup>Required</sup> <a name="MaxDeliveryCount" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCount"></a>

```csharp
public double MaxDeliveryCount { get; }
```

- *Type:* double

---

##### `MaxMessageSizeInKilobytes`<sup>Required</sup> <a name="MaxMessageSizeInKilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytes"></a>

```csharp
public double MaxMessageSizeInKilobytes { get; }
```

- *Type:* double

---

##### `MaxSizeInMegabytes`<sup>Required</sup> <a name="MaxSizeInMegabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytes"></a>

```csharp
public double MaxSizeInMegabytes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `RequiresDuplicateDetection`<sup>Required</sup> <a name="RequiresDuplicateDetection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetection"></a>

```csharp
public object RequiresDuplicateDetection { get; }
```

- *Type:* object

---

##### `RequiresSession`<sup>Required</sup> <a name="RequiresSession" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSession"></a>

```csharp
public object RequiresSession { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusQueueConfig <a name="ServicebusQueueConfig" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusQueueConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string NamespaceId,
    string AutoDeleteOnIdle = null,
    object DeadLetteringOnMessageExpiration = null,
    string DefaultMessageTtl = null,
    string DuplicateDetectionHistoryTimeWindow = null,
    object EnableBatchedOperations = null,
    object EnableExpress = null,
    object EnablePartitioning = null,
    string ForwardDeadLetteredMessagesTo = null,
    string ForwardTo = null,
    string Id = null,
    string LockDuration = null,
    double MaxDeliveryCount = null,
    double MaxMessageSizeInKilobytes = null,
    double MaxSizeInMegabytes = null,
    object RequiresDuplicateDetection = null,
    object RequiresSession = null,
    string Status = null,
    ServicebusQueueTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#name ServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.autoDeleteOnIdle">AutoDeleteOnIdle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.deadLetteringOnMessageExpiration">DeadLetteringOnMessageExpiration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.defaultMessageTtl">DefaultMessageTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.duplicateDetectionHistoryTimeWindow">DuplicateDetectionHistoryTimeWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableBatchedOperations">EnableBatchedOperations</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#enable_batched_operations ServicebusQueue#enable_batched_operations}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableExpress">EnableExpress</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#enable_express ServicebusQueue#enable_express}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enablePartitioning">EnablePartitioning</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#enable_partitioning ServicebusQueue#enable_partitioning}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardDeadLetteredMessagesTo">ForwardDeadLetteredMessagesTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardTo">ForwardTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#id ServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lockDuration">LockDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxDeliveryCount">MaxDeliveryCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxMessageSizeInKilobytes">MaxMessageSizeInKilobytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxSizeInMegabytes">MaxSizeInMegabytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresDuplicateDetection">RequiresDuplicateDetection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresSession">RequiresSession</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#status ServicebusQueue#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#name ServicebusQueue#name}.

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}.

---

##### `AutoDeleteOnIdle`<sup>Optional</sup> <a name="AutoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.autoDeleteOnIdle"></a>

```csharp
public string AutoDeleteOnIdle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}.

---

##### `DeadLetteringOnMessageExpiration`<sup>Optional</sup> <a name="DeadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.deadLetteringOnMessageExpiration"></a>

```csharp
public object DeadLetteringOnMessageExpiration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}.

---

##### `DefaultMessageTtl`<sup>Optional</sup> <a name="DefaultMessageTtl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.defaultMessageTtl"></a>

```csharp
public string DefaultMessageTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}.

---

##### `DuplicateDetectionHistoryTimeWindow`<sup>Optional</sup> <a name="DuplicateDetectionHistoryTimeWindow" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.duplicateDetectionHistoryTimeWindow"></a>

```csharp
public string DuplicateDetectionHistoryTimeWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}.

---

##### `EnableBatchedOperations`<sup>Optional</sup> <a name="EnableBatchedOperations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableBatchedOperations"></a>

```csharp
public object EnableBatchedOperations { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#enable_batched_operations ServicebusQueue#enable_batched_operations}.

---

##### `EnableExpress`<sup>Optional</sup> <a name="EnableExpress" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableExpress"></a>

```csharp
public object EnableExpress { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#enable_express ServicebusQueue#enable_express}.

---

##### `EnablePartitioning`<sup>Optional</sup> <a name="EnablePartitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enablePartitioning"></a>

```csharp
public object EnablePartitioning { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#enable_partitioning ServicebusQueue#enable_partitioning}.

---

##### `ForwardDeadLetteredMessagesTo`<sup>Optional</sup> <a name="ForwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardDeadLetteredMessagesTo"></a>

```csharp
public string ForwardDeadLetteredMessagesTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}.

---

##### `ForwardTo`<sup>Optional</sup> <a name="ForwardTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardTo"></a>

```csharp
public string ForwardTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#id ServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LockDuration`<sup>Optional</sup> <a name="LockDuration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lockDuration"></a>

```csharp
public string LockDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}.

---

##### `MaxDeliveryCount`<sup>Optional</sup> <a name="MaxDeliveryCount" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxDeliveryCount"></a>

```csharp
public double MaxDeliveryCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}.

---

##### `MaxMessageSizeInKilobytes`<sup>Optional</sup> <a name="MaxMessageSizeInKilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxMessageSizeInKilobytes"></a>

```csharp
public double MaxMessageSizeInKilobytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}.

---

##### `MaxSizeInMegabytes`<sup>Optional</sup> <a name="MaxSizeInMegabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxSizeInMegabytes"></a>

```csharp
public double MaxSizeInMegabytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}.

---

##### `RequiresDuplicateDetection`<sup>Optional</sup> <a name="RequiresDuplicateDetection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresDuplicateDetection"></a>

```csharp
public object RequiresDuplicateDetection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}.

---

##### `RequiresSession`<sup>Optional</sup> <a name="RequiresSession" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresSession"></a>

```csharp
public object RequiresSession { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#status ServicebusQueue#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.timeouts"></a>

```csharp
public ServicebusQueueTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#timeouts ServicebusQueue#timeouts}

---

### ServicebusQueueTimeouts <a name="ServicebusQueueTimeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusQueueTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#create ServicebusQueue#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#delete ServicebusQueue#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#read ServicebusQueue#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#update ServicebusQueue#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#create ServicebusQueue#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#delete ServicebusQueue#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#read ServicebusQueue#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/servicebus_queue#update ServicebusQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusQueueTimeoutsOutputReference <a name="ServicebusQueueTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ServicebusQueueTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



