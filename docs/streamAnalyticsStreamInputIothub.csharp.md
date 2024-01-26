# `streamAnalyticsStreamInputIothub` Submodule <a name="`streamAnalyticsStreamInputIothub` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsStreamInputIothub <a name="StreamAnalyticsStreamInputIothub" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub azurerm_stream_analytics_stream_input_iothub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputIothub(Construct Scope, string Id, StreamAnalyticsStreamInputIothubConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig">StreamAnalyticsStreamInputIothubConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig">StreamAnalyticsStreamInputIothubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putSerialization">PutSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSerialization` <a name="PutSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putSerialization"></a>

```csharp
private void PutSerialization(StreamAnalyticsStreamInputIothubSerialization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamAnalyticsStreamInputIothubTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts">StreamAnalyticsStreamInputIothubTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsStreamInputIothub resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsStreamInputIothub.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsStreamInputIothub.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsStreamInputIothub.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsStreamInputIothub.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StreamAnalyticsStreamInputIothub resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsStreamInputIothub to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsStreamInputIothub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsStreamInputIothub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference">StreamAnalyticsStreamInputIothubSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference">StreamAnalyticsStreamInputIothubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.eventhubConsumerGroupNameInput">EventhubConsumerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.iothubNamespaceInput">IothubNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.serializationInput">SerializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyKeyInput">SharedAccessPolicyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyNameInput">SharedAccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.streamAnalyticsJobNameInput">StreamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.iothubNamespace">IothubNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.serialization"></a>

```csharp
public StreamAnalyticsStreamInputIothubSerializationOutputReference Serialization { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference">StreamAnalyticsStreamInputIothubSerializationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.timeouts"></a>

```csharp
public StreamAnalyticsStreamInputIothubTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference">StreamAnalyticsStreamInputIothubTimeoutsOutputReference</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `EventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="EventhubConsumerGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.eventhubConsumerGroupNameInput"></a>

```csharp
public string EventhubConsumerGroupNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IothubNamespaceInput`<sup>Optional</sup> <a name="IothubNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.iothubNamespaceInput"></a>

```csharp
public string IothubNamespaceInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SerializationInput`<sup>Optional</sup> <a name="SerializationInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.serializationInput"></a>

```csharp
public StreamAnalyticsStreamInputIothubSerialization SerializationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a>

---

##### `SharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="SharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyKeyInput"></a>

```csharp
public string SharedAccessPolicyKeyInput { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyNameInput`<sup>Optional</sup> <a name="SharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyNameInput"></a>

```csharp
public string SharedAccessPolicyNameInput { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobNameInput`<sup>Optional</sup> <a name="StreamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.streamAnalyticsJobNameInput"></a>

```csharp
public string StreamAnalyticsJobNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EventhubConsumerGroupName`<sup>Required</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.eventhubConsumerGroupName"></a>

```csharp
public string EventhubConsumerGroupName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IothubNamespace`<sup>Required</sup> <a name="IothubNamespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.iothubNamespace"></a>

```csharp
public string IothubNamespace { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyKey`<sup>Required</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyKey"></a>

```csharp
public string SharedAccessPolicyKey { get; }
```

- *Type:* string

---

##### `SharedAccessPolicyName`<sup>Required</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyName"></a>

```csharp
public string SharedAccessPolicyName { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsStreamInputIothubConfig <a name="StreamAnalyticsStreamInputIothubConfig" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputIothubConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Endpoint,
    string EventhubConsumerGroupName,
    string IothubNamespace,
    string Name,
    string ResourceGroupName,
    StreamAnalyticsStreamInputIothubSerialization Serialization,
    string SharedAccessPolicyKey,
    string SharedAccessPolicyName,
    string StreamAnalyticsJobName,
    string Id = null,
    StreamAnalyticsStreamInputIothubTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#endpoint StreamAnalyticsStreamInputIothub#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#eventhub_consumer_group_name StreamAnalyticsStreamInputIothub#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.iothubNamespace">IothubNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#iothub_namespace StreamAnalyticsStreamInputIothub#iothub_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#name StreamAnalyticsStreamInputIothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#resource_group_name StreamAnalyticsStreamInputIothub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#shared_access_policy_key StreamAnalyticsStreamInputIothub#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#shared_access_policy_name StreamAnalyticsStreamInputIothub#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#stream_analytics_job_name StreamAnalyticsStreamInputIothub#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#id StreamAnalyticsStreamInputIothub#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts">StreamAnalyticsStreamInputIothubTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#endpoint StreamAnalyticsStreamInputIothub#endpoint}.

---

##### `EventhubConsumerGroupName`<sup>Required</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.eventhubConsumerGroupName"></a>

```csharp
public string EventhubConsumerGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#eventhub_consumer_group_name StreamAnalyticsStreamInputIothub#eventhub_consumer_group_name}.

---

##### `IothubNamespace`<sup>Required</sup> <a name="IothubNamespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.iothubNamespace"></a>

```csharp
public string IothubNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#iothub_namespace StreamAnalyticsStreamInputIothub#iothub_namespace}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#name StreamAnalyticsStreamInputIothub#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#resource_group_name StreamAnalyticsStreamInputIothub#resource_group_name}.

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.serialization"></a>

```csharp
public StreamAnalyticsStreamInputIothubSerialization Serialization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#serialization StreamAnalyticsStreamInputIothub#serialization}

---

##### `SharedAccessPolicyKey`<sup>Required</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.sharedAccessPolicyKey"></a>

```csharp
public string SharedAccessPolicyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#shared_access_policy_key StreamAnalyticsStreamInputIothub#shared_access_policy_key}.

---

##### `SharedAccessPolicyName`<sup>Required</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.sharedAccessPolicyName"></a>

```csharp
public string SharedAccessPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#shared_access_policy_name StreamAnalyticsStreamInputIothub#shared_access_policy_name}.

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#stream_analytics_job_name StreamAnalyticsStreamInputIothub#stream_analytics_job_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#id StreamAnalyticsStreamInputIothub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.timeouts"></a>

```csharp
public StreamAnalyticsStreamInputIothubTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts">StreamAnalyticsStreamInputIothubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#timeouts StreamAnalyticsStreamInputIothub#timeouts}

---

### StreamAnalyticsStreamInputIothubSerialization <a name="StreamAnalyticsStreamInputIothubSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputIothubSerialization {
    string Type,
    string Encoding = null,
    string FieldDelimiter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#type StreamAnalyticsStreamInputIothub#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.encoding">Encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#encoding StreamAnalyticsStreamInputIothub#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#field_delimiter StreamAnalyticsStreamInputIothub#field_delimiter}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#type StreamAnalyticsStreamInputIothub#type}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#encoding StreamAnalyticsStreamInputIothub#encoding}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#field_delimiter StreamAnalyticsStreamInputIothub#field_delimiter}.

---

### StreamAnalyticsStreamInputIothubTimeouts <a name="StreamAnalyticsStreamInputIothubTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputIothubTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#create StreamAnalyticsStreamInputIothub#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#delete StreamAnalyticsStreamInputIothub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#read StreamAnalyticsStreamInputIothub#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#update StreamAnalyticsStreamInputIothub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#create StreamAnalyticsStreamInputIothub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#delete StreamAnalyticsStreamInputIothub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#read StreamAnalyticsStreamInputIothub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/stream_analytics_stream_input_iothub#update StreamAnalyticsStreamInputIothub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsStreamInputIothubSerializationOutputReference <a name="StreamAnalyticsStreamInputIothubSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputIothubSerializationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.internalValue"></a>

```csharp
public StreamAnalyticsStreamInputIothubSerialization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a>

---


### StreamAnalyticsStreamInputIothubTimeoutsOutputReference <a name="StreamAnalyticsStreamInputIothubTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsStreamInputIothubTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



