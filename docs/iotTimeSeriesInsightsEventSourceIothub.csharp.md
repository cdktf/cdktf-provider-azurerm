# `iotTimeSeriesInsightsEventSourceIothub` Submodule <a name="`iotTimeSeriesInsightsEventSourceIothub` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsEventSourceIothub <a name="IotTimeSeriesInsightsEventSourceIothub" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub azurerm_iot_time_series_insights_event_source_iothub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsEventSourceIothub(Construct Scope, string Id, IotTimeSeriesInsightsEventSourceIothubConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig">IotTimeSeriesInsightsEventSourceIothubConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig">IotTimeSeriesInsightsEventSourceIothubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimestampPropertyName">ResetTimestampPropertyName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts"></a>

```csharp
private void PutTimeouts(IotTimeSeriesInsightsEventSourceIothubTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimestampPropertyName` <a name="ResetTimestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimestampPropertyName"></a>

```csharp
private void ResetTimestampPropertyName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IotTimeSeriesInsightsEventSourceIothub resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsEventSourceIothub.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsEventSourceIothub.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsEventSourceIothub.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsEventSourceIothub.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IotTimeSeriesInsightsEventSourceIothub resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotTimeSeriesInsightsEventSourceIothub to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotTimeSeriesInsightsEventSourceIothub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IotTimeSeriesInsightsEventSourceIothub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference">IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupNameInput">ConsumerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceIdInput">EventSourceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubNameInput">IothubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyInput">SharedAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyNameInput">SharedAccessKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyNameInput">TimestampPropertyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupName">ConsumerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceId">EventSourceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubName">IothubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKey">SharedAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyName">SharedAccessKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyName">TimestampPropertyName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeouts"></a>

```csharp
public IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference">IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference</a>

---

##### `ConsumerGroupNameInput`<sup>Optional</sup> <a name="ConsumerGroupNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupNameInput"></a>

