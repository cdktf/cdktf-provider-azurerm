# `streamAnalyticsOutputServicebusTopic` Submodule <a name="`streamAnalyticsOutputServicebusTopic` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputServicebusTopic <a name="StreamAnalyticsOutputServicebusTopic" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic azurerm_stream_analytics_output_servicebus_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputServicebusTopic(Construct Scope, string Id, StreamAnalyticsOutputServicebusTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig">StreamAnalyticsOutputServicebusTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig">StreamAnalyticsOutputServicebusTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putSerialization">PutSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetPropertyColumns">ResetPropertyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSharedAccessPolicyKey">ResetSharedAccessPolicyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSharedAccessPolicyName">ResetSharedAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSystemPropertyColumns">ResetSystemPropertyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSerialization` <a name="PutSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putSerialization"></a>

```csharp
private void PutSerialization(StreamAnalyticsOutputServicebusTopicSerialization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamAnalyticsOutputServicebusTopicTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a>

---

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetAuthenticationMode"></a>

```csharp
private void ResetAuthenticationMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPropertyColumns` <a name="ResetPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetPropertyColumns"></a>

```csharp
private void ResetPropertyColumns()
```

##### `ResetSharedAccessPolicyKey` <a name="ResetSharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSharedAccessPolicyKey"></a>

```csharp
private void ResetSharedAccessPolicyKey()
```

##### `ResetSharedAccessPolicyName` <a name="ResetSharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSharedAccessPolicyName"></a>

```csharp
private void ResetSharedAccessPolicyName()
```

##### `ResetSystemPropertyColumns` <a name="ResetSystemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetSystemPropertyColumns"></a>

```csharp
private void ResetSystemPropertyColumns()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputServicebusTopic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsOutputServicebusTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsOutputServicebusTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsOutputServicebusTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsOutputServicebusTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StreamAnalyticsOutputServicebusTopic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsOutputServicebusTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsOutputServicebusTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputServicebusTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference">StreamAnalyticsOutputServicebusTopicSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference">StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.propertyColumnsInput">PropertyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.serializationInput">SerializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.servicebusNamespaceInput">ServicebusNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyKeyInput">SharedAccessPolicyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyNameInput">SharedAccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.streamAnalyticsJobNameInput">StreamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.systemPropertyColumnsInput">SystemPropertyColumnsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.topicNameInput">TopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.propertyColumns">PropertyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.servicebusNamespace">ServicebusNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.systemPropertyColumns">SystemPropertyColumns</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.topicName">TopicName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.serialization"></a>

```csharp
public StreamAnalyticsOutputServicebusTopicSerializationOutputReference Serialization { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference">StreamAnalyticsOutputServicebusTopicSerializationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.timeouts"></a>

```csharp
public StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference">StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference</a>

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.authenticationModeInput"></a>

```csharp
public string AuthenticationModeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertyColumnsInput`<sup>Optional</sup> <a name="PropertyColumnsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.propertyColumnsInput"></a>

```csharp
public string[] PropertyColumnsInput { get; }
```

- *Type:* string[]

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SerializationInput`<sup>Optional</sup> <a name="SerializationInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.serializationInput"></a>

```csharp
public StreamAnalyticsOutputServicebusTopicSerialization SerializationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a>

---

##### `ServicebusNamespaceInput`<sup>Optional</sup> <a name="ServicebusNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.servicebusNamespaceInput"></a>

