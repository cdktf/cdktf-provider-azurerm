# `streamAnalyticsOutputEventhub` Submodule <a name="`streamAnalyticsOutputEventhub` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputEventhub <a name="StreamAnalyticsOutputEventhub" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub azurerm_stream_analytics_output_eventhub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputEventhub(Construct Scope, string Id, StreamAnalyticsOutputEventhubConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig">StreamAnalyticsOutputEventhubConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig">StreamAnalyticsOutputEventhubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putSerialization">PutSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetPartitionKey">ResetPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetPropertyColumns">ResetPropertyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetSharedAccessPolicyKey">ResetSharedAccessPolicyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetSharedAccessPolicyName">ResetSharedAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSerialization` <a name="PutSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putSerialization"></a>

```csharp
private void PutSerialization(StreamAnalyticsOutputEventhubSerialization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamAnalyticsOutputEventhubTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a>

---

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetAuthenticationMode"></a>

```csharp
private void ResetAuthenticationMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPartitionKey` <a name="ResetPartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetPartitionKey"></a>

```csharp
private void ResetPartitionKey()
```

##### `ResetPropertyColumns` <a name="ResetPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetPropertyColumns"></a>

```csharp
private void ResetPropertyColumns()
```

##### `ResetSharedAccessPolicyKey` <a name="ResetSharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetSharedAccessPolicyKey"></a>

```csharp
private void ResetSharedAccessPolicyKey()
```

##### `ResetSharedAccessPolicyName` <a name="ResetSharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetSharedAccessPolicyName"></a>

```csharp
private void ResetSharedAccessPolicyName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputEventhub resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsOutputEventhub.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsOutputEventhub.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsOutputEventhub.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsOutputEventhub.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StreamAnalyticsOutputEventhub resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsOutputEventhub to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsOutputEventhub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputEventhub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference">StreamAnalyticsOutputEventhubSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference">StreamAnalyticsOutputEventhubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.eventhubNameInput">EventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.propertyColumnsInput">PropertyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.serializationInput">SerializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.servicebusNamespaceInput">ServicebusNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyKeyInput">SharedAccessPolicyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyNameInput">SharedAccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.streamAnalyticsJobNameInput">StreamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.eventhubName">EventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.partitionKey">PartitionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.propertyColumns">PropertyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.servicebusNamespace">ServicebusNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.serialization"></a>

```csharp
public StreamAnalyticsOutputEventhubSerializationOutputReference Serialization { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference">StreamAnalyticsOutputEventhubSerializationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.timeouts"></a>

```csharp
public StreamAnalyticsOutputEventhubTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference">StreamAnalyticsOutputEventhubTimeoutsOutputReference</a>

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.authenticationModeInput"></a>

```csharp
public string AuthenticationModeInput { get; }
```

- *Type:* string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.eventhubNameInput"></a>

```csharp
public string EventhubNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.partitionKeyInput"></a>

```csharp
public string PartitionKeyInput { get; }
```

- *Type:* string

---

##### `PropertyColumnsInput`<sup>Optional</sup> <a name="PropertyColumnsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.propertyColumnsInput"></a>

```csharp
public string[] PropertyColumnsInput { get; }
```

- *Type:* string[]

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SerializationInput`<sup>Optional</sup> <a name="SerializationInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.serializationInput"></a>

