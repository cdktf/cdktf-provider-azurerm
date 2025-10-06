# `streamAnalyticsStreamInputEventhub` Submodule <a name="`streamAnalyticsStreamInputEventhub` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsStreamInputEventhub <a name="StreamAnalyticsStreamInputEventhub" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub azurerm_stream_analytics_stream_input_eventhub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputEventhub(Construct Scope, string Id, StreamAnalyticsStreamInputEventhubConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig">StreamAnalyticsStreamInputEventhubConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig">StreamAnalyticsStreamInputEventhubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putSerialization">PutSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetEventhubConsumerGroupName">ResetEventhubConsumerGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetPartitionKey">ResetPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetSharedAccessPolicyKey">ResetSharedAccessPolicyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetSharedAccessPolicyName">ResetSharedAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSerialization` <a name="PutSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putSerialization"></a>

```csharp
private void PutSerialization(StreamAnalyticsStreamInputEventhubSerialization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamAnalyticsStreamInputEventhubTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a>

---

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetAuthenticationMode"></a>

```csharp
private void ResetAuthenticationMode()
```

##### `ResetEventhubConsumerGroupName` <a name="ResetEventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetEventhubConsumerGroupName"></a>

```csharp
private void ResetEventhubConsumerGroupName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPartitionKey` <a name="ResetPartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetPartitionKey"></a>

```csharp
private void ResetPartitionKey()
```

##### `ResetSharedAccessPolicyKey` <a name="ResetSharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetSharedAccessPolicyKey"></a>

```csharp
private void ResetSharedAccessPolicyKey()
```

##### `ResetSharedAccessPolicyName` <a name="ResetSharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetSharedAccessPolicyName"></a>

```csharp
private void ResetSharedAccessPolicyName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsStreamInputEventhub resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsStreamInputEventhub.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsStreamInputEventhub.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsStreamInputEventhub.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsStreamInputEventhub.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StreamAnalyticsStreamInputEventhub resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsStreamInputEventhub to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsStreamInputEventhub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsStreamInputEventhub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference">StreamAnalyticsStreamInputEventhubSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference">StreamAnalyticsStreamInputEventhubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubConsumerGroupNameInput">EventhubConsumerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubNameInput">EventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.serializationInput">SerializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.servicebusNamespaceInput">ServicebusNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyKeyInput">SharedAccessPolicyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyNameInput">SharedAccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.streamAnalyticsJobNameInput">StreamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubName">EventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.partitionKey">PartitionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.servicebusNamespace">ServicebusNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.serialization"></a>

```csharp
public StreamAnalyticsStreamInputEventhubSerializationOutputReference Serialization { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference">StreamAnalyticsStreamInputEventhubSerializationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.timeouts"></a>

```csharp
public StreamAnalyticsStreamInputEventhubTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference">StreamAnalyticsStreamInputEventhubTimeoutsOutputReference</a>

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.authenticationModeInput"></a>

```csharp
public string AuthenticationModeInput { get; }
```

- *Type:* string

---

##### `EventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="EventhubConsumerGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubConsumerGroupNameInput"></a>

```csharp
public string EventhubConsumerGroupNameInput { get; }
```

- *Type:* string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubNameInput"></a>

```csharp
public string EventhubNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.partitionKeyInput"></a>

```csharp
public string PartitionKeyInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SerializationInput`<sup>Optional</sup> <a name="SerializationInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.serializationInput"></a>

```csharp
public StreamAnalyticsStreamInputEventhubSerialization SerializationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a>

---

##### `ServicebusNamespaceInput`<sup>Optional</sup> <a name="ServicebusNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.servicebusNamespaceInput"></a>

