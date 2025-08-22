# `storageAccountQueueProperties` Submodule <a name="`storageAccountQueueProperties` Submodule" id="@cdktf/provider-azurerm.storageAccountQueueProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountQueuePropertiesA <a name="StorageAccountQueuePropertiesA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesA(Construct Scope, string Id, StorageAccountQueuePropertiesAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig">StorageAccountQueuePropertiesAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig">StorageAccountQueuePropertiesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics">PutHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics">PutMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetHourMetrics">ResetHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetMinuteMetrics">ResetMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule"></a>

```csharp
private void PutCorsRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule.parameter.value"></a>

- *Type:* object

---

##### `PutHourMetrics` <a name="PutHourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics"></a>

```csharp
private void PutHourMetrics(StorageAccountQueuePropertiesHourMetricsA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging"></a>

```csharp
private void PutLogging(StorageAccountQueuePropertiesLoggingA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---

##### `PutMinuteMetrics` <a name="PutMinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics"></a>

```csharp
private void PutMinuteMetrics(StorageAccountQueuePropertiesMinuteMetricsA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageAccountQueuePropertiesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetCorsRule"></a>

```csharp
private void ResetCorsRule()
```

##### `ResetHourMetrics` <a name="ResetHourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetHourMetrics"></a>

```csharp
private void ResetHourMetrics()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetMinuteMetrics` <a name="ResetMinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetMinuteMetrics"></a>

```csharp
private void ResetMinuteMetrics()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccountQueuePropertiesA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccountQueuePropertiesA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccountQueuePropertiesA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StorageAccountQueuePropertiesA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccountQueuePropertiesA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccountQueuePropertiesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccountQueuePropertiesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList">StorageAccountQueuePropertiesCorsRuleAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference">StorageAccountQueuePropertiesHourMetricsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference">StorageAccountQueuePropertiesLoggingAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference">StorageAccountQueuePropertiesMinuteMetricsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRuleInput">CorsRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetricsInput">HourMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetricsInput">MinuteMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRule"></a>

```csharp
public StorageAccountQueuePropertiesCorsRuleAList CorsRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList">StorageAccountQueuePropertiesCorsRuleAList</a>

---

##### `HourMetrics`<sup>Required</sup> <a name="HourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetrics"></a>

```csharp
public StorageAccountQueuePropertiesHourMetricsAOutputReference HourMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference">StorageAccountQueuePropertiesHourMetricsAOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.logging"></a>

```csharp
public StorageAccountQueuePropertiesLoggingAOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference">StorageAccountQueuePropertiesLoggingAOutputReference</a>

---

##### `MinuteMetrics`<sup>Required</sup> <a name="MinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetrics"></a>

```csharp
public StorageAccountQueuePropertiesMinuteMetricsAOutputReference MinuteMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference">StorageAccountQueuePropertiesMinuteMetricsAOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeouts"></a>

```csharp
public StorageAccountQueuePropertiesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRuleInput"></a>

```csharp
public object CorsRuleInput { get; }
```

- *Type:* object

---

##### `HourMetricsInput`<sup>Optional</sup> <a name="HourMetricsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetricsInput"></a>

```csharp
public StorageAccountQueuePropertiesHourMetricsA HourMetricsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.loggingInput"></a>

```csharp
public StorageAccountQueuePropertiesLoggingA LoggingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---

##### `MinuteMetricsInput`<sup>Optional</sup> <a name="MinuteMetricsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetricsInput"></a>

```csharp
public StorageAccountQueuePropertiesMinuteMetricsA MinuteMetricsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountQueuePropertiesAConfig <a name="StorageAccountQueuePropertiesAConfig" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string StorageAccountId,
    object CorsRule = null,
    StorageAccountQueuePropertiesHourMetricsA HourMetrics = null,
    string Id = null,
    StorageAccountQueuePropertiesLoggingA Logging = null,
    StorageAccountQueuePropertiesMinuteMetricsA MinuteMetrics = null,
    StorageAccountQueuePropertiesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.corsRule">CorsRule</a></code> | <code>object</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | minute_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}.

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.corsRule"></a>

```csharp
public object CorsRule { get; set; }
```

- *Type:* object

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueuePropertiesA#cors_rule}

---

##### `HourMetrics`<sup>Optional</sup> <a name="HourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.hourMetrics"></a>

```csharp
public StorageAccountQueuePropertiesHourMetricsA HourMetrics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueuePropertiesA#hour_metrics}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.logging"></a>

```csharp
public StorageAccountQueuePropertiesLoggingA Logging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueuePropertiesA#logging}

---

##### `MinuteMetrics`<sup>Optional</sup> <a name="MinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.minuteMetrics"></a>

```csharp
public StorageAccountQueuePropertiesMinuteMetricsA MinuteMetrics { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueuePropertiesA#minute_metrics}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.timeouts"></a>

```csharp
public StorageAccountQueuePropertiesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueuePropertiesA#timeouts}

---

### StorageAccountQueuePropertiesCorsRuleA <a name="StorageAccountQueuePropertiesCorsRuleA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesCorsRuleA {
    string[] AllowedHeaders,
    string[] AllowedMethods,
    string[] AllowedOrigins,
    string[] ExposedHeaders,
    double MaxAgeInSeconds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetricsA <a name="StorageAccountQueuePropertiesHourMetricsA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesHourMetricsA {
    string Version,
    object IncludeApis = null,
    double RetentionPolicyDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.includeApis">IncludeApis</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.includeApis"></a>

```csharp
public object IncludeApis { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesLoggingA <a name="StorageAccountQueuePropertiesLoggingA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesLoggingA {
    object Delete,
    object Read,
    string Version,
    object Write,
    double RetentionPolicyDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.delete">Delete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.read">Read</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.write">Write</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.delete"></a>

```csharp
public object Delete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.read"></a>

```csharp
public object Read { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.write"></a>

```csharp
public object Write { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetricsA <a name="StorageAccountQueuePropertiesMinuteMetricsA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesMinuteMetricsA {
    string Version,
    object IncludeApis = null,
    double RetentionPolicyDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.includeApis">IncludeApis</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.includeApis"></a>

```csharp
public object IncludeApis { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesTimeouts <a name="StorageAccountQueuePropertiesTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountQueuePropertiesCorsRuleAList <a name="StorageAccountQueuePropertiesCorsRuleAList" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesCorsRuleAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get"></a>

```csharp
private StorageAccountQueuePropertiesCorsRuleAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageAccountQueuePropertiesCorsRuleAOutputReference <a name="StorageAccountQueuePropertiesCorsRuleAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesCorsRuleAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeadersInput"></a>

```csharp
public string[] ExposedHeadersInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSecondsInput"></a>

```csharp
public double MaxAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StorageAccountQueuePropertiesHourMetricsAOutputReference <a name="StorageAccountQueuePropertiesHourMetricsAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesHourMetricsAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetIncludeApis">ResetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetIncludeApis"></a>

```csharp
private void ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetRetentionPolicyDays"></a>

```csharp
private void ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApis">IncludeApis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApisInput"></a>

```csharp
public object IncludeApisInput { get; }
```

- *Type:* object

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDaysInput"></a>

```csharp
public double RetentionPolicyDaysInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApis"></a>

```csharp
public object IncludeApis { get; }
```

- *Type:* object

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.internalValue"></a>

```csharp
public StorageAccountQueuePropertiesHourMetricsA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---


### StorageAccountQueuePropertiesLoggingAOutputReference <a name="StorageAccountQueuePropertiesLoggingAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesLoggingAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resetRetentionPolicyDays"></a>

```csharp
private void ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.deleteInput">DeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.readInput">ReadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.writeInput">WriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.delete">Delete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.read">Read</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.write">Write</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.deleteInput"></a>

```csharp
public object DeleteInput { get; }
```

- *Type:* object

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.readInput"></a>

```csharp
public object ReadInput { get; }
```

- *Type:* object

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDaysInput"></a>

```csharp
public double RetentionPolicyDaysInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.writeInput"></a>

```csharp
public object WriteInput { get; }
```

- *Type:* object

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.delete"></a>

```csharp
public object Delete { get; }
```

- *Type:* object

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.read"></a>

```csharp
public object Read { get; }
```

- *Type:* object

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.write"></a>

```csharp
public object Write { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.internalValue"></a>

```csharp
public StorageAccountQueuePropertiesLoggingA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---


### StorageAccountQueuePropertiesMinuteMetricsAOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesMinuteMetricsAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetIncludeApis">ResetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetIncludeApis"></a>

```csharp
private void ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetRetentionPolicyDays"></a>

```csharp
private void ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApis">IncludeApis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApisInput"></a>

```csharp
public object IncludeApisInput { get; }
```

- *Type:* object

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDaysInput"></a>

```csharp
public double RetentionPolicyDaysInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApis"></a>

```csharp
public object IncludeApis { get; }
```

- *Type:* object

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDays"></a>

```csharp
public double RetentionPolicyDays { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.internalValue"></a>

```csharp
public StorageAccountQueuePropertiesMinuteMetricsA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---


### StorageAccountQueuePropertiesTimeoutsOutputReference <a name="StorageAccountQueuePropertiesTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StorageAccountQueuePropertiesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



