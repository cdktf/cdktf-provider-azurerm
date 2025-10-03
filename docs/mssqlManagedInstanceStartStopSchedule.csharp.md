# `mssqlManagedInstanceStartStopSchedule` Submodule <a name="`mssqlManagedInstanceStartStopSchedule` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceStartStopSchedule <a name="MssqlManagedInstanceStartStopSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule azurerm_mssql_managed_instance_start_stop_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceStartStopSchedule(Construct Scope, string Id, MssqlManagedInstanceStartStopScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig">MssqlManagedInstanceStartStopScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig">MssqlManagedInstanceStartStopScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimezoneId">ResetTimezoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule"></a>

```csharp
private void PutSchedule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putSchedule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts"></a>

```csharp
private void PutTimeouts(MssqlManagedInstanceStartStopScheduleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimezoneId` <a name="ResetTimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.resetTimezoneId"></a>

```csharp
private void ResetTimezoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedInstanceStartStopSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceStartStopSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceStartStopSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceStartStopSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlManagedInstanceStartStopSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MssqlManagedInstanceStartStopSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlManagedInstanceStartStopSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlManagedInstanceStartStopSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstanceStartStopSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextExecutionTime">NextExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextRunAction">NextRunAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList">MssqlManagedInstanceStartStopScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference">MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.scheduleInput">ScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneId">TimezoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NextExecutionTime`<sup>Required</sup> <a name="NextExecutionTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextExecutionTime"></a>

```csharp
public string NextExecutionTime { get; }
```

- *Type:* string

---

##### `NextRunAction`<sup>Required</sup> <a name="NextRunAction" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.nextRunAction"></a>

```csharp
public string NextRunAction { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.schedule"></a>

```csharp
public MssqlManagedInstanceStartStopScheduleScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList">MssqlManagedInstanceStartStopScheduleScheduleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeouts"></a>

```csharp
public MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference">MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceIdInput"></a>

```csharp
public string ManagedInstanceIdInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.scheduleInput"></a>

```csharp
public object ScheduleInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneIdInput"></a>

```csharp
public string TimezoneIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; }
```

- *Type:* string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.timezoneId"></a>

```csharp
public string TimezoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceStartStopScheduleConfig <a name="MssqlManagedInstanceStartStopScheduleConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceStartStopScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedInstanceId,
    object Schedule,
    string Description = null,
    string Id = null,
    MssqlManagedInstanceStartStopScheduleTimeouts Timeouts = null,
    string TimezoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#managed_instance_id MssqlManagedInstanceStartStopSchedule#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.schedule">Schedule</a></code> | <code>object</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#description MssqlManagedInstanceStartStopSchedule#description}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#id MssqlManagedInstanceStartStopSchedule#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timezoneId">TimezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#timezone_id MssqlManagedInstanceStartStopSchedule#timezone_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.managedInstanceId"></a>

```csharp
public string ManagedInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#managed_instance_id MssqlManagedInstanceStartStopSchedule#managed_instance_id}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.schedule"></a>

```csharp
public object Schedule { get; set; }
```

- *Type:* object

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#schedule MssqlManagedInstanceStartStopSchedule#schedule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#description MssqlManagedInstanceStartStopSchedule#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#id MssqlManagedInstanceStartStopSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timeouts"></a>

```csharp
public MssqlManagedInstanceStartStopScheduleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts">MssqlManagedInstanceStartStopScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#timeouts MssqlManagedInstanceStartStopSchedule#timeouts}

---

##### `TimezoneId`<sup>Optional</sup> <a name="TimezoneId" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleConfig.property.timezoneId"></a>

```csharp
public string TimezoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#timezone_id MssqlManagedInstanceStartStopSchedule#timezone_id}.

---

### MssqlManagedInstanceStartStopScheduleSchedule <a name="MssqlManagedInstanceStartStopScheduleSchedule" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceStartStopScheduleSchedule {
    string StartDay,
    string StartTime,
    string StopDay,
    string StopTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startDay">StartDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_day MssqlManagedInstanceStartStopSchedule#start_day}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_time MssqlManagedInstanceStartStopSchedule#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopDay">StopDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_day MssqlManagedInstanceStartStopSchedule#stop_day}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopTime">StopTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_time MssqlManagedInstanceStartStopSchedule#stop_time}. |

---

##### `StartDay`<sup>Required</sup> <a name="StartDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startDay"></a>

```csharp
public string StartDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_day MssqlManagedInstanceStartStopSchedule#start_day}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#start_time MssqlManagedInstanceStartStopSchedule#start_time}.

---

##### `StopDay`<sup>Required</sup> <a name="StopDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopDay"></a>

```csharp
public string StopDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_day MssqlManagedInstanceStartStopSchedule#stop_day}.

---

##### `StopTime`<sup>Required</sup> <a name="StopTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleSchedule.property.stopTime"></a>

```csharp
public string StopTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#stop_time MssqlManagedInstanceStartStopSchedule#stop_time}.

---

### MssqlManagedInstanceStartStopScheduleTimeouts <a name="MssqlManagedInstanceStartStopScheduleTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceStartStopScheduleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#create MssqlManagedInstanceStartStopSchedule#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#delete MssqlManagedInstanceStartStopSchedule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#read MssqlManagedInstanceStartStopSchedule#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#update MssqlManagedInstanceStartStopSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#create MssqlManagedInstanceStartStopSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#delete MssqlManagedInstanceStartStopSchedule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#read MssqlManagedInstanceStartStopSchedule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/mssql_managed_instance_start_stop_schedule#update MssqlManagedInstanceStartStopSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceStartStopScheduleScheduleList <a name="MssqlManagedInstanceStartStopScheduleScheduleList" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceStartStopScheduleScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get"></a>

```csharp
private MssqlManagedInstanceStartStopScheduleScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MssqlManagedInstanceStartStopScheduleScheduleOutputReference <a name="MssqlManagedInstanceStartStopScheduleScheduleOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceStartStopScheduleScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDayInput">StartDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDayInput">StopDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTimeInput">StopTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDay">StartDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDay">StopDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTime">StopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartDayInput`<sup>Optional</sup> <a name="StartDayInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDayInput"></a>

```csharp
public string StartDayInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `StopDayInput`<sup>Optional</sup> <a name="StopDayInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDayInput"></a>

```csharp
public string StopDayInput { get; }
```

- *Type:* string

---

##### `StopTimeInput`<sup>Optional</sup> <a name="StopTimeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTimeInput"></a>

```csharp
public string StopTimeInput { get; }
```

- *Type:* string

---

##### `StartDay`<sup>Required</sup> <a name="StartDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startDay"></a>

```csharp
public string StartDay { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `StopDay`<sup>Required</sup> <a name="StopDay" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopDay"></a>

```csharp
public string StopDay { get; }
```

- *Type:* string

---

##### `StopTime`<sup>Required</sup> <a name="StopTime" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.stopTime"></a>

```csharp
public string StopTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference <a name="MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceStartStopSchedule.MssqlManagedInstanceStartStopScheduleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