```csharp
public string ServicebusNamespaceInput { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="SharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyKeyInput"></a>

```csharp
public string SharedAccessPolicyKeyInput { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyNameInput`<sup>Optional</sup> <a name="SharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyNameInput"></a>

```csharp
public string SharedAccessPolicyNameInput { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobNameInput`<sup>Optional</sup> <a name="StreamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.streamAnalyticsJobNameInput"></a>

```csharp
public string StreamAnalyticsJobNameInput { get; }
```

- *Type:* string

---

##### `SystemPropertyColumnsInput`<sup>Optional</sup> <a name="SystemPropertyColumnsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.systemPropertyColumnsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemPropertyColumnsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.timeoutsInput"></a>

```csharp
public IResolvable|StreamAnalyticsOutputServicebusTopicTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a>

---

##### `TopicNameInput`<sup>Optional</sup> <a name="TopicNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.topicNameInput"></a>

```csharp
public string TopicNameInput { get; }
```

- *Type:* string

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PropertyColumns`<sup>Required</sup> <a name="PropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.propertyColumns"></a>

```csharp
public string[] PropertyColumns { get; }
```

- *Type:* string[]

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServicebusNamespace`<sup>Required</sup> <a name="ServicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.servicebusNamespace"></a>

```csharp
public string ServicebusNamespace { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyKey`<sup>Required</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyKey"></a>

```csharp
public string SharedAccessPolicyKey { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyName`<sup>Required</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.sharedAccessPolicyName"></a>

```csharp
public string SharedAccessPolicyName { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; }
```

- *Type:* string

---

##### `SystemPropertyColumns`<sup>Required</sup> <a name="SystemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.systemPropertyColumns"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemPropertyColumns { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.topicName"></a>

```csharp
public string TopicName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputServicebusTopicConfig <a name="StreamAnalyticsOutputServicebusTopicConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputServicebusTopicConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    StreamAnalyticsOutputServicebusTopicSerialization Serialization,
    string ServicebusNamespace,
    string StreamAnalyticsJobName,
    string TopicName,
    string AuthenticationMode = null,
    string Id = null,
    string[] PropertyColumns = null,
    string SharedAccessPolicyKey = null,
    string SharedAccessPolicyName = null,
    System.Collections.Generic.IDictionary<string, string> SystemPropertyColumns = null,
    StreamAnalyticsOutputServicebusTopicTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#name StreamAnalyticsOutputServicebusTopic#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#resource_group_name StreamAnalyticsOutputServicebusTopic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.servicebusNamespace">ServicebusNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#servicebus_namespace StreamAnalyticsOutputServicebusTopic#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#stream_analytics_job_name StreamAnalyticsOutputServicebusTopic#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.topicName">TopicName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#topic_name StreamAnalyticsOutputServicebusTopic#topic_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#authentication_mode StreamAnalyticsOutputServicebusTopic#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#id StreamAnalyticsOutputServicebusTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.propertyColumns">PropertyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#property_columns StreamAnalyticsOutputServicebusTopic#property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#shared_access_policy_key StreamAnalyticsOutputServicebusTopic#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#shared_access_policy_name StreamAnalyticsOutputServicebusTopic#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.systemPropertyColumns">SystemPropertyColumns</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#system_property_columns StreamAnalyticsOutputServicebusTopic#system_property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#name StreamAnalyticsOutputServicebusTopic#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#resource_group_name StreamAnalyticsOutputServicebusTopic#resource_group_name}.

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.serialization"></a>

```csharp
public StreamAnalyticsOutputServicebusTopicSerialization Serialization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#serialization StreamAnalyticsOutputServicebusTopic#serialization}

---

##### `ServicebusNamespace`<sup>Required</sup> <a name="ServicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.servicebusNamespace"></a>

```csharp
public string ServicebusNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#servicebus_namespace StreamAnalyticsOutputServicebusTopic#servicebus_namespace}.

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#stream_analytics_job_name StreamAnalyticsOutputServicebusTopic#stream_analytics_job_name}.

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.topicName"></a>

```csharp
public string TopicName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#topic_name StreamAnalyticsOutputServicebusTopic#topic_name}.

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#authentication_mode StreamAnalyticsOutputServicebusTopic#authentication_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#id StreamAnalyticsOutputServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PropertyColumns`<sup>Optional</sup> <a name="PropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.propertyColumns"></a>

```csharp
public string[] PropertyColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#property_columns StreamAnalyticsOutputServicebusTopic#property_columns}.

---

##### `SharedAccessPolicyKey`<sup>Optional</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.sharedAccessPolicyKey"></a>

```csharp
public string SharedAccessPolicyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#shared_access_policy_key StreamAnalyticsOutputServicebusTopic#shared_access_policy_key}.

---

##### `SharedAccessPolicyName`<sup>Optional</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.sharedAccessPolicyName"></a>

```csharp
public string SharedAccessPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#shared_access_policy_name StreamAnalyticsOutputServicebusTopic#shared_access_policy_name}.

---

##### `SystemPropertyColumns`<sup>Optional</sup> <a name="SystemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.systemPropertyColumns"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemPropertyColumns { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#system_property_columns StreamAnalyticsOutputServicebusTopic#system_property_columns}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicConfig.property.timeouts"></a>

```csharp
public StreamAnalyticsOutputServicebusTopicTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#timeouts StreamAnalyticsOutputServicebusTopic#timeouts}

---

### StreamAnalyticsOutputServicebusTopicSerialization <a name="StreamAnalyticsOutputServicebusTopicSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputServicebusTopicSerialization {
    string Type,
    string Encoding = null,
    string FieldDelimiter = null,
    string Format = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#type StreamAnalyticsOutputServicebusTopic#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.encoding">Encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#encoding StreamAnalyticsOutputServicebusTopic#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#field_delimiter StreamAnalyticsOutputServicebusTopic#field_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#format StreamAnalyticsOutputServicebusTopic#format}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#type StreamAnalyticsOutputServicebusTopic#type}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#encoding StreamAnalyticsOutputServicebusTopic#encoding}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#field_delimiter StreamAnalyticsOutputServicebusTopic#field_delimiter}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#format StreamAnalyticsOutputServicebusTopic#format}.

---

### StreamAnalyticsOutputServicebusTopicTimeouts <a name="StreamAnalyticsOutputServicebusTopicTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputServicebusTopicTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#create StreamAnalyticsOutputServicebusTopic#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#delete StreamAnalyticsOutputServicebusTopic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#read StreamAnalyticsOutputServicebusTopic#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#update StreamAnalyticsOutputServicebusTopic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#create StreamAnalyticsOutputServicebusTopic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#delete StreamAnalyticsOutputServicebusTopic#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#read StreamAnalyticsOutputServicebusTopic#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_output_servicebus_topic#update StreamAnalyticsOutputServicebusTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputServicebusTopicSerializationOutputReference <a name="StreamAnalyticsOutputServicebusTopicSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputServicebusTopicSerializationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerializationOutputReference.property.internalValue"></a>

```csharp
public StreamAnalyticsOutputServicebusTopicSerialization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicSerialization">StreamAnalyticsOutputServicebusTopicSerialization</a>

---


### StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference <a name="StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StreamAnalyticsOutputServicebusTopicTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusTopic.StreamAnalyticsOutputServicebusTopicTimeouts">StreamAnalyticsOutputServicebusTopicTimeouts</a>

---



