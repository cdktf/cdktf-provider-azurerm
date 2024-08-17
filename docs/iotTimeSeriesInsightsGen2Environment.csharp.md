# `iotTimeSeriesInsightsGen2Environment` Submodule <a name="`iotTimeSeriesInsightsGen2Environment` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsGen2Environment <a name="IotTimeSeriesInsightsGen2Environment" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment azurerm_iot_time_series_insights_gen2_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsGen2Environment(Construct Scope, string Id, IotTimeSeriesInsightsGen2EnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig">IotTimeSeriesInsightsGen2EnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig">IotTimeSeriesInsightsGen2EnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetWarmStoreDataRetentionTime">ResetWarmStoreDataRetentionTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putStorage"></a>

```csharp
private void PutStorage(IotTimeSeriesInsightsGen2EnvironmentStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts"></a>

```csharp
private void PutTimeouts(IotTimeSeriesInsightsGen2EnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWarmStoreDataRetentionTime` <a name="ResetWarmStoreDataRetentionTime" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetWarmStoreDataRetentionTime"></a>

```csharp
private void ResetWarmStoreDataRetentionTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IotTimeSeriesInsightsGen2Environment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsGen2Environment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsGen2Environment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsGen2Environment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsGen2Environment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IotTimeSeriesInsightsGen2Environment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotTimeSeriesInsightsGen2Environment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotTimeSeriesInsightsGen2Environment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IotTimeSeriesInsightsGen2Environment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dataAccessFqdn">DataAccessFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference">IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference">IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idPropertiesInput">IdPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTimeInput">WarmStoreDataRetentionTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idProperties">IdProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTime">WarmStoreDataRetentionTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataAccessFqdn`<sup>Required</sup> <a name="DataAccessFqdn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dataAccessFqdn"></a>

```csharp
public string DataAccessFqdn { get; }
```

- *Type:* string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storage"></a>

```csharp
public IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference">IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeouts"></a>

```csharp
public IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference">IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdPropertiesInput`<sup>Optional</sup> <a name="IdPropertiesInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idPropertiesInput"></a>

```csharp
public string[] IdPropertiesInput { get; }
```

- *Type:* string[]

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storageInput"></a>

```csharp
public IotTimeSeriesInsightsGen2EnvironmentStorage StorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WarmStoreDataRetentionTimeInput`<sup>Optional</sup> <a name="WarmStoreDataRetentionTimeInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTimeInput"></a>

```csharp
public string WarmStoreDataRetentionTimeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdProperties`<sup>Required</sup> <a name="IdProperties" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idProperties"></a>

```csharp
public string[] IdProperties { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WarmStoreDataRetentionTime`<sup>Required</sup> <a name="WarmStoreDataRetentionTime" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTime"></a>

```csharp
public string WarmStoreDataRetentionTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsGen2EnvironmentConfig <a name="IotTimeSeriesInsightsGen2EnvironmentConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsGen2EnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] IdProperties,
    string Location,
    string Name,
    string ResourceGroupName,
    string SkuName,
    IotTimeSeriesInsightsGen2EnvironmentStorage Storage,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IotTimeSeriesInsightsGen2EnvironmentTimeouts Timeouts = null,
    string WarmStoreDataRetentionTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.idProperties">IdProperties</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#id_properties IotTimeSeriesInsightsGen2Environment#id_properties}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#location IotTimeSeriesInsightsGen2Environment#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#resource_group_name IotTimeSeriesInsightsGen2Environment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#sku_name IotTimeSeriesInsightsGen2Environment#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#id IotTimeSeriesInsightsGen2Environment#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#tags IotTimeSeriesInsightsGen2Environment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.warmStoreDataRetentionTime">WarmStoreDataRetentionTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#warm_store_data_retention_time IotTimeSeriesInsightsGen2Environment#warm_store_data_retention_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdProperties`<sup>Required</sup> <a name="IdProperties" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.idProperties"></a>

```csharp
public string[] IdProperties { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#id_properties IotTimeSeriesInsightsGen2Environment#id_properties}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#location IotTimeSeriesInsightsGen2Environment#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#resource_group_name IotTimeSeriesInsightsGen2Environment#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#sku_name IotTimeSeriesInsightsGen2Environment#sku_name}.

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.storage"></a>

```csharp
public IotTimeSeriesInsightsGen2EnvironmentStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#storage IotTimeSeriesInsightsGen2Environment#storage}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#id IotTimeSeriesInsightsGen2Environment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#tags IotTimeSeriesInsightsGen2Environment#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.timeouts"></a>

```csharp
public IotTimeSeriesInsightsGen2EnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#timeouts IotTimeSeriesInsightsGen2Environment#timeouts}

---

##### `WarmStoreDataRetentionTime`<sup>Optional</sup> <a name="WarmStoreDataRetentionTime" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.warmStoreDataRetentionTime"></a>

```csharp
public string WarmStoreDataRetentionTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#warm_store_data_retention_time IotTimeSeriesInsightsGen2Environment#warm_store_data_retention_time}.

---

### IotTimeSeriesInsightsGen2EnvironmentStorage <a name="IotTimeSeriesInsightsGen2EnvironmentStorage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsGen2EnvironmentStorage {
    string Key,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#key IotTimeSeriesInsightsGen2Environment#key}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#key IotTimeSeriesInsightsGen2Environment#key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}.

---

### IotTimeSeriesInsightsGen2EnvironmentTimeouts <a name="IotTimeSeriesInsightsGen2EnvironmentTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsGen2EnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#create IotTimeSeriesInsightsGen2Environment#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#delete IotTimeSeriesInsightsGen2Environment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#read IotTimeSeriesInsightsGen2Environment#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#update IotTimeSeriesInsightsGen2Environment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#create IotTimeSeriesInsightsGen2Environment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#delete IotTimeSeriesInsightsGen2Environment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#read IotTimeSeriesInsightsGen2Environment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/iot_time_series_insights_gen2_environment#update IotTimeSeriesInsightsGen2Environment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference <a name="IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.internalValue"></a>

```csharp
public IotTimeSeriesInsightsGen2EnvironmentStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

---


### IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference <a name="IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



