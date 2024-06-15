# `backupPolicyFileShare` Submodule <a name="`backupPolicyFileShare` Submodule" id="@cdktf/provider-azurerm.backupPolicyFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPolicyFileShare <a name="BackupPolicyFileShare" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share azurerm_backup_policy_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShare(Construct Scope, string Id, BackupPolicyFileShareConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig">BackupPolicyFileShareConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig">BackupPolicyFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putBackup">PutBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionDaily">PutRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionMonthly">PutRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionWeekly">PutRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionYearly">PutRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionMonthly">ResetRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionWeekly">ResetRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionYearly">ResetRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackup` <a name="PutBackup" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putBackup"></a>

```csharp
private void PutBackup(BackupPolicyFileShareBackup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

---

##### `PutRetentionDaily` <a name="PutRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionDaily"></a>

```csharp
private void PutRetentionDaily(BackupPolicyFileShareRetentionDaily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

---

##### `PutRetentionMonthly` <a name="PutRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionMonthly"></a>

```csharp
private void PutRetentionMonthly(BackupPolicyFileShareRetentionMonthly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

---

##### `PutRetentionWeekly` <a name="PutRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionWeekly"></a>

```csharp
private void PutRetentionWeekly(BackupPolicyFileShareRetentionWeekly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

---

##### `PutRetentionYearly` <a name="PutRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionYearly"></a>

```csharp
private void PutRetentionYearly(BackupPolicyFileShareRetentionYearly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionYearly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putTimeouts"></a>

```csharp
private void PutTimeouts(BackupPolicyFileShareTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetentionMonthly` <a name="ResetRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionMonthly"></a>

```csharp
private void ResetRetentionMonthly()
```

##### `ResetRetentionWeekly` <a name="ResetRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionWeekly"></a>

```csharp
private void ResetRetentionWeekly()
```

##### `ResetRetentionYearly` <a name="ResetRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionYearly"></a>

```csharp
private void ResetRetentionYearly()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupPolicyFileShare resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyFileShare.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyFileShare.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyFileShare.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BackupPolicyFileShare.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BackupPolicyFileShare resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupPolicyFileShare to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupPolicyFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BackupPolicyFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference">BackupPolicyFileShareBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDaily">RetentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference">BackupPolicyFileShareRetentionDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthly">RetentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference">BackupPolicyFileShareRetentionMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeekly">RetentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference">BackupPolicyFileShareRetentionWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearly">RetentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference">BackupPolicyFileShareRetentionYearlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference">BackupPolicyFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backupInput">BackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultNameInput">RecoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDailyInput">RetentionDailyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthlyInput">RetentionMonthlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeeklyInput">RetentionWeeklyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearlyInput">RetentionYearlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backup"></a>

```csharp
public BackupPolicyFileShareBackupOutputReference Backup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference">BackupPolicyFileShareBackupOutputReference</a>

---

##### `RetentionDaily`<sup>Required</sup> <a name="RetentionDaily" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDaily"></a>

```csharp
public BackupPolicyFileShareRetentionDailyOutputReference RetentionDaily { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference">BackupPolicyFileShareRetentionDailyOutputReference</a>

---

##### `RetentionMonthly`<sup>Required</sup> <a name="RetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthly"></a>

```csharp
public BackupPolicyFileShareRetentionMonthlyOutputReference RetentionMonthly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference">BackupPolicyFileShareRetentionMonthlyOutputReference</a>

---

##### `RetentionWeekly`<sup>Required</sup> <a name="RetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeekly"></a>

```csharp
public BackupPolicyFileShareRetentionWeeklyOutputReference RetentionWeekly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference">BackupPolicyFileShareRetentionWeeklyOutputReference</a>

---

##### `RetentionYearly`<sup>Required</sup> <a name="RetentionYearly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearly"></a>

```csharp
public BackupPolicyFileShareRetentionYearlyOutputReference RetentionYearly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference">BackupPolicyFileShareRetentionYearlyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeouts"></a>

```csharp
public BackupPolicyFileShareTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference">BackupPolicyFileShareTimeoutsOutputReference</a>

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backupInput"></a>

```csharp
public BackupPolicyFileShareBackup BackupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecoveryVaultNameInput`<sup>Optional</sup> <a name="RecoveryVaultNameInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultNameInput"></a>

```csharp
public string RecoveryVaultNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RetentionDailyInput`<sup>Optional</sup> <a name="RetentionDailyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDailyInput"></a>

```csharp
public BackupPolicyFileShareRetentionDaily RetentionDailyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

---

##### `RetentionMonthlyInput`<sup>Optional</sup> <a name="RetentionMonthlyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthlyInput"></a>

```csharp
public BackupPolicyFileShareRetentionMonthly RetentionMonthlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

---

##### `RetentionWeeklyInput`<sup>Optional</sup> <a name="RetentionWeeklyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeeklyInput"></a>

```csharp
public BackupPolicyFileShareRetentionWeekly RetentionWeeklyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

---

##### `RetentionYearlyInput`<sup>Optional</sup> <a name="RetentionYearlyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearlyInput"></a>

```csharp
public BackupPolicyFileShareRetentionYearly RetentionYearlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPolicyFileShareBackup <a name="BackupPolicyFileShareBackup" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareBackup {
    string Frequency,
    BackupPolicyFileShareBackupHourly Hourly = null,
    string Time = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#frequency BackupPolicyFileShare#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.hourly">Hourly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a></code> | hourly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#time BackupPolicyFileShare#time}. |

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#frequency BackupPolicyFileShare#frequency}.

---

##### `Hourly`<sup>Optional</sup> <a name="Hourly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.hourly"></a>

```csharp
public BackupPolicyFileShareBackupHourly Hourly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#hourly BackupPolicyFileShare#hourly}

---

##### `Time`<sup>Optional</sup> <a name="Time" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#time BackupPolicyFileShare#time}.

---

### BackupPolicyFileShareBackupHourly <a name="BackupPolicyFileShareBackupHourly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareBackupHourly {
    double Interval,
    string StartTime,
    double WindowDuration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#interval BackupPolicyFileShare#interval}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#start_time BackupPolicyFileShare#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.windowDuration">WindowDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#window_duration BackupPolicyFileShare#window_duration}. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#interval BackupPolicyFileShare#interval}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#start_time BackupPolicyFileShare#start_time}.

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.windowDuration"></a>

```csharp
public double WindowDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#window_duration BackupPolicyFileShare#window_duration}.

---

### BackupPolicyFileShareConfig <a name="BackupPolicyFileShareConfig" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    BackupPolicyFileShareBackup Backup,
    string Name,
    string RecoveryVaultName,
    string ResourceGroupName,
    BackupPolicyFileShareRetentionDaily RetentionDaily,
    string Id = null,
    BackupPolicyFileShareRetentionMonthly RetentionMonthly = null,
    BackupPolicyFileShareRetentionWeekly RetentionWeekly = null,
    BackupPolicyFileShareRetentionYearly RetentionYearly = null,
    BackupPolicyFileShareTimeouts Timeouts = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#name BackupPolicyFileShare#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#recovery_vault_name BackupPolicyFileShare#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#resource_group_name BackupPolicyFileShare#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionDaily">RetentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#id BackupPolicyFileShare#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionMonthly">RetentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionWeekly">RetentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionYearly">RetentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#timezone BackupPolicyFileShare#timezone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.backup"></a>

```csharp
public BackupPolicyFileShareBackup Backup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#backup BackupPolicyFileShare#backup}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#name BackupPolicyFileShare#name}.

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#recovery_vault_name BackupPolicyFileShare#recovery_vault_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#resource_group_name BackupPolicyFileShare#resource_group_name}.

---

##### `RetentionDaily`<sup>Required</sup> <a name="RetentionDaily" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionDaily"></a>

```csharp
public BackupPolicyFileShareRetentionDaily RetentionDaily { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#retention_daily BackupPolicyFileShare#retention_daily}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#id BackupPolicyFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionMonthly`<sup>Optional</sup> <a name="RetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionMonthly"></a>

```csharp
public BackupPolicyFileShareRetentionMonthly RetentionMonthly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#retention_monthly BackupPolicyFileShare#retention_monthly}

---

##### `RetentionWeekly`<sup>Optional</sup> <a name="RetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionWeekly"></a>

```csharp
public BackupPolicyFileShareRetentionWeekly RetentionWeekly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#retention_weekly BackupPolicyFileShare#retention_weekly}

---

##### `RetentionYearly`<sup>Optional</sup> <a name="RetentionYearly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionYearly"></a>

```csharp
public BackupPolicyFileShareRetentionYearly RetentionYearly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#retention_yearly BackupPolicyFileShare#retention_yearly}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timeouts"></a>

```csharp
public BackupPolicyFileShareTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#timeouts BackupPolicyFileShare#timeouts}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#timezone BackupPolicyFileShare#timezone}.

---

### BackupPolicyFileShareRetentionDaily <a name="BackupPolicyFileShareRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareRetentionDaily {
    double Count
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

### BackupPolicyFileShareRetentionMonthly <a name="BackupPolicyFileShareRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareRetentionMonthly {
    double Count,
    double[] Days = null,
    object IncludeLastDays = null,
    string[] Weekdays = null,
    string[] Weeks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.days">Days</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.includeLastDays">IncludeLastDays</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weeks">Weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.days"></a>

```csharp
public double[] Days { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}.

---

##### `IncludeLastDays`<sup>Optional</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.includeLastDays"></a>

```csharp
public object IncludeLastDays { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}.

---

##### `Weeks`<sup>Optional</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weeks"></a>

```csharp
public string[] Weeks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}.

---

### BackupPolicyFileShareRetentionWeekly <a name="BackupPolicyFileShareRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareRetentionWeekly {
    double Count,
    string[] Weekdays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}.

---

### BackupPolicyFileShareRetentionYearly <a name="BackupPolicyFileShareRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareRetentionYearly {
    double Count,
    string[] Months,
    double[] Days = null,
    object IncludeLastDays = null,
    string[] Weekdays = null,
    string[] Weeks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.months">Months</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#months BackupPolicyFileShare#months}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.days">Days</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.includeLastDays">IncludeLastDays</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weekdays">Weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weeks">Weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.months"></a>

```csharp
public string[] Months { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#months BackupPolicyFileShare#months}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.days"></a>

```csharp
public double[] Days { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}.

---

##### `IncludeLastDays`<sup>Optional</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.includeLastDays"></a>

```csharp
public object IncludeLastDays { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weekdays"></a>

```csharp
public string[] Weekdays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}.

---

##### `Weeks`<sup>Optional</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weeks"></a>

```csharp
public string[] Weeks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}.

---

### BackupPolicyFileShareTimeouts <a name="BackupPolicyFileShareTimeouts" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#create BackupPolicyFileShare#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#delete BackupPolicyFileShare#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#read BackupPolicyFileShare#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#update BackupPolicyFileShare#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#create BackupPolicyFileShare#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#delete BackupPolicyFileShare#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#read BackupPolicyFileShare#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/backup_policy_file_share#update BackupPolicyFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPolicyFileShareBackupHourlyOutputReference <a name="BackupPolicyFileShareBackupHourlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareBackupHourlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDuration">WindowDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDurationInput"></a>

```csharp
public double WindowDurationInput { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDuration"></a>

```csharp
public double WindowDuration { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyFileShareBackupHourly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

---


### BackupPolicyFileShareBackupOutputReference <a name="BackupPolicyFileShareBackupOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.putHourly">PutHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetHourly">ResetHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetTime">ResetTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHourly` <a name="PutHourly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.putHourly"></a>

```csharp
private void PutHourly(BackupPolicyFileShareBackupHourly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.putHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

---

##### `ResetHourly` <a name="ResetHourly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetHourly"></a>

```csharp
private void ResetHourly()
```

##### `ResetTime` <a name="ResetTime" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetTime"></a>

```csharp
private void ResetTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourly">Hourly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference">BackupPolicyFileShareBackupHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourlyInput">HourlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hourly`<sup>Required</sup> <a name="Hourly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourly"></a>

```csharp
public BackupPolicyFileShareBackupHourlyOutputReference Hourly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference">BackupPolicyFileShareBackupHourlyOutputReference</a>

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `HourlyInput`<sup>Optional</sup> <a name="HourlyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourlyInput"></a>

```csharp
public BackupPolicyFileShareBackupHourly HourlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyFileShareBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

---


### BackupPolicyFileShareRetentionDailyOutputReference <a name="BackupPolicyFileShareRetentionDailyOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareRetentionDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyFileShareRetentionDaily InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

---


### BackupPolicyFileShareRetentionMonthlyOutputReference <a name="BackupPolicyFileShareRetentionMonthlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareRetentionMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetIncludeLastDays">ResetIncludeLastDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeeks">ResetWeeks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetIncludeLastDays` <a name="ResetIncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetIncludeLastDays"></a>

```csharp
private void ResetIncludeLastDays()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeekdays"></a>

```csharp
private void ResetWeekdays()
```

##### `ResetWeeks` <a name="ResetWeeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeeks"></a>

```csharp
private void ResetWeeks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.daysInput">DaysInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDaysInput">IncludeLastDaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeksInput">WeeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.days">Days</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDays">IncludeLastDays</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeks">Weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.daysInput"></a>

```csharp
public double[] DaysInput { get; }
```

- *Type:* double[]

---

##### `IncludeLastDaysInput`<sup>Optional</sup> <a name="IncludeLastDaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDaysInput"></a>

```csharp
public object IncludeLastDaysInput { get; }
```

- *Type:* object

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `WeeksInput`<sup>Optional</sup> <a name="WeeksInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeksInput"></a>

```csharp
public string[] WeeksInput { get; }
```

- *Type:* string[]

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.days"></a>

```csharp
public double[] Days { get; }
```

- *Type:* double[]

---

##### `IncludeLastDays`<sup>Required</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDays"></a>

```csharp
public object IncludeLastDays { get; }
```

- *Type:* object

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `Weeks`<sup>Required</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeks"></a>

```csharp
public string[] Weeks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyFileShareRetentionMonthly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

---


### BackupPolicyFileShareRetentionWeeklyOutputReference <a name="BackupPolicyFileShareRetentionWeeklyOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareRetentionWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyFileShareRetentionWeekly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

---


### BackupPolicyFileShareRetentionYearlyOutputReference <a name="BackupPolicyFileShareRetentionYearlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareRetentionYearlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetIncludeLastDays">ResetIncludeLastDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeeks">ResetWeeks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetIncludeLastDays` <a name="ResetIncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetIncludeLastDays"></a>

```csharp
private void ResetIncludeLastDays()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeekdays"></a>

```csharp
private void ResetWeekdays()
```

##### `ResetWeeks` <a name="ResetWeeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeeks"></a>

```csharp
private void ResetWeeks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.daysInput">DaysInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDaysInput">IncludeLastDaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.monthsInput">MonthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeksInput">WeeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.days">Days</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDays">IncludeLastDays</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.months">Months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdays">Weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeks">Weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.daysInput"></a>

```csharp
public double[] DaysInput { get; }
```

- *Type:* double[]

---

##### `IncludeLastDaysInput`<sup>Optional</sup> <a name="IncludeLastDaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDaysInput"></a>

```csharp
public object IncludeLastDaysInput { get; }
```

- *Type:* object

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.monthsInput"></a>

```csharp
public string[] MonthsInput { get; }
```

- *Type:* string[]

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdaysInput"></a>

```csharp
public string[] WeekdaysInput { get; }
```

- *Type:* string[]

---

##### `WeeksInput`<sup>Optional</sup> <a name="WeeksInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeksInput"></a>

```csharp
public string[] WeeksInput { get; }
```

- *Type:* string[]

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.days"></a>

```csharp
public double[] Days { get; }
```

- *Type:* double[]

---

##### `IncludeLastDays`<sup>Required</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDays"></a>

```csharp
public object IncludeLastDays { get; }
```

- *Type:* object

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.months"></a>

```csharp
public string[] Months { get; }
```

- *Type:* string[]

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdays"></a>

```csharp
public string[] Weekdays { get; }
```

- *Type:* string[]

---

##### `Weeks`<sup>Required</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeks"></a>

```csharp
public string[] Weeks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.internalValue"></a>

```csharp
public BackupPolicyFileShareRetentionYearly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

---


### BackupPolicyFileShareTimeoutsOutputReference <a name="BackupPolicyFileShareTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BackupPolicyFileShareTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



