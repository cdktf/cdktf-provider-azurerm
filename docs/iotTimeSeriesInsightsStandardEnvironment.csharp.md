# `iotTimeSeriesInsightsStandardEnvironment` Submodule <a name="`iotTimeSeriesInsightsStandardEnvironment` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsStandardEnvironment <a name="IotTimeSeriesInsightsStandardEnvironment" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment azurerm_iot_time_series_insights_standard_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsStandardEnvironment(Construct Scope, string Id, IotTimeSeriesInsightsStandardEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig">IotTimeSeriesInsightsStandardEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig">IotTimeSeriesInsightsStandardEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetPartitionKey">ResetPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetStorageLimitExceededBehavior">ResetStorageLimitExceededBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(IotTimeSeriesInsightsStandardEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts">IotTimeSeriesInsightsStandardEnvironmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPartitionKey` <a name="ResetPartitionKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetPartitionKey"></a>

```csharp
private void ResetPartitionKey()
```

##### `ResetStorageLimitExceededBehavior` <a name="ResetStorageLimitExceededBehavior" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetStorageLimitExceededBehavior"></a>

```csharp
private void ResetStorageLimitExceededBehavior()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IotTimeSeriesInsightsStandardEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsStandardEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsStandardEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsStandardEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsStandardEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IotTimeSeriesInsightsStandardEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotTimeSeriesInsightsStandardEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotTimeSeriesInsightsStandardEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IotTimeSeriesInsightsStandardEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference">IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.dataRetentionTimeInput">DataRetentionTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.storageLimitExceededBehaviorInput">StorageLimitExceededBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.dataRetentionTime">DataRetentionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.partitionKey">PartitionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.storageLimitExceededBehavior">StorageLimitExceededBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.timeouts"></a>

```csharp
public IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference">IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference</a>

---

##### `DataRetentionTimeInput`<sup>Optional</sup> <a name="DataRetentionTimeInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.dataRetentionTimeInput"></a>

```csharp
public string DataRetentionTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.partitionKeyInput"></a>

```csharp
public string PartitionKeyInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `StorageLimitExceededBehaviorInput`<sup>Optional</sup> <a name="StorageLimitExceededBehaviorInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.storageLimitExceededBehaviorInput"></a>

```csharp
public string StorageLimitExceededBehaviorInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataRetentionTime`<sup>Required</sup> <a name="DataRetentionTime" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.dataRetentionTime"></a>

```csharp
public string DataRetentionTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.partitionKey"></a>

```csharp
public string PartitionKey { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `StorageLimitExceededBehavior`<sup>Required</sup> <a name="StorageLimitExceededBehavior" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.storageLimitExceededBehavior"></a>

```csharp
public string StorageLimitExceededBehavior { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsStandardEnvironmentConfig <a name="IotTimeSeriesInsightsStandardEnvironmentConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsStandardEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataRetentionTime,
    string Location,
    string Name,
    string ResourceGroupName,
    string SkuName,
    string Id = null,
    string PartitionKey = null,
    string StorageLimitExceededBehavior = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IotTimeSeriesInsightsStandardEnvironmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.dataRetentionTime">DataRetentionTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#data_retention_time IotTimeSeriesInsightsStandardEnvironment#data_retention_time}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#location IotTimeSeriesInsightsStandardEnvironment#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#name IotTimeSeriesInsightsStandardEnvironment#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#resource_group_name IotTimeSeriesInsightsStandardEnvironment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#sku_name IotTimeSeriesInsightsStandardEnvironment#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#id IotTimeSeriesInsightsStandardEnvironment#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.partitionKey">PartitionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#partition_key IotTimeSeriesInsightsStandardEnvironment#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.storageLimitExceededBehavior">StorageLimitExceededBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#storage_limit_exceeded_behavior IotTimeSeriesInsightsStandardEnvironment#storage_limit_exceeded_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#tags IotTimeSeriesInsightsStandardEnvironment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts">IotTimeSeriesInsightsStandardEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataRetentionTime`<sup>Required</sup> <a name="DataRetentionTime" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.dataRetentionTime"></a>

```csharp
public string DataRetentionTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#data_retention_time IotTimeSeriesInsightsStandardEnvironment#data_retention_time}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#location IotTimeSeriesInsightsStandardEnvironment#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#name IotTimeSeriesInsightsStandardEnvironment#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#resource_group_name IotTimeSeriesInsightsStandardEnvironment#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#sku_name IotTimeSeriesInsightsStandardEnvironment#sku_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#id IotTimeSeriesInsightsStandardEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionKey`<sup>Optional</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.partitionKey"></a>

```csharp
public string PartitionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#partition_key IotTimeSeriesInsightsStandardEnvironment#partition_key}.

---

##### `StorageLimitExceededBehavior`<sup>Optional</sup> <a name="StorageLimitExceededBehavior" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.storageLimitExceededBehavior"></a>

```csharp
public string StorageLimitExceededBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#storage_limit_exceeded_behavior IotTimeSeriesInsightsStandardEnvironment#storage_limit_exceeded_behavior}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#tags IotTimeSeriesInsightsStandardEnvironment#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentConfig.property.timeouts"></a>

```csharp
public IotTimeSeriesInsightsStandardEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts">IotTimeSeriesInsightsStandardEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#timeouts IotTimeSeriesInsightsStandardEnvironment#timeouts}

---

### IotTimeSeriesInsightsStandardEnvironmentTimeouts <a name="IotTimeSeriesInsightsStandardEnvironmentTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsStandardEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#create IotTimeSeriesInsightsStandardEnvironment#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#delete IotTimeSeriesInsightsStandardEnvironment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#read IotTimeSeriesInsightsStandardEnvironment#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#update IotTimeSeriesInsightsStandardEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#create IotTimeSeriesInsightsStandardEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#delete IotTimeSeriesInsightsStandardEnvironment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#read IotTimeSeriesInsightsStandardEnvironment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/iot_time_series_insights_standard_environment#update IotTimeSeriesInsightsStandardEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference <a name="IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsStandardEnvironment.IotTimeSeriesInsightsStandardEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