```csharp
public string ConsumerGroupNameInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentIdInput"></a>

```csharp
public string EnvironmentIdInput { get; }
```

- *Type:* string

---

##### `EventSourceResourceIdInput`<sup>Optional</sup> <a name="EventSourceResourceIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceIdInput"></a>

```csharp
public string EventSourceResourceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IothubNameInput`<sup>Optional</sup> <a name="IothubNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubNameInput"></a>

```csharp
public string IothubNameInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SharedAccessKeyInput`<sup>Optional</sup> <a name="SharedAccessKeyInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyInput"></a>

```csharp
public string SharedAccessKeyInput { get; }
```

- *Type:* string

---

##### `SharedAccessKeyNameInput`<sup>Optional</sup> <a name="SharedAccessKeyNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyNameInput"></a>

```csharp
public string SharedAccessKeyNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimestampPropertyNameInput`<sup>Optional</sup> <a name="TimestampPropertyNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyNameInput"></a>

```csharp
public string TimestampPropertyNameInput { get; }
```

- *Type:* string

---

##### `ConsumerGroupName`<sup>Required</sup> <a name="ConsumerGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupName"></a>

```csharp
public string ConsumerGroupName { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `EventSourceResourceId`<sup>Required</sup> <a name="EventSourceResourceId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceId"></a>

```csharp
public string EventSourceResourceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IothubName`<sup>Required</sup> <a name="IothubName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubName"></a>

```csharp
public string IothubName { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SharedAccessKey`<sup>Required</sup> <a name="SharedAccessKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKey"></a>

```csharp
public string SharedAccessKey { get; }
```

- *Type:* string

---

##### `SharedAccessKeyName`<sup>Required</sup> <a name="SharedAccessKeyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyName"></a>

```csharp
public string SharedAccessKeyName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimestampPropertyName`<sup>Required</sup> <a name="TimestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyName"></a>

```csharp
public string TimestampPropertyName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsEventSourceIothubConfig <a name="IotTimeSeriesInsightsEventSourceIothubConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsEventSourceIothubConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConsumerGroupName,
    string EnvironmentId,
    string EventSourceResourceId,
    string IothubName,
    string Location,
    string Name,
    string SharedAccessKey,
    string SharedAccessKeyName,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IotTimeSeriesInsightsEventSourceIothubTimeouts Timeouts = null,
    string TimestampPropertyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.consumerGroupName">ConsumerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#consumer_group_name IotTimeSeriesInsightsEventSourceIothub#consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.environmentId">EnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#environment_id IotTimeSeriesInsightsEventSourceIothub#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.eventSourceResourceId">EventSourceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#event_source_resource_id IotTimeSeriesInsightsEventSourceIothub#event_source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.iothubName">IothubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#iothub_name IotTimeSeriesInsightsEventSourceIothub#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#location IotTimeSeriesInsightsEventSourceIothub#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#name IotTimeSeriesInsightsEventSourceIothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKey">SharedAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key IotTimeSeriesInsightsEventSourceIothub#shared_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKeyName">SharedAccessKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key_name IotTimeSeriesInsightsEventSourceIothub#shared_access_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#id IotTimeSeriesInsightsEventSourceIothub#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#tags IotTimeSeriesInsightsEventSourceIothub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timestampPropertyName">TimestampPropertyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#timestamp_property_name IotTimeSeriesInsightsEventSourceIothub#timestamp_property_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConsumerGroupName`<sup>Required</sup> <a name="ConsumerGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.consumerGroupName"></a>

```csharp
public string ConsumerGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#consumer_group_name IotTimeSeriesInsightsEventSourceIothub#consumer_group_name}.

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.environmentId"></a>

```csharp
public string EnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#environment_id IotTimeSeriesInsightsEventSourceIothub#environment_id}.

---

##### `EventSourceResourceId`<sup>Required</sup> <a name="EventSourceResourceId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.eventSourceResourceId"></a>

```csharp
public string EventSourceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#event_source_resource_id IotTimeSeriesInsightsEventSourceIothub#event_source_resource_id}.

---

##### `IothubName`<sup>Required</sup> <a name="IothubName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.iothubName"></a>

```csharp
public string IothubName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#iothub_name IotTimeSeriesInsightsEventSourceIothub#iothub_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#location IotTimeSeriesInsightsEventSourceIothub#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#name IotTimeSeriesInsightsEventSourceIothub#name}.

---

##### `SharedAccessKey`<sup>Required</sup> <a name="SharedAccessKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKey"></a>

```csharp
public string SharedAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key IotTimeSeriesInsightsEventSourceIothub#shared_access_key}.

---

##### `SharedAccessKeyName`<sup>Required</sup> <a name="SharedAccessKeyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKeyName"></a>

```csharp
public string SharedAccessKeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#shared_access_key_name IotTimeSeriesInsightsEventSourceIothub#shared_access_key_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#id IotTimeSeriesInsightsEventSourceIothub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#tags IotTimeSeriesInsightsEventSourceIothub#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timeouts"></a>

```csharp
public IotTimeSeriesInsightsEventSourceIothubTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#timeouts IotTimeSeriesInsightsEventSourceIothub#timeouts}

---

##### `TimestampPropertyName`<sup>Optional</sup> <a name="TimestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timestampPropertyName"></a>

```csharp
public string TimestampPropertyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#timestamp_property_name IotTimeSeriesInsightsEventSourceIothub#timestamp_property_name}.

---

### IotTimeSeriesInsightsEventSourceIothubTimeouts <a name="IotTimeSeriesInsightsEventSourceIothubTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsEventSourceIothubTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#create IotTimeSeriesInsightsEventSourceIothub#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#delete IotTimeSeriesInsightsEventSourceIothub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#read IotTimeSeriesInsightsEventSourceIothub#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#update IotTimeSeriesInsightsEventSourceIothub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#create IotTimeSeriesInsightsEventSourceIothub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#delete IotTimeSeriesInsightsEventSourceIothub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#read IotTimeSeriesInsightsEventSourceIothub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iot_time_series_insights_event_source_iothub#update IotTimeSeriesInsightsEventSourceIothub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference <a name="IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