```csharp
public string ServicebusNamespaceInput { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="SharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyKeyInput"></a>

```csharp
public string SharedAccessPolicyKeyInput { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyNameInput`<sup>Optional</sup> <a name="SharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyNameInput"></a>

```csharp
public string SharedAccessPolicyNameInput { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobNameInput`<sup>Optional</sup> <a name="StreamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.streamAnalyticsJobNameInput"></a>

```csharp
public string StreamAnalyticsJobNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.timeoutsInput"></a>

```csharp
public IResolvable|StreamAnalyticsStreamInputEventhubTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a>

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `EventhubConsumerGroupName`<sup>Required</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubConsumerGroupName"></a>

```csharp
public string EventhubConsumerGroupName { get; }
```

- *Type:* string

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.eventhubName"></a>

```csharp
public string EventhubName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.partitionKey"></a>

```csharp
public string PartitionKey { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServicebusNamespace`<sup>Required</sup> <a name="ServicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.servicebusNamespace"></a>

```csharp
public string ServicebusNamespace { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyKey`<sup>Required</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyKey"></a>

```csharp
public string SharedAccessPolicyKey { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyName`<sup>Required</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.sharedAccessPolicyName"></a>

```csharp
public string SharedAccessPolicyName { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhub.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsStreamInputEventhubConfig <a name="StreamAnalyticsStreamInputEventhubConfig" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputEventhubConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EventhubName,
    string Name,
    string ResourceGroupName,
    StreamAnalyticsStreamInputEventhubSerialization Serialization,
    string ServicebusNamespace,
    string StreamAnalyticsJobName,
    string AuthenticationMode = null,
    string EventhubConsumerGroupName = null,
    string Id = null,
    string PartitionKey = null,
    string SharedAccessPolicyKey = null,
    string SharedAccessPolicyName = null,
    StreamAnalyticsStreamInputEventhubTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.eventhubName">EventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#eventhub_name StreamAnalyticsStreamInputEventhub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#name StreamAnalyticsStreamInputEventhub#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#resource_group_name StreamAnalyticsStreamInputEventhub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.servicebusNamespace">ServicebusNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#servicebus_namespace StreamAnalyticsStreamInputEventhub#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#stream_analytics_job_name StreamAnalyticsStreamInputEventhub#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#authentication_mode StreamAnalyticsStreamInputEventhub#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhub#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#id StreamAnalyticsStreamInputEventhub#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.partitionKey">PartitionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#partition_key StreamAnalyticsStreamInputEventhub#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#shared_access_policy_key StreamAnalyticsStreamInputEventhub#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#shared_access_policy_name StreamAnalyticsStreamInputEventhub#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.eventhubName"></a>

```csharp
public string EventhubName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#eventhub_name StreamAnalyticsStreamInputEventhub#eventhub_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#name StreamAnalyticsStreamInputEventhub#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#resource_group_name StreamAnalyticsStreamInputEventhub#resource_group_name}.

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.serialization"></a>

```csharp
public StreamAnalyticsStreamInputEventhubSerialization Serialization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#serialization StreamAnalyticsStreamInputEventhub#serialization}

---

##### `ServicebusNamespace`<sup>Required</sup> <a name="ServicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.servicebusNamespace"></a>

```csharp
public string ServicebusNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#servicebus_namespace StreamAnalyticsStreamInputEventhub#servicebus_namespace}.

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#stream_analytics_job_name StreamAnalyticsStreamInputEventhub#stream_analytics_job_name}.

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#authentication_mode StreamAnalyticsStreamInputEventhub#authentication_mode}.

---

##### `EventhubConsumerGroupName`<sup>Optional</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.eventhubConsumerGroupName"></a>

```csharp
public string EventhubConsumerGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhub#eventhub_consumer_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#id StreamAnalyticsStreamInputEventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionKey`<sup>Optional</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.partitionKey"></a>

```csharp
public string PartitionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#partition_key StreamAnalyticsStreamInputEventhub#partition_key}.

---

##### `SharedAccessPolicyKey`<sup>Optional</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.sharedAccessPolicyKey"></a>

```csharp
public string SharedAccessPolicyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#shared_access_policy_key StreamAnalyticsStreamInputEventhub#shared_access_policy_key}.

---

##### `SharedAccessPolicyName`<sup>Optional</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.sharedAccessPolicyName"></a>

```csharp
public string SharedAccessPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#shared_access_policy_name StreamAnalyticsStreamInputEventhub#shared_access_policy_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubConfig.property.timeouts"></a>

```csharp
public StreamAnalyticsStreamInputEventhubTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#timeouts StreamAnalyticsStreamInputEventhub#timeouts}

---

### StreamAnalyticsStreamInputEventhubSerialization <a name="StreamAnalyticsStreamInputEventhubSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputEventhubSerialization {
    string Type,
    string Encoding = null,
    string FieldDelimiter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#type StreamAnalyticsStreamInputEventhub#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.encoding">Encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#encoding StreamAnalyticsStreamInputEventhub#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#field_delimiter StreamAnalyticsStreamInputEventhub#field_delimiter}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#type StreamAnalyticsStreamInputEventhub#type}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#encoding StreamAnalyticsStreamInputEventhub#encoding}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#field_delimiter StreamAnalyticsStreamInputEventhub#field_delimiter}.

---

### StreamAnalyticsStreamInputEventhubTimeouts <a name="StreamAnalyticsStreamInputEventhubTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputEventhubTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#create StreamAnalyticsStreamInputEventhub#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#delete StreamAnalyticsStreamInputEventhub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#read StreamAnalyticsStreamInputEventhub#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#update StreamAnalyticsStreamInputEventhub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#create StreamAnalyticsStreamInputEventhub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#delete StreamAnalyticsStreamInputEventhub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#read StreamAnalyticsStreamInputEventhub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_stream_input_eventhub#update StreamAnalyticsStreamInputEventhub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsStreamInputEventhubSerializationOutputReference <a name="StreamAnalyticsStreamInputEventhubSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputEventhubSerializationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerializationOutputReference.property.internalValue"></a>

```csharp
public StreamAnalyticsStreamInputEventhubSerialization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubSerialization">StreamAnalyticsStreamInputEventhubSerialization</a>

---


### StreamAnalyticsStreamInputEventhubTimeoutsOutputReference <a name="StreamAnalyticsStreamInputEventhubTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputEventhubTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StreamAnalyticsStreamInputEventhubTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhub.StreamAnalyticsStreamInputEventhubTimeouts">StreamAnalyticsStreamInputEventhubTimeouts</a>

---