```csharp
public StreamAnalyticsOutputEventhubSerialization SerializationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a>

---

##### `ServicebusNamespaceInput`<sup>Optional</sup> <a name="ServicebusNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.servicebusNamespaceInput"></a>

```csharp
public string ServicebusNamespaceInput { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="SharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyKeyInput"></a>

```csharp
public string SharedAccessPolicyKeyInput { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyNameInput`<sup>Optional</sup> <a name="SharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyNameInput"></a>

```csharp
public string SharedAccessPolicyNameInput { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobNameInput`<sup>Optional</sup> <a name="StreamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.streamAnalyticsJobNameInput"></a>

```csharp
public string StreamAnalyticsJobNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.eventhubName"></a>

```csharp
public string EventhubName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.partitionKey"></a>

```csharp
public string PartitionKey { get; }
```

- *Type:* string

---

##### `PropertyColumns`<sup>Required</sup> <a name="PropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.propertyColumns"></a>

```csharp
public string[] PropertyColumns { get; }
```

- *Type:* string[]

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServicebusNamespace`<sup>Required</sup> <a name="ServicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.servicebusNamespace"></a>

```csharp
public string ServicebusNamespace { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyKey`<sup>Required</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyKey"></a>

```csharp
public string SharedAccessPolicyKey { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyName`<sup>Required</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyName"></a>

```csharp
public string SharedAccessPolicyName { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputEventhubConfig <a name="StreamAnalyticsOutputEventhubConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputEventhubConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EventhubName,
    string Name,
    string ResourceGroupName,
    StreamAnalyticsOutputEventhubSerialization Serialization,
    string ServicebusNamespace,
    string StreamAnalyticsJobName,
    string AuthenticationMode = null,
    string Id = null,
    string PartitionKey = null,
    string[] PropertyColumns = null,
    string SharedAccessPolicyKey = null,
    string SharedAccessPolicyName = null,
    StreamAnalyticsOutputEventhubTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.eventhubName">EventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#eventhub_name StreamAnalyticsOutputEventhub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#name StreamAnalyticsOutputEventhub#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#resource_group_name StreamAnalyticsOutputEventhub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.servicebusNamespace">ServicebusNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#servicebus_namespace StreamAnalyticsOutputEventhub#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#stream_analytics_job_name StreamAnalyticsOutputEventhub#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#authentication_mode StreamAnalyticsOutputEventhub#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#id StreamAnalyticsOutputEventhub#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.partitionKey">PartitionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#partition_key StreamAnalyticsOutputEventhub#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.propertyColumns">PropertyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#property_columns StreamAnalyticsOutputEventhub#property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_key StreamAnalyticsOutputEventhub#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_name StreamAnalyticsOutputEventhub#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.eventhubName"></a>

```csharp
public string EventhubName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#eventhub_name StreamAnalyticsOutputEventhub#eventhub_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#name StreamAnalyticsOutputEventhub#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#resource_group_name StreamAnalyticsOutputEventhub#resource_group_name}.

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.serialization"></a>

```csharp
public StreamAnalyticsOutputEventhubSerialization Serialization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#serialization StreamAnalyticsOutputEventhub#serialization}

---

##### `ServicebusNamespace`<sup>Required</sup> <a name="ServicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.servicebusNamespace"></a>

```csharp
public string ServicebusNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#servicebus_namespace StreamAnalyticsOutputEventhub#servicebus_namespace}.

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#stream_analytics_job_name StreamAnalyticsOutputEventhub#stream_analytics_job_name}.

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#authentication_mode StreamAnalyticsOutputEventhub#authentication_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#id StreamAnalyticsOutputEventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionKey`<sup>Optional</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.partitionKey"></a>

```csharp
public string PartitionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#partition_key StreamAnalyticsOutputEventhub#partition_key}.

---

##### `PropertyColumns`<sup>Optional</sup> <a name="PropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.propertyColumns"></a>

```csharp
public string[] PropertyColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#property_columns StreamAnalyticsOutputEventhub#property_columns}.

---

##### `SharedAccessPolicyKey`<sup>Optional</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.sharedAccessPolicyKey"></a>

```csharp
public string SharedAccessPolicyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_key StreamAnalyticsOutputEventhub#shared_access_policy_key}.

---

##### `SharedAccessPolicyName`<sup>Optional</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.sharedAccessPolicyName"></a>

```csharp
public string SharedAccessPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_name StreamAnalyticsOutputEventhub#shared_access_policy_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.timeouts"></a>

```csharp
public StreamAnalyticsOutputEventhubTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#timeouts StreamAnalyticsOutputEventhub#timeouts}

---

### StreamAnalyticsOutputEventhubSerialization <a name="StreamAnalyticsOutputEventhubSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputEventhubSerialization {
    string Type,
    string Encoding = null,
    string FieldDelimiter = null,
    string Format = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#type StreamAnalyticsOutputEventhub#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.encoding">Encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#encoding StreamAnalyticsOutputEventhub#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#field_delimiter StreamAnalyticsOutputEventhub#field_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#format StreamAnalyticsOutputEventhub#format}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#type StreamAnalyticsOutputEventhub#type}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#encoding StreamAnalyticsOutputEventhub#encoding}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#field_delimiter StreamAnalyticsOutputEventhub#field_delimiter}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#format StreamAnalyticsOutputEventhub#format}.

---

### StreamAnalyticsOutputEventhubTimeouts <a name="StreamAnalyticsOutputEventhubTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputEventhubTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#create StreamAnalyticsOutputEventhub#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#delete StreamAnalyticsOutputEventhub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#read StreamAnalyticsOutputEventhub#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#update StreamAnalyticsOutputEventhub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#create StreamAnalyticsOutputEventhub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#delete StreamAnalyticsOutputEventhub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#read StreamAnalyticsOutputEventhub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/stream_analytics_output_eventhub#update StreamAnalyticsOutputEventhub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputEventhubSerializationOutputReference <a name="StreamAnalyticsOutputEventhubSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputEventhubSerializationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.internalValue"></a>

```csharp
public StreamAnalyticsOutputEventhubSerialization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a>

---


### StreamAnalyticsOutputEventhubTimeoutsOutputReference <a name="StreamAnalyticsOutputEventhubTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputEventhubTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



