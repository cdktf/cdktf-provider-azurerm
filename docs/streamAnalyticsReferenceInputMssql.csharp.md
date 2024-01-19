# `streamAnalyticsReferenceInputMssql` Submodule <a name="`streamAnalyticsReferenceInputMssql` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsReferenceInputMssql <a name="StreamAnalyticsReferenceInputMssql" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql azurerm_stream_analytics_reference_input_mssql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsReferenceInputMssql(Construct Scope, string Id, StreamAnalyticsReferenceInputMssqlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig">StreamAnalyticsReferenceInputMssqlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig">StreamAnalyticsReferenceInputMssqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetDeltaSnapshotQuery">ResetDeltaSnapshotQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetRefreshIntervalDuration">ResetRefreshIntervalDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamAnalyticsReferenceInputMssqlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>

---

##### `ResetDeltaSnapshotQuery` <a name="ResetDeltaSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetDeltaSnapshotQuery"></a>

```csharp
private void ResetDeltaSnapshotQuery()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRefreshIntervalDuration` <a name="ResetRefreshIntervalDuration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetRefreshIntervalDuration"></a>

```csharp
private void ResetRefreshIntervalDuration()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsReferenceInputMssql resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsReferenceInputMssql.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsReferenceInputMssql.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsReferenceInputMssql.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsReferenceInputMssql.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StreamAnalyticsReferenceInputMssql resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsReferenceInputMssql to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsReferenceInputMssql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsReferenceInputMssql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference">StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQueryInput">DeltaSnapshotQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQueryInput">FullSnapshotQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDurationInput">RefreshIntervalDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshTypeInput">RefreshTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobNameInput">StreamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQuery">DeltaSnapshotQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQuery">FullSnapshotQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDuration">RefreshIntervalDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshType">RefreshType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.table">Table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeouts"></a>

```csharp
public StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference">StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DeltaSnapshotQueryInput`<sup>Optional</sup> <a name="DeltaSnapshotQueryInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQueryInput"></a>

```csharp
public string DeltaSnapshotQueryInput { get; }
```

- *Type:* string

---

##### `FullSnapshotQueryInput`<sup>Optional</sup> <a name="FullSnapshotQueryInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQueryInput"></a>

```csharp
public string FullSnapshotQueryInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RefreshIntervalDurationInput`<sup>Optional</sup> <a name="RefreshIntervalDurationInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDurationInput"></a>

```csharp
public string RefreshIntervalDurationInput { get; }
```

- *Type:* string

---

##### `RefreshTypeInput`<sup>Optional</sup> <a name="RefreshTypeInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshTypeInput"></a>

```csharp
public string RefreshTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobNameInput`<sup>Optional</sup> <a name="StreamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobNameInput"></a>

```csharp
public string StreamAnalyticsJobNameInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DeltaSnapshotQuery`<sup>Required</sup> <a name="DeltaSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQuery"></a>

```csharp
public string DeltaSnapshotQuery { get; }
```

- *Type:* string

---

##### `FullSnapshotQuery`<sup>Required</sup> <a name="FullSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQuery"></a>

```csharp
public string FullSnapshotQuery { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RefreshIntervalDuration`<sup>Required</sup> <a name="RefreshIntervalDuration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDuration"></a>

```csharp
public string RefreshIntervalDuration { get; }
```

- *Type:* string

---

##### `RefreshType`<sup>Required</sup> <a name="RefreshType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshType"></a>

```csharp
public string RefreshType { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsReferenceInputMssqlConfig <a name="StreamAnalyticsReferenceInputMssqlConfig" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsReferenceInputMssqlConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Database,
    string FullSnapshotQuery,
    string Name,
    string Password,
    string RefreshType,
    string ResourceGroupName,
    string Server,
    string StreamAnalyticsJobName,
    string Username,
    string DeltaSnapshotQuery = null,
    string Id = null,
    string RefreshIntervalDuration = null,
    string Table = null,
    StreamAnalyticsReferenceInputMssqlTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.fullSnapshotQuery">FullSnapshotQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshType">RefreshType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.deltaSnapshotQuery">DeltaSnapshotQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshIntervalDuration">RefreshIntervalDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.table">Table</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}.

---

##### `FullSnapshotQuery`<sup>Required</sup> <a name="FullSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.fullSnapshotQuery"></a>

```csharp
public string FullSnapshotQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}.

---

##### `RefreshType`<sup>Required</sup> <a name="RefreshType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshType"></a>

```csharp
public string RefreshType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}.

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}.

---

##### `DeltaSnapshotQuery`<sup>Optional</sup> <a name="DeltaSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.deltaSnapshotQuery"></a>

```csharp
public string DeltaSnapshotQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshIntervalDuration`<sup>Optional</sup> <a name="RefreshIntervalDuration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshIntervalDuration"></a>

```csharp
public string RefreshIntervalDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.timeouts"></a>

```csharp
public StreamAnalyticsReferenceInputMssqlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#timeouts StreamAnalyticsReferenceInputMssql#timeouts}

---

### StreamAnalyticsReferenceInputMssqlTimeouts <a name="StreamAnalyticsReferenceInputMssqlTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsReferenceInputMssqlTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#create StreamAnalyticsReferenceInputMssql#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#delete StreamAnalyticsReferenceInputMssql#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#read StreamAnalyticsReferenceInputMssql#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#update StreamAnalyticsReferenceInputMssql#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#create StreamAnalyticsReferenceInputMssql#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#delete StreamAnalyticsReferenceInputMssql#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#read StreamAnalyticsReferenceInputMssql#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/stream_analytics_reference_input_mssql#update StreamAnalyticsReferenceInputMssql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference <a name="StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



